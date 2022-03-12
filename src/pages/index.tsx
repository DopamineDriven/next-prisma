import { useSession, getSession, ClientSafeProvider } from "next-auth/react";
import { Inspector, LoadingSpinner } from "@/components/UI";
import Login from "@/components/Login/login";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType
} from "next";
import { ParsedUrlQuery } from "@/types/query-parser";
import { initializeApollo } from "@/apollo/apollo";
import { useState } from "react";
import { NormalizedCacheObject } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import { Awaitable, Session } from "next-auth";
import { getToken, JWT, JWTDecodeParams } from "next-auth/jwt";
import { UnwrapPromise } from "@/types/mapped";
import { getCookie, checkCookies } from "cookies-next";
import { Profile } from "@/components/Profile";
import { CookieValueTypes } from "cookies-next/lib/types";
import * as JWTNamespace from "jsonwebtoken";

export type IndexProps = {
  session: Session | null;
  initialApolloState: NormalizedCacheObject;
  jwt: JWT | null;
  cookies: CookieValueTypes | null;
  nextAuth: string;
};

// the definition of this page
//
// declare function I<
//   T extends <T extends NodeJS.Dict<string | string[]>>(
//     ctx: GetServerSidePropsContext<T, PreviewData>
//   ) => Promise<GetServerSidePropsResult<IndexProps>>
// >({
//   initialApolloState,
//   session,
//   jwt
// }: InferGetServerSidePropsType<T>): JSX.Element;

export type IndexInferServerSideProps<
  T extends UnwrapPromise<ReturnType<typeof getServerSideProps>>
> = {
  [P in keyof T]?: T[P];
} & Record<string, unknown>;

export type IndexServerSidePropsInferred = UnwrapPromise<
  ReturnType<typeof getServerSideProps>
>;

export type UnwrappingIndexServerSidePropsInferred =
  IndexInferServerSideProps<IndexServerSidePropsInferred>;

export const getServerSideProps = async <T extends ParsedUrlQuery>(
  ctx: GetServerSidePropsContext<T>
): Promise<GetServerSidePropsResult<IndexProps>> => {
  const params = ctx.params ? ctx.params.session : "";
  const session = await getSession({ ctx: ctx, req: ctx.req, broadcast: true });
  const token = await getToken({
    cookieName: "next-auth.session-token",
    req: ctx.req,
    secret: process.env.NEXTAUTH_SECRET ?? ""
  });
  console.log(JSON.stringify(session, null, 2));
  console.log(params ?? "");
  const getCookies = getCookie("next-auth", {
    req: ctx.req,
    res: ctx.res
  });
  const nextAuth = ctx.req.cookies["next-auth.session-token"];

  const apolloClient = initializeApollo(null, ctx.params);
  getCookie("next-auth", { req: ctx.req, res: ctx.res });

  return {
    props: {
      nextAuth,
      cookies: getCookies ?? null,
      jwt: token ?? null,
      session: session ?? null,
      initialApolloState: apolloClient.cache.extract(true)
    }
  };
};

export default function Index<T extends typeof getServerSideProps>({
  initialApolloState,
  cookies,
  nextAuth,
  session,
  jwt
}: InferGetServerSidePropsType<T>) {
  // const apolloClient = useApollo(initialApolloState);

  const router = useRouter();
  const [authed, setAuthed] = useState(true);

  const { data, status } = useSession<true>({
    required: true,
    onUnauthenticated() {
      return setAuthed(false);
    }
  });

  return (
    <>
      {status !== "authenticated" || !authed ? (
        <Login />
      ) : authed === true && status === "authenticated" ? (
        <>
          <Profile viewerStatus={status} viewerSession={data} />
          <div className='fit font-interVar py-10'>
            <main>
              {session ? (
                <Inspector>
                  {JSON.stringify(
                    {
                      session: session,
                      token: jwt,
                      reqCook: nextAuth ?? "no cookie",
                      sessionClient: data
                      // cookies: getCookie(nextAuth)
                    },
                    null,
                    2
                  )}
                </Inspector>
              ) : <div>loading...</div> ? (
                <div className='py-[2rem] prose-pre:prose-sm prose-gray font-normal font-sans max-w-3xl flex-col'>
                  <Inspector>{session}</Inspector>
                </div>
              ) : (
                <></>
              )}
            </main>
          </div>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

Index.Layout = Layout;
