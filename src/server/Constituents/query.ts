import { queryField, stringArg, arg, core, nonNull, intArg } from "nexus";
import { Role } from ".";

export const Query = queryField(t => {
  t.connectionField("accounts", {
    type: "Account",
    inheritAdditionalArgs: true,
    additionalArgs: {
      userId: nonNull(stringArg())
    },
    nodes(_parent, args, ctx, _info) {
      return ctx.prisma.account.findMany({
        where: { userId: String(args.userId) }
      });
    }
  });
  t.connectionField("usersQuery", {
    type: "User",
    nodes(root, args, ctx, info) {
      return ctx.prisma.user.findMany({
        take: args.first ?? 10
      });
    }
  });
  t.connectionField("allEntries", {
    type: "Entry",
    inheritAdditionalArgs: true,
    additionalArgs: {
      take: nonNull(intArg())
    },
    nodes(_root, args, ctx, _info) {
      return ctx.prisma.entry.findMany({
        take: Number(args.take)
      });
    }
  });

  t.connectionField("allAccounts", {
    type: "Account",
    inheritAdditionalArgs: true,
    additionalArgs: {
      take: intArg({ default: 10 })
    },
    nodes(_root, args, ctx, info) {
      return ctx.prisma.account.findMany({
        include: { user: true },
        take: Number(args.take)
      });
    }
  });
  t.connectionField("userEntries", {
    type: "Entry",
    additionalArgs: {
      id: stringArg()
    },
    inheritAdditionalArgs: true,
    nodes: (root, args, ctx, info) => {
      return ctx.prisma.entry.findMany({
        where: {
          authorId: String(args.id)
        }
      });
    }
  });
  t.connectionField("entryFeed", {
    type: "Entry",
    inheritAdditionalArgs: true,
    additionalArgs: {
      searchString: stringArg({ default: "" }),
      skip: intArg({ default: 0 }),
      take: intArg({ default: 10 })
    },
    nodes(_root, args, ctx, _info) {
      const or = args.searchString
        ? {
            OR: [
              { title: { contains: args.searchString } },
              { content: { contains: args.searchString } }
            ]
          }
        : {};
      return ctx.prisma.entry.findMany({
        where: {
          ...or
        },
        take: args.take ?? 10,
        skip: args.skip ?? 0
      });
    }
  });

  t.connectionField("SearchByUserEmail", {
    type: "User",
    inheritAdditionalArgs: true,
    additionalArgs: {
      search: nonNull(stringArg({ default: "" }) as core.NexusArgDef<"String">)
    },
    async nodes(parent, args, ctx, info) {
      const role = arg({ type: nonNull(Role) });
      return await ctx.prisma.user.findMany({
        orderBy: {
          email: "asc"
        }
      });
    }
  });

  // t.connectionField("ActiveFilter", {
  //   type: "Account",
  //   additionalArgs: {
  //     id: stringArg()
  //   },
  //   nodes(_parent, { id }, ctx) {
  //     return ctx.prisma.account
  //       .findUnique({
  //         where: { id: String(id) }
  //       })
  //       .user()
  //       .accounts();
  //   }
  // });

  t.connectionField("FilterUsers", {
    type: "User",
    inheritAdditionalArgs: true,
    additionalArgs: {
      searchString: nonNull(stringArg())
    },
    nodes(_root, args, ctx, info) {
      const or = args.searchString
        ? {
            OR: [
              { email: { contains: String(args.searchString) } },
              { name: { contains: String(args.searchString) } }
            ]
          }
        : {};
      return ctx.prisma.user.findMany({
        where: {
          ...or
        } // include: { accounts: true }
      });
    }
  });
});
