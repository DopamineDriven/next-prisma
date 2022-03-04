import { useSession, UseSessionOptions, getSession } from "next-auth/react";
import { Inspector, LoadingSpinner } from "@/components/UI";
import Login from "@/components/Login/login";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  InferGetServerSidePropsType
} from "next";
import { ParsedUrlQuery } from "@/types/query-parser";
import { initializeApollo, useApollo } from "@/apollo/apollo";
import { useCallback, useState, useEffect } from "react";
import { NormalizedCacheObject } from "@apollo/client";
import crypto from "crypto";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/layout";
import { Session } from "next-auth";
import { parse } from "cookie"
import { getToken, JWT } from "next-auth/jwt";
import * as Jose from "jose";
import { decode } from "jsonwebtoken";
export type IndexProps = {
  session: Session | null;
  initialApolloState: NormalizedCacheObject;
  jwt: JWT | null;
};

// import { NextAuthMiddlewareOptions, WithAuthArgs } from "next-auth/middleware";
// import type { NextFetchEvent, NextMiddleware } from "next/server";
// import type { UnwrapTuple } from "@/types/helpers";
// import { INTERNALS } from "next/dist/server/web/spec-extension/request";

// type WithAuthTupleFiestaArgs = UnwrapTuple<
//   | [NextRequest]
//   | [NextRequest, NextFetchEvent]
//   | [NextRequest, NextAuthMiddlewareOptions]
//   | [NextMiddleware]
//   | [NextMiddleware, NextAuthMiddlewareOptions]
//   | [NextAuthMiddlewareOptions]
//   | []
// >;


export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery>
): Promise<GetServerSidePropsResult<IndexProps>> => {
  const params = ctx.params ? ctx.params.session : "";
  const session = await getSession({ ctx: ctx });
  const tokennnn = await getToken({req: ctx.req})
  console.log(JSON.stringify(session, null, 2));
  console.log(params ?? "");
  const getCookies = ctx.req.cookies['next-auth.session-token'];
  const apolloClient = initializeApollo(null, ctx.params);
  // const decoded = Jose.decodeProtectedHeader(getCookies)
  // console.log(decoded ?? "no decoded")
  // // await apolloClient.query<UserByEmailQuery, UserByEmailQueryVariables>({
  //   query: UserByEmailDocument,
  //   variables: {
  //     email: "andrew.ross@cortinahealth.com",
  //     accountsCount: 3,
  //     entriesCount: 10,
  //     sessionsCount: 3
  //   }
  // });

  return {
    props: {
      jwt: tokennnn,
      session,
      initialApolloState: apolloClient.cache.extract(true)
      // user: apolloClient.cache.readQuery<
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
      // })
    }
  };
};

// function signHmacSha512(key: string, secret: string) {
//   key = accessToken;
//   secret = secretKey;
//   const hmac = crypto.createHmac("sha512", key);
//   const signed = hmac.update(Buffer.from(secret, "utf-8")).digest("hex");
//   return signed;
// }

export default function Index<T extends typeof getServerSideProps>({
  initialApolloState,
  session,
  jwt
}: InferGetServerSidePropsType<T>) {
  // const [userEmail, setUserEmail] = useState("");
  const apolloClient = useApollo(initialApolloState);
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

  const router = useRouter();
  const [authed, setAuthed] = useState(true);

  const { data, status } = useSession<true>({
    required: true,
    onUnauthenticated() {
      return setAuthed(false);
    }
  });

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

  return (
    <>
      {status !== "authenticated" || !authed ? (
        <Login />
      ) : authed === true && status === "authenticated" ? (
        <>
          {/* <ProfileHeading viewer={user?.viewer} /> */}
          <div className='fit font-sans py-10'>
            <main>
              {session ? (
                <Inspector>{JSON.stringify(jwt, null, 2)}</Inspector>
              ) : <div>loading...</div> ? (
                // ) : !called ? (
                //   <button
                //     className='bg-gray-800 text-gray-50 hover:scale-[1.025] rounded-3xl my-auto px-6 py-2'
                //     onClick={() =>
                //       lazy({
                //         variables: {
                //           take: 40,
                //           first: 40,
                //           searchString: "Testing"
                //         }
                //       })
                //     }>
                //     {"lazy"}
                //   </button>
                // ) :
                // <EntryFeed
                //   userEntries={entries?.allEntries}
                //   viewer={user?.viewer}
                //   key={`${entries?.allEntries?.edges?.map(x => x?.cursor)}:${
                //     user?.viewer?.userByEmail?.id
                //   }`}
                // />

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
