import { fromGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { PrismaClient } from "@prisma/client";

export class ProfileService {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const profile = await this.prisma.profile.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!profile) {
      throw new Error("could not find profile with id: " + params.id);
    }

    return profile;
  }

  findMany(params: PaginationArgs) {
    return this.prisma.profile.findMany({
      ...relayToPrismaPagination(params)
    });
  }
}
// import { fromGlobalId, toGlobalId } from "graphql-relay";
// import { PaginationArgs, relayToPrismaPagination } from "./utils";
// import { Prisma, PrismaClient, Profile, Session, User } from "@prisma/client";
// import {
//   Connection,
//   Edge,
//   findManyCursorConnection
// } from "@devoxa/prisma-relay-cursor-connection";

// export interface ProfileRelayCursorArgs {
//   orderBy?:
//     | Prisma.Enumerable<Prisma.ProfileOrderByWithRelationInput>
//     | undefined;
//   where?: Prisma.ProfileWhereInput | undefined;
//   distinct?: Prisma.Enumerable<Prisma.ProfileScalarFieldEnum> | undefined;
//   skip?: number | undefined;
//   take?: number | undefined;
//   cursor?: Prisma.ProfileWhereUniqueInput;
//   params: PaginationArgs;
// }
// export class ProfileService {
//   constructor(protected prisma: PrismaClient) {}

//   async findUnique(params: { id: string }) {
//     const profile = await this.prisma.profile.findUnique({
//       where: { id: fromGlobalId(params.id).id }
//     });

//     if (!profile) {
//       throw new Error("could not find profile with id: " + params.id);
//     }

//     return profile;
//   }

//   findMany(params: PaginationArgs) {
//     return this.prisma.profile.findMany({
//       ...relayToPrismaPagination(params)
//     });
//   }


//   async findManyProfilesPaginated(params: ProfileRelayCursorArgs): Promise<
//     Connection<
//       Profile & {
//         user: User | undefined;
//       },
//       Edge<
//         Profile & {
//           user: User | undefined;
//         }
//       >
//     >
//   > {
//     return await findManyCursorConnection(
//       args =>
//         this.prisma.profile.findMany({
//           cursor: params.cursor,
//           distinct: params.distinct,
//           skip: params.skip,
//           take: params.take,
//           where: params.where,
//           orderBy: params.orderBy,
//           include: {
//             user: true
//           },
//           ...args
//         }),
//       () =>
//         this.prisma.profile.count({
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
//           toGlobalId("Profile", cursor.id)
//       }
//     );
//   }
// }
