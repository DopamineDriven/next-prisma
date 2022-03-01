import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter/dist/index";
import { PrismaClient } from "@prisma/client";

const authSecrets = {
  encryptionKey: process.env.ENCRYPTION_KEY ?? "",
  githubClientId: process.env.NEXT_GITHUB_ID ?? "",
  githubClientSecret: process.env.NEXT_GITHUB_SECRET ?? "",
  secretKey: process.env.SECRET_KEY ?? "",
  signingKey: process.env.SIGNING_KEY ?? "",
  url: process.env.NEXTAUTH_URL ?? "",
  secret: process.env.SECRET ?? ""
};

const prisma =
  process.env.NODE_ENV === "development" ? global.prisma : new PrismaClient();

const authHandler: NextApiHandler<NextAuthOptions> = (req, res) =>
  NextAuth(req, res, options);

export default authHandler;

const options: NextAuthOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  session: {
    updateAge: 60,
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
  },
  secret: authSecrets.secret,
  providers: [
    GitHubProvider({
      clientId: authSecrets.githubClientId,
      clientSecret: authSecrets.githubClientSecret
    })
  ]
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
