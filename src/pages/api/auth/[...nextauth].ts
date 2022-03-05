import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from "@next-auth/prisma-adapter/dist/index";
import prisma from "../../../server/Context/prisma";

const authHandler: NextApiHandler<NextAuthOptions> = (req, res) =>
  NextAuth(req, res, options);

export default authHandler;

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? ""
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID ?? "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET ?? "",
      version: "2.0"
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
    /** Override this method to control the NextAuth.js issued JWT encoding. */
  },
  secret: process.env.NEXTAUTH_SECRET
};
// accessTokenUrl: "https://github.com/login/oauth/access_token",
// authorization: "https://github.com/login/oauth/authorize"
