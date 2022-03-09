import { Prisma } from "@prisma/client";
import { core } from "nexus";
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
  MediaItemRelationFilter,
  ProfileOrderByWithRelationInput,
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
    t.nullable.field("email", {
      type: "String",
      resolve(root) {
        return root.email ? root.email : null;
      }
    });
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
                userId: root.id
              }
            }
          })
          .profile();
        return userToProfile;
      }
    }) as core.FieldResolver<"User", "profile"> | undefined;
    t.connectionField<"accounts">("accounts", {
      type: "Account",
      inheritAdditionalArgs: true,
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
      async nodes(root, args, ctx, _info) {
        const accounts = await ctx.prisma.user
          .findFirst({
            cursor: { id: root.id }
          })
          .accounts({ take: args.first ? args.first : 10 });
        return accounts;
      },
      totalCount(_source, _args, ctx, info) {
        return {
          totalCount: info.fieldNodes.length
        }.totalCount;
      }
    });
    t.connectionField<"comments">("comments", {
      type: "Comment",
      inheritAdditionalArgs: true,
      extendConnection(t) {
        t.nonNull.field("totalCount", {
          nullable: false,
          type: "Int",
          resolve: (source, args, ctx) => {
            const totalCount: number | 0 = source?.edges?.length
              ? source.edges.length
              : source.nodes?.length
              ? source.nodes.length
              : 0;
            return { totalCount: totalCount }.totalCount;
          }
        });
      },
      async nodes(root, args, ctx, _info) {
        const comments = await ctx.prisma.user
          .findFirst({
            cursor: { id: root.id },
            where: { id: root.id }
          })
          .comments({ take: args.first ? args.first : 10 });
        return comments;
      },
      totalCount(source, args, ctx, info) {
        return this.totalCount ? this.totalCount(source, args, ctx, info) : 0;
      }
    });
    t.connectionField("entries", {
      type: "Entry",
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
      async nodes(root, args, ctx, _info) {
        const entries = await ctx.prisma.user
          .findFirst({
            where: {
              entries: { every: { authorId: root.id } }
            }
          })
          .entries({ take: args.first ? args.first : 10 });
        return entries;
      },
      totalCount(_source, _args, ctx, info) {
        return {
          totalCount: info.fieldNodes.length
        }.totalCount;
      }
    });
    t.connectionField("sessions", {
      type: "Session",
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
      async nodes(root, args, ctx, _info) {
        const sessions = await ctx.prisma.user
          .findFirst({
            select: { sessions: true },
            cursor: { id: root.id },
            where: { id: root.id }
          })
          .sessions({
            take: args.first ? args.first : 10
          });
        // TODO IMPORTANT
        // or like dis with globalid: .sessions({cursor: {id: toGlobalId("Session", args!.after!)}, take: args.first});
        return sessions;
      },
      totalCount(_source, _args, ctx, info) {
        return {
          totalCount: info.fieldNodes.length
        }.totalCount;
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
        extendConnection(t) {
          t.nonNull.int("totalCount", {
            resolve(source, args, ctx, info) {
              return source.edges?.length
                ? source.edges.length
                : source.nodes?.length
                ? source.nodes.length
                : 0;
            }
          });
        },
        async cursorFromNode(
          node,
          { first, last, before, after },
          ctx,
          info,
          { index, nodes }
        ) {
          if (last && !before) {
            const totalcount = nodes.length;
            return `${node?.id}:${totalcount - last + index + 1}`;
          }
          return core.connectionPlugin.defaultCursorFromNode(
            node,
            { first, last, before, after },
            ctx,
            info,
            { index, nodes }
          );
        },
        async nodes(root, args, ctx, info) {
          // const idToBase = base64Encode(String(root.id))
          return await ctx.prisma.account
            .findMany({
              include: { user: true },
              take: args?.first ? args.first : 10
            })
            .then(data => data);
        },
        totalCount(_source, _args, ctx, info) {
          const count = (): any =>
            this.totalCount ? this.totalCount({}, {}, ctx, info) : 0;
          return {
            totalCount: count()
          }.totalCount;
        }
      });
      t.connectionField("session", {
        type: "Session",
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
        nodes(root, args, ctx, info) {
          return ctx.prisma.session.findMany({
            include: { user: true },
            take: args.first ? args.first : 10
          });
        },
        totalCount(_source, _args, ctx, info) {
          return {
            totalCount: info.fieldNodes.length
          }.totalCount;
        }
      });
      t.connectionField("entries", {
        type: "Entry",
        extendConnection(t) {
          t.nonNull.field("totalCount", {
            nullable: false,
            type: "Int",
            resolve: (source, args, ctx, info) => {
              const totalCount: number | 0 = source?.edges?.length
                ? source.edges.length
                : 0;
              return { totalCount: totalCount }.totalCount;
            }
          });
        },
        nodes: (root, args, ctx, info) => {
          return ctx.prisma.entry.findMany({
            include: { author: true },
            take: args.first ? args.first : 10
          });
        },
        totalCount(_source, _args, ctx, info) {
          return {
            totalCount: info.fieldNodes.length
          }.totalCount;
        }
      });
    }
  });

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

/**UserOrderByWithRelationInput
 *     id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    entries?: EntryOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
 */

export const UserOrderByWithRelationInput =
  core.inputObjectType<"UserOrderByWithRelationInput">({
    name: "UserOrderByWithRelationInput",
    definition(t) {
      t.nullable.field("id", { type: SortOrderEnum });
      t.nullable.field("name", { type: SortOrderEnum });
      t.nullable.field("email", { type: SortOrderEnum });
      t.nullable.field("image", { type: SortOrderEnum });
      t.nullable.field("role", { type: SortOrderEnum });
      t.nullable.field("status", { type: SortOrderEnum });
      t.nullable.field("createdAt", { type: SortOrderEnum });
      t.nullable.field("updatedAt", { type: SortOrderEnum });
      t.nullable.field("emailVerified", { type: SortOrderEnum });
      t.nullable.field("profile", { type: ProfileOrderByWithRelationInput });
      t.nullable.field("accounts", {
        type: AccountOrderByRelationAggregateInput
      });
      t.nullable.field("sessions", {
        type: SessionOrderByRelationAggregateInput
      });
      t.nullable.field("entries", { type: EntryOrderByRelationAggregateInput });
      t.nullable.field("comments", {
        type: CommentOrderByRelationAggregateInput
      });
    }
  });
export const UserOrderByWithRelationInputEnumerable = core.extendInputType({
  type: "UserOrderByWithRelationInput",
  definition(t) {
    t.nullable.list.nullable.field("UserOrderByWithRelationInput", {
      type: UserOrderByWithRelationInput
    });
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
