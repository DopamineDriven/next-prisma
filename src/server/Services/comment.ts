import { fromGlobalId, toGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { Prisma, PrismaClient, Entry, User, Comment } from "@prisma/client";
import {
  Connection,
  Edge,
  findManyCursorConnection
} from "@devoxa/prisma-relay-cursor-connection";

export interface CommentRelayCursorArgs {
  orderBy?: Prisma.Enumerable<Prisma.CommentOrderByWithRelationInput> | undefined;
  where?: Prisma.CommentWhereInput | undefined;
  distinct?: Prisma.Enumerable<Prisma.CommentScalarFieldEnum> | undefined;
  skip?: number | undefined;
  take?: number | undefined;
  cursor?: Prisma.CommentWhereUniqueInput;
  params: PaginationArgs;
}

export class CommentService {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const comment = await this.prisma.comment.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!comment) {
      throw new Error("could not find comment with id: " + params.id);
    }

    return comment;
  }

  findMany(params: PaginationArgs) {
    return this.prisma.comment.findMany({
      ...relayToPrismaPagination(params)
    });
  }

  async findManyCommentsPaginated(params: CommentRelayCursorArgs): Promise<
    Connection<
      Comment & {
        entry: Entry | undefined;
        author: User | undefined;
      },
      Edge<
        Comment & {
          entry: Entry | undefined;
          author: User | undefined;
        }
      >
    >
  > {
    return await findManyCursorConnection(
      args =>
        this.prisma.comment.findMany({
          cursor: params.cursor,
          distinct: params.distinct,
          skip: params.skip,
          take: params.take,
          where: params.where,
          orderBy: params.orderBy,
          include: {
            entry: true,
            author: true
          },
          ...args
        }),
      () =>
        this.prisma.comment.count({
          cursor: params.cursor,
          orderBy: params.orderBy,
          where: params.where,
          take: params.take,
          skip: params.skip,
          distinct: params.distinct
        }),
      {
        after: params.params.after,
        before: params.params.before,
        first: params.params.first,
        last: params.params.last
      },
      {
        getCursor: (record: { id: string }) => {
          return record;
        },
        decodeCursor: (cursor: string) => fromGlobalId(cursor),
        encodeCursor: (cursor: { id: string }) =>
          toGlobalId("Comment", cursor.id)
      }
    );
  }
}
