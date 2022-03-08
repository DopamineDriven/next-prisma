# next-prisma

### Augmentation

```ts
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
      email: string; // String
      emailVerified?: Date | null; // DateTime
      id?: string | null; // ID
      image?: string | null; // String
      name?: string | null; // String
      role?: keyof typeof Role;
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

declare module "next-auth/jwt" {
  interface JWT {
    idToken?: string;
    id?: string | null; // ID
    role?: keyof typeof Role;
  }
}
```

#### [Error Boundaries](https://medium.com/@deltazero/error-boundary-for-next-js-api-routes-dd6cc8f72962)

### To integrate

```graphql
query listUsers {
  usersQuery(first: 10) {
    pageInfo {
      ...PageInfoPartial
    }
    edges {
      ...UserEdgePartial
      node {
        ...UserPartial
        _count {
          ...UserCountPartial
        }
        imageMeta {
          ...MediaItemPartial
        }
        accounts(first: 10) {
          pageInfo {
            ...PageInfoPartial
          }
          __typename
          edges {
            ...AccountEdgePartial
            node {
              ...AccountPartial
            }
          }
        }
        sessions(first: 10) {
          pageInfo {
            ...PageInfoPartial
          }
          edges {
            ...SessionEdgePartial
            node {
              ...SessionPartial
            }
          }
        }
        profile {
          bio {
            ...BioPartial
          }
          coverPhoto {
            ...MediaItemPartial
          }
          ...ProfilePartial
        }
        entries(first: 10) {
          pageInfo {
            ...PageInfoPartial
          }
          edges {
            ...EntryEdgePartial
            node {
              _count {
                ...EntryCountPartial
              }
              ...EntryPartial
              featuredImage {
                ...MediaItemPartial
              }
              attachments {
                ...MediaItemPartial
              }
            }
          }
        }
      }
    }
  }
}
```

## Nexus in detail

- https://github.com/seed-of-apricot/nexus/blob/master/docs/api/modules/main/exports/schema.md
