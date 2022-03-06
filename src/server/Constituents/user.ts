import { Prisma } from "@prisma/client";
import { core, stringArg } from "nexus";
import {
  Role,
  EntryListRelationFilter,
  SessionListRelationFilter,
  CommentListRelationFilter,
  MediaItem,
  PaginationArgsInput,
  EnumUserStatusNullableFilter,
  EnumRoleNullableFilter,
  ProfileRelationFilter,
  UserScalarFieldsEnum,
  DateTimeFilter,
  DateTimeNullableFilter,
  StringFilter,
  StringNullableFilter,
  SortOrderEnum,
  AccountListRelationFilter,
  UserOrderByRelevanceFieldEnum,
  CommentOrderByRelationAggregateInput,
  EntryOrderByRelationAggregateInput,
  ProfileOrderByWithRelationAndSearchRelevanceInput,
  AccountOrderByRelationAggregateInput,
  SessionOrderByRelationAggregateInput,
  MediaItemWhereInput,
  MediaItemInput,
  MediaItemRelationFilter,
  UserStatus
} from ".";

export const User: core.NexusObjectTypeDef<"User"> = core.objectType({
  name: "User",

  definition(t: core.ObjectDefinitionBlock<"User">) {
    t.implements("Node");
    t.nonNull.field("_count", {
      type: UserCount,
      resolve: async (source, _, ctx, info) => {
        return await ctx.prisma.user
          .findFirst({
            cursor: { id: source.id },
            where: { id: source.id },
            include: {
              accounts: true,
              entries: true,
              comments: true,
              profile: true,
              sessions: true,
              _count: true
            }
          })
          .then(data => {
            return data?._count as unknown as Prisma.UserCountOutputType;
          });
      }
    });
    t.string("email");
    t.nullable.string("image");
    t.nullable.string("name", {
      resolve(root) {
        return root.name;
      }
    });
    t.nullable.DateTime("emailVerified", {
      resolve(source, args, ctx, info) {
        return source.emailVerified as Date | null;
      }
    });
    t.nullable.field("imageMeta", {
      type: MediaItem,
      resolve(user) {
        return user.imageMeta;
      }
    });

    t.field("role", { type: Role });
    t.nullable.field("status", { type: UserStatus });
    t.field("profile", {
      type: "Profile",
      async resolve(root, args, ctx, _info) {
        const userToProfile = await ctx.prisma.user
          .findFirst({
            where: {
              profile: {
                userId: String(root.id)
              }
            }
          })
          .profile(args);
        return userToProfile;
      }
    }) as core.FieldResolver<"User", "profile"> | undefined;
    t.connectionField<"accounts">("accounts", {
      type: "Account",
      inheritAdditionalArgs: true,
      async nodes(root, args, ctx, _info) {
        const accounts = await ctx.prisma.user
          .findFirst({
            cursor: { id: root.id }
          })
          .accounts();
        return accounts;
      }
    });
    t.connectionField<"comments">("comments", {
      type: "Comment",
      inheritAdditionalArgs: true,
      async nodes(root, args, ctx, _info) {
        const comments = await ctx.prisma.user
          .findFirst({
            cursor: { id: root.id },
            where: { id: root.id }
          })
          .comments();
        return comments;
      }
    });
    t.connectionField("entries", {
      type: "Entry",
      async nodes(root, _args, ctx, _info) {
        const entries = await ctx.prisma.user
          .findFirst({
            where: {
              entries: { every: { authorId: root.id } }
            }
          })
          .entries();
        return entries;
      }
    });
    t.connectionField("sessions", {
      type: "Session",
      async nodes(root, _args, ctx, _info) {
        const sessions = await ctx.prisma.user
          .findFirst({
            cursor: { id: root.id },
            where: { id: root.id }
          })
          .sessions();

        return sessions;
      }
    });
  }
});

export const UserExtended: core.NexusExtendTypeDef<"Query"> =
  core.extendType<"Query">({
    type: "Query",
    definition(t) {
      t.field("userById", {
        type: "User",
        args: {
          id: core.nonNull(core.stringArg()) as core.NexusNonNullDef<"String">
        },
        resolve(_root, args, ctx, _info) {
          return ctx.prisma.user.findUnique({
            where: { id: args.id },
            include: {
              accounts: true,
              entries: true,
              sessions: true,
              comments: true,
              _count: true,
              profile: true
            }
          });
        }
      });

      t.field("userByEmail", {
        type: "User",
        args: {
          email: core.nonNull(
            core.stringArg()
          ) as core.NexusNonNullDef<"String">
        },
        resolve(_root, args, ctx, _info) {
          return ctx.prisma.user.findUnique({
            where: { email: args.email },
            include: {
              accounts: true,
              entries: true,
              sessions: true
            }
          });
        }
      });

      // t.field("allUsers", {
      //   type: "UserConnection",
      //   args: {
      //     params: core.arg({ type: FindManyUsersPaginatedInput })
      //   },
      // resolve: async (_root, args, ctx, _info) => {
      //     return await ctx.user?.findManyUsersPaginated(args.params)
      //   }
      // });
      t.connectionField("userAccount", {
        type: "Account",
        async nodes(root, args, ctx, info) {
          // const idToBase = base64Encode(String(root.id))
          return await ctx.prisma.account.findMany({
            include: { user: true }
          });
        }
      });
      t.connectionField("session", {
        type: "Session",
        nodes(root, args, ctx, info) {
          return ctx.prisma.session.findMany({
            include: { user: true }
          });
        }
      });
      t.connectionField("entries", {
        type: "Entry",
        nodes: (root, args, ctx, info) => {
          return ctx.prisma.entry.findMany({ include: { author: true } });
        }
      });
    }
  });

