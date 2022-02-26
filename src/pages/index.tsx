import { useRouter } from 'next/router';


export default function Index() {
  const router = useRouter()

  return (
    <>
    <div className='text-stone-600 font-interVar'>
      {router.pathname ? router.pathname : "no pathname here"}
    </div>
  </>)
}

/**
 * import { useSession, UseSessionOptions, getSession } from "next-auth/react";
import {
  Login,
  DataInspector,
  LoadingSpinner,
  EntryFeed
} from "@/components/UI";
import {
  UserByEmailQuery,
  UserByEmailQueryVariables,
  UserByEmailDocument
} from "@/graphql/LocalGen/Core/Queries/user-by-email.graphql";
import {
  useFilterUsersLazyQuery,
  FilterUsersDocument
} from "@/graphql/LocalGen/Core/Queries/filter-users.graphql";
import {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType
} from "next";
import { ParsedUrlQuery } from "@/types/pages";
import { initializeApollo, useApollo } from "@/apollo/apollo";
import { useCallback, useState, useEffect } from "react";
import { NormalizedCacheObject } from "@apollo/client";
import crypto from "crypto";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProfileHeading } from "@/components/Profile";

export type IndexProps = {
  user: UserByEmailQuery | null;
  initialApolloState: NormalizedCacheObject;
};

const accessToken = process.env.FACEBOOK_ACCESS_TOKEN ?? "";
const secretKey = process.env.FACEBOOK_SECRET ?? "";

export const getStaticProps = async (
  ctx: GetStaticPropsContext<ParsedUrlQuery>
): Promise<GetStaticPropsResult<IndexProps>> => {
  const params = ctx.params ? ctx.params.session : "";
  const session = await getSession(ctx.params);
  console.log(JSON.stringify(session, null, 2));
  console.log(params ?? "");

  const apolloClient = initializeApollo(null, ctx.params);

  await apolloClient.query<UserByEmailQuery, UserByEmailQueryVariables>({
    query: UserByEmailDocument,
    variables: {
      email: "andrew.ross@cortinahealth.com",
      accountsCount: 3,
      entriesCount: 10,
      sessionsCount: 3
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(true),
      user: apolloClient.cache.readQuery<
        UserByEmailQuery,
        UserByEmailQueryVariables
      >({
        query: UserByEmailDocument,
        variables: {
          email: "andrew.ross@cortinahealth.com",
          accountsCount: 3,
          entriesCount: 10,
          sessionsCount: 3
        },
        optimistic: true
      })
    }
  };
};

function signHmacSha512(key: string, secret: string) {
  key = accessToken;
  secret = secretKey;
  const hmac = crypto.createHmac("sha512", key);
  const signed = hmac.update(Buffer.from(secret, "utf-8")).digest("hex");
  return signed;
}

function Index<T extends typeof getStaticProps>({
  user,
  initialApolloState
}: InferGetStaticPropsType<T>) {
  // const [userEmail, setUserEmail] = useState("");
  const apolloClient = useApollo(initialApolloState);
  const userData = apolloClient.cache.readQuery<
    UserByEmailQuery,
    UserByEmailQueryVariables
  >({
    query: UserByEmailDocument,
    variables: {
      email: "andrew.ross@cortinahealth.com",
      accountsCount: 3,
      entriesCount: 10,
      sessionsCount: 3
    },
    optimistic: true
  });
  console.log(JSON.stringify(signHmacSha512(accessToken, secretKey), null, 2));
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

  const [seshManager, setSeshManager] = useState<UseSessionOptions<true>>();

  const NextAuthCb = useCallback((auth: boolean) => {
    setSeshManager({
      required: true,
      onUnauthenticated: () => setAuthed(auth)
    });
  }, []);

  useEffect(() => {
    NextAuthCb(authed);
    status !== "authenticated" ? setAuthed(false) : setAuthed(true);
    typeof window !== "undefined" && data !== null
      ? window.localStorage.setItem("session", JSON.stringify(data))
      : () => {};
  }, [status, NextAuthCb, authed, data]);

  const [lazy, { data: entries, loading, error, called }] =
    useFilterUsersLazyQuery({
      query: FilterUsersDocument,
      returnPartialData: true
    });

  return (
    <>
      {(status !== "authenticated" || !authed) && !loading ? (
        <Login />
      ) : authed === true && status === "authenticated" ? (
        <>
          <ProfileHeading viewer={user?.viewer} />
          <div className='fit font-sans py-10'>
            <main>
              {error ? (
                <DataInspector>{error ? error : {}}</DataInspector>
              ) : loading && !error ? (
                <div>loading...</div>
              ) : !called ? (
                <button
                  className='bg-gray-800 text-gray-50 hover:scale-[1.025] rounded-3xl my-auto px-6 py-2'
                  onClick={() =>
                    lazy({
                      variables: {
                        take: 40,
                        first: 40,
                        searchString: "Testing"
                      }
                    })
                  }>
                  {"lazy"}
                </button>
              ) : (
                <EntryFeed
                  userEntries={entries?.allEntries}
                  viewer={user?.viewer}
                  key={`${entries?.allEntries?.edges?.map(x => x?.cursor)}:${
                    user?.viewer?.userByEmail?.id
                  }`}
                />
              )}
              {user?.viewer?.userByEmail && (
                <div className='py-[2rem] prose-pre:prose-sm prose-gray font-normal font-sans max-w-3xl flex-col'>
                  <DataInspector>{user}</DataInspector>
                </div>
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

export default Index;

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

