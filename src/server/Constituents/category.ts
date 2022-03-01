import { core } from "nexus";

export const CategoryObject: core.NexusObjectTypeDef<"Category"> =
  core.objectType<"Category">({
    name: "Category",
    definition(t) {
      t.nullable.string("creatorId");
      t.DateTime("createdAt");
      t.nullable.DateTime("updatedAt");
      t.boolean("root");
      t.string("name");
      t.nullable.string("entryId");
    }
  });
