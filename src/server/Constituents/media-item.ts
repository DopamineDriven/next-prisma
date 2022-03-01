import { core } from "nexus";
import { MediaItemDestination, MimeType } from ".";
import {
  DateTimeNullableFilter,
  DateTimeFilter,
  StringFilter,
  StringNullableFilter,
  IntNullableFilter,
  FloatNullableFilter,
  UserRelationFilter
} from ".";

export const MediaItem: core.NexusObjectTypeDef<"MediaItem"> = core.objectType({
  name: "MediaItem",
  definition(t) {
    t.nullable.string("mediaItemId");
    t.DateTime("uploadedAt");
    t.nullable.DateTime("updatedAt");
    t.nullable.string("filename");
    t.nullable.string("size");
    t.nullable.field("filetype", { type: MimeType });
    t.nullable.field("destination", { type: MediaItemDestination });
    t.nullable.DateTime("fileLastModified");
    t.nonNull.float("width");
    t.nonNull.float("height");
    t.nonNull.int("quality");
    t.nullable.string("src");
    t.nullable.string("srcSet");
    t.nullable.string("ariaLabel");
    t.nullable.string("caption");
    t.nullable.string("title");
  }
});

export const EnumMediaItemDestinationNullableFilter = core.inputObjectType({
  name: "EnumMediaItemDestinationNullableFilter",
  definition(t) {
    t.field("equals", { type: MediaItemDestination });
    t.list.nonNull.field("in", { type: MediaItemDestination });
    t.field("not", { type: NestedEnumMediaItemDestinationNullableFilter });
    t.list.nonNull.field("notIn", { type: MediaItemDestination });
  }
});

export const NestedEnumMediaItemDestinationNullableFilter =
  core.inputObjectType({
    name: "NestedEnumMediaItemDestinationNullableFilter",
    definition(t) {
      t.field("equals", { type: MediaItemDestination });
      t.list.nonNull.field("in", { type: MediaItemDestination });
      t.field("not", { type: NestedEnumMediaItemDestinationNullableFilter });
      t.list.nonNull.field("notIn", { type: MediaItemDestination });
    }
  });

  export const NestedEnumMimeTypeNullableFilter = core.inputObjectType({
    name: "NestedEnumMimeTypeNullableFilter",
    definition(t) {
      t.field("equals", { type: MimeType })
      t.list.nonNull.field("in", { type: MimeType })
      t.field("not", { type: NestedEnumMimeTypeNullableFilter })
      t.list.nonNull.field("notIn", { type: MimeType })
    }
  });
  export const EnumMimeTypeNullableFilter = core.inputObjectType({
    name: "EnumMimeTypeNullableFilter",
    definition(t) {
      t.field("equals", { type: MimeType })
      t.list.nonNull.field("in", { type: MimeType })
      t.field("not", { type: NestedEnumMimeTypeNullableFilter })
      t.list.nonNull.field("notIn", { type: MimeType })
    }
  });
export const MediaItemWhereInput = core.inputObjectType({
  name: "MediaItemWhereInput",
  definition(t) {
    t.list.nonNull.field("AND", { type: MediaItemWhereInput });
    t.list.nonNull.field("NOT", { type: MediaItemWhereInput });
    t.list.nonNull.field("OR", { type: MediaItemWhereInput });
    t.field("ariaLabel", { type: StringNullableFilter });
    t.field("caption", { type: StringNullableFilter });
    t.field("destination", { type: EnumMediaItemDestinationNullableFilter });
    t.field("fileLastModified", { type: DateTimeNullableFilter });
    t.field("height", { type: FloatNullableFilter });
    t.nullable.field("mediaItemId", { type: StringFilter });
    t.field("filename", { type: StringNullableFilter });
    t.field("quality", { type: IntNullableFilter });
    t.field("size", { type: StringNullableFilter });
    t.field("src", { type: StringNullableFilter });
    t.field("srcSet", { type: StringNullableFilter });
    t.field("title", { type: StringNullableFilter });
    t.field("filetype", { type: EnumMimeTypeNullableFilter });
    t.field("updatedAt", { type: DateTimeNullableFilter });
    t.field("uploadedAt", { type: DateTimeFilter });
    t.field("user", { type: UserRelationFilter });
    t.field("userId", { type: StringNullableFilter });
    t.field("width", { type: FloatNullableFilter });
  }
});

export const MediaItemInput = core.inputObjectType({
  name: "MediaItemInput",
  definition(t) {
    t.string("ariaLabel")
    t.string("caption")
    t.field("destination", { type: MediaItemDestination })
    t.field("fileLastModified", { type: "DateTime" })
    t.float("height")
    t.nullable.string("mediaItemId")
    t.string("filename")
    t.int("quality")
    t.string("size")
    t.string("src")
    t.string("srcSet")
    t.string("title")
    t.field("filetype", { type: MimeType })
    t.field("updatedAt", { type: "DateTime" })
    t.field("uploadedAt", { type: "DateTime" })
    t.float("width")
  }
});
export const MediaItemRelationFilter = core.inputObjectType({
  name: "MediaItemRelationFilter",
  definition(t) {
    t.field("is", { type: MediaItemWhereInput })
    t.field("isNot", { type: MediaItemWhereInput })
  }
});
