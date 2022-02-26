import { fromGlobalId, toGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { Prisma, PrismaClient, Entry, User, Comment } from "@prisma/client";
import {
  Connection,
  Edge,
  findManyCursorConnection
} from "@devoxa/prisma-relay-cursor-connection";

export interface EntryRelayCursorArgs {
  orderBy?: Prisma.Enumerable<Prisma.EntryOrderByWithRelationInput> | undefined;
  where?: Prisma.EntryWhereInput | undefined;
  distinct?: Prisma.Enumerable<Prisma.EntryScalarFieldEnum> | undefined;
  skip?: number | undefined;
  take?: number | undefined;
  cursor?: Prisma.EntryWhereUniqueInput;
  params: PaginationArgs;
}

export class EntryService {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const entry = await this.prisma.entry.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!entry) {
      throw new Error("could not find entry with id: " + params.id);
    }

    return entry;
  }

  findMany(params: PaginationArgs) {
    return this.prisma.entry.findMany({
      ...relayToPrismaPagination(params)
    });
  }

  async findManyEntriesPaginated(params: EntryRelayCursorArgs): Promise<
    Connection<
      Entry & {
        _count: Prisma.EntryCountOutputType | undefined;
        comments: Comment[] | undefined;
        author: User | undefined;
      },
      Edge<
        Entry & {
          _count: Prisma.EntryCountOutputType | undefined;
          comments: Comment[] | undefined;
          author: User | undefined;
        }
      >
    >
  > {
    return await findManyCursorConnection(
      args =>
        this.prisma.entry.findMany({
          cursor: params.cursor,
          distinct: params.distinct,
          skip: params.skip,
          take: params.take,
          where: params.where,
          orderBy: params.orderBy,
          include: {
            _count: true,
            comments: true,
            author: true
          },
          ...args
        }),
      () =>
        this.prisma.entry.count({
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
          toGlobalId("Entry", cursor.id)
      }
    );
  }
}
