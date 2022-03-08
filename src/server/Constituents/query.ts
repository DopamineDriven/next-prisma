import { queryField, stringArg, arg, core, nonNull, intArg } from "nexus";
import { Role } from ".";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";

export const Query = queryField(t => {
  t.connectionField("accounts", {
    type: "Account",
    inheritAdditionalArgs: true,
    additionalArgs: {
      userId: nonNull(stringArg())
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
    nodes(_parent, args, ctx, _info) {
      return ctx.prisma.account.findMany({
        where: { userId: String(args.userId) }
      });
    },
    totalCount(_source, _args, ctx, info) {
      return {
        totalCount: info.fieldNodes.length
      }.totalCount;
    }
  });
  t.connectionField("usersQuery", {
    type: "User",
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
      return ctx.prisma.user.findMany({
        take: args.first ?? 10
      });
    },
    totalCount(_source, _args, ctx, info) {
      return {
        totalCount: info.fieldNodes.length
      }.totalCount;
    }
  });
  t.connectionField("allEntries", {
    type: "Entry",
    inheritAdditionalArgs: true,
    additionalArgs: {
      take: nonNull(intArg())
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
    nodes(_root, args, ctx, _info) {
      return ctx.prisma.entry.findMany({
        take: Number(args.take)
      });
    },
    totalCount(_source, _args, ctx, info) {
      return {
        totalCount: info.fieldNodes.length
      }.totalCount;
    }
  });

  t.connectionField("allAccounts", {
    type: "Account",
    inheritAdditionalArgs: true,
    additionalArgs: {
      take: intArg({ default: 10 })
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
    nodes(_root, args, ctx, info) {
      return ctx.prisma.account.findMany({
        include: { user: true },
        take: Number(args.take)
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
  t.connectionField("userEntries", {
    type: "Entry",
    additionalArgs: {
      id: stringArg()
    },
    extendConnection(t) {
      t.nonNull.field("totalCount", {
        nullable: false,
        type: "Int",
        resolve: source => {
          const totalCount: number | 0 = source?.edges?.find(cursor => cursor)
            ?.cursor
            ? source.edges.length
            : 0;
          return { totalCount: totalCount }.totalCount;
        }
      });
    },
    inheritAdditionalArgs: true,
    nodes: (root, args, ctx, info) => {
      return ctx.prisma.entry.findMany({
        where: {
          authorId: String(args.id)
        }
      });
    },
    totalCount(_source, _args, ctx, info) {
      return {
        totalCount: info.fieldNodes.length
      }.totalCount;
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
    },
    totalCount(_source, _args, ctx, info) {
      return {
        totalCount: info.fieldNodes.length
      }.totalCount;
    }
  });

  t.connectionField("SearchByUserEmail", {
    type: "User",
    inheritAdditionalArgs: true,
    additionalArgs: {
      search: nonNull(stringArg({ default: "" }) as core.NexusArgDef<"String">)
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
    async nodes(parent, args, ctx, info) {
      const role = arg({ type: nonNull(Role) });
      return await ctx.prisma.user.findMany({
        orderBy: {
          email: "asc"
        }
      });
    },
    totalCount(_source, _args, ctx, info) {
      return {
        totalCount: info.fieldNodes.length
      }.totalCount;
    }
  });
  t.connectionField("FilterUsers", {
    type: "User",
    inheritAdditionalArgs: true,
    additionalArgs: {
      searchString: nonNull(stringArg())
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
    async nodes(_root, args, ctx, info) {
      const or = args.searchString
        ? {
            OR: [
              { email: { contains: String(args.searchString) } },
              { name: { contains: String(args.searchString) } }
            ]
          }
        : {};
      return await ctx.prisma.user.findMany({
        where: {
          ...or
        }
      });
    },
    totalCount(_source, _args, ctx, info) {
      return {
        totalCount: info.fieldNodes.length
      }.totalCount;
    }
  });
});
