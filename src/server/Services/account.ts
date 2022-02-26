import { fromGlobalId, toGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import {
  Prisma,
  PrismaClient,
  Entry,
  User,
  Comment,
  Account
} from "@prisma/client";
import {
  Connection,
  Edge,
  findManyCursorConnection
} from "@devoxa/prisma-relay-cursor-connection";

export interface AccountRelayCursorArgs {
  orderBy?:
    | Prisma.Enumerable<Prisma.AccountOrderByWithRelationInput>
    | undefined;
  where?: Prisma.AccountWhereInput | undefined;
  distinct?: Prisma.Enumerable<Prisma.AccountScalarFieldEnum> | undefined;
  skip?: number | undefined;
  take?: number | undefined;
  cursor?: Prisma.AccountWhereUniqueInput;
  params: PaginationArgs;
}
export class AccountService {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const account = await this.prisma.account.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!account) {
      throw new Error("could not find account with id: " + params.id);
    }

    return account;
  }

  findMany(params: PaginationArgs) {
    return this.prisma.account.findMany({
      ...relayToPrismaPagination(params)
    });
  }

  async findManyAccountsPaginated(params: AccountRelayCursorArgs): Promise<
    Connection<
      Account & {
        user: User | undefined;
      },
      Edge<
        Account & {
          user: User | undefined;
        }
      >
    >
  > {
    return await findManyCursorConnection(
      args =>
        this.prisma.account.findMany({
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
        this.prisma.account.count({
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
          toGlobalId("Account", cursor.id)
      }
    );
  }
}
