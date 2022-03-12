import { useSession, UseSessionOptions, getSession } from "next-auth/react";
import { Inspector, LoadingSpinner } from "@/components/UI";
import Login from "@/components/Login/login";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType,
  PreviewData
} from "next";
import { ParsedUrlQuery } from "@/types/query-parser";
import { initializeApollo, useApollo } from "@/apollo/apollo";
import { useCallback, useState, useEffect } from "react";
import { NormalizedCacheObject } from "@apollo/client";
import crypto from "crypto";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import { Session } from "next-auth";
import { parse } from "cookie";
import { getToken, JWT } from "next-auth/jwt";
import * as Jose from "jose";
import { decode } from "jsonwebtoken";
import { UnwrapPromise } from "@/types/mapped";
import { getCookie } from "cookies-next";
import { Profile } from "@/components/Profile";
import { CookieValueTypes } from "cookies-next/lib/types";
export type IndexProps = {
  session: Session | null;
  initialApolloState: NormalizedCacheObject;
  jwt: JWT | null;
  cookies: CookieValueTypes | null;
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
  const session = await getSession({ ctx: ctx });
  const token = await getToken({ req: ctx.req });
  console.log(JSON.stringify(session, null, 2));
  console.log(params ?? "");
  const getCookies = getCookie("next-auth.session-token", {
    req: ctx.req,
    res: ctx.res
  });

  const apolloClient = initializeApollo(null, ctx.params);
  getCookie("next-auth.session-token", { req: ctx.req, res: ctx.res });

  return {
    props: {
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
                      sessionClient: data,
                      cookies: cookies?.valueOf() ?? "no cookies for you"
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
// const userData = apolloClient.cache.readQuery<
//   UserByEmailQuery,
//   UserByEmailQueryVariables
// >({
//   query: UserByEmailDocument,
//   variables: {
//     email: "andrew.ross@cortinahealth.com",
//     accountsCount: 3,
//     entriesCount: 10,
//     sessionsCount: 3
//   },
//   optimistic: true
// });
// console.log(JSON.stringify(signHmacSha512(accessToken, secretKey), null, 2));
// const callbackLogin = useCallback(
//   (data: Session | null) => {
//     if (data === null) {
//       return <Login />;
//     }
//     return null;
//   },
//   [data]
// );

// const [seshManager, setSeshManager] = useState<UseSessionOptions<true>>();

// const NextAuthCb = useCallback((auth: boolean) => {
//   setSeshManager({
//     required: true,
//     onUnauthenticated: () => setAuthed(auth)
//   });
// }, []);

// useEffect(() => {
//   NextAuthCb(authed);
//   status !== "authenticated" ? setAuthed(false) : setAuthed(true);
//   typeof window !== "undefined" && data !== null
//     ? window.localStorage.setItem("session", JSON.stringify(data))
//     : () => {};
// }, [status, NextAuthCb, authed, data]);

// const [lazy, { data: entries, loading, error, called }] =
//   useFilterUsersLazyQuery({
//     query: FilterUsersDocument,
//     returnPartialData: true
//   });
// function signHmacSha512(key: string, secret: string) {
//   key = accessToken;
//   secret = secretKey;
//   const hmac = crypto.createHmac("sha512", key);
//   const signed = hmac.update(Buffer.from(secret, "utf-8")).digest("hex");
//   return signed;
// }
/**
 *   const { data: entries } = await store.query<
    AllEntriesQuery,
    AllEntriesQueryVariables
  >({
    query: AllEntriesDocument,
    variables: {
      first: 30,
      take: 30
    }
  });

  const random = Number.parseInt(
    (Math.random() * Number(entries.allEntries?.edges?.length ?? 5)).toFixed(0),
    10
  );
  const randoUserId =
    entries.allEntries?.edges &&
    entries.allEntries.edges[random] &&
    entries.allEntries.edges[random]?.node?.userId;

  const { data: searchUserByNameOrEmail } = await store.query<
    FilterUsersQuery,
    FilterUsersQueryVariables
  >({
    query: FilterUsersDocument,
    variables: {
      searchString: "cortinahealth",
      first: 15,
      take: 15,
      userId: String(randoUserId)
    }
  });
   * ({ object }: EntryProps) => ReturnType < typeof superjson.serialize(object) >
   * const _default: {
    stringify: (object: any) => string;
    parse: <T = unknown>(string: string) => T;
    serialize: (object: any) => SuperJSONResult;
    deserialize: <T_1 = unknown>(payload: SuperJSONResult) => T_1;
    registerClass: (v: Class, options?: string | RegisterOptions | undefined) => void;
    registerSymbol: (v: Symbol, identifier?: string | undefined) => void;
    registerCustom: <I, O extends JSONValue>(transformer: Omit<...>, name: string) => void;
    allowErrorProps: (...props: string[]) => void;
}
   */
