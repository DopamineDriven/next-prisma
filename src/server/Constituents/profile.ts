import {
  extendType,
  objectType,
  core,
  nonNull,
  stringArg
} from "nexus";
import { buildOrderBy } from "./utils";
import { ObjectId } from "bson";
import {
  UserRelationFilter,
  StringFilter,
  StringNullableFilter,
  DateTimeFilter,
  DateTimeNullableFilter,
  ProfileOrderByRelevanceFieldEnum,
  SortOrderEnum,
  UserOrderByWithRelationAndSearchRelevanceInput,
  EnumGenderNullableFilter,
  EnumPronounsNullableFilter
} from ".";

export const Profile: core.NexusObjectTypeDef<"Profile"> =
  objectType<"Profile">({
    name: "Profile",
    definition(t) {
      t.implements("Node");
      t.nonNull.string("id");
      t.string("userId");
      t.field("memberSince", {type: "DateTime"})
      t.field("coverImage", {type: "MediaItem"});
      t.field("dob", { type: "Date" });
      t.field("phoneNumber", { type: "PhoneNumber" });
      t.field("user", {
        type: "User",
        async resolve(root, _args, ctx, _info) {
          const profileToUser = await ctx.prisma.profile
            .findFirst({
              where: {
                user: {
                  id: root.userId
                }
              }
            })
            .user();
          return profileToUser;
        }
      }) as core.FieldResolver<"Profile", "user"> | undefined;
    }
  });

export const ProfileOrderBy = buildOrderBy("Profile", [
  "memberSince"
]) as core.NexusInputObjectTypeDef<"ProfileOrderBy">;

export const ProfileOrderByArgs: core.NexusArgDef<"ProfileOrderBy"> =
  ProfileOrderBy.asArg({
    default: { memberSince: "asc" }
  });

export const ProfileQuery = extendType({
  type: "Viewer",
  definition(t) {
    t.connectionField("profiles", {
      type: "Profile",
      async nodes(root, args, ctx, info) {
        const profiles = await ctx.prisma.profile.findMany({
          orderBy: {
            memberSince: "asc"
          },
          include: {
            user: true
          }
        });
        return profiles;
      }
    });
  }
});


export const dateArg = (opts: core.SourceTypesConfigOptions) =>
  core.arg({ ...opts, type: "Date" }) as core.NexusArgDef<"Date">;
export const dateTimeArg = (opts: core.SourceTypesConfigOptions) =>
  core.arg({ ...opts, type: "DateTime" }) as core.NexusArgDef<"DateTime">;
/**
 *     headline: string;
    intro: string | null;
    body: string | null;
    status: string | null;
    createdAt: Date;
    updatedAt: Date | null;
 */
export const BioObjectType: core.NexusObjectTypeDef<"Bio"> =
  core.objectType<"Bio">({
    name: "Bio",
    definition(t) {
      t.nullable.string("intro");
      t.nullable.string("body");
      t.nullable.string("status");
      t.DateTime("createdAt");
      t.nullable.DateTime("updatedAt");
    }
  });

export const PorfileMutations: core.NexusExtendTypeDef<"Mutation"> = extendType(
  {
    type: "Mutation",
    definition(t) {
      t.field("createProfile", {
        type: "Profile",
        args: {
          userId: stringArg(),
          email: nonNull(stringArg()),
          bio: stringArg(),
          coverImage: stringArg(),
          dob: stringArg(),
          phoneNumber: stringArg({
            description:
              "compliant with standard E164 formatting (+15559871234)"
          })
        },
        async resolve(_root, args, ctx, _info) {
          const create = await ctx.prisma.profile.create({
            data: {
              id: new ObjectId().toHexString(),
              user: {
                connect: {
                  email: args.email
                }
              },
              bio: { set: { headline: "" } },
              coverPhoto: {
                // media item
              },
              // dob: new Date(args.).toISOString().split(/([T])/)[0],
              memberSince: new Date(1631333289),
              phoneNumber: args.phoneNumber
            },
            include: {
              user: true
            }
          });
          return create;
        }
      } as core.NexusOutputFieldConfig<"Mutation", "createProfile">) as
        | core.FieldResolver<"Mutation", "createProfile">
        | undefined;
    }
  }
);

// Input Types
export const ProfileOrderByRelevanceInput = core.inputObjectType({
  name: "ProfileOrderByRelevanceInput",
  definition(t) {
    t.nonNull.list.nonNull.field("fields", {
      type: ProfileOrderByRelevanceFieldEnum
    });
    t.nonNull.string("search");
    t.nonNull.field("sort", { type: SortOrderEnum });
  }
});

export const ProfileOrderByWithRelationAndSearchRelevanceInput =
  core.inputObjectType({
    name: "ProfileOrderByWithRelationAndSearchRelevanceInput",
    definition(t) {
      t.field("_relevance", { type: ProfileOrderByRelevanceInput });
      t.field("activiyFeed", { type: SortOrderEnum });
      t.field("bio", { type: SortOrderEnum });
      t.field("city", { type: SortOrderEnum });
      t.field("country", { type: SortOrderEnum });
      t.field("coverPhoto", { type: SortOrderEnum });
      t.field("dob", { type: SortOrderEnum });
      t.field("gender", { type: SortOrderEnum });
      t.field("id", { type: SortOrderEnum });
      t.field("lastSeen", { type: SortOrderEnum });
      t.field("memberSince", { type: SortOrderEnum });
      t.field("occupation", { type: SortOrderEnum });
      t.field("phoneNumber", { type: SortOrderEnum });
      t.field("pronouns", { type: SortOrderEnum });
      t.field("recentActivity", { type: SortOrderEnum });
      t.field("user", { type: UserOrderByWithRelationAndSearchRelevanceInput });
      t.field("userId", { type: SortOrderEnum });
    }
  });


  export const ProfileRelationFilter = core.inputObjectType({
    name: "ProfileRelationFilter",
    definition(t) {
      t.field("is", { type: ProfileWhereInput })
      t.field("isNot", { type: ProfileWhereInput })
    }
  });

  export const ProfileWhereInput = core.inputObjectType({
    name: "ProfileWhereInput",
    definition(t) {
      t.list.nonNull.field("AND", { type: ProfileWhereInput })
      t.list.nonNull.field("NOT", { type: ProfileWhereInput })
      t.list.nonNull.field("OR", { type: ProfileWhereInput })
      t.field("activiyFeed", { type: StringNullableFilter })
      t.field("bio", { type: StringNullableFilter })
      t.field("city", { type: StringNullableFilter })
      t.field("country", { type: StringNullableFilter })
      t.field("coverPhoto", { type: StringNullableFilter })
      t.field("dob", { type: StringNullableFilter })
      t.field("gender", { type: EnumGenderNullableFilter })
      t.field("id", { type: StringFilter })
      t.field("lastSeen", { type: DateTimeNullableFilter })
      t.field("memberSince", { type: DateTimeFilter })
      t.field("occupation", { type: StringNullableFilter })
      t.field("phoneNumber", { type: StringNullableFilter })
      t.field("pronouns", { type: EnumPronounsNullableFilter })
      t.field("recentActivity", { type: StringNullableFilter })
      t.field("user", { type: UserRelationFilter })
      t.field("userId", { type: StringNullableFilter })
    }
  });
