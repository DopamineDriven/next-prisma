import { stringArg, nonNull, mutationField, arg, nullable, core } from "nexus";
import { dateArg } from ".";

export const Mutation = mutationField(t => {
  t.field("CreateNewUser", {
    type: "User",
    args: {
      expires: core.nonNull(
        core.arg({ type: "Date" }) || core.stringArg()
      ) as core.NexusArgConfigType<"Date" | "String">,
      sessionToken:core.nonNull(core.stringArg()),
      email: nonNull(stringArg()),
      name: nullable(stringArg()),
      image: stringArg()
      // role: nonNull(arg<"Role">({ type: "Role", default: "USER" }))
    },
    resolve: async (_root, { email, image, name, expires, sessionToken }, ctx, _info) => {
      return ctx.prisma.user.create({
        data: {
          email: email,
          name: name,
          emailVerified: new Date(Date.now()),
          image: String(image),
          role: email.includes("windycitydevs.io") ? "SUPERADMIN" : "USER",
          status: "ONLINE",
          sessions: {
            create: {
              sessionToken: sessionToken,
              expires: (new Date(expires) || expires)
            }
          }
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
