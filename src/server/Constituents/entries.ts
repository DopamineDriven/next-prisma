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
  SortOrderEnum,
  BoolFilter,
  StringNullableFilter,
  StringFilter,
  MediaItem,
  DateTimeNullableFilter,
  DateTimeFilter,
  UserRelationFilter,
  UserOrderByWithRelationInput,
  CommentOrderByRelationAggregateInput,
  CategoryObject,
  CommentListRelationFilter,
  Reaction,
  MediaItemRelationFilter,
  MediaItemListRelationFilter
} from ".";
import { Prisma } from "@prisma/client";

export const Entry: core.NexusObjectTypeDef<"Entry"> = objectType({
  name: "Entry",
  definition(t) {
    t.implements("Node");
    t.nonNull.field("_count", {
      type: EntryCount,
      resolve: async (source, _, ctx, info) => {
        return await ctx.prisma.entry
          .findFirst({
            cursor: { id: source.id },
            where: { id: source.id },
            include: {
              comments: true,
              _count: true
            }
          })
          .then(data => {
            return data?._count as Prisma.EntryCountOutputType;
          });
      }
    });
    t.string("title");
    t.nullable.string("content");
    t.nullable.field("featuredImage", { type: MediaItem });
    t.boolean("published");
    t.list.field("reactions", { type: Reaction });
    t.list.field("categories", {
      type: CategoryObject
    });
    t.list.field("attachments", {
      type: MediaItem
    });
    t.string("authorId", {
      resolve(source) {
        return source.authorId;
      }
    });
    t.DateTime("createdAt");
    t.nullable.DateTime("updatedAt");
    t.nullable.field("author", {
      type: "User",
      async resolve(parent, _args, ctx, _info) {
        return await ctx.prisma.entry
          .findFirst({
            include: { comments: true, _count: true },
            where: {
              author: { id: String(parent.authorId) }
            }
          })
          .author();
      }
    });
    t.connectionField("comments", {
      type: "Comment",
      additionalArgs: {
        take: intArg(),
        searchString: nonNull(stringArg())
      },
      extendConnection(t) {
        t.nonNull.field("totalCount", {
          nullable: false,
          type: "Int",
          resolve: source => {
            const totalCount: number | 0 = source?.edges?.length
              ? source.edges.length
              : 0;
            return { totalCount: totalCount }.totalCount;
          }
        });
      },
      async nodes(root, args, ctx, _info) {
        return await ctx.prisma.comment
          .findFirst({
            include: { entry: true, author: true },
            cursor: {
              authorId_entryId: { entryId: root.id, authorId: root.authorId }
            }
          })
          .entry()
          .author()
          .comments({
            cursor: { id: args.after ? args.after : undefined }
          });
      },
      totalCount(_source, _args, ctx, info) {
        return {
          totalCount: info.fieldNodes.length
        }.totalCount;
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
  type: "Query",
  definition(t) {
    t.field("findEntryById", {
      type: "Entry",
      nullable: true,
      args: { id: nonNull(stringArg()) },
      async resolve(_root, args, ctx, _info) {
        return await ctx.prisma.entry
          .findUnique({
            where: { id: args.id }
          })
          .then(data => data);
      }
    });
    t.connectionField("GetAllEntries", {
      type: "Entry",
      inheritAdditionalArgs: true,
      extendConnection(t) {
        t.nonNull.field("totalCount", {
          nullable: false,
          type: "Int",
          resolve: source => {
            const totalCount: number | 0 = source?.edges?.length
              ? source.edges.length
              : 0;
            return { totalCount: totalCount }.totalCount;
          }
        });
      },
      additionalArgs: {
        take: intArg(),
        searchString: nonNull(stringArg())
      },
      async nodes(_root, args, ctx, _info) {
        return await ctx.prisma.entry.findMany({
          take: Number(args.first),
          where: { title: { in: [args.searchString] } }
        });
      },
      totalCount(_source, _args, ctx, info) {
        return {
          totalCount: info.fieldNodes.length
        }.totalCount;
      }
    });
    t.connectionField("SearchEntriesByTitle", {
      type: "Entry",
      inheritAdditionalArgs: true,
      extendConnection(t) {
        t.nonNull.field("totalCount", {
          nullable: false,
          type: "Int",
          resolve: source => {
            const totalCount: number | 0 = source?.edges?.length
              ? source.edges.length
              : 0;
            return { totalCount: totalCount }.totalCount;
          }
        });
      },
      additionalArgs: {
        searchString: nonNull(stringArg())
      },
      async nodes(root, args, ctx, _info) {
        return await ctx.prisma.entry.findMany({
          where: { title: { contains: args.searchString } },
          take: args.first ? args.first : 10
        });
      },
      totalCount(_source, _args, ctx, info) {
        return {
          totalCount: info.fieldNodes.length
        }.totalCount;
      }
    });
  }
});

export const EntryMutation: core.NexusExtendTypeDef<"Mutation"> =
  extendType<"Mutation">({
    type: "Mutation",
    definition(t) {
      t.field("createEntry", {
        type: "Entry",
        args: {
          title: stringArg({
            description: "Entry Title"
          }) as core.NexusArgDef<"String">,
          content: stringArg({
            description: "Entry Content"
          }) as core.NexusArgDef<"String">,
          featuredImage: stringArg({
            description: "Entry Image"
          }) as core.NexusArgDef<"String">,
          userId: stringArg({
            description: "User Id"
          }) as core.NexusArgDef<"String">,
          publish: booleanArg()
        },
        async resolve(_root, args, ctx, _info) {
          return await ctx.prisma.entry.create({
            data: {
              title: String(args.title),
              content: String(args.content),
              featuredImage: {
                set: { id: "", ariaLabel: "", width: 0, height: 0, quality: 85 }
              },
              createdAt: new Date(Date.now()),
              published: args?.publish ? args.publish : false,
              author: { connect: { id: String(args.userId) } }
            }
          });
        }
      }) as core.FieldResolver<"Mutation", "createEntry"> | undefined;
    }
  });
// Input Types

export const EntryCount: core.NexusObjectTypeDef<"EntryCount"> =
  core.objectType<"EntryCount">({
    name: "EntryCount",
    definition(t) {
      t.nonNull.int("comments");
    }
  });

export const EntryListRelationFilter = core.inputObjectType({
  name: "EntryListRelationFilter",
  definition(t) {
    t.field("every", { type: EntryWhereInput });
    t.field("none", { type: EntryWhereInput });
    t.field("some", { type: EntryWhereInput });
  }
});

export const EntryOrderByWithRelationInput =
  core.inputObjectType<"EntryOrderByWithRelationInput">({
    name: "EntryOrderByWithRelationInput",
    definition(t) {
      t.nullable.field("id", { type: SortOrderEnum });
      t.nullable.field("title", { type: SortOrderEnum });
      t.nullable.field("published", { type: SortOrderEnum });
      t.nullable.field("authorId", { type: SortOrderEnum });
      t.nullable.field("content", { type: SortOrderEnum });
      t.nullable.field("createdAt", { type: SortOrderEnum });
      t.nullable.field("updatedAt", { type: SortOrderEnum });
      t.nullable.field("reactions", { type: SortOrderEnum });
      t.nullable.field("author", { type: UserOrderByWithRelationInput });
      t.nullable.field("comments", {
        type: CommentOrderByRelationAggregateInput
      });
    }
  });

export const EntryOrderByRelationAggregateInput = core.inputObjectType({
  name: "EntryOrderByRelationAggregateInput",
  definition(t) {
    t.nullable.field("_count", { type: SortOrderEnum });
  }
});

export const EntryRelationFilter = core.inputObjectType({
  name: "EntryRelationFilter",
  definition(t) {
    t.field("is", { type: EntryWhereInput });
    t.field("isNot", { type: EntryWhereInput });
  }
});

export const EntryWhereInput = core.inputObjectType({
  name: "EntryWhereInput",
  definition(t) {
    t.list.nonNull.field("AND", { type: EntryWhereInput });
    t.list.nonNull.field("NOT", { type: EntryWhereInput });
    t.list.nonNull.field("OR", { type: EntryWhereInput });
    t.field("author", { type: UserRelationFilter });
    t.field("authorId", { type: StringNullableFilter });
    t.field("categoryId", { type: StringNullableFilter });
    t.field("comments", { type: CommentListRelationFilter });
    t.field("content", { type: StringNullableFilter });
    t.field("createdAt", { type: DateTimeFilter });
    t.field("featuredImage", { type: MediaItemRelationFilter });
    t.field("attachments", { type: MediaItemListRelationFilter });
    t.field("id", { type: StringFilter });
    t.field("published", { type: BoolFilter });
    t.field("title", { type: StringFilter });
    t.field("updatedAt", { type: DateTimeNullableFilter });
  }
});
