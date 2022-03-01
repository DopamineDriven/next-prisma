import { core } from 'nexus';
import { QueryModeEnum, Gender, Pronouns, Role, UserStatus, MediaItemDestination, Reaction } from ".";


export const BoolFilter = core.inputObjectType({
  name: "BoolFilter",
  definition(t) {
    t.boolean("equals")
    t.field("not", { type: NestedBoolFilter })
  }
});

export const DateTimeFilter = core.inputObjectType({
  name: "DateTimeFilter",
  definition(t) {
    t.field("equals", { type: "DateTime" })
    t.field("gt", { type: "DateTime" })
    t.field("gte", { type: "DateTime" })
    t.list.nonNull.field("in", { type: "DateTime" })
    t.field("lt", { type: "DateTime" })
    t.field("lte", { type: "DateTime" })
    t.field("not", { type: NestedDateTimeFilter })
    t.list.nonNull.field("notIn", { type: "DateTime" })
  }
});

export const DateTimeNullableFilter = core.inputObjectType({
  name: "DateTimeNullableFilter",
  definition(t) {
    t.field("equals", { type: "DateTime" })
    t.field("gt", { type: "DateTime" })
    t.field("gte", { type: "DateTime" })
    t.list.nonNull.field("in", { type: "DateTime" })
    t.field("lt", { type: "DateTime" })
    t.field("lte", { type: "DateTime" })
    t.field("not", { type: NestedDateTimeNullableFilter })
    t.list.nonNull.field("notIn", { type: "DateTime" })
  }
});

export const EnumCommentReactionsNullableListFilter = core.inputObjectType({
  name: "EnumCommentReactionsNullableListFilter",
  definition(t) {
    t.list.nonNull.field("equals", { type: Reaction })
    t.field("has", { type: Reaction })
    t.list.nonNull.field("hasEvery", { type: Reaction })
    t.list.nonNull.field("hasSome", { type: Reaction })
    t.boolean("isEmpty")
  }
});

export const EnumGenderNullableFilter = core.inputObjectType({
  name: "EnumGenderNullableFilter",
  definition(t) {
    t.field("equals", { type: Gender })
    t.list.nonNull.field("in", { type: Gender })
    t.field("not", { type: NestedEnumGenderNullableFilter })
    t.list.nonNull.field("notIn", { type: Gender })
  }
});

export const EnumPronounsNullableFilter = core.inputObjectType({
  name: "EnumPronounsNullableFilter",
  definition(t) {
    t.field("equals", { type: Pronouns })
    t.list.nonNull.field("in", { type: Pronouns })
    t.field("not", { type: NestedEnumPronounsNullableFilter })
    t.list.nonNull.field("notIn", { type: Pronouns })
  }
});

export const EnumRoleNullableFilter = core.inputObjectType({
  name: "EnumRoleNullableFilter",
  definition(t) {
    t.field("equals", { type: Role })
    t.list.nonNull.field("in", { type: Role })
    t.field("not", { type: NestedEnumRoleNullableFilter })
    t.list.nonNull.field("notIn", { type: Role })
  }
});

export const EnumUserStatusNullableFilter = core.inputObjectType({
  name: "EnumUserStatusNullableFilter",
  definition(t) {
    t.field("equals", { type: UserStatus })
    t.list.nonNull.field("in", { type: UserStatus })
    t.field("not", { type: NestedEnumUserStatusNullableFilter })
    t.list.nonNull.field("notIn", { type: UserStatus })
  }
});

export const FloatNullableFilter = core.inputObjectType({
  name: "FloatNullableFilter",
  definition(t) {
    t.float("equals")
    t.float("gt")
    t.float("gte")
    t.list.nonNull.float("in")
    t.float("lt")
    t.float("lte")
    t.field("not", { type: NestedFloatNullableFilter })
    t.list.nonNull.float("notIn")
  }
});

export const IntNullableFilter = core.inputObjectType({
  name: "IntNullableFilter",
  definition(t) {
    t.int("equals")
    t.int("gt")
    t.int("gte")
    t.list.nonNull.int("in")
    t.int("lt")
    t.int("lte")
    t.field("not", { type: NestedIntNullableFilter })
    t.list.nonNull.int("notIn")
  }
});

export const NestedBoolFilter = core.inputObjectType({
  name: "NestedBoolFilter",
  definition(t) {
    t.boolean("equals")
    t.field("not", { type: NestedBoolFilter })
  }
});

export const NestedDateTimeFilter = core.inputObjectType({
  name: "NestedDateTimeFilter",
  definition(t) {
    t.field("equals", { type: "DateTime" })
    t.field("gt", { type: "DateTime" })
    t.field("gte", { type: "DateTime" })
    t.list.nonNull.field("in", { type: "DateTime" })
    t.field("lt", { type: "DateTime" })
    t.field("lte", { type: "DateTime" })
    t.field("not", { type: NestedDateTimeFilter })
    t.list.nonNull.field("notIn", { type: "DateTime" })
  }
});

