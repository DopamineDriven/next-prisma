import { fromGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { PrismaClient } from "@prisma/client";

export class VerificationTokenService {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const verificationToken = await this.prisma.verificationToken.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!verificationToken) {
      throw new Error("could not find verificationToken with id: " + params.id);
    }

    return verificationToken;
  }

  findMany(params: PaginationArgs) {
    return this.prisma.verificationToken.findMany({
      ...relayToPrismaPagination(params)
    });
  }
}


// import { fromGlobalId, toGlobalId } from "graphql-relay";
// import { PaginationArgs, relayToPrismaPagination } from "./utils";
// import { Prisma, PrismaClient } from "@prisma/client";
// import {
//   Connection,
//   Edge,
//   findManyCursorConnection
// } from "@devoxa/prisma-relay-cursor-connection";

// export interface VerificationTokenRelayCursorArgs {
//   orderBy?:
//     | Prisma.Enumerable<Prisma.VerificationTokenOrderByWithRelationInput>
//     | undefined;
//   where?: Prisma.VerificationTokenWhereInput | undefined;
//   distinct?:
//     | Prisma.Enumerable<Prisma.VerificationTokenScalarFieldEnum>
//     | undefined;
//   skip?: number | undefined;
//   take?: number | undefined;
//   cursor?: Prisma.VerificationTokenWhereUniqueInput;
//   params: PaginationArgs;
// }

// export class VerificationToken {
//   constructor(protected prisma: PrismaClient) {}

//   async findUnique(params: { id: string }) {
//     const verificationToken = await this.prisma.verificationToken.findUnique({
//       where: { id: fromGlobalId(params.id).id }
//     });

//     if (!verificationToken) {
//       throw new Error("could not find verification token with id: " + params.id);
//     }

//     return verificationToken;
//   }

//   async findMany(params: PaginationArgs) {
//     return await this.prisma.verificationToken.findMany({
//       ...relayToPrismaPagination(params)
//     });
//   }

//   async findManyVerificationTokensPaginated(
//     params: VerificationTokenRelayCursorArgs
//   ): Promise<Connection<VerificationToken, Edge<VerificationToken>>> {
//     return await findManyCursorConnection(
//       args =>
//         this.prisma.verificationToken.findMany({
//           cursor: params.cursor,
//           distinct: params.distinct,
//           skip: params.skip,
//           take: params.take,
//           where: params.where,
//           orderBy: params.orderBy,
//           ...args
//         }),
//       () =>
//         this.prisma.verificationToken.count({
//           cursor: params.cursor,
//           orderBy: params.orderBy,
//           where: params.where,
//           take: params.take,
//           skip: params.skip,
//           distinct: params.distinct
//         }),
//       {
//         after: params.params.after,
//         before: params.params.before,
//         first: params.params.first,
//         last: params.params.last
//       },
//       {
//         getCursor: (record: { id: string }) => {
//           return record;
//         },
//         decodeCursor: (cursor: string) => fromGlobalId(cursor),
//         encodeCursor: (cursor: { id: string }) =>
//           toGlobalId("VerificationToken", cursor.id)
//       }
//     );
//   }
// }
