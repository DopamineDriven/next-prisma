import { fromGlobalId, toGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { Prisma, PrismaClient, Session, User } from "@prisma/client";
import {
  Connection,
  Edge,
  findManyCursorConnection
} from "@devoxa/prisma-relay-cursor-connection";

export interface SessionRelayCursorArgs {
  orderBy?:
    | Prisma.Enumerable<Prisma.SessionOrderByWithRelationInput>
    | undefined;
  where?: Prisma.SessionWhereInput | undefined;
  distinct?: Prisma.Enumerable<Prisma.SessionScalarFieldEnum> | undefined;
  skip?: number | undefined;
  take?: number | undefined;
  cursor?: Prisma.SessionWhereUniqueInput;
  params: PaginationArgs;
}

export class SessionService {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const session = await this.prisma.session.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!session) {
      throw new Error("could not find sesson with id: " + params.id);
    }

    return session;
  }

  findMany(params: PaginationArgs) {
    return this.prisma.session.findMany({
      ...relayToPrismaPagination(params)
    });
  }

  async findManySessionsPaginated(params: SessionRelayCursorArgs): Promise<
    Connection<
      Session & {
        user: User | undefined;
      },
      Edge<
        Session & {
          user: User | undefined;
        }
      >
    >
  > {
    return await findManyCursorConnection(
      args =>
        this.prisma.session.findMany({
          cursor: params.cursor,
          distinct: params.distinct,
          skip: params.skip,
          take: params.take,
          where: params.where,
          orderBy: params.orderBy,
          include: {
            user: true
          },
          ...args
        }),
      () =>
        this.prisma.session.count({
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
          toGlobalId("Session", cursor.id)
      }
    );
  }
}
