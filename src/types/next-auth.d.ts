import NextAuth, { Session } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter/dist";
import { RecursivePartial } from "../mapped";

enum Role {
  SUPERADMIN = "SUPERADMIN",
  MAINTAINER = "MAINTAINER",
  ADMIN = "ADMIN",
  USER = "USER"
}


declare module "next-auth" {
  interface Session {
    user: {
      email?: string | null; // String
      emailVerified?: Date | null; // DateTime
      id?: string | null; // ID
      image?: string | null; // String
      name?: string | null; // String
      role?: keyof typeof Role
    };
  }
  interface Profile {
    iss?: string;
    at_hash?: string;
    picture: string;
    id: string;
    sub?: string;
    emailVerified?: Date;
    bio?: string | null; // String
    coverImage?: string | null; // String
    dob?: Date | null; // DateTime
    memberSince?: Date | null; // DateTime
    phoneNumber?: string | null; // PhoneNumber
    userId?: string | null; // String}
  }
}
