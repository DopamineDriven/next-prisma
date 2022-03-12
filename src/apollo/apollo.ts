import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  TypedDocumentNode
} from "@apollo/client";
import {
  createBatch,
  nextNestAfterware,
  nextNestMiddleware,
  errorLink,
  ResolverContext,
  xResolvers
} from "./resolver-context";
import { useMemo } from "react";
import { relayStylePagination } from "@apollo/client/utilities";
import {
  TypedTypePolicies,
  QueryListProfiles_ConnectionKeySpecifier,
  QueryEntries_ConnectionKeySpecifier,
  UserComments_ConnectionKeySpecifier,
  QueryAccounts_ConnectionFieldPolicy,
  QueryAccounts_ConnectionKeySpecifier,
  QuerySession_ConnectionKeySpecifier,
  QueryUsersQuery_ConnectionKeySpecifier,
  QueryKeySpecifier
} from "./helpers";
import emittedIntrospection from "./fragment-matcher";
import { RelayFieldPolicy } from "@apollo/client/utilities/policies/pagination";

export type DocumentType<TDocumentNode extends TypedDocumentNode<any, any>> =
  TDocumentNode extends TypedDocumentNode<infer TType, any> ? TType : never;

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient(
  context?: ResolverContext
): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    name: "graphql-global",
    link: nextNestMiddleware
      .concat(nextNestAfterware)
      .concat(createBatch(context) || errorLink),
    connectToDevTools: true,
    resolvers: xResolvers(context ?? {}),
    cache: new InMemoryCache({
      possibleTypes: emittedIntrospection.possibleTypes,
      typePolicies: {
        Query: {
          keyFields: (): QueryKeySpecifier => [
            "FilterUsers",
            "GetAllEntries",
            "GetSession",
            "SearchByUserEmail",
            "allAccounts",
            "accounts",
            "SearchEntriesByTitle",
            "allEntries",
            "entryFeed",
            "findEntryById",
            "listAccounts",
            "listProfiles",
            "listSessions",
            "node",
            "session",
            "userAccount",
            "userByEmail",
            "userById",
            "userEntries",
            "usersQuery",
            "verificationTokens"
          ],
          fields: {
            listAccounts:
              relayStylePagination<QueryAccounts_ConnectionKeySpecifier>([
                "edges",
                "nodes",
                "pageInfo",
                "totalCount"
              ] as QueryAccounts_ConnectionKeySpecifier) as RelayFieldPolicy<QueryAccounts_ConnectionKeySpecifier>,
            listComments:
              relayStylePagination<UserComments_ConnectionKeySpecifier>([
                "edges",
                "nodes",
                "pageInfo",
                "totalCount"
              ] as UserComments_ConnectionKeySpecifier) as RelayFieldPolicy<UserComments_ConnectionKeySpecifier>,
            listEntries:
              relayStylePagination<QueryEntries_ConnectionKeySpecifier>([
                "edges",
                "nodes",
                "pageInfo",
                "totalCount"
              ] as QueryEntries_ConnectionKeySpecifier) as RelayFieldPolicy<QueryEntries_ConnectionKeySpecifier>,
            listProfiles:
              relayStylePagination<QueryListProfiles_ConnectionKeySpecifier>([
                "edges",
                "pageInfo",
                "nodes",
                "totalCount"
              ] as QueryListProfiles_ConnectionKeySpecifier) as RelayFieldPolicy<QueryListProfiles_ConnectionKeySpecifier>,
            listSessions:
              relayStylePagination<QuerySession_ConnectionKeySpecifier>([
                "edges",
                "nodes",
                "pageInfo",
                "totalCount"
              ] as QuerySession_ConnectionKeySpecifier) as RelayFieldPolicy<QuerySession_ConnectionKeySpecifier>,
            listUsers:
              relayStylePagination<QueryUsersQuery_ConnectionKeySpecifier>([
                "edges",
                "nodes",
                "pageInfo",
                "totalCount"
              ] as QueryUsersQuery_ConnectionKeySpecifier) as RelayFieldPolicy<QueryUsersQuery_ConnectionKeySpecifier>
          }
        }
      } as TypedTypePolicies
    })
  });
}

export type InitialState = NormalizedCacheObject | null;

// Pages with Next.js data fetching methods, like `getStaticProps`, can send
// a custom context which will be used by `SchemaLink` to server render pages
export function initializeApollo<T extends ResolverContext>(
  initialState: InitialState = null,
  context?: T
): ApolloClient<NormalizedCacheObject> {
  const _apolloClient = apolloClient ?? createApolloClient(context);
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // always create a new ApolloClient for SSG/SSR
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the Client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo<T extends ResolverContext>(
  initialState: InitialState,
  context?: T
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(
    () => initializeApollo(initialState, context),
    [initialState, context]
  );
  return store;
}
