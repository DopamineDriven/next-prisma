import { fromGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { PrismaClient } from "@prisma/client";

export class SessionService {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const session = await this.prisma.session.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!session) {
      throw new Error("could not find user with id: " + params.id);
    }

    return session;
  }

  findMany(params: PaginationArgs) {
    return this.prisma.session.findMany({
      ...relayToPrismaPagination(params)
    });
  }
}
