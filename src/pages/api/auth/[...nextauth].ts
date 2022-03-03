import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter/dist/index";
import prisma from "../../../server/Context/prisma";



const authHandler: NextApiHandler<NextAuthOptions> = (req, res) =>
  NextAuth(req, res, options);

export default authHandler;

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? ""
    })
  ],
  debug: true,
  adapter: PrismaAdapter(prisma),
  session: {
    updateAge: 60,
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  secret: process.env.SECRET
};
// accessTokenUrl: "https://github.com/login/oauth/access_token",
// authorization: "https://github.com/login/oauth/authorize"
// jwt: {
//   maxAge: 30 * 24 * 60 * 60,
//   signingKey: authSecrets.signingKey,
//   encryptionKey: authSecrets.encryptionKey,
//   secret: authSecrets.secret,
//   secretKey: authSecrets.secretKey
// } as Partial<JWTOptions> | undefined,
