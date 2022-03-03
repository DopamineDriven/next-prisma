import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy
} from "@apollo/client/cache";
export type AccountKeySpecifier = (
  | "access_token"
  | "expires_at"
  | "id"
  | "id_token"
  | "oauth_token"
  | "oauth_token_secret"
  | "provider"
  | "providerAccountId"
  | "refresh_token"
  | "scope"
  | "session_state"
  | "token_type"
  | "type"
  | "user"
  | "userId"
  | AccountKeySpecifier
)[];
export type AccountFieldPolicy = {
  access_token?: FieldPolicy<any> | FieldReadFunction<any>;
  expires_at?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  id_token?: FieldPolicy<any> | FieldReadFunction<any>;
  oauth_token?: FieldPolicy<any> | FieldReadFunction<any>;
  oauth_token_secret?: FieldPolicy<any> | FieldReadFunction<any>;
  provider?: FieldPolicy<any> | FieldReadFunction<any>;
  providerAccountId?: FieldPolicy<any> | FieldReadFunction<any>;
  refresh_token?: FieldPolicy<any> | FieldReadFunction<any>;
  scope?: FieldPolicy<any> | FieldReadFunction<any>;
  session_state?: FieldPolicy<any> | FieldReadFunction<any>;
  token_type?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AccountConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | AccountConnectionKeySpecifier
)[];
export type AccountConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AccountEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | AccountEdgeKeySpecifier
)[];
export type AccountEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BioKeySpecifier = (
  | "body"
  | "createdAt"
  | "headline"
  | "intro"
  | "status"
  | "updatedAt"
  | BioKeySpecifier
)[];
export type BioFieldPolicy = {
  body?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  headline?: FieldPolicy<any> | FieldReadFunction<any>;
  intro?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryKeySpecifier = (
  | "createdAt"
  | "creatorId"
  | "entryId"
  | "name"
  | "root"
  | "updatedAt"
  | CategoryKeySpecifier
)[];
export type CategoryFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  creatorId?: FieldPolicy<any> | FieldReadFunction<any>;
  entryId?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  root?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentKeySpecifier = (
  | "author"
  | "authorId"
  | "body"
  | "createdAt"
  | "entry"
  | "entryId"
  | "id"
  | "position"
  | "reactions"
  | "updatedAt"
  | CommentKeySpecifier
)[];
export type CommentFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorId?: FieldPolicy<any> | FieldReadFunction<any>;
  body?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  entry?: FieldPolicy<any> | FieldReadFunction<any>;
  entryId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  position?: FieldPolicy<any> | FieldReadFunction<any>;
  reactions?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | CommentConnectionKeySpecifier
)[];
export type CommentConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | CommentEdgeKeySpecifier
)[];
export type CommentEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EntryKeySpecifier = (
  | "author"
  | "authorId"
  | "categories"
  | "comments"
  | "content"
  | "createdAt"
  | "featuredImage"
  | "id"
  | "published"
  | "reactions"
  | "title"
  | "updatedAt"
  | EntryKeySpecifier
)[];
export type EntryFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorId?: FieldPolicy<any> | FieldReadFunction<any>;
  categories?: FieldPolicy<any> | FieldReadFunction<any>;
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  published?: FieldPolicy<any> | FieldReadFunction<any>;
  reactions?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EntryConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | EntryConnectionKeySpecifier
)[];
export type EntryConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EntryEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | EntryEdgeKeySpecifier
)[];
export type EntryEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaItemKeySpecifier = (
  | "ariaLabel"
  | "caption"
  | "destination"
  | "fileLastModified"
  | "filename"
  | "filetype"
  | "height"
  | "mediaItemId"
  | "quality"
  | "size"
  | "src"
  | "srcSet"
  | "title"
  | "updatedAt"
  | "uploadedAt"
  | "width"
  | MediaItemKeySpecifier
)[];
export type MediaItemFieldPolicy = {
  ariaLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  caption?: FieldPolicy<any> | FieldReadFunction<any>;
  destination?: FieldPolicy<any> | FieldReadFunction<any>;
  fileLastModified?: FieldPolicy<any> | FieldReadFunction<any>;
  filename?: FieldPolicy<any> | FieldReadFunction<any>;
  filetype?: FieldPolicy<any> | FieldReadFunction<any>;
  height?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaItemId?: FieldPolicy<any> | FieldReadFunction<any>;
  quality?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  src?: FieldPolicy<any> | FieldReadFunction<any>;
  srcSet?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  uploadedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  width?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | "CreateNewUser"
  | "DeleteUser"
  | "createEntry"
  | "createProfile"
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  CreateNewUser?: FieldPolicy<any> | FieldReadFunction<any>;
  DeleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  createEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  createProfile?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeKeySpecifier = ("id" | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageInfoKeySpecifier = (
  | "endCursor"
  | "hasNextPage"
  | "hasPreviousPage"
  | "startCursor"
  | PageInfoKeySpecifier
)[];
export type PageInfoFieldPolicy = {
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>;
  hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>;
  startCursor?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProfileKeySpecifier = (
  | "coverImage"
  | "dob"
  | "id"
  | "memberSince"
  | "phoneNumber"
  | "user"
  | "userId"
  | ProfileKeySpecifier
)[];
export type ProfileFieldPolicy = {
  coverImage?: FieldPolicy<any> | FieldReadFunction<any>;
  dob?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  memberSince?: FieldPolicy<any> | FieldReadFunction<any>;
  phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProfileConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | ProfileConnectionKeySpecifier
)[];
export type ProfileConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ProfileEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | ProfileEdgeKeySpecifier
)[];
export type ProfileEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | "FilterUsers"
  | "GetAllEntries"
  | "GetAllSessions"
  | "GetEntry"
  | "GetSession"
  | "SearchByUserEmail"
  | "SearchEntriesByTitle"
  | "accounts"
  | "allAccounts"
  | "allEntries"
  | "entries"
  | "entryFeed"
  | "getUserByAccount"
  | "node"
  | "profiles"
  | "session"
  | "userAccount"
  | "userByEmail"
  | "userById"
  | "userEntries"
  | "usersQuery"
  | "verificationTokens"
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  FilterUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  GetAllEntries?: FieldPolicy<any> | FieldReadFunction<any>;
  GetAllSessions?: FieldPolicy<any> | FieldReadFunction<any>;
  GetEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  GetSession?: FieldPolicy<any> | FieldReadFunction<any>;
  SearchByUserEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  SearchEntriesByTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  accounts?: FieldPolicy<any> | FieldReadFunction<any>;
  allAccounts?: FieldPolicy<any> | FieldReadFunction<any>;
  allEntries?: FieldPolicy<any> | FieldReadFunction<any>;
  entries?: FieldPolicy<any> | FieldReadFunction<any>;
  entryFeed?: FieldPolicy<any> | FieldReadFunction<any>;
  getUserByAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
  profiles?: FieldPolicy<any> | FieldReadFunction<any>;
  session?: FieldPolicy<any> | FieldReadFunction<any>;
  userAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  userByEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  userById?: FieldPolicy<any> | FieldReadFunction<any>;
  userEntries?: FieldPolicy<any> | FieldReadFunction<any>;
  usersQuery?: FieldPolicy<any> | FieldReadFunction<any>;
  verificationTokens?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SessionKeySpecifier = (
  | "expires"
  | "id"
  | "sessionToken"
  | "user"
  | "userId"
  | SessionKeySpecifier
)[];
export type SessionFieldPolicy = {
  expires?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  sessionToken?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SessionConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | SessionConnectionKeySpecifier
)[];
export type SessionConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SessionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | SessionEdgeKeySpecifier
)[];
export type SessionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | "_count"
  | "accounts"
  | "comments"
  | "email"
  | "emailVerified"
  | "entries"
  | "id"
  | "image"
  | "imageMeta"
  | "name"
  | "profile"
  | "role"
  | "sessions"
  | "status"
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  _count?: FieldPolicy<any> | FieldReadFunction<any>;
  accounts?: FieldPolicy<any> | FieldReadFunction<any>;
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  emailVerified?: FieldPolicy<any> | FieldReadFunction<any>;
  entries?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  imageMeta?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  profile?: FieldPolicy<any> | FieldReadFunction<any>;
  role?: FieldPolicy<any> | FieldReadFunction<any>;
  sessions?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | UserConnectionKeySpecifier
)[];
export type UserConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserCountKeySpecifier = (
  | "accounts"
  | "comments"
  | "entries"
  | "sessions"
  | UserCountKeySpecifier
)[];
export type UserCountFieldPolicy = {
  accounts?: FieldPolicy<any> | FieldReadFunction<any>;
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
  entries?: FieldPolicy<any> | FieldReadFunction<any>;
  sessions?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserEdgeKeySpecifier = ("cursor" | "node" | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VerificationTokenKeySpecifier = (
  | "expires"
  | "id"
  | "identifier"
  | "token"
  | VerificationTokenKeySpecifier
)[];
export type VerificationTokenFieldPolicy = {
  expires?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  identifier?: FieldPolicy<any> | FieldReadFunction<any>;
  token?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VerificationTokenConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | VerificationTokenConnectionKeySpecifier
)[];
export type VerificationTokenConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type VerificationTokenEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | VerificationTokenEdgeKeySpecifier
)[];
export type VerificationTokenEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Account?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | AccountKeySpecifier
      | (() => undefined | AccountKeySpecifier);
    fields?: AccountFieldPolicy;
  };
  AccountConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | AccountConnectionKeySpecifier
      | (() => undefined | AccountConnectionKeySpecifier);
    fields?: AccountConnectionFieldPolicy;
  };
  AccountEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | AccountEdgeKeySpecifier
      | (() => undefined | AccountEdgeKeySpecifier);
    fields?: AccountEdgeFieldPolicy;
  };
  Bio?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | BioKeySpecifier | (() => undefined | BioKeySpecifier);
    fields?: BioFieldPolicy;
  };
  Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CategoryKeySpecifier
      | (() => undefined | CategoryKeySpecifier);
    fields?: CategoryFieldPolicy;
  };
  Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CommentKeySpecifier
      | (() => undefined | CommentKeySpecifier);
    fields?: CommentFieldPolicy;
  };
  CommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CommentConnectionKeySpecifier
      | (() => undefined | CommentConnectionKeySpecifier);
    fields?: CommentConnectionFieldPolicy;
  };
  CommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CommentEdgeKeySpecifier
      | (() => undefined | CommentEdgeKeySpecifier);
    fields?: CommentEdgeFieldPolicy;
  };
  Entry?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EntryKeySpecifier
      | (() => undefined | EntryKeySpecifier);
    fields?: EntryFieldPolicy;
  };
  EntryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EntryConnectionKeySpecifier
      | (() => undefined | EntryConnectionKeySpecifier);
    fields?: EntryConnectionFieldPolicy;
  };
  EntryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EntryEdgeKeySpecifier
      | (() => undefined | EntryEdgeKeySpecifier);
    fields?: EntryEdgeFieldPolicy;
  };
  MediaItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MediaItemKeySpecifier
      | (() => undefined | MediaItemKeySpecifier);
    fields?: MediaItemFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier);
    fields?: NodeFieldPolicy;
  };
  PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PageInfoKeySpecifier
      | (() => undefined | PageInfoKeySpecifier);
    fields?: PageInfoFieldPolicy;
  };
  Profile?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ProfileKeySpecifier
      | (() => undefined | ProfileKeySpecifier);
    fields?: ProfileFieldPolicy;
  };
  ProfileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ProfileConnectionKeySpecifier
      | (() => undefined | ProfileConnectionKeySpecifier);
    fields?: ProfileConnectionFieldPolicy;
  };
  ProfileEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ProfileEdgeKeySpecifier
      | (() => undefined | ProfileEdgeKeySpecifier);
    fields?: ProfileEdgeFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  Session?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SessionKeySpecifier
      | (() => undefined | SessionKeySpecifier);
    fields?: SessionFieldPolicy;
  };
  SessionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SessionConnectionKeySpecifier
      | (() => undefined | SessionConnectionKeySpecifier);
    fields?: SessionConnectionFieldPolicy;
  };
  SessionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SessionEdgeKeySpecifier
      | (() => undefined | SessionEdgeKeySpecifier);
    fields?: SessionEdgeFieldPolicy;
  };
  User?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
  UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserConnectionKeySpecifier
      | (() => undefined | UserConnectionKeySpecifier);
    fields?: UserConnectionFieldPolicy;
  };
  UserCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserCountKeySpecifier
      | (() => undefined | UserCountKeySpecifier);
    fields?: UserCountFieldPolicy;
  };
  UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserEdgeKeySpecifier
      | (() => undefined | UserEdgeKeySpecifier);
    fields?: UserEdgeFieldPolicy;
  };
  VerificationToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | VerificationTokenKeySpecifier
      | (() => undefined | VerificationTokenKeySpecifier);
    fields?: VerificationTokenFieldPolicy;
  };
  VerificationTokenConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | VerificationTokenConnectionKeySpecifier
      | (() => undefined | VerificationTokenConnectionKeySpecifier);
    fields?: VerificationTokenConnectionFieldPolicy;
  };
  VerificationTokenEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | VerificationTokenEdgeKeySpecifier
      | (() => undefined | VerificationTokenEdgeKeySpecifier);
    fields?: VerificationTokenEdgeFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
