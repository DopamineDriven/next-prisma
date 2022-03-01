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
  CategoryObject,
  CommentListRelationFilter,
  Reaction
} from ".";

export const Entry: core.NexusObjectTypeDef<"Entry"> = objectType({
  name: "Entry",
  definition(t) {
    t.implements("Node");
    t.nonNull.string("id");
    t.string("title");
    t.nullable.string("content");
    t.nullable.field("featuredImage", { type: MediaItem });
    t.boolean("published");
    t.list.field("reactions", { type: Reaction });
    t.list.field("categories", { type: CategoryObject });
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
          .comments({ take: args.take ? args.take : 10 });
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
          where: { title: { in: [args.searchString] } }
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
          where: { title: { contains: args.searchString } }
        });
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
                set: { ariaLabel: "", width: 0, height: 0, quality: 85 }
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

export const EntryListRelationFilter = core.inputObjectType({
  name: "EntryListRelationFilter",
  definition(t) {
    t.field("every", { type: EntryWhereInput });
    t.field("none", { type: EntryWhereInput });
    t.field("some", { type: EntryWhereInput });
  }
});

export const EntryOrderByRelationAggregateInput = core.inputObjectType({
  name: "EntryOrderByRelationAggregateInput",
  definition(t) {
    t.field("_count", { type: SortOrderEnum });
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
    t.string("featuredImage");
    t.field("id", { type: StringFilter });
    t.field("published", { type: BoolFilter });
    t.field("title", { type: StringFilter });
    t.field("updatedAt", { type: DateTimeNullableFilter });
  }
});
