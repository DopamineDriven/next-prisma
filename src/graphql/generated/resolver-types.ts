import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Account = Node & {
  __typename?: "Account";
  access_token?: Maybe<Scalars["String"]>;
  expires_at?: Maybe<Scalars["Int"]>;
  id: Scalars["String"];
  id_token?: Maybe<Scalars["String"]>;
  oauth_token?: Maybe<Scalars["String"]>;
  oauth_token_secret?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  providerAccountId?: Maybe<Scalars["String"]>;
  refresh_token?: Maybe<Scalars["String"]>;
  scope?: Maybe<Scalars["String"]>;
  session_state?: Maybe<Scalars["String"]>;
  token_type?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["String"]>;
};

export type AccountConnection = {
  __typename?: "AccountConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<AccountEdge>>>;
  /** Flattened list of Account type */
  nodes?: Maybe<Array<Maybe<Account>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type AccountEdge = {
  __typename?: "AccountEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Account>;
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountOrderBy = {
  provider?: InputMaybe<SortOrderEnum>;
  providerAccountId?: InputMaybe<SortOrderEnum>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrderEnum>;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  oauth_token?: InputMaybe<StringNullableFilter>;
  oauth_token_secret?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Bio = {
  __typename?: "Bio";
  body?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  headline?: Maybe<Scalars["String"]>;
  intro?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type BioListRelationFilter = {
  every?: InputMaybe<BioWhereInput>;
  none?: InputMaybe<BioWhereInput>;
  some?: InputMaybe<BioWhereInput>;
};

export type BioRelationFilter = {
  is?: InputMaybe<BioWhereInput>;
  isNot?: InputMaybe<BioWhereInput>;
};

export type BioWhereInput = {
  AND?: InputMaybe<Array<BioWhereInput>>;
  NOT?: InputMaybe<Array<BioWhereInput>>;
  OR?: InputMaybe<Array<BioWhereInput>>;
  body?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  headline?: InputMaybe<StringFilter>;
  intro?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Category = {
  __typename?: "Category";
  createdAt?: Maybe<Scalars["DateTime"]>;
  creatorId?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  root?: Maybe<Scalars["Boolean"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Comment = Node & {
  __typename?: "Comment";
  attachment?: Maybe<MediaItem>;
  author?: Maybe<User>;
  authorId?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  entry?: Maybe<Entry>;
  entryId?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  position?: Maybe<Scalars["String"]>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CommentConnection = {
  __typename?: "CommentConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<CommentEdge>>>;
  /** Flattened list of Comment type */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type CommentEdge = {
  __typename?: "CommentEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Comment>;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrderEnum>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  attachment?: InputMaybe<MediaItemRelationFilter>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringNullableFilter>;
  body?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  entry?: InputMaybe<EntryRelationFilter>;
  entryId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  position?: InputMaybe<StringNullableFilter>;
  reactions?: InputMaybe<EnumCommentReactionsNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type Entry = Node & {
  __typename?: "Entry";
  _count: EntryCount;
  attachments?: Maybe<Array<Maybe<MediaItem>>>;
  author?: Maybe<User>;
  authorId?: Maybe<Scalars["String"]>;
  categories?: Maybe<Array<Maybe<Category>>>;
  comments?: Maybe<CommentConnection>;
  content?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  featuredImage?: Maybe<MediaItem>;
  id: Scalars["String"];
  published?: Maybe<Scalars["Boolean"]>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EntryCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchString: Scalars["String"];
  take?: InputMaybe<Scalars["Int"]>;
};

export type EntryConnection = {
  __typename?: "EntryConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<EntryEdge>>>;
  /** Flattened list of Entry type */
  nodes?: Maybe<Array<Maybe<Entry>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type EntryCount = {
  __typename?: "EntryCount";
  comments: Scalars["Int"];
};

export type EntryEdge = {
  __typename?: "EntryEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Entry>;
};

export type EntryListRelationFilter = {
  every?: InputMaybe<EntryWhereInput>;
  none?: InputMaybe<EntryWhereInput>;
  some?: InputMaybe<EntryWhereInput>;
};

export type EntryOrderBy = {
  createdAt?: InputMaybe<SortOrderEnum>;
  title?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type EntryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrderEnum>;
};

export type EntryRelationFilter = {
  is?: InputMaybe<EntryWhereInput>;
  isNot?: InputMaybe<EntryWhereInput>;
};

export type EntryWhereInput = {
  AND?: InputMaybe<Array<EntryWhereInput>>;
  NOT?: InputMaybe<Array<EntryWhereInput>>;
  OR?: InputMaybe<Array<EntryWhereInput>>;
  attachments?: InputMaybe<MediaItemListRelationFilter>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringNullableFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  featuredImage?: InputMaybe<MediaItemRelationFilter>;
  id?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type EnumCommentReactionsNullableListFilter = {
  equals?: InputMaybe<Array<Reaction>>;
  has?: InputMaybe<Reaction>;
  hasEvery?: InputMaybe<Array<Reaction>>;
  hasSome?: InputMaybe<Array<Reaction>>;
  isEmpty?: InputMaybe<Scalars["Boolean"]>;
};

export type EnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumMediaItemDestinationNullableFilter = {
  equals?: InputMaybe<MediaItemDestination>;
  in?: InputMaybe<Array<MediaItemDestination>>;
  not?: InputMaybe<NestedEnumMediaItemDestinationNullableFilter>;
  notIn?: InputMaybe<Array<MediaItemDestination>>;
};

export type EnumMimeTypeNullableFilter = {
  equals?: InputMaybe<MimeType>;
  in?: InputMaybe<Array<MimeType>>;
  not?: InputMaybe<NestedEnumMimeTypeNullableFilter>;
  notIn?: InputMaybe<Array<MimeType>>;
};

export type EnumPronounsNullableFilter = {
  equals?: InputMaybe<Pronouns>;
  in?: InputMaybe<Array<Pronouns>>;
  not?: InputMaybe<NestedEnumPronounsNullableFilter>;
  notIn?: InputMaybe<Array<Pronouns>>;
};

export type EnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumUserStatusNullableFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<NestedEnumUserStatusNullableFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type FindManyUsersPaginatedInput = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldsEnum>>;
  orderBy: Array<UserOrderByWithRelationAndSearchRelevanceInput>;
  pagination?: InputMaybe<PaginationArgsInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<UserWhereInput>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

/** User Gender */
export enum Gender {
  Female = "FEMALE",
  Male = "MALE",
  Other = "OTHER",
  Uncertain = "UNCERTAIN"
}

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type MediaItem = {
  __typename?: "MediaItem";
  ariaLabel?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  destination?: Maybe<MediaItemDestination>;
  fileLastModified?: Maybe<Scalars["DateTime"]>;
  filename?: Maybe<Scalars["String"]>;
  filetype?: Maybe<MimeType>;
  height: Scalars["Float"];
  id?: Maybe<Scalars["String"]>;
  quality: Scalars["Int"];
  size?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  srcSet?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  uploadedAt?: Maybe<Scalars["DateTime"]>;
  width: Scalars["Float"];
};

/** Media Item Destination */
export enum MediaItemDestination {
  Avatar = "AVATAR",
  CommentAttachment = "COMMENT_ATTACHMENT",
  CoverImage = "COVER_IMAGE",
  EntryAttachment = "ENTRY_ATTACHMENT",
  FeaturedImage = "FEATURED_IMAGE"
}

export type MediaItemInput = {
  ariaLabel?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  destination?: InputMaybe<MediaItemDestination>;
  fileLastModified?: InputMaybe<Scalars["DateTime"]>;
  filename?: InputMaybe<Scalars["String"]>;
  filetype?: InputMaybe<MimeType>;
  height?: InputMaybe<Scalars["Float"]>;
  id?: InputMaybe<Scalars["String"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  size?: InputMaybe<Scalars["String"]>;
  src?: InputMaybe<Scalars["String"]>;
  srcSet?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
  uploadedAt?: InputMaybe<Scalars["DateTime"]>;
  width?: InputMaybe<Scalars["Float"]>;
};

export type MediaItemListRelationFilter = {
  every?: InputMaybe<MediaItemWhereInput>;
  none?: InputMaybe<MediaItemWhereInput>;
  some?: InputMaybe<MediaItemWhereInput>;
};

export type MediaItemRelationFilter = {
  is?: InputMaybe<MediaItemWhereInput>;
  isNot?: InputMaybe<MediaItemWhereInput>;
};

export type MediaItemWhereInput = {
  AND?: InputMaybe<Array<MediaItemWhereInput>>;
  NOT?: InputMaybe<Array<MediaItemWhereInput>>;
  OR?: InputMaybe<Array<MediaItemWhereInput>>;
  ariaLabel?: InputMaybe<StringNullableFilter>;
  caption?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  destination?: InputMaybe<EnumMediaItemDestinationNullableFilter>;
  fileLastModified?: InputMaybe<DateTimeNullableFilter>;
  filename?: InputMaybe<StringNullableFilter>;
  filetype?: InputMaybe<EnumMimeTypeNullableFilter>;
  height?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<StringFilter>;
  quality?: InputMaybe<IntNullableFilter>;
  size?: InputMaybe<StringNullableFilter>;
  src?: InputMaybe<StringNullableFilter>;
  srcSet?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  uploadedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  width?: InputMaybe<FloatNullableFilter>;
};

/** Mime Types */
export enum MimeType {
  Avif = "AVIF",
  Bmp = "BMP",
  Gif = "GIF",
  Jpeg = "JPEG",
  Png = "PNG",
  Svg = "SVG",
  Tiff = "TIFF",
  Webp = "WEBP"
}

export type Mutation = {
  __typename?: "Mutation";
  CreateNewUser?: Maybe<User>;
  DeleteUser?: Maybe<User>;
  createEntry?: Maybe<Entry>;
  createProfile?: Maybe<Profile>;
};

export type MutationCreateNewUserArgs = {
  email: Scalars["String"];
  expires: Scalars["Date"];
  image?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  sessionToken: Scalars["String"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"];
};

export type MutationCreateEntryArgs = {
  content?: InputMaybe<Scalars["String"]>;
  featuredImage?: InputMaybe<Scalars["String"]>;
  publish?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateProfileArgs = {
  dob?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  phoneNumber?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedEnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumMediaItemDestinationNullableFilter = {
  equals?: InputMaybe<MediaItemDestination>;
  in?: InputMaybe<Array<MediaItemDestination>>;
  not?: InputMaybe<NestedEnumMediaItemDestinationNullableFilter>;
  notIn?: InputMaybe<Array<MediaItemDestination>>;
};

export type NestedEnumMimeTypeNullableFilter = {
  equals?: InputMaybe<MimeType>;
  in?: InputMaybe<Array<MimeType>>;
  not?: InputMaybe<NestedEnumMimeTypeNullableFilter>;
  notIn?: InputMaybe<Array<MimeType>>;
};

export type NestedEnumPronounsNullableFilter = {
  equals?: InputMaybe<Pronouns>;
  in?: InputMaybe<Array<Pronouns>>;
  not?: InputMaybe<NestedEnumPronounsNullableFilter>;
  notIn?: InputMaybe<Array<Pronouns>>;
};

export type NestedEnumRoleNullableFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleNullableFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumUserStatusNullableFilter = {
  equals?: InputMaybe<UserStatus>;
  in?: InputMaybe<Array<UserStatus>>;
  not?: InputMaybe<NestedEnumUserStatusNullableFilter>;
  notIn?: InputMaybe<Array<UserStatus>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type Node = {
  id: Scalars["String"];
};

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: "PageInfo";
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars["String"]>;
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars["Boolean"];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars["Boolean"];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type PaginationArgsInput = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type Profile = Node & {
  __typename?: "Profile";
  activityFeed?: Maybe<Scalars["String"]>;
  bio?: Maybe<Bio>;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  coverPhoto?: Maybe<MediaItem>;
  dob?: Maybe<Scalars["Date"]>;
  gender?: Maybe<Gender>;
  id: Scalars["String"];
  lastSeen?: Maybe<Scalars["DateTime"]>;
  memberSince?: Maybe<Scalars["DateTime"]>;
  occupation?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["PhoneNumber"]>;
  pronouns?: Maybe<Pronouns>;
  recentActivity?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["String"]>;
};

export type ProfileConnection = {
  __typename?: "ProfileConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<ProfileEdge>>>;
  /** Flattened list of Profile type */
  nodes?: Maybe<Array<Maybe<Profile>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type ProfileEdge = {
  __typename?: "ProfileEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Profile>;
};

export type ProfileOrderBy = {
  memberSince?: InputMaybe<SortOrderEnum>;
};

export enum ProfileOrderByRelevanceFieldEnum {
  ActiviyFeed = "activiyFeed",
  Bio = "bio",
  City = "city",
  Country = "country",
  CoverPhoto = "coverPhoto",
  Dob = "dob",
  Id = "id",
  Occupation = "occupation",
  PhoneNumber = "phoneNumber",
  RecentActivity = "recentActivity",
  UserId = "userId"
}

export type ProfileOrderByRelevanceInput = {
  fields: Array<ProfileOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrderEnum;
};

export type ProfileOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<ProfileOrderByRelevanceInput>;
  activiyFeed?: InputMaybe<SortOrderEnum>;
  bio?: InputMaybe<SortOrderEnum>;
  city?: InputMaybe<SortOrderEnum>;
  country?: InputMaybe<SortOrderEnum>;
  coverPhoto?: InputMaybe<SortOrderEnum>;
  dob?: InputMaybe<SortOrderEnum>;
  gender?: InputMaybe<SortOrderEnum>;
  id: SortOrderEnum;
  lastSeen?: InputMaybe<SortOrderEnum>;
  memberSince?: InputMaybe<SortOrderEnum>;
  occupation?: InputMaybe<SortOrderEnum>;
  phoneNumber?: InputMaybe<SortOrderEnum>;
  pronouns?: InputMaybe<SortOrderEnum>;
  recentActivity?: InputMaybe<SortOrderEnum>;
  user?: InputMaybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: InputMaybe<SortOrderEnum>;
};

export type ProfileRelationFilter = {
  is?: InputMaybe<ProfileWhereInput>;
  isNot?: InputMaybe<ProfileWhereInput>;
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<ProfileWhereInput>>;
  NOT?: InputMaybe<Array<ProfileWhereInput>>;
  OR?: InputMaybe<Array<ProfileWhereInput>>;
  activiyFeed?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<BioRelationFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  coverPhoto?: InputMaybe<MediaItemRelationFilter>;
  dob?: InputMaybe<StringNullableFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastSeen?: InputMaybe<DateTimeNullableFilter>;
  memberSince?: InputMaybe<DateTimeFilter>;
  occupation?: InputMaybe<StringNullableFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  pronouns?: InputMaybe<EnumPronounsNullableFilter>;
  recentActivity?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

/** User pronouns */
export enum Pronouns {
  HeHimHis = "HE_HIM_HIS",
  NotListed = "NOT_LISTED",
  PreferNotToSay = "PREFER_NOT_TO_SAY",
  SheHerHers = "SHE_HER_HERS",
  TheyThemTheirs = "THEY_THEM_THEIRS"
}

export type Query = {
  __typename?: "Query";
  FilterUsers?: Maybe<UserConnection>;
  GetAllEntries?: Maybe<EntryConnection>;
  GetAllSessions?: Maybe<SessionConnection>;
  GetEntry?: Maybe<Entry>;
  GetSession?: Maybe<Session>;
  SearchByUserEmail?: Maybe<UserConnection>;
  SearchEntriesByTitle?: Maybe<EntryConnection>;
  accounts?: Maybe<AccountConnection>;
  allAccounts?: Maybe<AccountConnection>;
  allEntries?: Maybe<EntryConnection>;
  entries?: Maybe<EntryConnection>;
  entryFeed?: Maybe<EntryConnection>;
  getUserByAccount?: Maybe<AccountConnection>;
  node?: Maybe<Node>;
  profiles?: Maybe<ProfileConnection>;
  session?: Maybe<SessionConnection>;
  userAccount?: Maybe<AccountConnection>;
  userByEmail?: Maybe<User>;
  userById?: Maybe<User>;
  userEntries?: Maybe<EntryConnection>;
  usersQuery?: Maybe<UserConnection>;
  verificationTokens?: Maybe<VerificationTokenConnection>;
};

export type QueryFilterUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchString: Scalars["String"];
};

export type QueryGetAllEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchString: Scalars["String"];
  take?: InputMaybe<Scalars["Int"]>;
};

export type QueryGetAllSessionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy: SessionOrderBy;
};

export type QueryGetEntryArgs = {
  id: Scalars["String"];
};

export type QueryGetSessionArgs = {
  id: Scalars["String"];
};

export type QuerySearchByUserEmailArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  search?: Scalars["String"];
};

export type QuerySearchEntriesByTitleArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchString: Scalars["String"];
};

export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  userId: Scalars["String"];
};

export type QueryAllAccountsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
};

export type QueryAllEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type QueryEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryEntryFeedArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchString?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
};

export type QueryGetUserByAccountArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  id: Scalars["String"];
  last?: InputMaybe<Scalars["Int"]>;
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
};

export type QueryNodeArgs = {
  id: Scalars["String"];
};

export type QueryProfilesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy: SortOrderEnum;
};

export type QuerySessionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryUserAccountArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryUserByEmailArgs = {
  email: Scalars["String"];
};

export type QueryUserByIdArgs = {
  id: Scalars["String"];
};

export type QueryUserEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryUsersQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryVerificationTokensArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export enum QueryModeEnum {
  Default = "default",
  Insensitive = "insensitive"
}

/** Comment/Entry Reactions */
export enum Reaction {
  Angry = "ANGRY",
  Care = "CARE",
  Confused = "CONFUSED",
  Dislike = "DISLIKE",
  Laugh = "LAUGH",
  Like = "LIKE",
  Love = "LOVE",
  Parrot = "PARROT",
  Rocket = "ROCKET",
  Tears = "TEARS",
  Wow = "WOW"
}

/** User Role */
export enum Role {
  Admin = "ADMIN",
  Maintainer = "MAINTAINER",
  Superadmin = "SUPERADMIN",
  User = "USER"
}

export type Session = Node & {
  __typename?: "Session";
  expires?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  sessionToken?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["String"]>;
};

export type SessionConnection = {
  __typename?: "SessionConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<SessionEdge>>>;
  /** Flattened list of Session type */
  nodes?: Maybe<Array<Maybe<Session>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type SessionEdge = {
  __typename?: "SessionEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Session>;
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionOrderBy = {
  expires?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  sessionToken?: InputMaybe<SortOrderEnum>;
  userId?: InputMaybe<SortOrderEnum>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrderEnum>;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expires?: InputMaybe<DateTimeNullableFilter>;
  id: StringFilter;
  sessionToken?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

/** Direction in which to order one or more corresponding fields */
export enum SortOrderEnum {
  Asc = "asc",
  Desc = "desc"
}

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryModeEnum>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryModeEnum>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  search?: InputMaybe<Scalars["String"]>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars["String"]>>;
  has?: InputMaybe<Scalars["String"]>;
  hasEvery?: InputMaybe<Array<Scalars["String"]>>;
  hasSome?: InputMaybe<Array<Scalars["String"]>>;
  isEmpty?: InputMaybe<Scalars["Boolean"]>;
};

export type User = Node & {
  __typename?: "User";
  _count: UserCount;
  accounts?: Maybe<AccountConnection>;
  comments?: Maybe<CommentConnection>;
  email?: Maybe<Scalars["String"]>;
  emailVerified?: Maybe<Scalars["DateTime"]>;
  entries?: Maybe<EntryConnection>;
  id: Scalars["String"];
  image?: Maybe<Scalars["String"]>;
  imageMeta?: Maybe<MediaItem>;
  name?: Maybe<Scalars["String"]>;
  profile?: Maybe<Profile>;
  role?: Maybe<Role>;
  sessions?: Maybe<SessionConnection>;
  status?: Maybe<UserStatus>;
};

export type UserAccountsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserCommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserSessionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Flattened list of User type */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type UserCount = {
  __typename?: "UserCount";
  accounts: Scalars["Int"];
  comments: Scalars["Int"];
  entries: Scalars["Int"];
  sessions: Scalars["Int"];
};

export type UserEdge = {
  __typename?: "UserEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<User>;
};

export enum UserOrderByRelevanceFieldEnum {
  Email = "email",
  FirstName = "firstName",
  Id = "id",
  Image = "image",
  LastName = "lastName",
  Password = "password"
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars["String"];
  sort: SortOrderEnum;
};

export type UserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: InputMaybe<UserOrderByRelevanceInput>;
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrderEnum>;
  email?: InputMaybe<SortOrderEnum>;
  emailVerified?: InputMaybe<SortOrderEnum>;
  entries?: InputMaybe<EntryOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  profile?: InputMaybe<ProfileOrderByWithRelationAndSearchRelevanceInput>;
  role?: InputMaybe<SortOrderEnum>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldsEnum {
  CreatedAt = "createdAt",
  Email = "email",
  EmailVerified = "emailVerified",
  FirstName = "firstName",
  Id = "id",
  Image = "image",
  LastName = "lastName",
  Password = "password",
  Role = "role",
  Status = "status",
  UpdatedAt = "updatedAt"
}

/** User Status */
export enum UserStatus {
  Banned = "BANNED",
  Deactivated = "DEACTIVATED",
  Deleted = "DELETED",
  Offline = "OFFLINE",
  Online = "ONLINE",
  Suspended = "SUSPENDED"
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  entries?: InputMaybe<EntryListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  imageMeta?: InputMaybe<MediaItemRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  profile?: InputMaybe<ProfileRelationFilter>;
  role?: InputMaybe<EnumRoleNullableFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  status?: InputMaybe<EnumUserStatusNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

export type VerificationToken = Node & {
  __typename?: "VerificationToken";
  expires?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  identifier?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

export type VerificationTokenConnection = {
  __typename?: "VerificationTokenConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<VerificationTokenEdge>>>;
  /** Flattened list of VerificationToken type */
  nodes?: Maybe<Array<Maybe<VerificationToken>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type VerificationTokenEdge = {
  __typename?: "VerificationTokenEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars["String"];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<VerificationToken>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<Account>;
  AccountConnection: ResolverTypeWrapper<AccountConnection>;
  AccountEdge: ResolverTypeWrapper<AccountEdge>;
  AccountListRelationFilter: AccountListRelationFilter;
  AccountOrderBy: AccountOrderBy;
  AccountOrderByRelationAggregateInput: AccountOrderByRelationAggregateInput;
  AccountWhereInput: AccountWhereInput;
  Bio: ResolverTypeWrapper<Bio>;
  BioListRelationFilter: BioListRelationFilter;
  BioRelationFilter: BioRelationFilter;
  BioWhereInput: BioWhereInput;
  BoolFilter: BoolFilter;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Category: ResolverTypeWrapper<Category>;
  Comment: ResolverTypeWrapper<Comment>;
  CommentConnection: ResolverTypeWrapper<CommentConnection>;
  CommentEdge: ResolverTypeWrapper<CommentEdge>;
  CommentListRelationFilter: CommentListRelationFilter;
  CommentOrderByRelationAggregateInput: CommentOrderByRelationAggregateInput;
  CommentWhereInput: CommentWhereInput;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Entry: ResolverTypeWrapper<Entry>;
  EntryConnection: ResolverTypeWrapper<EntryConnection>;
  EntryCount: ResolverTypeWrapper<EntryCount>;
  EntryEdge: ResolverTypeWrapper<EntryEdge>;
  EntryListRelationFilter: EntryListRelationFilter;
  EntryOrderBy: EntryOrderBy;
  EntryOrderByRelationAggregateInput: EntryOrderByRelationAggregateInput;
  EntryRelationFilter: EntryRelationFilter;
  EntryWhereInput: EntryWhereInput;
  EnumCommentReactionsNullableListFilter: EnumCommentReactionsNullableListFilter;
  EnumGenderNullableFilter: EnumGenderNullableFilter;
  EnumMediaItemDestinationNullableFilter: EnumMediaItemDestinationNullableFilter;
  EnumMimeTypeNullableFilter: EnumMimeTypeNullableFilter;
  EnumPronounsNullableFilter: EnumPronounsNullableFilter;
  EnumRoleNullableFilter: EnumRoleNullableFilter;
  EnumUserStatusNullableFilter: EnumUserStatusNullableFilter;
  FindManyUsersPaginatedInput: FindManyUsersPaginatedInput;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  FloatNullableFilter: FloatNullableFilter;
  Gender: Gender;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  IntNullableFilter: IntNullableFilter;
  Json: ResolverTypeWrapper<Scalars["Json"]>;
  MediaItem: ResolverTypeWrapper<MediaItem>;
  MediaItemDestination: MediaItemDestination;
  MediaItemInput: MediaItemInput;
  MediaItemListRelationFilter: MediaItemListRelationFilter;
  MediaItemRelationFilter: MediaItemRelationFilter;
  MediaItemWhereInput: MediaItemWhereInput;
  MimeType: MimeType;
  Mutation: ResolverTypeWrapper<{}>;
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter;
  NestedEnumGenderNullableFilter: NestedEnumGenderNullableFilter;
  NestedEnumMediaItemDestinationNullableFilter: NestedEnumMediaItemDestinationNullableFilter;
  NestedEnumMimeTypeNullableFilter: NestedEnumMimeTypeNullableFilter;
  NestedEnumPronounsNullableFilter: NestedEnumPronounsNullableFilter;
  NestedEnumRoleNullableFilter: NestedEnumRoleNullableFilter;
  NestedEnumUserStatusNullableFilter: NestedEnumUserStatusNullableFilter;
  NestedFloatNullableFilter: NestedFloatNullableFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Node:
    | ResolversTypes["Account"]
    | ResolversTypes["Comment"]
    | ResolversTypes["Entry"]
    | ResolversTypes["Profile"]
    | ResolversTypes["Session"]
    | ResolversTypes["User"]
    | ResolversTypes["VerificationToken"];
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginationArgsInput: PaginationArgsInput;
  PhoneNumber: ResolverTypeWrapper<Scalars["PhoneNumber"]>;
  Profile: ResolverTypeWrapper<Profile>;
  ProfileConnection: ResolverTypeWrapper<ProfileConnection>;
  ProfileEdge: ResolverTypeWrapper<ProfileEdge>;
  ProfileOrderBy: ProfileOrderBy;
  ProfileOrderByRelevanceFieldEnum: ProfileOrderByRelevanceFieldEnum;
  ProfileOrderByRelevanceInput: ProfileOrderByRelevanceInput;
  ProfileOrderByWithRelationAndSearchRelevanceInput: ProfileOrderByWithRelationAndSearchRelevanceInput;
  ProfileRelationFilter: ProfileRelationFilter;
  ProfileWhereInput: ProfileWhereInput;
  Pronouns: Pronouns;
  Query: ResolverTypeWrapper<{}>;
  QueryModeEnum: QueryModeEnum;
  Reaction: Reaction;
  Role: Role;
  Session: ResolverTypeWrapper<Session>;
  SessionConnection: ResolverTypeWrapper<SessionConnection>;
  SessionEdge: ResolverTypeWrapper<SessionEdge>;
  SessionListRelationFilter: SessionListRelationFilter;
  SessionOrderBy: SessionOrderBy;
  SessionOrderByRelationAggregateInput: SessionOrderByRelationAggregateInput;
  SessionWhereInput: SessionWhereInput;
  SortOrderEnum: SortOrderEnum;
  String: ResolverTypeWrapper<Scalars["String"]>;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableListFilter: StringNullableListFilter;
  Time: ResolverTypeWrapper<Scalars["Time"]>;
  UUID: ResolverTypeWrapper<Scalars["UUID"]>;
  Upload: ResolverTypeWrapper<Scalars["Upload"]>;
  User: ResolverTypeWrapper<User>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserCount: ResolverTypeWrapper<UserCount>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserOrderByRelevanceFieldEnum: UserOrderByRelevanceFieldEnum;
  UserOrderByRelevanceInput: UserOrderByRelevanceInput;
  UserOrderByWithRelationAndSearchRelevanceInput: UserOrderByWithRelationAndSearchRelevanceInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarFieldsEnum: UserScalarFieldsEnum;
  UserStatus: UserStatus;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  VerificationToken: ResolverTypeWrapper<VerificationToken>;
  VerificationTokenConnection: ResolverTypeWrapper<VerificationTokenConnection>;
  VerificationTokenEdge: ResolverTypeWrapper<VerificationTokenEdge>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  AccountConnection: AccountConnection;
  AccountEdge: AccountEdge;
  AccountListRelationFilter: AccountListRelationFilter;
  AccountOrderBy: AccountOrderBy;
  AccountOrderByRelationAggregateInput: AccountOrderByRelationAggregateInput;
  AccountWhereInput: AccountWhereInput;
  Bio: Bio;
  BioListRelationFilter: BioListRelationFilter;
  BioRelationFilter: BioRelationFilter;
  BioWhereInput: BioWhereInput;
  BoolFilter: BoolFilter;
  Boolean: Scalars["Boolean"];
  Category: Category;
  Comment: Comment;
  CommentConnection: CommentConnection;
  CommentEdge: CommentEdge;
  CommentListRelationFilter: CommentListRelationFilter;
  CommentOrderByRelationAggregateInput: CommentOrderByRelationAggregateInput;
  CommentWhereInput: CommentWhereInput;
  Date: Scalars["Date"];
  DateTime: Scalars["DateTime"];
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  Entry: Entry;
  EntryConnection: EntryConnection;
  EntryCount: EntryCount;
  EntryEdge: EntryEdge;
  EntryListRelationFilter: EntryListRelationFilter;
  EntryOrderBy: EntryOrderBy;
  EntryOrderByRelationAggregateInput: EntryOrderByRelationAggregateInput;
  EntryRelationFilter: EntryRelationFilter;
  EntryWhereInput: EntryWhereInput;
  EnumCommentReactionsNullableListFilter: EnumCommentReactionsNullableListFilter;
  EnumGenderNullableFilter: EnumGenderNullableFilter;
  EnumMediaItemDestinationNullableFilter: EnumMediaItemDestinationNullableFilter;
  EnumMimeTypeNullableFilter: EnumMimeTypeNullableFilter;
  EnumPronounsNullableFilter: EnumPronounsNullableFilter;
  EnumRoleNullableFilter: EnumRoleNullableFilter;
  EnumUserStatusNullableFilter: EnumUserStatusNullableFilter;
  FindManyUsersPaginatedInput: FindManyUsersPaginatedInput;
  Float: Scalars["Float"];
  FloatNullableFilter: FloatNullableFilter;
  Int: Scalars["Int"];
  IntNullableFilter: IntNullableFilter;
  Json: Scalars["Json"];
  MediaItem: MediaItem;
  MediaItemInput: MediaItemInput;
  MediaItemListRelationFilter: MediaItemListRelationFilter;
  MediaItemRelationFilter: MediaItemRelationFilter;
  MediaItemWhereInput: MediaItemWhereInput;
  Mutation: {};
  NestedBoolFilter: NestedBoolFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter;
  NestedEnumGenderNullableFilter: NestedEnumGenderNullableFilter;
  NestedEnumMediaItemDestinationNullableFilter: NestedEnumMediaItemDestinationNullableFilter;
  NestedEnumMimeTypeNullableFilter: NestedEnumMimeTypeNullableFilter;
  NestedEnumPronounsNullableFilter: NestedEnumPronounsNullableFilter;
  NestedEnumRoleNullableFilter: NestedEnumRoleNullableFilter;
  NestedEnumUserStatusNullableFilter: NestedEnumUserStatusNullableFilter;
  NestedFloatNullableFilter: NestedFloatNullableFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Node:
    | ResolversParentTypes["Account"]
    | ResolversParentTypes["Comment"]
    | ResolversParentTypes["Entry"]
    | ResolversParentTypes["Profile"]
    | ResolversParentTypes["Session"]
    | ResolversParentTypes["User"]
    | ResolversParentTypes["VerificationToken"];
  PageInfo: PageInfo;
  PaginationArgsInput: PaginationArgsInput;
  PhoneNumber: Scalars["PhoneNumber"];
  Profile: Profile;
  ProfileConnection: ProfileConnection;
  ProfileEdge: ProfileEdge;
  ProfileOrderBy: ProfileOrderBy;
  ProfileOrderByRelevanceInput: ProfileOrderByRelevanceInput;
  ProfileOrderByWithRelationAndSearchRelevanceInput: ProfileOrderByWithRelationAndSearchRelevanceInput;
  ProfileRelationFilter: ProfileRelationFilter;
  ProfileWhereInput: ProfileWhereInput;
  Query: {};
  Session: Session;
  SessionConnection: SessionConnection;
  SessionEdge: SessionEdge;
  SessionListRelationFilter: SessionListRelationFilter;
  SessionOrderBy: SessionOrderBy;
  SessionOrderByRelationAggregateInput: SessionOrderByRelationAggregateInput;
  SessionWhereInput: SessionWhereInput;
  String: Scalars["String"];
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  StringNullableListFilter: StringNullableListFilter;
  Time: Scalars["Time"];
  UUID: Scalars["UUID"];
  Upload: Scalars["Upload"];
  User: User;
  UserConnection: UserConnection;
  UserCount: UserCount;
  UserEdge: UserEdge;
  UserOrderByRelevanceInput: UserOrderByRelevanceInput;
  UserOrderByWithRelationAndSearchRelevanceInput: UserOrderByWithRelationAndSearchRelevanceInput;
  UserRelationFilter: UserRelationFilter;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  VerificationToken: VerificationToken;
  VerificationTokenConnection: VerificationTokenConnection;
  VerificationTokenEdge: VerificationTokenEdge;
}>;

export type AccountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Account"] = ResolversParentTypes["Account"]
> = ResolversObject<{
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expires_at?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id_token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  oauth_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  oauth_token_secret?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  provider?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  providerAccountId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  refresh_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  scope?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  session_state?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token_type?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AccountConnection"] = ResolversParentTypes["AccountConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["AccountEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Account"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AccountEdge"] = ResolversParentTypes["AccountEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Account"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BioResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Bio"] = ResolversParentTypes["Bio"]
> = ResolversObject<{
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  headline?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  intro?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Category"] = ResolversParentTypes["Category"]
> = ResolversObject<{
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  creatorId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  root?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"]
> = ResolversObject<{
  attachment?: Resolver<
    Maybe<ResolversTypes["MediaItem"]>,
    ParentType,
    ContextType
  >;
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  entry?: Resolver<Maybe<ResolversTypes["Entry"]>, ParentType, ContextType>;
  entryId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  reactions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Reaction"]>>>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommentConnection"] = ResolversParentTypes["CommentConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["CommentEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Comment"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["CommentEdge"] = ResolversParentTypes["CommentEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Comment"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type EntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Entry"] = ResolversParentTypes["Entry"]
> = ResolversObject<{
  _count?: Resolver<ResolversTypes["EntryCount"], ParentType, ContextType>;
  attachments?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["MediaItem"]>>>,
    ParentType,
    ContextType
  >;
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  categories?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Category"]>>>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    Maybe<ResolversTypes["CommentConnection"]>,
    ParentType,
    ContextType,
    RequireFields<EntryCommentsArgs, "searchString">
  >;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  featuredImage?: Resolver<
    Maybe<ResolversTypes["MediaItem"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  published?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  reactions?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Reaction"]>>>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EntryConnection"] = ResolversParentTypes["EntryConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["EntryEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Entry"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EntryCount"] = ResolversParentTypes["EntryCount"]
> = ResolversObject<{
  comments?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["EntryEdge"] = ResolversParentTypes["EntryEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Entry"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Json"], any> {
  name: "Json";
}

export type MediaItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MediaItem"] = ResolversParentTypes["MediaItem"]
> = ResolversObject<{
  ariaLabel?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  caption?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  destination?: Resolver<
    Maybe<ResolversTypes["MediaItemDestination"]>,
    ParentType,
    ContextType
  >;
  fileLastModified?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  filename?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  filetype?: Resolver<
    Maybe<ResolversTypes["MimeType"]>,
    ParentType,
    ContextType
  >;
  height?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  quality?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  src?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  srcSet?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  uploadedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  width?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  CreateNewUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateNewUserArgs,
      "email" | "expires" | "sessionToken"
    >
  >;
  DeleteUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, "id">
  >;
  createEntry?: Resolver<
    Maybe<ResolversTypes["Entry"]>,
    ParentType,
    ContextType,
    Partial<MutationCreateEntryArgs>
  >;
  createProfile?: Resolver<
    Maybe<ResolversTypes["Profile"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateProfileArgs, "email">
  >;
}>;

export type NodeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Node"] = ResolversParentTypes["Node"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | "Account"
    | "Comment"
    | "Entry"
    | "Profile"
    | "Session"
    | "User"
    | "VerificationToken",
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
}>;

export type PageInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["PageInfo"] = ResolversParentTypes["PageInfo"]
> = ResolversObject<{
  endCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  hasNextPage?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  hasPreviousPage?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  startCursor?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface PhoneNumberScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PhoneNumber"], any> {
  name: "PhoneNumber";
}

export type ProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Profile"] = ResolversParentTypes["Profile"]
> = ResolversObject<{
  activityFeed?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  bio?: Resolver<Maybe<ResolversTypes["Bio"]>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  coverPhoto?: Resolver<
    Maybe<ResolversTypes["MediaItem"]>,
    ParentType,
    ContextType
  >;
  dob?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes["Gender"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastSeen?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  memberSince?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  occupation?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["PhoneNumber"]>,
    ParentType,
    ContextType
  >;
  pronouns?: Resolver<
    Maybe<ResolversTypes["Pronouns"]>,
    ParentType,
    ContextType
  >;
  recentActivity?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileConnection"] = ResolversParentTypes["ProfileConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ProfileEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Profile"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProfileEdge"] = ResolversParentTypes["ProfileEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Profile"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  FilterUsers?: Resolver<
    Maybe<ResolversTypes["UserConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFilterUsersArgs, "searchString">
  >;
  GetAllEntries?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetAllEntriesArgs, "searchString">
  >;
  GetAllSessions?: Resolver<
    Maybe<ResolversTypes["SessionConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetAllSessionsArgs, "orderBy">
  >;
  GetEntry?: Resolver<
    Maybe<ResolversTypes["Entry"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetEntryArgs, "id">
  >;
  GetSession?: Resolver<
    Maybe<ResolversTypes["Session"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSessionArgs, "id">
  >;
  SearchByUserEmail?: Resolver<
    Maybe<ResolversTypes["UserConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchByUserEmailArgs, "search">
  >;
  SearchEntriesByTitle?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchEntriesByTitleArgs, "searchString">
  >;
  accounts?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAccountsArgs, "userId">
  >;
  allAccounts?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAllAccountsArgs, "take">
  >;
  allEntries?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryAllEntriesArgs, "take">
  >;
  entries?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    Partial<QueryEntriesArgs>
  >;
  entryFeed?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryEntryFeedArgs, "searchString" | "skip" | "take">
  >;
  getUserByAccount?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    RequireFields<
      QueryGetUserByAccountArgs,
      "id" | "provider" | "providerAccountId"
    >
  >;
  node?: Resolver<
    Maybe<ResolversTypes["Node"]>,
    ParentType,
    ContextType,
    RequireFields<QueryNodeArgs, "id">
  >;
  profiles?: Resolver<
    Maybe<ResolversTypes["ProfileConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryProfilesArgs, "orderBy">
  >;
  session?: Resolver<
    Maybe<ResolversTypes["SessionConnection"]>,
    ParentType,
    ContextType,
    Partial<QuerySessionArgs>
  >;
  userAccount?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    Partial<QueryUserAccountArgs>
  >;
  userByEmail?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByEmailArgs, "email">
  >;
  userById?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserByIdArgs, "id">
  >;
  userEntries?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    Partial<QueryUserEntriesArgs>
  >;
  usersQuery?: Resolver<
    Maybe<ResolversTypes["UserConnection"]>,
    ParentType,
    ContextType,
    Partial<QueryUsersQueryArgs>
  >;
  verificationTokens?: Resolver<
    Maybe<ResolversTypes["VerificationTokenConnection"]>,
    ParentType,
    ContextType,
    Partial<QueryVerificationTokensArgs>
  >;
}>;

export type SessionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Session"] = ResolversParentTypes["Session"]
> = ResolversObject<{
  expires?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sessionToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SessionConnection"] = ResolversParentTypes["SessionConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["SessionEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Session"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SessionEdge"] = ResolversParentTypes["SessionEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Session"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Time"], any> {
  name: "Time";
}

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["UUID"], any> {
  name: "UUID";
}

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  _count?: Resolver<ResolversTypes["UserCount"], ParentType, ContextType>;
  accounts?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    Partial<UserAccountsArgs>
  >;
  comments?: Resolver<
    Maybe<ResolversTypes["CommentConnection"]>,
    ParentType,
    ContextType,
    Partial<UserCommentsArgs>
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  entries?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    Partial<UserEntriesArgs>
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  imageMeta?: Resolver<
    Maybe<ResolversTypes["MediaItem"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes["Profile"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["Role"]>, ParentType, ContextType>;
  sessions?: Resolver<
    Maybe<ResolversTypes["SessionConnection"]>,
    ParentType,
    ContextType,
    Partial<UserSessionsArgs>
  >;
  status?: Resolver<
    Maybe<ResolversTypes["UserStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserConnection"] = ResolversParentTypes["UserConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["UserEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserCount"] = ResolversParentTypes["UserCount"]
> = ResolversObject<{
  accounts?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  sessions?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["UserEdge"] = ResolversParentTypes["UserEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["VerificationToken"] = ResolversParentTypes["VerificationToken"]
> = ResolversObject<{
  expires?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  identifier?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["VerificationTokenConnection"] = ResolversParentTypes["VerificationTokenConnection"]
> = ResolversObject<{
  edges?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["VerificationTokenEdge"]>>>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["VerificationToken"]>>>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenEdgeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["VerificationTokenEdge"] = ResolversParentTypes["VerificationTokenEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes["VerificationToken"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountConnection?: AccountConnectionResolvers<ContextType>;
  AccountEdge?: AccountEdgeResolvers<ContextType>;
  Bio?: BioResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentConnection?: CommentConnectionResolvers<ContextType>;
  CommentEdge?: CommentEdgeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  EntryConnection?: EntryConnectionResolvers<ContextType>;
  EntryCount?: EntryCountResolvers<ContextType>;
  EntryEdge?: EntryEdgeResolvers<ContextType>;
  Json?: GraphQLScalarType;
  MediaItem?: MediaItemResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PhoneNumber?: GraphQLScalarType;
  Profile?: ProfileResolvers<ContextType>;
  ProfileConnection?: ProfileConnectionResolvers<ContextType>;
  ProfileEdge?: ProfileEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  SessionConnection?: SessionConnectionResolvers<ContextType>;
  SessionEdge?: SessionEdgeResolvers<ContextType>;
  Time?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserCount?: UserCountResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  VerificationToken?: VerificationTokenResolvers<ContextType>;
  VerificationTokenConnection?: VerificationTokenConnectionResolvers<ContextType>;
  VerificationTokenEdge?: VerificationTokenEdgeResolvers<ContextType>;
}>;
