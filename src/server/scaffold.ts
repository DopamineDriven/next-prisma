import { join } from "path";
import {
  makeSchema,
  connectionPlugin,
  queryComplexityPlugin,
  declarativeWrappingPlugin,
  intArg,
  core
} from "nexus";
import { GraphQLNamedType, isObjectType } from "graphql";
import * as types from "./Constituents";
import { SchemaBuilder } from "nexus/dist/builder";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLResolveInfo, GraphQLSchema } from "graphql";
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
import { fromGlobalId, toGlobalId } from "graphql-relay";
import { loggingMiddleware } from "./Context";
import { connectionType } from "./Constituents/Abstract/connection-strategy";
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
const middle = core.composeMiddlewareFns(
  [loggingMiddleware],
  (src, args, context, info) => {
    return info.fieldName;
  }
);
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
let possibleGlobalIdTypeNames: core.GetGen2<"abstractTypeMembers", "Node">;
export const schema = core.makeSchema({
  types: { ...types },
  plugins: [
    core.connectionPlugin({
      // additionalArgs: { totalCount: "Int" },
      extendConnection: {
        totalCount: {
          type: "Int",
          args: {
            totalCount: core.nonNull(
              core.intArg({ default: 0 })
            ) as core.NexusNonNullDef<"Int">
          },
          requireResolver: false
        }
      },
      additionalArgs: {
        first: core.nonNull(core.intArg({ default: 10 }))
      },
      includeNodesField: true,
      strictArgs: true,
      disableBackwardPagination: false,
      disableForwardPagination: false,
      decodeCursor: (cursor: string) => fromGlobalId(cursor).id,
      encodeCursor: (cursor: string) =>
        toGlobalId(possibleGlobalIdTypeNames, cursor),
      cursorFromNode(node: { id: string }, args, ctx, info, { index, nodes }) {
        if (args.last && !args.before) {
          const totalCount = info.fieldNodes.length;

          return `${info.returnType.toString()}:${
            totalCount - args.last! + index + 1
          }`;
        }
        return connectionPlugin.defaultCursorFromNode(
          node.id,
          args,
          ctx,
          info,
          {
            index,
            nodes
          }
        );
      }
    }),
    queryComplexityPlugin(),
    declarativeWrappingPlugin()
  ],
  sourceTypes: {
    modules: [
      {
        module: join(process.cwd(), "/node_modules/.prisma/client/index.d.ts"),
        alias: "Prisma"
      },
      {
        alias: "ts",
        module: "typescript",
        glob: false,
        typeMatch: tsTypeMatch
      },
      {
        alias: "t",
        module: join(process.cwd(), "/src/server/NexusSchema/nexus.ts"),
        onlyTypes: []
      }
    ]
  },
  nonNullDefaults: {
    output: true
  },
  features: {
    abstractTypeStrategies: {
      isTypeOf: false,
      __typename: true,
      resolveType: true
    }
  },
  // shouldExitAfterGenerateArtifacts: true,
  contextType: {
    module: join(process.cwd(), "/src/server/Context/index.ts"),
    export: "Context",
    alias: "ctx"
  },
  formatTypegen: core.typegenFormatPrettier(
    join(process.cwd(), "/.prettierrc.yaml")
  ),
  prettierConfig: join(process.cwd(), "/.prettierrc.yaml"),
  shouldGenerateArtifacts: true,
  outputs: {
    schema: join(process.cwd(), "/src/server/NexusSchema/schema.gql"),
    typegen: join(process.cwd(), "/src/server/NexusSchema/nexus.ts")
  }
});

function tsTypeMatch(type: GraphQLNamedType, defaultMatch: RegExp) {
  if (isNodeType(type)) {
    return [
      new RegExp(`(?:interface|type|class)\\s+(${type.name}Node)\\W`, "g"),
      defaultMatch
    ];
  }
  return defaultMatch;
}

const isNodeType = (type: GraphQLNamedType) =>
  Boolean(
    isObjectType(type) && type.getInterfaces().find(i => i.name === "Node")
  );
