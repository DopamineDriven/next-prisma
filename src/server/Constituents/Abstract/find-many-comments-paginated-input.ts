import { core } from "nexus";
import {
  DateTimeFilter,
  DateTimeNullableFilter,
  EntryRelationFilter,
  EnumCommentReactionsNullableListFilter,
  StringFilter,
  UserOrderByWithRelationInput,
  StringNullableFilter,
  SortOrderEnum,
  EntryOrderByWithRelationInput,
  UserRelationFilter
} from "..";

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
    t.nullable.field("_count", { type: SortOrderEnum });
  }
});

export const CommentWhereInput = core.inputObjectType({
  name: "CommentWhereInput",
  definition(t) {
    t.list.nonNull.field("AND", { type: CommentWhereInput });
    t.list.nonNull.field("NOT", { type: CommentWhereInput });
    t.list.nonNull.field("OR", { type: CommentWhereInput });
    t.nullable.field("author", { type: UserRelationFilter });
    t.nullable.field("authorId", { type: StringNullableFilter });
    t.nullable.field("body", { type: StringNullableFilter });
    t.nullable.field("createdAt", { type: DateTimeFilter });
    t.nullable.field("entry", { type: EntryRelationFilter });
    t.nullable.field("entryId", { type: StringNullableFilter });
    t.nullable.field("attachment", { type: "MediaItemRelationFilter" });
    t.nullable.field("id", { type: StringFilter });
    t.nullable.field("position", { type: StringNullableFilter });
    t.nullable.field("reactions", {
      type: EnumCommentReactionsNullableListFilter
    });
    t.nullable.field("updatedAt", { type: DateTimeNullableFilter });
  }
});

export const CommentOrderByWithRelationInput = core.inputObjectType({
  name: "CommentOrderByWithRelationInput",
  definition(t) {
    t.nullable.field("id", { type: SortOrderEnum });
    t.nullable.field("authorId", { type: SortOrderEnum });
    t.nullable.field("entryId", { type: SortOrderEnum });
    t.nullable.field("body", { type: SortOrderEnum });
    t.nullable.field("position", { type: SortOrderEnum });
    t.nullable.field("createdAt", { type: SortOrderEnum });
    t.nullable.field("updatedAt", { type: SortOrderEnum });
    t.nullable.field("reactions", { type: SortOrderEnum });
    t.nullable.field("entry", { type: EntryOrderByWithRelationInput });
    t.nullable.field("author", { type: UserOrderByWithRelationInput });
  }
});

export const CommentAuthorIdEntryIdCompoundUniqueInput = core.inputObjectType({
  name: "CommentAuthorIdEntryIdCompoundUniqueInput",
  definition(t) {
    t.nullable.field("authorId", { type: "String" });
    t.nullable.field("entryId", { type: "String" });
  }
});

export const CommentWhereUniqueInput = core.inputObjectType({
  name: "CommentWhereUniqueInput",
  definition(t) {
    t.nullable.field("id", { type: "String" });
    t.nullable.field("authorId_entryId", {
      type: CommentAuthorIdEntryIdCompoundUniqueInput
    });
  }
});

/**
 *  export type EntryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reactions?: SortOrder
    author?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }
 *   export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    entryId?: SortOrder
    body?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reactions?: SortOrder
    entry?: EntryOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = {
    id?: string
    authorId_entryId?: CommentAuthorIdEntryIdCompoundUniqueInput
  }
 *
export const UserOrderByWithRelationInputEnumerable = core.extendInputType({
  type: "UserOrderByWithRelationInput",
  definition(t) {
    t.nullable.list.nullable.field("UserOrderByWithRelationInput", {
      type: UserOrderByWithRelationInput
    });
  }
});
 */
