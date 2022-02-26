import { fromGlobalId, toGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { PrismaClient, Prisma, Profile, Entry } from "@prisma/client";
import {
  Connection,
  Edge,
  findManyCursorConnection
} from "@devoxa/prisma-relay-cursor-connection";
import { User } from "@prisma/client";

export interface UserRelayCursorArgs {
  orderBy?: Prisma.Enumerable<Prisma.UserOrderByWithRelationInput> | undefined;
  where?: Prisma.UserWhereInput | undefined;
  distinct?: Prisma.Enumerable<Prisma.UserScalarFieldEnum> | undefined;
  skip?: number | undefined;
  take?: number | undefined;
  cursor?: Prisma.UserWhereUniqueInput;
  params: PaginationArgs;
}

export type ReturnTypeMixinOg<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

export type Constructor = { new (...args: any[]): any };
export interface IEdgeType<T> {
  cursor: string;
  node: T;
}

// export function ConnectionEdgeObjectType<
//   T extends Constructor,
//   V extends ReturnTypeMixinOg
//   >(nodeType: V): (target: T) => Constructor {

// }

export interface IPaginatedType<T> {
  edges: IEdgeType<T>[];
  nodes: T[];
  totalCount: number;
  hasNextPage: boolean;
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

  async findManyUsersPaginated(params: UserRelayCursorArgs): Promise<
    Connection<
      User & {
        _count: Prisma.UserCountOutputType;
        profile: Profile | null;
        comments: Comment[];
        entries: Entry[];
      },
      Edge<
        User & {
          _count: Prisma.UserCountOutputType;
          profile: Profile | null;
          comments: Comment[];
          entries: Entry[];
        }
      >
    >
  > {
    return await findManyCursorConnection(
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
      },
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
