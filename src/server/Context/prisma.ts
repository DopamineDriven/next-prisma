import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development
// to prevent exhausting the database connection limit.

declare global {
  var prisma: PrismaClient;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ["error", "warn", "info", "query"],
      errorFormat: "pretty"
    });
  }
  prisma = global.prisma;
}

export default prisma;
