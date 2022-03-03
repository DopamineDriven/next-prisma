import { NextApiHandler } from "next";
import NextAuth, {  NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter/dist/index";
import prisma from "../../../server/Context/prisma";
import { JWTOptions } from "next-auth/jwt";

const authHandler: NextApiHandler<NextAuthOptions> = (req, res) =>
  NextAuth(req, res, options);

export default authHandler;

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? ""
    })
  ],
  debug: true,
  logger: { debug: (code, metadata) => ({ code, metadata }) },
  adapter: PrismaAdapter(prisma),
  session: {
    updateAge: 120,
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60
  } as Partial<JWTOptions> | undefined,
  secret: process.env.NEXTAUTH_SECRET
};
// accessTokenUrl: "https://github.com/login/oauth/access_token",
// authorization: "https://github.com/login/oauth/authorize"
