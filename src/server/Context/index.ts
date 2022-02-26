import prisma from "./prisma";
import { PrismaClient } from "@prisma/client";
import { ServerResponse, IncomingMessage } from "http";
import { buildServices, Services } from "../Services";

export interface Context extends Partial<Services> {
  req?: IncomingMessage;
  res?: ServerResponse;
  prisma: PrismaClient;
}

export const createContext: Context = {
  prisma,
  ...buildServices(prisma)
};
