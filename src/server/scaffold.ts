import { join } from "path";
import { makeSchema, connectionPlugin, queryComplexityPlugin } from "nexus";
import * as types from "./Constituents";
import { SchemaBuilder } from "nexus/dist/builder";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLSchema } from "graphql";
import { NexusPlugin } from "nexus/dist/plugin";
import { Logger, MongoClient } from "mongodb";
import {
  Account,
  Entry,
  User,
  Comment,
  Profile,
  Session,
  VerificationToken
} from "@/graphql/generated/resolver-types";
export const MONGO_DB_URI = process.env.DATABASE_URL ?? "";

export const ConnectDb = async () => {
  const client = await MongoClient.connect(MONGO_DB_URI, {
    logger: new Logger("MongoLogger", { loggerLevel: "info" })
  });
  const db = client.db("next-prisma");
  return {
    users: db.collection<User>("users"),
    entries: db.collection<Entry>("entries"),
    sessions: db.collection<Session>("sessions"),
    profiles: db.collection<Profile>("profiles"),
    comments: db.collection<Comment>("comments"),
    verificationTokens: db.collection<VerificationToken>("verificationTokens"),
    accounts: db.collection<Account>("accounts")
  };
};

export const LoadSchemaSync: GraphQLSchema = loadSchemaSync(
  join(process.cwd(), "/src/server/NexusSchema/schema.gql"),
  {
    loaders: [new GraphQLFileLoader()],
    sort: true,
    inheritResolversFromInterfaces: true,
    experimentalFragmentVariables: true,
    commentDescriptions: true
  }
);

export const schemaBuilder = new SchemaBuilder({
  plugins: [
    connectionPlugin({
      includeNodesField: true,
      strictArgs: true,
      disableBackwardPagination: false,
      disableForwardPagination: false,
      cursorFromNode(node) {
        return node.id;
      }
    }),
    queryComplexityPlugin()
  ],

  sourceTypes: {
    modules: [
      {
        module: join(process.cwd(), "/node_modules/.prisma/client/index.d.ts"),
        alias: "types"
      }
    ]
  },
  features: {
    abstractTypeStrategies: {
      isTypeOf: true,
      __typename: true,
      resolveType: true
    }
  },
  contextType: {
    module: join(process.cwd(), "/src/server/Context/index.ts"),
    export: "Context",
    alias: "ctx"
  },
  prettierConfig: join(process.cwd(), "/.prettierrc.yaml"),
  shouldGenerateArtifacts: true,
  outputs: {
    schema: join(process.cwd(), "/src/server/NexusSchema/schema.gql"),
    typegen: join(process.cwd(), "/src/server/NexusSchema/nexus.ts")
  }
});
export const schema = makeSchema({
  types: { ...types },
  plugins: [
    connectionPlugin({
      includeNodesField: true,
      strictArgs: true,
      disableBackwardPagination: false,
      disableForwardPagination: false,
      cursorFromNode(node) {
        return node.id;
      }
    }),
    queryComplexityPlugin()
  ],
  sourceTypes: {
    modules: [
      {
        module: join(process.cwd(), "/node_modules/.prisma/client/index.d.ts"),
        alias: "Prisma"
      }
    ]
  },
  features: {
    abstractTypeStrategies: {
      isTypeOf: true,
      __typename: true,
      resolveType: true
    }
  },
  contextType: {
    module: join(process.cwd(), "/src/server/Context/index.ts"),
    export: "Context",
    alias: "ctx"
  },
  prettierConfig: join(process.cwd(), "/.prettierrc.yaml"),
  shouldGenerateArtifacts: true,
  outputs: {
    schema: join(process.cwd(), "/src/server/NexusSchema/schema.gql"),
    typegen: join(process.cwd(), "/src/server/NexusSchema/nexus.ts")
  }

  // printSchema function to output gql wrapped TS file of GraphQLSchema
});
