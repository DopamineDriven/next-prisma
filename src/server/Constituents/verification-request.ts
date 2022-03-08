import { NexusObjectTypeDef, objectType, extendType } from "nexus/dist/core";

export const VerificationToken: NexusObjectTypeDef<"VerificationToken"> =
  objectType<"VerificationToken">({
    name: "VerificationToken",
    definition(t) {
      t.implements("Node");
      t.string("identifier");
      t.string("token");
      t.DateTime("expires");
    }
  });

export const VerificationRequestQuery = extendType<"Query">({
  type: "Query",
  definition(t) {
    t.connectionField("verificationTokens", {
      type: "VerificationToken",
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
      async nodes(_root, _args, ctx, _info) {
        const verificationTokens = await ctx.prisma.verificationToken.findMany({
          orderBy: { expires: "asc" }
        });
        return verificationTokens;
      },
      totalCount(_source, _args, ctx, info) {
        return {
          totalCount: info.fieldNodes.length
        }.totalCount;
      }
    });
  }
});
