import { fromGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { PrismaClient } from "@prisma/client";

export class AccountService {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const account = await this.prisma.account.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!account) {
      throw new Error("could not find user with id: " + params.id);
    }

    return account;
  }

  findMany(params: PaginationArgs) {
    return this.prisma.account.findMany({
      ...relayToPrismaPagination(params)
    });
  }
}
