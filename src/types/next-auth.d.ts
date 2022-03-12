import { JWT, DefaultJWT } from "next-auth/jwt";
import {
  DefaultProfile,
  DefaultUser,
  DefaultAccount,
  Profile as CoreProfile
} from "next-auth/core/types";
import { TwitterProfile } from "next-auth/providers/twitter";
import { ProviderOptions } from "./provider-manipulation";
import { ProviderUnion } from "./enums";
export interface DefaultSessions extends Record<string, unknown> {
  user?: {
    name?: string | null;
    email?: string | null;
    username?: string | null;
    image?: string | null;
  };
  expires: ISODateString;
}
export interface MergeOptionsWithDefaults extends DefaultProfile {
  data:
    | ProviderOptions["gitHub"]
    | ProviderOptions["google"]
    | ProviderOptions["twitter"];
}

declare module "next-auth" {
  interface Session extends Record<string, unknown>, DefaultSessions {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
    };
    twitter?: ProviderOptions["twitter"];
    google?: ProviderOptions["google"];
    github?: ProviderOptions["gitHub"];
    expires: string;
  }
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends Record<string, unknown>, DefaultUser {
    username?: string;
  }
  /**
   * Usually contains information about the provider being used
   * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
   */
  interface Account extends Record<string, unknown>, DefaultAccount {}
  /** The OAuth profile returned from your provider */
  interface Profile
    extends Record<string, unknown>,
      DefaultProfile,
      ProviderOptions {}
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends Record<string, unknown>, DefaultJWT {
    /** OpenID ID Token */
    idToken?: string;
    /** Username if applicable */
    username?: string | null;
    provider?: keyof typeof ProviderUnion;
    userProfile?: CoreProfile;
    credentials?: DefaultAccount;
  }
}
