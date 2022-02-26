import { fromGlobalId } from "graphql-relay";
import { PaginationArgs, relayToPrismaPagination } from "./utils";
import { PrismaClient } from "@prisma/client";

export class EntryService {
  constructor(protected prisma: PrismaClient) {}

  async findUnique(params: { id: string }) {
    const entry = await this.prisma.entry.findUnique({
      where: { id: fromGlobalId(params.id).id }
    });

    if (!entry) {
      throw new Error("could not find user with id: " + params.id);
    }

    return entry;
  }

  findMany(params: PaginationArgs) {
    return this.prisma.entry.findMany({
      ...relayToPrismaPagination(params)
    });
  }
}
