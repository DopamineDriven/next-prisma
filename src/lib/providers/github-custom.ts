import { OAuthUserConfig, OAuthConfig } from "next-auth/providers";
// import { Adapter, AdapterUser, AdapterSession } from "next-auth/adapters";
// import { Prisma, PrismaClient } from "@prisma/client";

export interface GitHubProfile {
  data: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    url: string;
    html_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    starred_url?: string;
    subscriptions_url?: string;
    organizations_url?: string;
    repos_url?: string;
    events_url?: string;
    received_events_url?: string;
    type: "User";
    site_admin: boolean;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email: string;
    hireable: boolean;
    bio?: string;
    twitter_username?: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    // ISO-8601
    created_at?: ReturnType<typeof Date["prototype"]["toISOString"]>;
    updated_at?: ReturnType<typeof Date["prototype"]["toISOString"]>;
  };
}

export type GitHubCustomProvider = <
  P extends Record<string, any> = GitHubProfile
>(
  options: Partial<OAuthUserConfig<P>>
) => OAuthConfig<P>;

// export async function CustomAdapter({createSession, createUser}: Adapter, prisma: PrismaClient) {
//   const createUserFunc = async <T extends Prisma.UserCreateArgs>(user: Prisma.SelectSubset<T, Prisma.UserCreateArgs>) =>
//     await prisma.user.create(user);
//   const signIn = createUser(createUserFunc(user))
// }
