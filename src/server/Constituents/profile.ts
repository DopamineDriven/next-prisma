import {
  extendType,
  objectType,
  core,
  nonNull,
  stringArg,
  arg,
  list
} from "nexus";
import { buildOrderBy } from "./utils";
import { ObjectId } from "bson";
import {
  UserRelationFilter,
  StringFilter,
  StringNullableFilter,
  BioObjectType,
  DateTimeFilter,
  MediaItem,
  DateTimeNullableFilter,
  ProfileOrderByRelevanceFieldEnum,
  SortOrderEnum,
  UserOrderByWithRelationAndSearchRelevanceInput,
  EnumGenderNullableFilter,
  EnumPronounsNullableFilter,
  Gender,
  UserOrderByWithRelationInput,
  Pronouns,
  MediaItemListRelationFilter,
  MediaItemRelationFilter,
  BioRelationFilter
} from ".";

export const Profile: core.NexusObjectTypeDef<"Profile"> =
  objectType<"Profile">({
    name: "Profile",
    definition(t) {
      t.implements("Node");
      t.string("userId");
      t.nullable.field("bio", {
        type: BioObjectType,
        resolve(root) {
          return root.bio;
        }
      });
      t.field("memberSince", { type: "DateTime" });
      t.nullable.field("coverPhoto", { type: MediaItem });
      t.field("dob", {
        type: "Date",
        resolve(source) {
          return source.dob!;
        }
      });
      t.field("phoneNumber", {
        type: "PhoneNumber",
        resolve(source) {
          return source.phoneNumber!;
        }
      });
      t.field("gender", {
        type: "Gender",
        resolve(root) {
          return root.gender!;
        }
      });
      t.field("pronouns", {
        type: Pronouns,
        resolve(root) {
          return root.pronouns!;
        }
      });
      t.nullable.field("lastSeen", {
        type: "DateTime",
        resolve(root) {
          return root.lastSeen;
        }
      });
      t.nullable.string("occupation", {
        resolve(root) {
          return root.occupation;
        }
      });
      t.nullable.string("city", {
        resolve(root) {
          return root.city;
        }
      });
      t.nullable.string("country", {
        resolve(root) {
          return root.country;
        }
      });
      t.nullable.string("activityFeed");
      t.nullable.string("recentActivity", {
        resolve(root) {
          return root.recentActivity;
        }
      });
      t.field("user", {
        type: "User",
        nullable: true,

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
      });
    }
  });

export const ProfileOrderBy = buildOrderBy("Profile", [
  "memberSince"
]) as core.NexusInputObjectTypeDef<"ProfileOrderBy">;

export const ProfileOrderByArgs: core.NexusArgDef<"ProfileOrderBy"> =
  ProfileOrderBy.asArg({
    default: { memberSince: "asc" }
  });

export const ProfileQuery = extendType<"Query">({
  type: "Query",
  definition(t) {
    t.connectionField("listProfiles", {
      additionalArgs: {
        orderBy: nonNull(arg({ type: "SortOrderEnum" }))
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
      type: "Profile",
      async nodes(root, args, ctx, info) {
        const profiles = await ctx.prisma.profile.findMany({
          orderBy: { dob: args.orderBy },
          include: {
            user: true
          }
        });
        return profiles;
      },
      totalCount(_source, _args, ctx, info) {
        return {
          totalCount: info.fieldNodes.length
        }.totalCount;
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

export const ProfileMutation: core.NexusExtendTypeDef<"Mutation"> = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createProfile", {
      type: "Profile",
      args: {
        userId: stringArg(),
        email: nonNull(stringArg()),
        dob: stringArg(),
        phoneNumber: stringArg({
          description: "compliant with standard E164 formatting (+15559871234)"
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
    });
  }
});

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

export const ProfileOrderByWithRelationInput =
  core.inputObjectType<"ProfileOrderByWithRelationInput">({
    name: "ProfileOrderByWithRelationInput",
    definition(t) {
      t.nullable.field("id", { type: SortOrderEnum });
      t.nullable.field("userId", { type: SortOrderEnum });
      t.nullable.field("memberSince", { type: SortOrderEnum });
      t.nullable.field("gender", { type: SortOrderEnum });
      t.nullable.field("pronouns", { type: SortOrderEnum });
      t.nullable.field("lastSeen", { type: SortOrderEnum });
      t.nullable.field("dob", { type: SortOrderEnum });
      t.nullable.field("phoneNumber", { type: SortOrderEnum });
      t.nullable.field("occupation", { type: SortOrderEnum });
      t.nullable.field("city", { type: SortOrderEnum });
      t.nullable.field("country", { type: SortOrderEnum });
      t.nullable.field("activityFeed", { type: SortOrderEnum });
      t.nullable.field("recentActivity", { type: SortOrderEnum });
      t.nullable.field("user", { type: UserOrderByWithRelationInput });
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
      t.nonNull.field("id", { type: SortOrderEnum });
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
    t.field("is", { type: ProfileWhereInput });
    t.field("isNot", { type: ProfileWhereInput });
  }
});

export const ProfileWhereInput = core.inputObjectType({
  name: "ProfileWhereInput",
  definition(t) {
    t.list.nonNull.field("AND", { type: ProfileWhereInput });
    t.list.nonNull.field("NOT", { type: ProfileWhereInput });
    t.list.nonNull.field("OR", { type: ProfileWhereInput });
    t.field("activiyFeed", { type: StringNullableFilter });
    t.field("bio", { type: BioRelationFilter });
    t.field("city", { type: StringNullableFilter });
    t.field("country", { type: StringNullableFilter });
    t.field("coverPhoto", { type: MediaItemRelationFilter });
    t.field("dob", { type: StringNullableFilter });
    t.field("gender", { type: EnumGenderNullableFilter });
    t.field("id", { type: StringFilter });
    t.field("lastSeen", { type: DateTimeNullableFilter });
    t.field("memberSince", { type: DateTimeFilter });
    t.field("occupation", { type: StringNullableFilter });
    t.field("phoneNumber", { type: StringNullableFilter });
    t.field("pronouns", { type: EnumPronounsNullableFilter });
    t.field("recentActivity", { type: StringNullableFilter });
    t.field("user", { type: UserRelationFilter });
    t.field("userId", { type: StringNullableFilter });
  }
});
