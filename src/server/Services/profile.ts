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
