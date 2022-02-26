import { fromGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { PrismaClient } from "@prisma/client";

export class VerificationToken {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const verificationToken = await this.prisma.verificationToken.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!verificationToken) {
      throw new Error("could not find user with id: " + params.id);
    }

    return verificationToken;
  }

  async findMany(params: PaginationArgs) {
    return await this.prisma.verificationToken.findMany({
      ...relayToPrismaPagination(params)
    });
  }
}
