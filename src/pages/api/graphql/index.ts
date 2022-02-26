import { ApolloServer } from "apollo-server-micro";
import { schema as NexusSchema } from "../../../server/scaffold";
import cors from "micro-cors";
import { RequestHandler } from "micro";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginUsageReporting,
  Context as ContextObject
} from "apollo-server-core";
import { createContext, Context } from "../../../server/Context/index";
import { IncomingMessage, ServerResponse } from "http";
import { MicroRequest } from "apollo-server-micro/dist/types";
import prisma from "../../../server/Context/prisma";
import { Config } from "apollo-server-micro";
import * as types from "../../../server/Constituents";
import { GraphQLSchema } from "graphql";
import { mergeResolvers } from "@graphql-tools/merge";
import { buildServices } from "../../../server/Services/index";
import { PageConfig } from "next";

export const serverSchema = new GraphQLSchema(NexusSchema.toConfig());
export const corsMiddleware = (handler: RequestHandler) => {
  return cors()(handler);
};

const configg: Config<ContextObject<Context>> = {
  // resolvers: mergeResolvers<ResolversObject<Resolvers<Context>>, Context>({
  //   ...types,
  //   prisma,
  //   ...buildServices(prisma)
  // }),
  allowBatchedHttpRequests: true,
  schema: new GraphQLSchema(NexusSchema.toConfig()),
  debug: process.env.NODE_ENV !== "production" ? true : false,
  introspection: true,
  context: () => ({ ...createContext }),
  plugins: [ApolloServerPluginInlineTrace()]
};
const apolloServer = new ApolloServer({
  ...configg
});

const startServer = apolloServer.start();

export default corsMiddleware(async function handler(
  req: IncomingMessage | MicroRequest,
  res: ServerResponse
) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Cache-Control",
    "public, stale-while-revalidate=600, s-maxage=1200"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, apollo-federation-include-trace, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return;
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql"
  })(req, res);
});

export const config: PageConfig = {
  api: {
    bodyParser: false
  }
};

// import { PrismaClient } from "@prisma/client";
// import {
//   GraphQLRequest,
//   GraphQLRequestContext,
//   GraphQLResponse
// } from "apollo-server-types";
// type GenerateClientInfo<TContext> = (
//   requestContext: GraphQLRequestContext<TContext>
// ) => ClientInfo;
// apollo: {
//   graphRef: process.env.APOLLO_GRAPH_REF,
//   key: process.env.APOLLO_KEY,
//   graphVariant: process.env.APOLLO_GRAPH_VARIANT  }
// ApolloServerPluginUsageReporting<Context>({
//   sendHeaders: { onlyNames: ["Origin", "X-Requested-With", "Content-Type", "Accept", "apollo-federation-include-trace", "Authorization"] },
//   sendVariableValues: { all: true },
//   debugPrintReports: true,
//   internal_includeTracesContributingToStats: true,
//   sendReportsImmediately: true,
//   sendUnexecutableOperationDocuments: true
// })
//   const requestContext = (context: Context) =>
//     ({
//       req: request,
//       res: response,
//       prisma: prisma,
//       ...buildServices(prisma)
//     } as Context);
//   debug = true;

//   const headerFunc = () => {
//     console.log(request.http?.method);
//     console.log(request.http?.url);
//     if (request.http) {
//       return {
//         url: request.http.url,
//         method: request.http.method,
//         operation: request.operationName,
//         variables: request.variables,
//         query: request.query,
//         extensions: request.extensions,
//         clieantName:
//           request.http.headers.get("apollographql-client-name") !== null
//             ? request.http.headers.get("apollographql-client-name")
//             : "Unknown Client",
//         clientVersion:
//           request.http.headers.get("apollographql-client-version") !==
//           null
//             ? request.http.headers.get("apollographql-client-version")
//             : "Unversioned"
//       };
//     } else {
//       return {
//         clientName: "Unknown Client",
//         clientVersion: "Unversioned"
//       };
//     }
//   };
//   headerFunc();
//   return {
//     generateClientInfo: (generate: GenerateClientInfo<Context>) => {
//       return this.generateClientInfo({
//         context: context as Context
//       });
//     }
//   };
// }
