import { stringArg, nonNull, mutationField, arg, nullable } from "nexus";

export const Mutation = mutationField(t => {
  t.field("CreateNewUser", {
    type: "User",
    args: {
      email: nonNull(stringArg()),
      firstName: nullable(stringArg()),
      lastName: nullable(stringArg()),
      image: stringArg(),
      role: nonNull(arg<"Role">({ type: "Role", default: "USER" }))
    },
    resolve: async (
      _root,
      { email, image, firstName, lastName, role },
      ctx,
      _info
    ) => {
      return ctx.prisma.user.create({
        data: {
          email: email,
          firstName: firstName,
          lastName: lastName,
          emailVerified: new Date(Date.now()),
          image: String(image),
          role: role !== null ? role : "USER"
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
