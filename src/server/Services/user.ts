import { fromGlobalId, toGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { PrismaClient, Prisma } from "@prisma/client";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
export interface UserRelayCursorArgs {
  orderBy: Prisma.Enumerable<Prisma.UserOrderByWithRelationInput> | undefined;
  where?: Prisma.UserWhereInput | undefined;
  distinct?: Prisma.Enumerable<Prisma.UserScalarFieldEnum> | undefined;
  skip?: number | undefined;
  take?: number | undefined;
  cursor?: Prisma.UserWhereUniqueInput;
  params: PaginationArgs;
}
export class UserService {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const user = await this.prisma.user.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!user) {
      throw new Error("could not find user with id: " + params.id);
    }

    return user;
  }

  findMany(params: PaginationArgs) {
    return this.prisma.user.findMany({
      ...relayToPrismaPagination(params)
    });
  }

  async relayCursorConnection(params: UserRelayCursorArgs) {
    return (
      await findManyCursorConnection(
        args =>
          this.prisma.user.findMany({
            cursor: params.cursor,
            distinct: params.distinct,
            skip: params.skip,
            take: params.take,
            where: params.where,
            orderBy: params.orderBy,
            include: {
              _count: true,
              profile: true,
              comments: true,
              entries: true
            },
            ...args
          }),
        () =>
          this.prisma.user.count({
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
        }
      ),
      {},
      {
        getCursor: (record: { id: string }) => {
          return record;
        },
        decodeCursor: (cursor: string) => fromGlobalId(cursor),
        encodeCursor: (cursor: { id: string }) => toGlobalId("User", cursor.id)
      }
    );
  }
}
