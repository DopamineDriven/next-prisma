import { extendType, objectType, stringArg, nonNull, core } from "nexus";
import { buildOrderBy } from "./utils";

export const Session: core.NexusObjectTypeDef<"Session"> =
  objectType<"Session">({
    name: "Session",
    definition(t) {
      t.implements("Node");
      t.id("id");
      t.string("userId");
      t.DateTime("expires");
      t.string("sessionToken");
      t.field("user", {
        type: "User",
        async resolve(parent, args, ctx, info) {
          return await ctx.prisma.session
            .findFirst({
              where: {
                user: { id: String(parent.userId) }
              }
            })
            .user();
        }
      });
    }
  });

export const AllSessionsOrderBy: core.NexusInputObjectTypeDef<"SessionOrderBy"> =
  buildOrderBy("Session", ["expires", "userId"]);

export const SessionsOrderByArg: core.NexusArgDef<"SessionOrderBy"> =
  AllSessionsOrderBy.asArg();

export const SessionQuery = extendType({
  type: "Viewer",
  definition(t) {
    t.field("GetSession", {
      type: "Session",
      args: { id: nonNull(stringArg()) },
      resolve(_root, args, ctx, _info) {
        return ctx.prisma.session.findUnique({
          where: { id: String(args?.id) }
        });
      }
    });
    t.connectionField("GetAllSessions", {
      type: "Session",
      inheritAdditionalArgs: true,
      additionalArgs: {
        orderBy: nonNull(SessionsOrderByArg)
      },
      async nodes(_root, args, ctx, _info) {
        return await ctx.prisma.session.findMany({
          orderBy: {
            user: {
              name: "asc"
            }
          }
        });
      }
    });
  }
});

/**
   t.connectionField("user", {
    type: "User",
    nodes(parent, _args, ctx, _info) {
      return ctx.prisma.session
        .findUnique({
          where: { id: String(parent.userId) }
        })
        .user()
        .sessions();
    }
  });
 */
