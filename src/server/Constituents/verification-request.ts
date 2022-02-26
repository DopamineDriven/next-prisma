import { NexusObjectTypeDef, objectType, extendType } from "nexus/dist/core";

export const VerificationToken: NexusObjectTypeDef<"VerificationToken"> =
  objectType<"VerificationToken">({
    name: "VerificationToken",
    definition(t) {
      t.implements("Node");
      t.id("id");
      t.string("identifier");
      t.string("token");
      t.DateTime("expires");
    }
  });

export const VerificationRequestQuery = extendType<"Viewer">({
  type: "Viewer",
  definition(t) {
    t.connectionField("verificationTokens", {
      type: "VerificationToken",
      async nodes(_root, _args, ctx, _info) {
        const verificationTokens = await ctx.prisma.verificationToken.findMany({
          orderBy: { expires: "asc" }
        });
        return verificationTokens;
      }
    });
  }
});
