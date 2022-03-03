import { core } from "nexus";
import {
  SortOrderEnum,
  StringFilter,
  EnumCommentReactionsNullableListFilter,
  StringNullableFilter,
  DateTimeFilter,
  DateTimeNullableFilter,
  UserRelationFilter,
  EntryRelationFilter
} from ".";

export const Comment: core.NexusObjectTypeDef<"Comment"> =
  core.objectType<`Comment`>({
    name: "Comment",
    definition(t) {
      t.implements("Node");
      t.string("authorId");
      t.string("entryId");
      t.nullable.string("body");
      t.nullable.string("position");
      t.nonNull.DateTime("createdAt");
      t.nullable.DateTime("updatedAt");
      t.list.field("reactions", { type: "Reaction" });
      t.nullable.field("author", {
        type: "User",
        async resolve(parent, _args, ctx, _info) {
          return await ctx.prisma.comment
            .findFirst({
              where: {
                author: { id: parent.authorId }
              }
            })
            .author();
        }
      });
      t.nullable.field("entry", {
        type: "Entry",
        async resolve(parent, args, ctx, _info) {
          return await ctx.prisma.comment
            .findFirst({
              where: {
                entry: { id: parent.entryId }
              }
            })
            .entry();
        }
      });
    }
  });

// Input Types
export const CommentListRelationFilter = core.inputObjectType({
  name: "CommentListRelationFilter",
  definition(t) {
    t.field("every", { type: CommentWhereInput });
    t.field("none", { type: CommentWhereInput });
    t.field("some", { type: CommentWhereInput });
  }
});

export const CommentOrderByRelationAggregateInput = core.inputObjectType({
  name: "CommentOrderByRelationAggregateInput",
  definition(t) {
    t.field("_count", { type: SortOrderEnum });
  }
});

export const CommentWhereInput = core.inputObjectType({
  name: "CommentWhereInput",
  definition(t) {
    t.list.nonNull.field("AND", { type: CommentWhereInput });
    t.list.nonNull.field("NOT", { type: CommentWhereInput });
    t.list.nonNull.field("OR", { type: CommentWhereInput });
    t.field("author", { type: UserRelationFilter });
    t.field("authorId", { type: StringNullableFilter });
    t.field("body", { type: StringNullableFilter });
    t.field("createdAt", { type: DateTimeFilter });
    t.field("entry", { type: EntryRelationFilter });
    t.field("entryId", { type: StringNullableFilter });
    t.field("id", { type: StringFilter });
    t.field("position", { type: StringNullableFilter });
    t.field("reactions", { type: EnumCommentReactionsNullableListFilter });
    t.field("updatedAt", { type: DateTimeNullableFilter });
  }
});
