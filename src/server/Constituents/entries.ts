import {
  extendType,
  objectType,
  stringArg,
  nonNull,
  intArg,
  core,
  booleanArg
} from "nexus";
import { buildOrderBy } from "./utils";
import {
  NexusArgDef,
  NexusExtendTypeDef,
  NexusInputObjectTypeDef,
  NexusObjectTypeDef
} from "nexus/dist/core";

export const Entry: NexusObjectTypeDef<"Entry"> = objectType({
  name: "Entry",
  definition(t) {
    t.implements("Node");
    t.id("id");
    t.string("title");
    t.nullable.string("content");
    t.nullable.string("featuredImage");
    t.boolean("published");
    t.string("userId");
    t.DateTime("createdAt");
    t.nullable.DateTime("updatedAt");
    t.field("author", {
      type: "User",
      async resolve(parent, _args, ctx, _info) {
        return await ctx.prisma.entry
          .findFirst({
            where: {
              author: { id: String(parent.userId) }
            }
          })
          .author();
      }
    });
  }
});

export const AllEntriesOrderBy = buildOrderBy("Entry", [
  "title",
  "createdAt",
  "updatedAt"
]) as core.NexusInputObjectTypeDef<"EntryOrderBy">;

export const AllEntriesOrderByArg = AllEntriesOrderBy.asArg({
  default: { title: "asc" }
}) as core.NexusArgDef<"EntryOrderBy">;

export const EntryQuery = extendType({
  type: "Viewer",
  definition(t) {
    t.field("GetEntry", {
      type: "Entry",
      args: { id: nonNull(stringArg()) },
      resolve(_root, args, ctx, _info) {
        return ctx.prisma.entry.findUnique({
          where: { id: String(args?.id) }
        });
      }
    });
    t.connectionField("GetAllEntries", {
      type: "Entry",
      inheritAdditionalArgs: true,
      additionalArgs: {
        take: intArg(),
        searchString: nonNull(stringArg())
      },
      async nodes(_root, args, ctx, _info) {
        return await ctx.prisma.entry.findMany({
          take: Number(args.first),
          orderBy: {
            _relevance: {
              fields: ["userId"],
              search: String(args.searchString),
              sort: "asc"
            }
          }
        });
      }
    });
    t.connectionField("SearchEntriesByTitle", {
      type: "Entry",
      inheritAdditionalArgs: true,
      additionalArgs: {
        searchString: nonNull(stringArg())
      },
      async nodes(_root, args, ctx, _info) {
        return await ctx.prisma.entry.findMany({
          orderBy: {
            _relevance: {
              fields: ["title"],
              search: String(args.searchString),
              sort: "asc"
            }
          }
        });
      }
    });
  }
});

export const EntryMutation: NexusExtendTypeDef<"Mutation"> =
  extendType<"Mutation">({
    type: "Mutation",
    definition(t) {
      t.field("createEntry", {
        type: "Entry",
        args: {
          title: stringArg({
            description: "Entry Title"
          }) as NexusArgDef<"String">,
          content: stringArg({
            description: "Entry Content"
          }) as NexusArgDef<"String">,
          featuredImage: stringArg({
            description: "Entry Image"
          }) as NexusArgDef<"String">,
          userId: stringArg({
            description: "User Id"
          }) as NexusArgDef<"String">,
          publish: booleanArg()
        },
        async resolve(_root, args, ctx, _info) {
          return await ctx.prisma.entry.create({
            data: {
              title: String(args.title),
              content: String(args.content),
              featuredImage: String(args.featuredImage),
              createdAt: new Date(Date.now()),
              published: args?.publish ? args.publish : false,
              author: { connect: { id: String(args.userId) } }
            }
          });
        }
      }) as core.FieldResolver<"Mutation", "createEntry"> | undefined;
    }
  });
/**
const or = args.searchString
  ? {
      OR: [
        { title: { contains: String(args.searchString) } },
        { content: { contains: String(args.searchString) } }
      ]
    }
  : {};
 */
