import {
  extendType,
  objectType,
  stringArg,
  nonNull,
  intArg,
  core
} from "nexus";
import { buildOrderBy } from "./utils";

export const Account: core.NexusObjectTypeDef<"Account"> = objectType({
  name: "Account",
  definition(t) {
    t.implements("Node");
    t.id("id");
    t.string("userId");
    t.string("type");
    t.string("provider");
    t.string("providerAccountId");
    t.nullable.string("refresh_token");
    t.nullable.string("access_token");
    t.nullable.int("expires_at");
    t.nullable.string("token_type");
    t.nullable.string("scope");
    t.nullable.string("id_token");
    t.nullable.string("session_state");
    t.nullable.string("oauth_token_secret");
    t.nullable.string("oauth_token");
    t.field("user", {
      type: "User",
      async resolve(parent, args, ctx, info) {
        const user = await ctx.prisma.account
          .findFirst({
            where: {
              user: { id: String(parent.userId) }
            },
            include: {
              user: true
            }
          })
          .user(() =>
            ctx.prisma.profile
              .findUnique({
                where: { userId: String(parent.userId) }
              })
              .user()
              .profile()
          );
        return user;
      }
    });
  }
});

export const AllAccountsOrderBy: core.NexusInputObjectTypeDef<"AccountOrderBy"> =
  buildOrderBy("Account", ["provider", "providerAccountId"]);
export const AccountOrderByArg: core.NexusArgDef<"AccountOrderBy"> =
  AllAccountsOrderBy.asArg({
    default: { provider: "asc" }
  });

export const AccountQuery: core.NexusExtendTypeDef<"Viewer"> = extendType({
  type: "Viewer",
  definition(t) {
    t.connectionField("getUserByAccount", {
      type: "Account",
      inheritAdditionalArgs: true,
      additionalArgs: {
        id: nonNull(stringArg()),
        provider: nonNull(stringArg()),
        providerAccountId: nonNull(stringArg())
      },
      async nodes(_root, args, ctx, _info) {
        return await ctx.prisma.account
          .findUnique({
            where: {
              id: args.id,
              provider_providerAccountId: {
                provider: args.provider,
                providerAccountId: args.providerAccountId
              }
            },
            include: {
              user: true
            }
          })
          .user()
          .accounts();
      }
    });
  }
});
//     t.connectionField("GetAllEntries", {
//       type: "Entry",
//       inheritAdditionalArgs: true,
//       additionalArgs: {
//         take: intArg(),
//         searchString: nonNull(stringArg())
//       },
//       async nodes(_root, args, ctx, _info) {
//         return await ctx.prisma.entry.findMany({
//           take: Number(args.first),
//           orderBy: {
//             createdAt: "asc",
//             _relevance: {
//               fields: ["userId"],
//               search: String(args.searchString),
//               sort: "asc"
//             }
//           }
//         });
//       }
//     });
//     t.connectionField("SearchEntriesByTitle", {
//       type: "Entry",
//       inheritAdditionalArgs: true,
//       additionalArgs: {
//         searchString: nonNull(stringArg())
//       },
//       async nodes(_root, args, ctx, _info) {
//         return await ctx.prisma.entry.findMany({
//           orderBy: {
//             _relevance: {
//               fields: ["title"],
//               search: String(args.searchString),
//               sort: "asc"
//             }
//           }
//         });
//       }
//     });
//   }
// });

// export const EntryMutation = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("CreateEntry", {
//       type: "Entry",
//       args: {
//         title: stringArg({ description: "Entry Title", default: "" }),
//         content: stringArg({ description: "Entry Content", default: "" }),
//         featuredImage: stringArg({ description: "Entry Image", default: "" })
//       },
//       async resolve(_root, args, ctx, _info) {
//         return await ctx.prisma.entry.create({
//           data: {
//             title: String(args.title),
//             content: String(args.content),
//             featuredImage: String(args.featuredImage),
//             createdAt: new Date(Date.now()),
//             published: true,
//             user: ctx.prisma.user
//           }
//         });
//       }
//     });
//   }
// });
/**
const or = args.searchString
  ? {
      OR: [
        { title: { contains: String(args.searchString) } },
        { content: { contains: String(args.searchString) } }
      ]
    }
  : {};
 */
