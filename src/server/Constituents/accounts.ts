import {
  extendType,
  objectType,
  stringArg,
  nonNull,
  core
} from "nexus";
import { buildOrderBy } from "./utils";
import { SortOrderEnum, UserRelationFilter, StringFilter, StringNullableFilter, IntNullableFilter } from "."

export const Account: core.NexusObjectTypeDef<"Account"> = objectType({
  name: "Account",
  definition(t) {
    t.implements("Node");
    t.nonNull.string("id");
    t.string("userId");
    t.string("type");
    t.string("provider");
    t.string("providerAccountId");
    t.nullable.string("refresh_token");
    t.nullable.string("access_token");
    t.nullable.int("expires_at");
    t.nullable.string("token_type");
    t.nullable.string("scope");
    t.nullable.string("id_token");
    t.nullable.string("session_state");
    t.nullable.string("oauth_token_secret");
    t.nullable.string("oauth_token");
    t.field("user", {
      type: "User",
      async resolve(parent, args, ctx, info) {
        const user = await ctx.prisma.account
          .findFirst({
            where: {
              user: { id: String(parent.userId) }
            },
            include: {
              user: true
            }
          })
          .user(() =>
            ctx.prisma.profile
              .findUnique({
                where: { userId: String(parent.userId) }
              })
              .user()
              .profile()
          );
        return user;
      }
    });
  }
});

export const AllAccountsOrderBy: core.NexusInputObjectTypeDef<"AccountOrderBy"> =
  buildOrderBy("Account", ["provider", "providerAccountId"]);
export const AccountOrderByArg: core.NexusArgDef<"AccountOrderBy"> =
  AllAccountsOrderBy.asArg({
    default: { provider: "asc" }
  });

export const AccountQuery: core.NexusExtendTypeDef<"Viewer"> = extendType({
  type: "Viewer",
  definition(t) {
    t.connectionField("getUserByAccount", {
      type: "Account",
      inheritAdditionalArgs: true,
      additionalArgs: {
        id: nonNull(stringArg()),
        provider: nonNull(stringArg()),
        providerAccountId: nonNull(stringArg())
      },
      async nodes(_root, args, ctx, _info) {
        return await ctx.prisma.account
          .findUnique({
            where: {
              id: args.id,
              provider_providerAccountId: {
                provider: args.provider,
                providerAccountId: args.providerAccountId
              }
            },
            include: {
              user: true
            }
          })
          .user()
          .accounts();
      }
    });
  }
});

// Input Types

export const AccountOrderByRelationAggregateInput = core.inputObjectType({
  name: "AccountOrderByRelationAggregateInput",
  definition(t) {
    t.field("_count", { type: SortOrderEnum })
  }
});

const AccountWhereInput = core.inputObjectType({
  name: "AccountWhereInput",
  definition(t) {
    t.list.nonNull.field("AND", { type: AccountWhereInput })
    t.list.nonNull.field("NOT", { type: AccountWhereInput })
    t.list.nonNull.field("OR", { type: AccountWhereInput })
    t.field("access_token", { type: StringNullableFilter })
    t.field("expires_at", { type: IntNullableFilter })
    t.field("id", { type: StringFilter })
    t.field("id_token", { type: StringNullableFilter })
    t.field("provider", { type: StringFilter })
    t.field("providerAccountId", { type: StringFilter })
    t.field("refresh_token", { type: StringNullableFilter })
    t.field("scope", { type: StringNullableFilter })
    t.field("session_state", { type: StringNullableFilter })
    t.field("token_type", { type: StringNullableFilter })
    t.field("type", { type: StringFilter })
    t.field("user", { type: UserRelationFilter })
    t.field("userId", { type: StringFilter })
  }
});

export const AccountListRelationFilter = core.inputObjectType({
  name: "AccountListRelationFilter",
  definition(t) {
    t.field("every", { type: AccountWhereInput })
    t.field("none", { type: AccountWhereInput })
    t.field("some", { type: AccountWhereInput })
  }
});
