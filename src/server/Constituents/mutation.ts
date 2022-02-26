import { stringArg, nonNull, mutationField, core, arg } from "nexus";
import { getSession } from "next-auth/react";
import { ResolverContext } from "../../apollo/middleware";

export const Mutation = mutationField(t => {
  // t.field("getUserByAccount", {
  //   type: "User",
  //   args: {
  //     id: nonNull(stringArg()),
  //     email: stringArg(),
  //     image: stringArg(),
  //     name: stringArg(),
  //     type: stringArg(),
  //     provider: stringArg(),
  //     providerAccountId: stringArg()
  //   },
  //   resolve: async (
  //     _root,
  //     { email, name, id, image, type, providerAccountId, provider },
  //     ctx,
  //     info
  //   ) => {
  //     console.log(JSON.stringify({ ...info }), null, 2);
  //     return await ctx.prisma.user
  //       .update({
  //         where: { email: String(email), id: String(id) },
  //         data: {
  //           email: String(email),
  //           name: String(name),
  //           role: email?.includes("andrew" || "dylan" || "reid")
  //             ? "SUPERADMIN"
  //             : "USER",
  //           department: Department.asArg({ default: "UNASSIGNED" }).name,
  //           accounts: {
  //             connectOrCreate: {
  //               create: Account && {
  //                 type: String(type),
  //                 provider: String(provider),
  //                 providerAccountId: String(providerAccountId)
  //               },
  //               where: {
  //                 provider_providerAccountId: String(
  //                   provider + "_" + providerAccountId
  //                 ).trim() as unknown as any
  //               }
  //             }
  //           },
  //           emailVerified: new Date(Date.now()),
  //           id: id,
  //           image: String(image)
  //         },
  //         include: {
  //           profile: true,
  //           entries: true,
  //           accounts: true,
  //           sessions: true
  //         }
  //       })
  //       .accounts();
  //   }
  // });
  t.field("CreateNewUser", {
    type: "User",
    args: {
      email: stringArg(),
      name: stringArg(),
      department: nonNull(
        arg<"Department">({ type: "Department", default: "UNASSIGNED" })
      ),
      image: stringArg(),
      role: nonNull(arg<"Role">({ type: "Role", default: "USER" }))
    },
    resolve: async (
      _root,
      { email, image, name, role, department },
      ctx,
      _info
    ) => {
      return ctx.prisma.user.create({
        data: {
          email: String(email),
          name: String(name),
          emailVerified: new Date(Date.now()),
          image: String(image),
          role: role !== null ? role : "USER",
          department: department !== null ? department : "UNASSIGNED"
        },
        include: {
          accounts: true,
          entries: true,
          profile: true,
          sessions: true
        }
      });
    }
  });
  // t.connectionField("UpdateAccountFields", {
  //   type: "Account",
  //   inheritAdditionalArgs: true,
  //   additionalArgs: {
  //     isOnline: booleanArg({ default: false }),
  //     searchString: nullable(stringArg()),
  //     lastActiveIp: stringArg({ default: "" }),
  //     lastSeen: stringArg({
  //       default: new Date(Date.now()).getTime().toLocaleString()
  //     }),
  //     id: nonNull(stringArg()) as NexusNonNullDef<"String">
  //   },
  //   nodes(_parent, args, ctx, _info) {
  //     let ipProps: GetIpProps;
  //     console.log(ctx.req?.rawHeaders ?? "no headers");
  //     const lastActiveIP = async () => {
  //       const headers = ctx.req?.headers?.forwarded ?? "";
  //       const returnFirstRealIp = headers
  //         ? fractionateCommaDelimitedData(headers as string)[0]
  //         : "";
  //       console.log(returnFirstRealIp);
  //       return { lastActiveIp: returnFirstRealIp };
  //     };
  //     const lastActveIp = lastActiveIP().then(data => data.lastActiveIp);
  //     return ctx.prisma.account
  //       .update({
  //         where: {
  //           id: String(args.id)
  //         },
  //         data: {

  //       })
  //       .user()
  //       .accounts();
  //   }
  // });
  t.field("DeleteUser", {
    type: "User",
    args: {
      id: nonNull(stringArg())
    },
    resolve: async (_root, { id }, ctx, _info) => {
      return await ctx.prisma.user
        .delete({
          where: { id: String(id) },
          include: {
            accounts: true,
            sessions: true,
            entries: true,
            profile: true
          }
        })
        .then(data => {
          return {
            ...data
          };
        });
    }
  });
});
