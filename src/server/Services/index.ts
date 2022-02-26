import { UserService } from "./user";
import { SessionService } from "./session";
import { EntryService } from "./entry";
import { PrismaClient } from "@prisma/client";
import { AccountService } from "./account";
import { VerificationToken } from "./verification-request";
import { ProfileService } from "./profile";

export interface Services {
  user: UserService;
  session: SessionService;
  entry: EntryService;
  account: AccountService;
  profile: ProfileService;
  verificationRequest: VerificationToken;
}

export function buildServices(prisma: PrismaClient): Services {
  return {
    user: new UserService(prisma),
    session: new SessionService(prisma),
    entry: new EntryService(prisma),
    account: new AccountService(prisma),
    profile: new ProfileService(prisma),
    verificationRequest: new VerificationToken(prisma)
  };
}
