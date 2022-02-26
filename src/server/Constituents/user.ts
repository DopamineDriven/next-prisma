import { extendType, objectType, core, nonNull, stringArg } from "nexus";
import { Department, Role } from ".";

export const UserExtended: core.NexusExtendTypeDef<"Viewer"> = extendType({
  type: "Viewer",
  definition(t) {
    t.field("userById", {
      type: "User",
      args: {
        id: nonNull(stringArg()) as core.NexusNonNullDef<"String">
      },
      resolve(_root, args, ctx, _info) {
        return ctx.prisma.user.findUnique({
          where: { id: args.id },
          include: {
            accounts: true,
            entries: true,
            sessions: true
          }
        });
      }
    });

    t.field("userByEmail", {
      type: "User",
      args: {
        email: nonNull(stringArg()) as core.NexusNonNullDef<"String">
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
    t.connectionField("allUsers", {
      type: "User",
      nodes: async (_root, _args, ctx, _info) => {
        return await ctx.prisma.user.findMany({});
      }
    });
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
    // TODO Update User on Login Success
    // t.list.field("UpdateUserOnLogin", {
    //   type: "User"
    // });
  }
});

/**
import { getSession } from "next-auth/react";
import { core, FieldResolver, stringArg } from "nexus";
import { connectionFromArray } from "graphql-relay";
import { HarvestNetworkInfo } from "@/types/network-functions";
import { IncomingMessage, ServerResponse, IncomingHttpHeaders } from "http";
import connectionPluginCore from 'nexus';

  // TODO Update User on Login Success
 const updateUserOnLogin = async (req: IncomingMessage, res: ServerResponse) => {
  const session = await getSession({ req });
  const {
    harvestedData: { BoundAFP, ClientIp, Cookies, Headers }
  } = await HarvestNetworkInfo(req);

  const resresolveUserField: core.AbstractTypeResolver<"User"> = (
    root,
    ctx,
    args,
    info
  ) => {
    ctx.prisma.entry.update({
      where: { id: String(root.id) },
      data: {

      }
    })
  };
};
 */

export const User: core.NexusObjectTypeDef<"User"> = objectType({
  name: "User",

  definition(t: core.ObjectDefinitionBlock<"User">) {
    t.implements("Node");
    t.id("id");
    t.string("email");
    t.nullable.string("image");
    t.nullable.string("name");
    t.nullable.DateTime("emailVerified", {
      resolve(source, args, ctx, info) {
        return source.emailVerified as Date;
      }
    });
    t.field("role", {
      type: "Role",
      args: {
        role: Role.asArg({ default: "USER" })
      }
    });
    t.field("department", {
      type: "Department",
      args: {
        department: Department.asArg({ default: "UNASSIGNED" })
      }
    });
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

      async nodes(root, _args, ctx, _info) {
        const accounts = await ctx.prisma.user
          .findFirst({
            where: {
              accounts: { every: { userId: String(root.id) } }
            }
          })
          .accounts();
        return accounts;
      }
    } as core.connectionPluginCore.ConnectionFieldConfig<"User", "accounts">);
    t.connectionField("entries", {
      type: "Entry",
      async nodes(root, _args, ctx, _info) {
        const entries = await ctx.prisma.user
          .findFirst({
            where: {
              entries: { every: { userId: String(root.id) } }
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
            where: {
              sessions: { every: { userId: String(root.id) } }
            }
          })
          .sessions();
        return sessions;
      }
    });
  }
});

// export const UserConnections: Prisma.UserInclude = {
//   accounts: true,
//   entries: true,
//   sessions: true,
//   _count: true
// };

// TODO USE THIS
// role: nonNull(
//   Role.asArg({ default: "USER" })
// ) as core.NexusNonNullDef<"Role">,
// department: nonNull(
//   Department.asArg({
//     default: "UNASSIGNED"
//   })
// ) as core.NexusNonNullDef<"Department">,
// data: {
//   user: {
//     connect: {
//       department: args.department,
//       role: args.role
//     }
//   },
