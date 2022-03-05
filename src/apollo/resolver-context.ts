import { ServerResponse, IncomingMessage } from "http";
import { BatchHttpLink } from "@apollo/client/link/batch-http";
import { onError } from "@apollo/client/link/error";
import { Resolvers } from "@/graphql/generated/graphql";
import { ApolloLink, FetchResult } from "@apollo/client";

export interface ResolverContext {
  req?: IncomingMessage;
  res?: ServerResponse;
}

export const xResolvers = (props: Resolvers<ResolverContext>) => ({
  ...props
});

const browser = typeof window !== "undefined";

const envEndpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/graphql"
    : "http://[::1]:3000/graphql";

export const enhancedFetch = async (url: RequestInfo, init: RequestInit) => {
  return await fetch(url, {
    ...init,
    headers: {
      ...init.headers
    },
    credentials: "include",
    keepalive: true,
    method: "POST"
  }).then(response => response);
};

export function createBatch<T extends ResolverContext>(context?: T) {
  return new BatchHttpLink({
    uri: "http://localhost:3040/api/graphql",
    credentials: "include",
    includeExtensions: true,
    batchInterval: 10,
    fetchOptions: {
      mode: "cors",
      context: { ...context }
    },
    fetch: enhancedFetch,
    headers: {
      Authorization: "Bearer ".concat(`${process.env.TWITTER_BEARER_TOKEN}`),
      "Accept-Encoding": "gzip, deflate, br",
      "Transfer-Encoding": "chunked",
      "Content-Type": "application/json",
      Connection: "keep-alive",
      Accept: "*/*"
    }
  });
}

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path, extensions }, index) =>
      console.log(
        JSON.stringify(
          `[${index++}]: \n [Message]: ${message}, \n [Location]: ${locations}, \n [Path]: ${path}, \n [Extension]: ${extensions}`,
          null,
          2
        )
      )
    );
  if (networkError)
    console.log(
      JSON.stringify(
        `[Network error]: Nest is unreachable... \n
          [name]: ${networkError.name} \n
          [message]: ${networkError.message} \n
          [stack]: ${networkError.stack}`,
        null,
        2
      )
    );
});

const isBrowser = typeof window !== "undefined";

export const nextNestMiddleware = new ApolloLink((operation, forward) => {
  // if session exists in LS, set value as session header
  const token = isBrowser ? window.localStorage.getItem("authorization") : "";
  if (token) {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: `${token}`
      }
    }));
  }
  return forward(operation);
});

export const nextNestAfterware = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    // catches incoming session token to store in LS
    // check for session header & update session in LS accordingly
    const context = operation.getContext();
    const {
      response: { headers, cookies }
    } = context;
    console.log("coooookies " + cookies ?? "no cookies :'(");
    const session = headers.get("authorization");
    if (session && isBrowser) {
      if (window.localStorage.getItem("authorization") !== session) {
        isBrowser && window.localStorage.removeItem("authorization");
        window.localStorage.setItem(
          "authorization",
          headers.get("authorization")
        );
      }
    }
    return response;
  });
});

// // under construction
// export const nextSesh = new ApolloLink((operation, forward) => {
//   return forward(operation).map(response => {
//     // parses incoming session token to store in LS
//     // check for session header & update session in LS accordingly
//     // const context = operation.getContext();
//     // const jsonStringContext = JSON.stringify(context ?? "no context", null, 2)
//     // console.log(context ?? {});

//     // const header = req?.headers.authorization?.split(/([ ])/)[1];
//     const { data, context, errors, extensions } = response as FetchResult<
//       signInUserMutation | unknown,
//       Record<string, any>,
//       Record<string, any>
//     >;

//     console.log("context: " + context ?? "no context");
//     console.log("errors: " + errors ?? "no errors");
//     console.log("extensions: " + extensions ?? "no extensions");
//     const session = (data as signInUserMutation).signin;
//     if (session?.auth?.accessToken && !!browser) {
//       if (
//         window.localStorage.getItem("authorization") !==
//         session.auth.accessToken
//       ) {
//         browser && window.localStorage.removeItem("authorization");
//         window.localStorage.setItem(
//           "authorization",
//           session.auth.accessToken
//         );
//       }
//     }
//     // if (data?.signin.auth?.accessToken) {

//     //   res?.setHeader("authorization", ("Bearer "+data.signin.auth.accessToken).trim())
//     // } else if (header != null) {
//     //   res?.setHeader("authorization", ("Bearer "+header).trim())

//     // }
//     const jsonString = JSON.stringify(
//       (response as unknown as FetchResult<
//         signInUserMutation | unknown,
//         Record<string, any>,
//         Record<string, any>
//       >) ?? "no res",
//       null,
//       2
//     );
//     console.log("response: " + jsonString ?? "no response");
//     return response;
//   });
// });
