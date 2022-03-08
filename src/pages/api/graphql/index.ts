import { ApolloServer } from "apollo-server-micro";
import { schema as NexusSchema } from "../../../server/scaffold";
import cors from "micro-cors";
import { RequestHandler } from "micro";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
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

const configOptions: Config<ContextObject<Context>> = {
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
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({ endpoint: "/api/graphql" })
  ]
};

const apolloServer = new ApolloServer({
  ...configOptions
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

  apolloServer.createGraphQLServerOptions(req, res);

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

/**
 * TODO Revisit to Implement GraphiQL
 * import graphqlHTTP, { getGraphQLParams } from "express-graphql";
 * export const serverSchema = new GraphQLSchema(NexusSchema.toConfig());
export const corsMiddleware = (handler: RequestHandler) => {
  return cors()(handler => handler.on("/",graphqlHTTP.graphqlHTTP({
      schema: new GraphQLSchema(NexusSchema.toConfig()),
      context: configOptions.context,
      graphiql: { headerEditorEnabled: true },
      pretty: true
    })
  ));
};
 */
