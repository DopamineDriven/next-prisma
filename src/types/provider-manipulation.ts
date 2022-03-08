import { TwitterProfile } from "next-auth/providers/twitter";
import { GoogleProfile } from "next-auth/providers/google";
// custom patched interface defined in node_modules/next-auth/providers/github.d.ts
import { GitHubProfile } from "next-auth/providers/github";

export type ProviderUnion = GitHubProfile | GoogleProfile | TwitterProfile;

export interface ProviderOptions {
  gitHub?: GitHubProfile;
  google?: GoogleProfile;
  twitter?: TwitterProfile;
}
