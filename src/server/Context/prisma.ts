import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development
// to prevent exhausting the database connection limit.

declare global {
  var prisma: PrismaClient | undefined;
}

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient({
//       log: ["error", "warn", "info", "query"],
//       errorFormat: "pretty"
//     });
//   }
//   prisma = global.prisma;
// }
const prisma = global.prisma || new PrismaClient({
  log: ['error']
})

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma;
