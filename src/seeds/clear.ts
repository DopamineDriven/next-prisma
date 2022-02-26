export const clearData = async <
  T extends import("@prisma/client").PrismaClient
>(
  prisma: T
) => {
  const {
    "0": verificationToken,
    "1": comment,
    "2": entry,
    "3": account,
    "4": profile,
    "5": session,
    "6": user
  } = await prisma.$transaction([
    prisma.verificationToken.deleteMany({}),
    prisma.comment.deleteMany({}),
    prisma.entry.deleteMany({}),
    prisma.account.deleteMany({}),
    prisma.profile.deleteMany({}),
    prisma.session.deleteMany({}),
    prisma.user.deleteMany({})
  ]);

  return {
    verificationToken,
    comment,
    entry,
    account,
    profile,
    session,
    user
  };
};


type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type ClearInferred = UnwrapPromise<ReturnType<typeof clearData>>;

async function main() {
  const PrismaClient = (await import("@prisma/client")).PrismaClient;
  const prisma = new PrismaClient();
  try {
    await prisma
      .$connect()
      .then(() => console.log("[clearing]: db connection opened"));
    const s = async (): Promise<ClearInferred> =>
      await clearData(prisma).then(data => {
        console.log(
          `[clearing]: there are ${data.user.count} users, ${data.account.count} accounts, ${data.comment.count} comments, ${data.entry.count} entries, ${data.profile.count} profiles, ${data.session.count} sessions, and ${data.verificationToken.count} verification requests remaining`
        );
        console.log();
        return data;
      });
    return await s();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    const checkUsers = await prisma.user.findMany();

    return await prisma
      .$disconnect()
      .then(() => console.log(`[clearing]: db connection closed`));
  }
}
main();