export class UserResolver {
  constructor(public queryExtended: core.NexusExtendTypeDef<"Query">) {}
  async findUserByRelayId() {}
}
/**
 *     // t.field<"accounts">("accounts", {
    //   type: "AccountConnection",
    //   args: {
    //     params: FindManyUsersPaginatedInput.asArg({
    //       default: {
    //         pagination: { first: 10 },
    //         orderBy: [
    //           { _relevance: { fields: ["email"], search: "", sort: "asc" } }
    //         ]
    //       }
    //     }) as unknown as core.NexusInputObjectTypeDef<"FindManyUsersPaginatedInput">
    //   },
    //  async resolve({}, args=FindManyUsersPaginatedInput.asArg(), ctx ) {
    //     const accounts = await ctx.user?.findManyUsersPaginated({
    //       params: {
    //         after: args.params.after,
    //         before: args.params.before,
    //         first: args.params.first,
    //         last: args.params.last
    //       },
    //       orderBy: args.params.orderBy,
    //       where: args.params.where
    //     });
    //     return accounts;
    //   }
    // } as unknown as core.connectionPluginCore.ConnectionFieldConfig<"User", "accounts">);
 */

export const UserCount: core.NexusObjectTypeDef<"UserCount"> =
  core.objectType<"UserCount">({
    name: "UserCount",
    definition(t) {
      t.nonNull.int("accounts");
      t.nonNull.int("comments");
      t.nonNull.int("entries");
      t.nonNull.int("sessions");
    }
  });

// Input Types

export const UserWhereUniqueInput = core.inputObjectType({
  name: "UserWhereUniqueInput",
  definition(t) {
    t.string("email");
    t.string("id");
  }
});

export const UserOrderByRelevanceInput = core.inputObjectType({
  name: "UserOrderByRelevanceInput",
  definition(t) {
    t.nonNull.list.nonNull.field("fields", {
      type: UserOrderByRelevanceFieldEnum
    });
    t.nonNull.string("search");
    t.nonNull.field("sort", { type: SortOrderEnum });
  }
});

export const UserOrderByWithRelationAndSearchRelevanceInput =
  core.inputObjectType({
    name: "UserOrderByWithRelationAndSearchRelevanceInput",
    definition(t) {
      t.field("_relevance", { type: UserOrderByRelevanceInput });
      t.field("accounts", { type: AccountOrderByRelationAggregateInput });
      t.field("comments", { type: CommentOrderByRelationAggregateInput });
      t.field("createdAt", { type: SortOrderEnum });
      t.field("email", { type: SortOrderEnum });
      t.field("emailVerified", { type: SortOrderEnum });
      t.field("entries", { type: EntryOrderByRelationAggregateInput });
      t.field("name", { type: SortOrderEnum });
      t.field("id", { type: SortOrderEnum });
      t.field("image", { type: SortOrderEnum });
      t.field("profile", {
        type: ProfileOrderByWithRelationAndSearchRelevanceInput
      });
      t.field("role", { type: SortOrderEnum });
      t.field("sessions", { type: SessionOrderByRelationAggregateInput });
      t.field("status", { type: SortOrderEnum });
      t.field("updatedAt", { type: SortOrderEnum });
    }
  });

export const FindManyUsersPaginatedInput =
  core.inputObjectType<"FindManyUsersPaginatedInput">({
    name: "FindManyUsersPaginatedInput",
    definition(t) {
      t.field("cursor", { type: UserWhereUniqueInput });
      t.list.nonNull.field("distinct", { type: UserScalarFieldsEnum });
      t.nonNull.list.nonNull.field("orderBy", {
        type: UserOrderByWithRelationAndSearchRelevanceInput
      });
      t.field("pagination", {
        type: PaginationArgsInput,
        default: { after: null, before: null, first: 10, last: null }
      });
      t.int("skip");
      t.int("take");
      t.field("where", { type: UserWhereInput });
    }
  });

export const UserWhereInput = core.inputObjectType({
  name: "UserWhereInput",
  definition(t) {
    t.list.nonNull.field("AND", { type: UserWhereInput });
    t.list.nonNull.field("NOT", { type: UserWhereInput });
    t.list.nonNull.field("OR", { type: UserWhereInput });
    t.field("accounts", { type: AccountListRelationFilter });
    t.field("comments", { type: CommentListRelationFilter });
    t.field("createdAt", { type: DateTimeFilter });
    t.field("email", { type: StringFilter });
    t.field("emailVerified", { type: DateTimeNullableFilter });
    t.field("entries", { type: EntryListRelationFilter });
    t.field("name", { type: StringNullableFilter });
    t.field("id", { type: StringFilter });
    t.field("image", { type: StringNullableFilter });
    t.field("imageMeta", { type: MediaItemRelationFilter });
    t.field("profile", { type: ProfileRelationFilter });
    t.field("role", { type: EnumRoleNullableFilter });
    t.field("sessions", { type: SessionListRelationFilter });
    t.field("status", { type: EnumUserStatusNullableFilter });
    t.field("updatedAt", { type: DateTimeNullableFilter });
  }
});

export const UserRelationFilter = core.inputObjectType({
  name: "UserRelationFilter",
  definition(t) {
    t.field("is", { type: UserWhereInput });
    t.field("isNot", { type: UserWhereInput });
  }
});