export const NestedDateTimeNullableFilter = core.inputObjectType({
  name: "NestedDateTimeNullableFilter",
  definition(t) {
    t.field("equals", { type: "DateTime" })
    t.field("gt", { type: "DateTime" })
    t.field("gte", { type: "DateTime" })
    t.list.nonNull.field("in", { type: "DateTime" })
    t.field("lt", { type: "DateTime" })
    t.field("lte", { type: "DateTime" })
    t.field("not", { type: NestedDateTimeNullableFilter })
    t.list.nonNull.field("notIn", { type: "DateTime" })
  }
});

export const NestedEnumGenderNullableFilter = core.inputObjectType({
  name: "NestedEnumGenderNullableFilter",
  definition(t) {
    t.field("equals", { type: Gender })
    t.list.nonNull.field("in", { type: Gender })
    t.field("not", { type: NestedEnumGenderNullableFilter })
    t.list.nonNull.field("notIn", { type: Gender })
  }
});

export const NestedEnumPronounsNullableFilter = core.inputObjectType({
  name: "NestedEnumPronounsNullableFilter",
  definition(t) {
    t.field("equals", { type: Pronouns })
    t.list.nonNull.field("in", { type: Pronouns })
    t.field("not", { type: NestedEnumPronounsNullableFilter })
    t.list.nonNull.field("notIn", { type: Pronouns })
  }
});

export const NestedEnumRoleNullableFilter = core.inputObjectType({
  name: "NestedEnumRoleNullableFilter",
  definition(t) {
    t.field("equals", { type: Role })
    t.list.nonNull.field("in", { type: Role })
    t.field("not", { type: NestedEnumRoleNullableFilter })
    t.list.nonNull.field("notIn", { type: Role })
  }
});

export const NestedEnumUserStatusNullableFilter = core.inputObjectType({
  name: "NestedEnumUserStatusNullableFilter",
  definition(t) {
    t.field("equals", { type: UserStatus })
    t.list.nonNull.field("in", { type: UserStatus })
    t.field("not", { type: NestedEnumUserStatusNullableFilter })
    t.list.nonNull.field("notIn", { type: UserStatus })
  }
});

export const NestedFloatNullableFilter = core.inputObjectType({
  name: "NestedFloatNullableFilter",
  definition(t) {
    t.float("equals")
    t.float("gt")
    t.float("gte")
    t.list.nonNull.float("in")
    t.float("lt")
    t.float("lte")
    t.field("not", { type: NestedFloatNullableFilter })
    t.list.nonNull.float("notIn")
  }
});

export const NestedIntNullableFilter = core.inputObjectType({
  name: "NestedIntNullableFilter",
  definition(t) {
    t.int("equals")
    t.int("gt")
    t.int("gte")
    t.list.nonNull.int("in")
    t.int("lt")
    t.int("lte")
    t.field("not", { type: NestedIntNullableFilter })
    t.list.nonNull.int("notIn")
  }
});

export const NestedStringFilter = core.inputObjectType({
  name: "NestedStringFilter",
  definition(t) {
    t.string("contains")
    t.string("endsWith")
    t.string("equals")
    t.string("gt")
    t.string("gte")
    t.list.nonNull.string("in")
    t.string("lt")
    t.string("lte")
    t.field("not", { type: NestedStringFilter })
    t.list.nonNull.string("notIn")
    t.string("search")
    t.string("startsWith")
  }
});

export const NestedStringNullableFilter = core.inputObjectType({
  name: "NestedStringNullableFilter",
  definition(t) {
    t.string("contains")
    t.string("endsWith")
    t.string("equals")
    t.string("gt")
    t.string("gte")
    t.list.nonNull.string("in")
    t.string("lt")
    t.string("lte")
    t.field("not", { type: NestedStringNullableFilter })
    t.list.nonNull.string("notIn")
    t.string("search")
    t.string("startsWith")
  }
});

export const StringFilter = core.inputObjectType({
  name: "StringFilter",
  definition(t) {
    t.string("contains")
    t.string("endsWith")
    t.string("equals")
    t.string("gt")
    t.string("gte")
    t.list.nonNull.string("in")
    t.string("lt")
    t.string("lte")
    t.field("mode", { type: QueryModeEnum })
    t.field("not", { type: NestedStringFilter })
    t.list.nonNull.string("notIn")
    t.string("search")
    t.string("startsWith")
  }
});

export const StringNullableFilter = core.inputObjectType({
  name: "StringNullableFilter",
  definition(t) {
    t.string("contains")
    t.string("endsWith")
    t.string("equals")
    t.string("gt")
    t.string("gte")
    t.list.nonNull.string("in")
    t.string("lt")
    t.string("lte")
    t.field("mode", { type: QueryModeEnum })
    t.field("not", { type: NestedStringNullableFilter })
    t.list.nonNull.string("notIn")
    t.string("search")
    t.string("startsWith")
  }
});

export const StringNullableListFilter = core.inputObjectType({
  name: "StringNullableListFilter",
  definition(t) {
    t.list.nonNull.string("equals")
    t.string("has")
    t.list.nonNull.string("hasEvery")
    t.list.nonNull.string("hasSome")
    t.boolean("isEmpty")
  }
});
