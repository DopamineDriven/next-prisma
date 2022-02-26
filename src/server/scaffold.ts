import { join } from "path";
import { makeSchema, connectionPlugin } from "nexus";
import * as types from "./Constituents";
import { SchemaBuilder } from "nexus/dist/builder";

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
    })
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
      __typename: true,
      resolveType: true
    }
  },
  contextType: {
    module: join(process.cwd(), "/src/server/Context/index.ts"),
    export: "Context",
    alias: "prisma"
  },
  prettierConfig: join(process.cwd(), "/.prettierrc.yaml"),
  shouldGenerateArtifacts: true,
  outputs: {
    schema: join(process.cwd(), "/src/server/NexusSchema/schema.graphql"),
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
    })
  ],
  sourceTypes: {
    modules: [
      {
        module: join(process.cwd(), "/node_modules/.prisma/client/index.d.ts"),
        alias: "prisma"
      }
    ]
  },
  features: {
    abstractTypeStrategies: {
      __typename: true,
      resolveType: true
    }
  },
  contextType: {
    module: join(process.cwd(), "/src/server/Context/index.ts"),
    export: "Context"
  },
  prettierConfig: join(process.cwd(), "/.prettierrc.yaml"),
  shouldGenerateArtifacts: true,
  outputs: {
    schema: join(process.cwd(), "/src/server/NexusSchema/schema.graphql"),
    typegen: join(process.cwd(), "/src/server/NexusSchema/nexus.ts")
  }

  // printSchema function to output gql wrapped TS file of GraphQLSchema
});
