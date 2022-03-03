import {
  core,
  idArg,
  interfaceType,
  queryField,
  stringArg,
  nonNull
} from "nexus";
import { toGlobalId, fromGlobalId } from "graphql-relay";
import { decode } from "jsonwebtoken";

// TypeName:ID -> base64

export const Node = interfaceType({
  name: "Node",
  definition(t) {
    t.nonNull.field("id", {
      type: "String",
      resolve: (root, _args, _ctx, info) => {
        return toGlobalId(
          info.parentType.name,
          //@ts-ignore
          root.id! as string
        );
      }
    });
    t.typeName
  }
});

function assertAllTypesCovered(_x: never, id: string): never {
  throw new Error("could not find any resource with id: " + id);
}

export const NodeField = queryField(t => {
  t.field("node", {
    type: "Node",
    args: {
      id: nonNull(stringArg())
    },
    // @ts-ignore
    async resolve(_root, args, ctx, _info) {
      const { type } = fromGlobalId(args.id) as {
        type: core.GetGen2<"abstractTypeMembers", "Node">;
        id: string;
      };

      // if (type === "Viewer") {
      //   // const viewer = await ctx.req.headers.authorization
      //   return { id: args.id, __typename: "Viewer" };
      // }

      if (type === "Profile") {
        const profile = await ctx.prisma.profile.findUnique({
          where: { id: args.id }
        });
        return { ...profile, __typename: type };
      }

      if (type === "VerificationToken") {
        const verificationToken = await ctx.prisma.verificationToken.findUnique(
          {
            where: { id: args.id }
          }
        );
        return { ...verificationToken, __typename: type };
      }

      if (type === "Account") {
        const account = await ctx.prisma.account.findUnique({
          where: { id: args.id }
        });
        return { ...account, __typename: type };
      }

      if (type === "Entry") {
        const entry = await ctx.prisma.entry.findUnique({
          where: { id: args.id }
        });
        return { ...entry, __typename: type };
      }

      if (type === "Comment") {
        const comment = await ctx.prisma.comment.findUnique({
          where: { id: args.id }
        });
        return { ...comment, __typename: type };
      }

      if (type === "Session") {
        const session = await ctx.prisma.session.findUnique({
          where: { id: args.id }
        });
        return { ...session, __typename: type };
      }

      if (type === "User") {
        const user = await ctx.prisma.user.findUnique({
          where: { id: args.id }
        });
        return { ...user, __typename: type };
      }

      return assertAllTypesCovered(type, args.id);
    }
  });
});
