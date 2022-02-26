import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter/dist/index";
import { PrismaClient } from "@prisma/client";


const authSecrets = {
  encryptionKey: process.env.ENCRYPTION_KEY ?? "",
  facebookClientId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID ?? "",
  facebookClientSecret: process.env.FACEBOOK_SECRET ?? "",
  githubClientId: process.env.NEXT_GITHUB_ID ?? "",
  githubClientSecret: process.env.NEXT_GITHUB_SECRET ?? "",
  googleClientId: process.env.GOOGLE_OAUTH_CLIENT_ID ?? "",
  googleClientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET ?? "",
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
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60
  },

  // jwt: {
  //   maxAge: 30 * 24 * 60 * 60,
  //   signingKey: authSecrets.signingKey,
  //   encryptionKey: authSecrets.encryptionKey,
  //   secret: authSecrets.secret,
  //   secretKey: authSecrets.secretKey
  // } as Partial<JWTOptions> | undefined,
  secret: authSecrets.secret,
  providers: [
    GitHubProvider({
      clientId: authSecrets.githubClientId,
      clientSecret: authSecrets.githubClientSecret
      // accessTokenUrl: "https://github.com/login/oauth/access_token",
      // authorization: "https://github.com/login/oauth/authorize"
    }),
    // GoogleProvider({
    //   clientId: authSecrets.googleClientId,
    //   clientSecret: authSecrets.googleClientSecret
    //   // requestTokenUrl: "https://accounts.google.com/o/oauth2/auth",
    //   // accessTokenUrl: "https://accounts.google.com/o/oauth2/auth"
    // })
  ]
};
