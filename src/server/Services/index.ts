import { UserService } from "./user";
import { SessionService } from "./session";
import { CommentService } from "./comment";
import { EntryService } from "./entry";
import { PrismaClient } from "@prisma/client";
import { AccountService } from "./account";
import { VerificationToken } from "./verification-request";
import { ProfileService } from "./profile";

export interface Services {
  user: UserService;
  session: SessionService;
  comment: CommentService;
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
    comment: new CommentService(prisma),
    account: new AccountService(prisma),
    profile: new ProfileService(prisma),
    verificationRequest: new VerificationToken(prisma)
  };
}
