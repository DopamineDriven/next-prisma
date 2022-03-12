import { core } from "nexus";
import {
  SortOrderEnum,
  StringFilter,
  EnumCommentReactionsNullableListFilter,
  StringNullableFilter,
  DateTimeFilter,
  DateTimeNullableFilter,
  UserRelationFilter,
  EntryRelationFilter
} from ".";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";

export const Comment: core.NexusObjectTypeDef<"Comment"> =
  core.objectType<`Comment`>({
    name: "Comment",
    definition(t) {
      t.implements("Node");
      t.string("authorId");
      t.string("entryId");
      t.nullable.string("body");
      t.nullable.string("position");
      t.nonNull.DateTime("createdAt");
      t.nullable.DateTime("updatedAt");
      t.nullable.field("attachment", {
        type: "MediaItem",
        resolve(root) {
          return root.attachment;
        }
      });
      t.list.field("reactions", { type: "Reaction" });
      t.nullable.field("author", {
        type: "User",
        async resolve(parent, _args, ctx, _info) {
          return await ctx.prisma.comment
            .findFirst({
              where: {
                author: { id: parent.authorId }
              }
            })
            .author();
        }
      });
      t.nullable.field("entry", {
        type: "Entry",
        async resolve(parent, args, ctx, _info) {
          return await ctx.prisma.comment
            .findFirst({
              where: {
                entry: { id: parent.entryId }
              }
            })
            .entry();
        }
      });
    }
  });

// const listComments: core.NexusExtendTypeDef<"Query"> = core.extendType<"Query">({
//   type: "Query",
//   definition(t) {
//     t.connectionField("listComments" {
//       extendConnection(t) {
//         t.nonNull.field("totalCount", {
//           nullable: false,
//           type: "Int",
//           resolve: (source, args, ctx) => {
//             const totalCount: number | 0 = source?.edges?.length
//               ? source.edges.length
//               : source.nodes?.length
//                 ? source.nodes.length
//                 : 0;
//             return { totalCount: totalCount }.totalCount;
//           }
//         });
//       },
//       type: "Comment",
//       async resolve(parent, args, ctx, info) {
//         return await findManyCursorConnection(args => ctx.prisma.comment.findMany({ include: { author: true, entry: true }, take: args.take, cursor: args.cursor }), () => ctx.prisma.comment.count({
//           take: args.take,
//         }))
//       }
//     })
//   }
// });

// Input Types
