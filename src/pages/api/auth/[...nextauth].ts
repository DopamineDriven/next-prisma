import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from "@next-auth/prisma-adapter/dist/index";
import prisma from "../../../server/Context/prisma";
import cloneDeep from "lodash.clonedeep";
import TwitterCustom from "../../../lib/providers/twitter-custom";
const authHandler: NextApiHandler<NextAuthOptions> = (req, res) => {
  // const excludeProfileField = <Profile, Key extends keyof Profile>(
  //   profile: Profile,
  //   ...keys: Key[]
  // ): Omit<Profile, Key> => {
  //   for (const key of keys) {
  //     delete profile[key];
  //   }
  //   return profile;
  // };

  const {
    query: { twitter, google, github }
  } = req;
  console.log("requested query " + req.query ?? "no query");
  console.log("requested url " + req.url ?? "no url");
  return NextAuth(req, res, {
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? ""
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID ?? "",
        clientSecret: process.env.GOOGLE_SECRET ?? ""
      }),
      TwitterCustom({
        clientId: process.env.TWITTER_CLIENT_ID ?? "",
        clientSecret: process.env.TWITTER_CLIENT_SECRET ?? "",
        version: "2.0"
      })
    ],
    debug: true,
    logger: {
      error(code, ...message) {
        console.error(code, message);
      },
      warn(code, ...message) {
        console.warn(code, message);
      },
      debug(code, ...message) {
        console.debug(code, message);
      }
    },
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
    theme: {
      colorScheme: "auto",
      logo: "https://www.andrewross.app/commit-twice-daily.gif"
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async jwt({ token, user, account, profile, isNewUser }) {
        if (profile) {
          token["provider"] === "twitter" && token.userProfile != null
            ? ((token.userProfile = {
                email: "null",
                name: profile.name,
                sub: profile.sub,
                image: profile.image,

                twitter: {
                  data: {
                    location: profile.twitter?.data.location,
                    profile_image_url: profile.twitter?.data.profile_image_url,
                    verified: profile.twitter?.data.verified,
                    name: profile.name ? profile.name : "",
                    username: profile.twitter?.data.username
                      ? profile.twitter.data.username
                      : "",
                    id: profile.twitter?.data.id ? profile.twitter.data.id : "",
                    public_metrics: {
                      followers_count: profile.twitter?.data.public_metrics
                        ?.followers_count
                        ? profile.twitter.data.public_metrics.followers_count
                        : 0,
                      following_count: profile.twitter?.data.public_metrics
                        ?.following_count
                        ? profile.twitter.data.public_metrics.following_count
                        : 0,
                      listed_count: profile.twitter?.data.public_metrics
                        ?.listed_count
                        ? profile.twitter.data.public_metrics.listed_count
                        : 0,
                      tweet_count: profile.twitter?.data.public_metrics
                        ?.tweet_count
                        ? profile.twitter.data.public_metrics.tweet_count
                        : 0
                    }
                  }
                }
              }),
              { ...token })
            : token["provider"] === "github" &&
              token.userProfile != null &&
              profile.gitHub != null
            ? (token.userProfile = {
                gitHub: {
                  data: {
                    followers: profile.gitHub.data.followers,
                    email: profile.gitHub.data.email,
                    login: profile.gitHub.data.login,
                    id: profile.gitHub.data.id,
                    type: "User",
                    avatar_url: profile.gitHub.data.avatar_url,
                    following: profile.gitHub.data.following,
                    hireable: profile.gitHub.data.hireable,
                    node_id: profile.gitHub.data.node_id,
                    public_gists: profile.gitHub.data.public_gists,
                    public_repos: profile.gitHub.data.public_repos,
                    site_admin: profile.gitHub.data.site_admin,
                    url: profile.gitHub.data.url
                  }
                }
              })
            : token["provider"] === "google" &&
              token.userProfile != null &&
              profile.google != null
            ? ((token.userProfile = {
                ...profile,
                google: {
                  email_verified: profile.google.email_verified,
                  aud: profile.google.aud,
                  azp: profile.google.azp,
                  email: profile.google.email,
                  exp: profile.google.exp,
                  family_name: profile.google.family_name,
                  given_name: profile.google.given_name,
                  hd: profile.google.hd,
                  iat: profile.google.iat,
                  iss: profile.google.iss,
                  jti: profile.google.jti,
                  name: profile.google.name,
                  nbf: profile.google.nbf,
                  picture: profile.google.picture,
                  sub: profile.google.sub
                }
              }),
              { ...token })
            : {};
        }
        if (account) {
          token?.credentials != null
            ? ((token.credentials = {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                type: account.type,
                userId: account.userId,
                access_token: account.access_token,
                refresh_token: account.refresh_token,
                expires_at: account.expires_at,
                id_token: account.id_token,
                scope: account.scope,
                session_state: account.session_state,
                token_type: account.token_type
              }),
              { ...token })
            : { ...account };
        }
        return token;
      }
      // async session({ session, token, user }) {
      //   let userData = cloneDeep(token.userProfile);
      //   if (userData?.twitter && session.twitter) {
      //     const twitterEquivalency = (userData.twitter = session.twitter);
      //     return { expires: session.expires, twitterEquivalency, user: {email: null, image: session.user?.image, name: session.user?.name} };
      //   } else if (userData?.gitHub && session.github) {
      //     const gitHubEquivalency = (userData.gitHub = session.github);
      //     return { expires: session.expires, gitHubEquivalency, user: {email: session.user?.email, image: session.user?.image, name: session.user?.name} };
      //   } else if (userData?.google && session.google) {
      //     const googleEquivalency = (userData.google = session.google);
      //     return { expires: session.expires, googleEquivalency, user: {email: session.user?.email, image: session.user?.image, name: session.user?.name} };
      //   } else {
      //     return { expires: session.expires, userData, user };
      //   }
      // }
    }
  });
};
export default authHandler;

// accessTokenUrl: "https://github.com/login/oauth/access_token",
// authorization: "https://github.com/login/oauth/authorize"
