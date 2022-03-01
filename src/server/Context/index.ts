import prisma from "./prisma";
import { PrismaClient, Prisma } from "@prisma/client";
import { ServerResponse, IncomingMessage } from "http";
import { buildServices, Services } from "../Services";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { MongoClient, ConnectOptions } from "mongodb";
export interface Context extends Partial<Services> {
  req: MicroRequest;
  res: ServerResponse;
  prisma: PrismaClient;
}

export const createContext = ({ req, res, prisma }: Context) => ({
  req,
  res,
  prisma,
  ...buildServices(prisma)
});

export function loggingMiddleware(): Prisma.Middleware {
  return async (params, next) => {
    const before = Date.now();

    const result = await next(params);

    const after = Date.now();

    console.log(
      `Prisma Query ${params.model}.${params.action} took ${after - before}ms`
    );

    return result;
  };
}
