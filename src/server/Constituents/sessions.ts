import { core } from "nexus";
import { buildOrderBy } from "./utils";
import {
  SortOrderEnum,
  StringFilter,
  StringNullableFilter,
  StringNullableListFilter,
  DateTimeNullableFilter,
  UserRelationFilter,
  IntNullableFilter
} from ".";

export const Session: core.NexusObjectTypeDef<"Session"> =
  core.objectType<"Session">({
    name: "Session",
    definition(t) {
      t.implements("Node");
      t.string("userId");
      t.DateTime("expires");
      t.string("sessionToken");
      t.field("user", {
        type: "User",
        async resolve(parent, args, ctx, info) {
          return await ctx.prisma.session
            .findFirst({
              include: { user: true },
              where: {
                user: { id: parent.userId }
              }
            })
            .user();
        }
      });
    }
  });

export const AllSessionsOrderBy: core.NexusInputObjectTypeDef<"SessionOrderBy"> =
  buildOrderBy("Session", ["userId", "expires", "id", "sessionToken"]);

export const SessionsOrderByArg: core.NexusArgDef<"SessionOrderBy"> =
  AllSessionsOrderBy.asArg();

export const SessionQuery = core.extendType<"Query">({
  type: "Query",
  definition(t) {
    t.field("GetSession", {
      type: "Session",
      args: { id: core.nonNull(core.stringArg()) },
      resolve(_root, args, ctx, _info) {
        return ctx.prisma.session.findUnique({
          where: { id: String(args?.id) }
        });
      }
    });
    t.connectionField("listSessions", {
      type: "Session",
      inheritAdditionalArgs: true,
      additionalArgs: {
        orderBy: core.nonNull(SessionsOrderByArg)
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
      async nodes(_root, args, ctx, _info) {
        return await ctx.prisma.session.findMany({
          orderBy: {
            user: {
              name: "asc"
            }
          }
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

// Input Types
/**
 * {
  id?: SortOrder
  sessionToken?: SortOrder
  userId?: SortOrder
  expires?: SortOrder
  user?: UserOrderByWithRelationInput
}
 */

export const SessionOrderByWithRelationshipInput =
  core.inputObjectType<"SessionOrderByWithRelationshipInput">({
    name: "SessionOrderByWithRelationshipInput",
    definition(t) {
      t.nullable.field("id", { type: SortOrderEnum });
      t.nullable.field("sessionToken", { type: SortOrderEnum });
      t.nullable.field("userId", { type: SortOrderEnum });
      t.nullable.field("expires", { type: SortOrderEnum });
      // t.nullable.field("user", {type: UserORder})
    }
  });

export const SessionListRelationFilter = core.inputObjectType({
  name: "SessionListRelationFilter",
  definition(t) {
    t.field("every", { type: SessionWhereInput });
    t.field("none", { type: SessionWhereInput });
    t.field("some", { type: SessionWhereInput });
  }
});

export const SessionOrderByRelationAggregateInput =
  core.inputObjectType<"SessionOrderByRelationAggregateInput">({
    name: "SessionOrderByRelationAggregateInput",
    definition(t) {
      t.nullable.field("_count", { type: SortOrderEnum });
    }
  });

export const SessionWhereInput = core.inputObjectType({
  name: "SessionWhereInput",
  definition(t) {
    t.list.nonNull.field("AND", { type: SessionWhereInput });
    t.list.nonNull.field("NOT", { type: SessionWhereInput });
    t.list.nonNull.field("OR", { type: SessionWhereInput });
    t.nonNull.field("id", { type: StringFilter });
    t.field("sessionToken", { type: StringNullableFilter });
    t.field("userId", { type: StringNullableFilter });
    t.field("expires", { type: DateTimeNullableFilter });
    t.field("user", { type: UserRelationFilter });
  }
});
