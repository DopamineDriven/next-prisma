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
  | "name"
  | "root"
  | "updatedAt"
  | CategoryKeySpecifier
)[];
export type CategoryFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  creatorId?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  root?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentKeySpecifier = (
  | "attachment"
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
  attachment?: FieldPolicy<any> | FieldReadFunction<any>;
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
  | "_count"
  | "attachments"
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
  _count?: FieldPolicy<any> | FieldReadFunction<any>;
  attachments?: FieldPolicy<any> | FieldReadFunction<any>;
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
export type EntryComments_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | EntryComments_ConnectionKeySpecifier
)[];
export type EntryComments_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EntryCountKeySpecifier = ("comments" | EntryCountKeySpecifier)[];
export type EntryCountFieldPolicy = {
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
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
  | "description"
  | "destination"
  | "fileLastModified"
  | "filename"
  | "filetype"
  | "height"
  | "id"
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
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  destination?: FieldPolicy<any> | FieldReadFunction<any>;
  fileLastModified?: FieldPolicy<any> | FieldReadFunction<any>;
  filename?: FieldPolicy<any> | FieldReadFunction<any>;
  filetype?: FieldPolicy<any> | FieldReadFunction<any>;
  height?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
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
  | "activityFeed"
  | "bio"
  | "city"
  | "country"
  | "coverPhoto"
  | "dob"
  | "gender"
  | "id"
  | "lastSeen"
  | "memberSince"
  | "occupation"
  | "phoneNumber"
  | "pronouns"
  | "recentActivity"
  | "user"
  | "userId"
  | ProfileKeySpecifier
)[];
export type ProfileFieldPolicy = {
  activityFeed?: FieldPolicy<any> | FieldReadFunction<any>;
  bio?: FieldPolicy<any> | FieldReadFunction<any>;
  city?: FieldPolicy<any> | FieldReadFunction<any>;
  country?: FieldPolicy<any> | FieldReadFunction<any>;
  coverPhoto?: FieldPolicy<any> | FieldReadFunction<any>;
  dob?: FieldPolicy<any> | FieldReadFunction<any>;
  gender?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  lastSeen?: FieldPolicy<any> | FieldReadFunction<any>;
  memberSince?: FieldPolicy<any> | FieldReadFunction<any>;
  occupation?: FieldPolicy<any> | FieldReadFunction<any>;
  phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  pronouns?: FieldPolicy<any> | FieldReadFunction<any>;
  recentActivity?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
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
  | "GetSession"
  | "SearchByUserEmail"
  | "SearchEntriesByTitle"
  | "accounts"
  | "allAccounts"
  | "allEntries"
  | "entries"
  | "entryFeed"
  | "findEntryById"
  | "getUserByAccount"
  | "listProfiles"
  | "listSessions"
  | "node"
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
  GetSession?: FieldPolicy<any> | FieldReadFunction<any>;
  SearchByUserEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  SearchEntriesByTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  accounts?: FieldPolicy<any> | FieldReadFunction<any>;
  allAccounts?: FieldPolicy<any> | FieldReadFunction<any>;
  allEntries?: FieldPolicy<any> | FieldReadFunction<any>;
  entries?: FieldPolicy<any> | FieldReadFunction<any>;
  entryFeed?: FieldPolicy<any> | FieldReadFunction<any>;
  findEntryById?: FieldPolicy<any> | FieldReadFunction<any>;
  getUserByAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  listProfiles?: FieldPolicy<any> | FieldReadFunction<any>;
  listSessions?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
  session?: FieldPolicy<any> | FieldReadFunction<any>;
  userAccount?: FieldPolicy<any> | FieldReadFunction<any>;
  userByEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  userById?: FieldPolicy<any> | FieldReadFunction<any>;
  userEntries?: FieldPolicy<any> | FieldReadFunction<any>;
  usersQuery?: FieldPolicy<any> | FieldReadFunction<any>;
  verificationTokens?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryAccounts_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryAccounts_ConnectionKeySpecifier
)[];
export type QueryAccounts_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryAllAccounts_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryAllAccounts_ConnectionKeySpecifier
)[];
export type QueryAllAccounts_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryAllEntries_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryAllEntries_ConnectionKeySpecifier
)[];
export type QueryAllEntries_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryEntries_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryEntries_ConnectionKeySpecifier
)[];
export type QueryEntries_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryEntryFeed_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryEntryFeed_ConnectionKeySpecifier
)[];
export type QueryEntryFeed_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryFilterUsers_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryFilterUsers_ConnectionKeySpecifier
)[];
export type QueryFilterUsers_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryGetAllEntries_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryGetAllEntries_ConnectionKeySpecifier
)[];
export type QueryGetAllEntries_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryGetUserByAccount_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryGetUserByAccount_ConnectionKeySpecifier
)[];
export type QueryGetUserByAccount_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryListProfiles_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryListProfiles_ConnectionKeySpecifier
)[];
export type QueryListProfiles_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryListSessions_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryListSessions_ConnectionKeySpecifier
)[];
export type QueryListSessions_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QuerySearchByUserEmail_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QuerySearchByUserEmail_ConnectionKeySpecifier
)[];
export type QuerySearchByUserEmail_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QuerySearchEntriesByTitle_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QuerySearchEntriesByTitle_ConnectionKeySpecifier
)[];
export type QuerySearchEntriesByTitle_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QuerySession_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QuerySession_ConnectionKeySpecifier
)[];
export type QuerySession_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryUserAccount_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryUserAccount_ConnectionKeySpecifier
)[];
export type QueryUserAccount_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryUserEntries_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryUserEntries_ConnectionKeySpecifier
)[];
export type QueryUserEntries_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryUsersQuery_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryUsersQuery_ConnectionKeySpecifier
)[];
export type QueryUsersQuery_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryVerificationTokens_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | QueryVerificationTokens_ConnectionKeySpecifier
)[];
export type QueryVerificationTokens_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
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
export type UserAccounts_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | UserAccounts_ConnectionKeySpecifier
)[];
export type UserAccounts_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserComments_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | UserComments_ConnectionKeySpecifier
)[];
export type UserComments_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
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
export type UserEntries_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | UserEntries_ConnectionKeySpecifier
)[];
export type UserEntries_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserSessions_ConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | "totalCount"
  | UserSessions_ConnectionKeySpecifier
)[];
export type UserSessions_ConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
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
  EntryComments_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EntryComments_ConnectionKeySpecifier
      | (() => undefined | EntryComments_ConnectionKeySpecifier);
    fields?: EntryComments_ConnectionFieldPolicy;
  };
  EntryCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EntryCountKeySpecifier
      | (() => undefined | EntryCountKeySpecifier);
    fields?: EntryCountFieldPolicy;
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
  QueryAccounts_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryAccounts_ConnectionKeySpecifier
      | (() => undefined | QueryAccounts_ConnectionKeySpecifier);
    fields?: QueryAccounts_ConnectionFieldPolicy;
  };
  QueryAllAccounts_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryAllAccounts_ConnectionKeySpecifier
      | (() => undefined | QueryAllAccounts_ConnectionKeySpecifier);
    fields?: QueryAllAccounts_ConnectionFieldPolicy;
  };
  QueryAllEntries_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryAllEntries_ConnectionKeySpecifier
      | (() => undefined | QueryAllEntries_ConnectionKeySpecifier);
    fields?: QueryAllEntries_ConnectionFieldPolicy;
  };
  QueryEntries_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryEntries_ConnectionKeySpecifier
      | (() => undefined | QueryEntries_ConnectionKeySpecifier);
    fields?: QueryEntries_ConnectionFieldPolicy;
  };
  QueryEntryFeed_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryEntryFeed_ConnectionKeySpecifier
      | (() => undefined | QueryEntryFeed_ConnectionKeySpecifier);
    fields?: QueryEntryFeed_ConnectionFieldPolicy;
  };
  QueryFilterUsers_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryFilterUsers_ConnectionKeySpecifier
      | (() => undefined | QueryFilterUsers_ConnectionKeySpecifier);
    fields?: QueryFilterUsers_ConnectionFieldPolicy;
  };
  QueryGetAllEntries_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryGetAllEntries_ConnectionKeySpecifier
      | (() => undefined | QueryGetAllEntries_ConnectionKeySpecifier);
    fields?: QueryGetAllEntries_ConnectionFieldPolicy;
  };
  QueryGetUserByAccount_Connection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | QueryGetUserByAccount_ConnectionKeySpecifier
      | (() => undefined | QueryGetUserByAccount_ConnectionKeySpecifier);
    fields?: QueryGetUserByAccount_ConnectionFieldPolicy;
  };
  QueryListProfiles_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryListProfiles_ConnectionKeySpecifier
      | (() => undefined | QueryListProfiles_ConnectionKeySpecifier);
    fields?: QueryListProfiles_ConnectionFieldPolicy;
  };
  QueryListSessions_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryListSessions_ConnectionKeySpecifier
      | (() => undefined | QueryListSessions_ConnectionKeySpecifier);
    fields?: QueryListSessions_ConnectionFieldPolicy;
  };
  QuerySearchByUserEmail_Connection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | QuerySearchByUserEmail_ConnectionKeySpecifier
      | (() => undefined | QuerySearchByUserEmail_ConnectionKeySpecifier);
    fields?: QuerySearchByUserEmail_ConnectionFieldPolicy;
  };
  QuerySearchEntriesByTitle_Connection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | QuerySearchEntriesByTitle_ConnectionKeySpecifier
      | (() => undefined | QuerySearchEntriesByTitle_ConnectionKeySpecifier);
    fields?: QuerySearchEntriesByTitle_ConnectionFieldPolicy;
  };
  QuerySession_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QuerySession_ConnectionKeySpecifier
      | (() => undefined | QuerySession_ConnectionKeySpecifier);
    fields?: QuerySession_ConnectionFieldPolicy;
  };
  QueryUserAccount_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryUserAccount_ConnectionKeySpecifier
      | (() => undefined | QueryUserAccount_ConnectionKeySpecifier);
    fields?: QueryUserAccount_ConnectionFieldPolicy;
  };
  QueryUserEntries_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryUserEntries_ConnectionKeySpecifier
      | (() => undefined | QueryUserEntries_ConnectionKeySpecifier);
    fields?: QueryUserEntries_ConnectionFieldPolicy;
  };
  QueryUsersQuery_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryUsersQuery_ConnectionKeySpecifier
      | (() => undefined | QueryUsersQuery_ConnectionKeySpecifier);
    fields?: QueryUsersQuery_ConnectionFieldPolicy;
  };
  QueryVerificationTokens_Connection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | QueryVerificationTokens_ConnectionKeySpecifier
      | (() => undefined | QueryVerificationTokens_ConnectionKeySpecifier);
    fields?: QueryVerificationTokens_ConnectionFieldPolicy;
  };
  Session?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SessionKeySpecifier
      | (() => undefined | SessionKeySpecifier);
    fields?: SessionFieldPolicy;
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
  UserAccounts_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserAccounts_ConnectionKeySpecifier
      | (() => undefined | UserAccounts_ConnectionKeySpecifier);
    fields?: UserAccounts_ConnectionFieldPolicy;
  };
  UserComments_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserComments_ConnectionKeySpecifier
      | (() => undefined | UserComments_ConnectionKeySpecifier);
    fields?: UserComments_ConnectionFieldPolicy;
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
  UserEntries_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserEntries_ConnectionKeySpecifier
      | (() => undefined | UserEntries_ConnectionKeySpecifier);
    fields?: UserEntries_ConnectionFieldPolicy;
  };
  UserSessions_Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserSessions_ConnectionKeySpecifier
      | (() => undefined | UserSessions_ConnectionKeySpecifier);
    fields?: UserSessions_ConnectionFieldPolicy;
  };
  VerificationToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | VerificationTokenKeySpecifier
      | (() => undefined | VerificationTokenKeySpecifier);
    fields?: VerificationTokenFieldPolicy;
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
