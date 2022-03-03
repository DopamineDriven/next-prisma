import { ApolloServer } from "apollo-server-micro";
import {
  schema as NexusSchema,
  LoadSchemaSync
} from "../../../server/scaffold";
import cors from "micro-cors";
import { RequestHandler } from "micro";
import {
  ApolloServerPluginInlineTrace,
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginUsageReporting,ContextFunction,
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
import { Resolvers, ResolversObject } from "../../../.cache/__types__";
import { buildServices } from "../../../server/Services/index";
import { PageConfig } from "next";
import clientPromise from "../../../lib/mongodb";

export const serverSchema = new GraphQLSchema(NexusSchema.toConfig());
export const corsMiddleware = (handler: RequestHandler) => {
  return cors()(handler);
};

const configg: Config<ContextObject<Context>> = {
  resolvers: mergeResolvers<ResolversObject<Resolvers<Context>>, Context>({
    ...types,
    prisma,
    ...buildServices(prisma)
  }),
  allowBatchedHttpRequests: true,
  schema: new GraphQLSchema(NexusSchema.toConfig()),
  debug: process.env.NODE_ENV !== "production" ? true : false,
  introspection: true,

  context: (req: MicroRequest, res: ServerResponse) => ({
    ...createContext({ req, res, prisma })
  }),
  plugins: process.env.NODE_ENV === "production" ? [] : [
    ApolloServerPluginLandingPageGraphQLPlayground({ endpoint: "/api/graphql" })
  ]
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
  (await clientPromise).db("next-prisma", { retryWrites: true });
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

// import { ApolloServer } from "apollo-server-micro";
// import {
//   LoadSchemaSync,
//   schema as NexusSchema,
//   ConnectDb
// } from "../../../server/scaffold";
// import cors from "micro-cors";
// import { RequestHandler } from "micro";
// import {
//   ApolloServerPluginInlineTrace,
//   Context as ContextObject
// } from "apollo-server-core";
// import {
//   createContext,
//   Context,
//   loggingMiddleware
// } from "../../../server/Context/index";
// import { IncomingMessage, ServerResponse } from "http";
// import { MicroRequest } from "apollo-server-micro/dist/types";
// import {
//   graphqlMicro,
//   MicroGraphQLOptionsFunction
// } from "apollo-server-micro/dist/microApollo";
// import { Resolvers, ResolversObject } from "@/graphql/generated/graphql";
// import { Config } from "apollo-server-micro";
// import { GraphQLSchema } from "graphql";
// import { PageConfig } from "next";
// import { buildServices } from "../../../server/Services";
// import { mergeResolvers } from "@graphql-tools/merge";
// import { MongoClient, ConnectOptions } from "mongodb";

// export const MONGO_DB_URI = process.env.DATABASE_URL ?? "";

// export const serverSchema = new GraphQLSchema(NexusSchema.toConfig());
// export const corsMiddleware = (handler: RequestHandler) => {
//   return cors()(handler);
// };

// const resolversTypes = (resolverTypes: Resolvers<Context>) => ({
//   ...resolverTypes
// });
// const configg: Config<ContextObject<Context>> = {
//   // resolvers: mergeResolvers<ResolversObject<Resolvers<Context>>, Context>({
//   //   ...types,
//   //   prisma,
//   //   ...buildServices(prisma)
//   // }),

//   allowBatchedHttpRequests: true,
//   schema: LoadSchemaSync || serverSchema,
//   debug: process.env.NODE_ENV !== "production" ? true : false,
//   introspection: true,
//   context: () => ({ ...createContext }),
//   plugins: [ApolloServerPluginInlineTrace()]
// };

// /**
//  * https://www.apollographql.com/docs/studio/schema/schema-reporting-protocol/
//  * create a SchemaHash
//  * function signHmacSha256(key: string, secret: string) {
//   key = accessToken;
//   secret = secretKey;
//   const hmac = crypto.createHmac("sha256", key);
//   const signed = hmac.update(Buffer.from(secret, "utf-8")).digest("hex");
//   return signed;
// }

//  */

// const apolloServer = new ApolloServer({
//   resolvers: { ...resolversTypes },
//   parseOptions: {
//     allowLegacySDLImplementsInterfaces: true,
//     experimentalFragmentVariables: true
//   },
//   schema: NexusSchema,
//   debug: process.env.NODE_ENV !== "production" ? true : false,
//   introspection: true,
//   context: async ({ req, res, prisma }: Context) => {
//     const db = await ConnectDb();
//     const authHeader = req.headers.authorization?.split(/([ ])/)[2]
//       ? req.headers.authorization.split(/([ ])/)[2].trim()
//       : undefined;
//     // const {
//     //   account,
//     //   comment,
//     //   entry,
//     //   profile,
//     //   session,
//     //   user,
//     //   verificationRequest
//     // } = { ...buildServices(prisma) };
//     if (authHeader !== undefined && authHeader.length > 10) {
//       res.setHeader("Authorization", `Bearer ${authHeader}`);
//       // const viewer = await prisma.session
//       // .findFirst({
//       //   where: { sessionToken: authHeader },
//       //   include: { user: true }
//       // })
//       // .user();
//       return {
//         req,
//         res,
//         ...buildServices(prisma),
//         // authHeader,
//         db
//         // viewer
//       };
//     }
//     return { req, res, ...buildServices(prisma), db };
//   },
//   plugins: [ApolloServerPluginInlineTrace()]
// });

// const startServer = apolloServer.start();
// export default corsMiddleware(async function handler(
//   req: MicroRequest | IncomingMessage,
//   res: ServerResponse
// ) {
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Cache-Control",
//     "public, stale-while-revalidate=600, s-maxage=1200"
//   );
//   res.setHeader("Access-Control-Allow-Headers", [
//     "Origin, X-Requested-With, Content-Type, Accept, apollo-federation-include-trace, Authorization"
//   ]);
//   // loggingMiddleware()
//   if (req.method === "OPTIONS") {
//     res.end();
//     return;
//   }

//   await startServer;
//   await apolloServer.createHandler({
//     path: "/api/graphql"
//   })(req, res);
// });

// export const config: PageConfig = {
//   api: {
//     bodyParser: false
//   }
// };

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
