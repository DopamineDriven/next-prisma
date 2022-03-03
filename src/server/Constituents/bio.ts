import { core } from "nexus";
import {
  DateTimeFilter,
  DateTimeNullableFilter,
  StringFilter,
  StringNullableFilter
} from ".";

export const BioObjectType: core.NexusObjectTypeDef<"Bio"> =
  core.objectType<"Bio">({
    name: "Bio",
    definition(t) {
      t.string("headline");
      t.nullable.string("intro");
      t.nullable.string("body");
      t.nullable.string("status");
      t.DateTime("createdAt");
      t.nullable.DateTime("updatedAt");
    }
  });

export const BioWhereInput = core.inputObjectType({
  name: "BioWhereInput",
  definition(t) {
    t.list.nonNull.field("AND", { type: BioWhereInput });
    t.list.nonNull.field("NOT", { type: BioWhereInput });
    t.list.nonNull.field("OR", { type: BioWhereInput });
    t.field("headline", { type: StringFilter });
    t.nullable.field("intro", { type: StringNullableFilter });
    t.nullable.field("body", { type: StringNullableFilter });
    t.nullable.field("status", { type: StringNullableFilter });
    t.nullable.field("updatedAt", { type: DateTimeNullableFilter });
    t.field("createdAt", { type: DateTimeFilter });
  }
});
export const BioRelationFilter = core.inputObjectType({
  name: "BioRelationFilter",
  definition(t) {
    t.field("is", { type: BioWhereInput });
    t.field("isNot", { type: BioWhereInput });
  }
});

export const BioListRelationFilter = core.inputObjectType({
  name: "BioListRelationFilter",
  definition(t) {
    t.field("every", { type: BioWhereInput });
    t.field("some", { type: BioWhereInput });
    t.field("none", { type: BioWhereInput });
  }
});
