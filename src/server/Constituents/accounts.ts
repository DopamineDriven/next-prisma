import { extendType, objectType, stringArg, nonNull, core } from "nexus";
import { buildOrderBy } from "./utils";
import {
  SortOrderEnum,
  UserRelationFilter,
  StringFilter,
  StringNullableFilter,
  IntNullableFilter
} from ".";
import { GraphQLObjectType } from "graphql";

export const Account: core.NexusObjectTypeDef<"Account"> = objectType({
  name: "Account",
  definition(t) {
    t.implements("Node");
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
      nullable: true,
      async resolve(parent, args, ctx, info) {
        const user = await ctx.prisma.account
          .findFirst({
            where: {
              userId: parent.userId
            },
            include: {
              user: true
            }
          })
          .user();
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

export const AccountQuery: core.NexusExtendTypeDef<"Query"> =
  extendType<"Query">({
    type: "Query",
    definition(t) {
      t.connectionField("getUserByAccount", {
        type: "Account",
        inheritAdditionalArgs: true,
        additionalArgs: {
          id: nonNull(stringArg()),
          provider: nonNull(stringArg()),
          providerAccountId: nonNull(stringArg())
        },
        extendConnection(t) {
          t.nonNull.field("totalCount", {
            nullable: false,
            type: "Int",
            resolve: (source, args, ctx, info) => {
              const totalCount: number | 0 = source?.edges?.length
                ? source.edges.map(data => data?.cursor).length
                : 0;
              return { totalCount: totalCount }.totalCount;
            }
          });
        },
        async nodes(root, args, ctx, info) {
          return await ctx.prisma.account
            .findUnique({
              where: {
                id: args.id,
                provider_providerAccountId: {
                  provider: args.provider,
                  providerAccountId: args.providerAccountId
                }
              },
              select: {
                user: true
              }
            })
            .user()
            .accounts({
              cursor: { id: args.after ? args.after : undefined }
            })
            .then(data => {
              return { totalCount: data.length, ...data };
            });
        },
        async totalCount(_source, _args, ctx, info) {
          const getUserByAcct = (
            await ctx.prisma.account.findMany({
              where: { user: { status: { not: "BANNED" } } }
            })
          ).length;
          console.log(getUserByAcct);
          return (
            {
              totalCount: info.fieldNodes.length
            }.totalCount ?? getUserByAcct
          );
        }
      });
    }
  });

// Input Types

export const AccountOrderByRelationAggregateInput = core.inputObjectType({
  name: "AccountOrderByRelationAggregateInput",
  definition(t) {
    t.nullable.field("_count", { type: SortOrderEnum });
  }
});

const AccountWhereInput = core.inputObjectType({
  name: "AccountWhereInput",
  definition(t) {
    t.list.nonNull.field("AND", { type: AccountWhereInput });
    t.list.nonNull.field("NOT", { type: AccountWhereInput });
    t.list.nonNull.field("OR", { type: AccountWhereInput });
    t.field("access_token", { type: StringNullableFilter });
    t.field("expires_at", { type: IntNullableFilter });
    t.field("id", { type: StringFilter });
    t.field("id_token", { type: StringNullableFilter });
    t.field("provider", { type: StringFilter });
    t.field("providerAccountId", { type: StringFilter });
    t.field("refresh_token", { type: StringNullableFilter });
    t.field("scope", { type: StringNullableFilter });
    t.field("session_state", { type: StringNullableFilter });
    t.field("token_type", { type: StringNullableFilter });
    t.field("oauth_token_secret", { type: StringNullableFilter });
    t.field("oauth_token", { type: StringNullableFilter });
    t.field("type", { type: StringFilter });
    t.field("user", { type: UserRelationFilter });
    t.field("userId", { type: StringFilter });
  }
});

export const AccountListRelationFilter = core.inputObjectType({
  name: "AccountListRelationFilter",
  definition(t) {
    t.field("every", { type: AccountWhereInput });
    t.field("none", { type: AccountWhereInput });
    t.field("some", { type: AccountWhereInput });
  }
});
