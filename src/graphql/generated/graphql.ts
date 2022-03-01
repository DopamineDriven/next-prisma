import { Context } from "@/server/Context/index";
import { Upload } from "graphql-upload";
import {
  GraphQLDate,
  GraphQLDateTime,
  GraphQLTime,
  GraphQLJSON,
  GraphQLJSONObject,
  JSONResolver,
  GraphQLBigInt
} from "graphql-scalars";
import { DeepPartial } from "utility-types";
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
import { gql } from "@apollo/client";
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
export type FieldWrapper<T> = T;
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
  Date: typeof GraphQLDate;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: typeof GraphQLJSON;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: typeof String;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: typeof GraphQLTime;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: typeof String;
  /** The `Upload` scalar type represents a file upload. */
  Upload: File;
};

export type Account = Node & {
  __typename?: "Account";
  access_token?: Maybe<FieldWrapper<Scalars["String"]>>;
  expires_at?: Maybe<FieldWrapper<Scalars["Int"]>>;
  id?: Maybe<FieldWrapper<Scalars["ID"]>>;
  id_token?: Maybe<FieldWrapper<Scalars["String"]>>;
  oauth_token?: Maybe<FieldWrapper<Scalars["String"]>>;
  oauth_token_secret?: Maybe<FieldWrapper<Scalars["String"]>>;
  provider?: Maybe<FieldWrapper<Scalars["String"]>>;
  providerAccountId?: Maybe<FieldWrapper<Scalars["String"]>>;
  refresh_token?: Maybe<FieldWrapper<Scalars["String"]>>;
  scope?: Maybe<FieldWrapper<Scalars["String"]>>;
  session_state?: Maybe<FieldWrapper<Scalars["String"]>>;
  token_type?: Maybe<FieldWrapper<Scalars["String"]>>;
  type?: Maybe<FieldWrapper<Scalars["String"]>>;
  user?: Maybe<FieldWrapper<User>>;
  userId?: Maybe<FieldWrapper<Scalars["String"]>>;
};

export type AccountConnection = {
  __typename?: "AccountConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<FieldWrapper<AccountEdge>>>>;
  /** Flattened list of Account type */
  nodes?: Maybe<Array<Maybe<FieldWrapper<Account>>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
};

export type AccountEdge = {
  __typename?: "AccountEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<FieldWrapper<Account>>;
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
  body?: Maybe<FieldWrapper<Scalars["String"]>>;
  createdAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  intro?: Maybe<FieldWrapper<Scalars["String"]>>;
  status?: Maybe<FieldWrapper<Scalars["String"]>>;
  updatedAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Comment = Node & {
  __typename?: "Comment";
  author?: Maybe<FieldWrapper<User>>;
  authorId?: Maybe<FieldWrapper<Scalars["String"]>>;
  body?: Maybe<FieldWrapper<Scalars["String"]>>;
  createdAt: FieldWrapper<Scalars["DateTime"]>;
  entry?: Maybe<FieldWrapper<Entry>>;
  entryId?: Maybe<FieldWrapper<Scalars["String"]>>;
  id: FieldWrapper<Scalars["ID"]>;
  position?: Maybe<FieldWrapper<Scalars["String"]>>;
  reactions?: Maybe<Array<Maybe<FieldWrapper<Reaction>>>>;
  updatedAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
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
  author?: Maybe<FieldWrapper<User>>;
  content?: Maybe<FieldWrapper<Scalars["String"]>>;
  createdAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  featuredImage?: Maybe<FieldWrapper<Scalars["String"]>>;
  id?: Maybe<FieldWrapper<Scalars["ID"]>>;
  published?: Maybe<FieldWrapper<Scalars["Boolean"]>>;
  title?: Maybe<FieldWrapper<Scalars["String"]>>;
  updatedAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  userId?: Maybe<FieldWrapper<Scalars["String"]>>;
};

export type EntryConnection = {
  __typename?: "EntryConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<FieldWrapper<EntryEdge>>>>;
  /** Flattened list of Entry type */
  nodes?: Maybe<Array<Maybe<FieldWrapper<Entry>>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
};

export type EntryEdge = {
  __typename?: "EntryEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<FieldWrapper<Entry>>;
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
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringNullableFilter>;
  categoryId?: InputMaybe<StringNullableFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  featuredImage?: InputMaybe<StringNullableFilter>;
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

/** User Gender */
export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
  OTHER = "OTHER",
  UNCERTAIN = "UNCERTAIN"
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
  ariaLabel?: Maybe<FieldWrapper<Scalars["String"]>>;
  caption?: Maybe<FieldWrapper<Scalars["String"]>>;
  destination?: Maybe<FieldWrapper<MediaItemDestination>>;
  fileLastModified?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  filename?: Maybe<FieldWrapper<Scalars["String"]>>;
  filetype?: Maybe<FieldWrapper<MimeType>>;
  height: FieldWrapper<Scalars["Float"]>;
  mediaItemId?: Maybe<FieldWrapper<Scalars["String"]>>;
  quality: FieldWrapper<Scalars["Int"]>;
  size?: Maybe<FieldWrapper<Scalars["String"]>>;
  src?: Maybe<FieldWrapper<Scalars["String"]>>;
  srcSet?: Maybe<FieldWrapper<Scalars["String"]>>;
  title?: Maybe<FieldWrapper<Scalars["String"]>>;
  updatedAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  uploadedAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  width: FieldWrapper<Scalars["Float"]>;
};

/** Media Item Destination */
export enum MediaItemDestination {
  AVATAR = "AVATAR",
  COMMENT_ATTACHMENT = "COMMENT_ATTACHMENT",
  COVER_IMAGE = "COVER_IMAGE",
  ENTRY_ATTACHMENT = "ENTRY_ATTACHMENT",
  FEATURED_IMAGE = "FEATURED_IMAGE"
}

/** Mime Types */
export enum MimeType {
  AVIF = "AVIF",
  BMP = "BMP",
  GIF = "GIF",
  JPEG = "JPEG",
  PNG = "PNG",
  SVG = "SVG",
  TIFF = "TIFF",
  WEBP = "WEBP"
}

export type Mutation = {
  __typename?: "Mutation";
  CreateNewUser?: Maybe<FieldWrapper<User>>;
  DeleteUser?: Maybe<FieldWrapper<User>>;
  createEntry?: Maybe<FieldWrapper<Entry>>;
  createProfile?: Maybe<FieldWrapper<Profile>>;
};

export type MutationCreateNewUserArgs = {
  email: Scalars["String"];
  firstName?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  role?: Role;
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"];
};

export type MutationcreateEntryArgs = {
  content?: InputMaybe<Scalars["String"]>;
  featuredImage?: InputMaybe<Scalars["String"]>;
  publish?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type MutationcreateProfileArgs = {
  bio?: InputMaybe<Scalars["String"]>;
  coverImage?: InputMaybe<Scalars["String"]>;
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
  id?: Maybe<FieldWrapper<Scalars["ID"]>>;
};

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: "PageInfo";
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<FieldWrapper<Scalars["String"]>>;
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: FieldWrapper<Scalars["Boolean"]>;
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: FieldWrapper<Scalars["Boolean"]>;
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<FieldWrapper<Scalars["String"]>>;
};

export type PaginationArgsInput = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type Profile = Node & {
  __typename?: "Profile";
  coverImage?: Maybe<FieldWrapper<Scalars["String"]>>;
  dob?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  id?: Maybe<FieldWrapper<Scalars["ID"]>>;
  memberSince?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  phoneNumber?: Maybe<FieldWrapper<Scalars["PhoneNumber"]>>;
  user?: Maybe<FieldWrapper<User>>;
  userId?: Maybe<FieldWrapper<Scalars["String"]>>;
};

export type ProfiledobArgs = {
  type?: InputMaybe<Scalars["DateTime"]>;
};

export type ProfilememberSinceArgs = {
  type?: InputMaybe<Scalars["DateTime"]>;
};

export type ProfileConnection = {
  __typename?: "ProfileConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<FieldWrapper<ProfileEdge>>>>;
  /** Flattened list of Profile type */
  nodes?: Maybe<Array<Maybe<FieldWrapper<Profile>>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
};

export type ProfileEdge = {
  __typename?: "ProfileEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<FieldWrapper<Profile>>;
};

export type ProfileOrderBy = {
  memberSince?: InputMaybe<SortOrderEnum>;
};

export enum ProfileOrderByRelevanceFieldEnum {
  activiyFeed = "activiyFeed",
  bio = "bio",
  city = "city",
  country = "country",
  coverPhoto = "coverPhoto",
  dob = "dob",
  id = "id",
  occupation = "occupation",
  phoneNumber = "phoneNumber",
  recentActivity = "recentActivity",
  userId = "userId"
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
  id?: InputMaybe<SortOrderEnum>;
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
  bio?: InputMaybe<StringNullableFilter>;
  city?: InputMaybe<StringNullableFilter>;
  country?: InputMaybe<StringNullableFilter>;
  coverPhoto?: InputMaybe<StringNullableFilter>;
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
  HE_HIM_HIS = "HE_HIM_HIS",
  NOT_LISTED = "NOT_LISTED",
  PREFER_NOT_TO_SAY = "PREFER_NOT_TO_SAY",
  SHE_HER_HERS = "SHE_HER_HERS",
  THEY_THEM_THEIRS = "THEY_THEM_THEIRS"
}

export type Query = {
  __typename?: "Query";
  ActiveFilter?: Maybe<FieldWrapper<AccountConnection>>;
  FilterUsers?: Maybe<FieldWrapper<UserConnection>>;
  SearchByUserEmail?: Maybe<FieldWrapper<UserConnection>>;
  accounts?: Maybe<FieldWrapper<AccountConnection>>;
  allAccounts?: Maybe<FieldWrapper<AccountConnection>>;
  allEntries?: Maybe<FieldWrapper<EntryConnection>>;
  entryFeed?: Maybe<FieldWrapper<EntryConnection>>;
  node?: Maybe<FieldWrapper<Node>>;
  userEntries?: Maybe<FieldWrapper<EntryConnection>>;
  usersQuery?: Maybe<FieldWrapper<UserConnection>>;
  viewer?: Maybe<FieldWrapper<Viewer>>;
};

export type QueryActiveFilterArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryFilterUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchString: Scalars["String"];
};

export type QuerySearchByUserEmailArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  search?: Scalars["String"];
};

export type QueryaccountsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  userId: Scalars["String"];
};

export type QueryallAccountsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
};

export type QueryallEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  take: Scalars["Int"];
};

export type QueryentryFeedArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchString?: InputMaybe<Scalars["String"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
};

export type QuerynodeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryuserEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["String"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryusersQueryArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryviewerArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export enum QueryModeEnum {
  default = "default",
  insensitive = "insensitive"
}

/** Comment/Entry Reactions */
export enum Reaction {
  ANGRY = "ANGRY",
  CARE = "CARE",
  CONFUSED = "CONFUSED",
  DISLIKE = "DISLIKE",
  LAUGH = "LAUGH",
  LIKE = "LIKE",
  LOVE = "LOVE",
  PARROT = "PARROT",
  ROCKET = "ROCKET",
  TEARS = "TEARS",
  WOW = "WOW"
}

/** User Role */
export enum Role {
  ADMIN = "ADMIN",
  MAINTAINER = "MAINTAINER",
  SUPERADMIN = "SUPERADMIN",
  USER = "USER"
}

export type Session = Node & {
  __typename?: "Session";
  expires?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  id?: Maybe<FieldWrapper<Scalars["ID"]>>;
  sessionToken?: Maybe<FieldWrapper<Scalars["String"]>>;
  user?: Maybe<FieldWrapper<User>>;
  userId?: Maybe<FieldWrapper<Scalars["String"]>>;
};

export type SessionConnection = {
  __typename?: "SessionConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<FieldWrapper<SessionEdge>>>>;
  /** Flattened list of Session type */
  nodes?: Maybe<Array<Maybe<FieldWrapper<Session>>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
};

export type SessionEdge = {
  __typename?: "SessionEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<FieldWrapper<Session>>;
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
  accessToken?: InputMaybe<StringNullableFilter>;
  alg?: InputMaybe<StringNullableFilter>;
  exp?: InputMaybe<IntNullableFilter>;
  iat?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastVerified?: InputMaybe<DateTimeNullableFilter>;
  provider?: InputMaybe<StringNullableFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  scopes?: InputMaybe<StringNullableListFilter>;
  signature?: InputMaybe<StringNullableFilter>;
  tokenState?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

/** Direction in which to order one or more corresponding fields */
export enum SortOrderEnum {
  asc = "asc",
  desc = "desc"
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
  _count: FieldWrapper<UserCount>;
  accounts?: Maybe<FieldWrapper<AccountConnection>>;
  email?: Maybe<FieldWrapper<Scalars["String"]>>;
  emailVerified?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  entries?: Maybe<FieldWrapper<EntryConnection>>;
  firstName?: Maybe<FieldWrapper<Scalars["String"]>>;
  id: FieldWrapper<Scalars["ID"]>;
  image?: Maybe<FieldWrapper<Scalars["String"]>>;
  imageMeta?: Maybe<FieldWrapper<MediaItem>>;
  lastName?: Maybe<FieldWrapper<Scalars["String"]>>;
  password?: Maybe<FieldWrapper<Scalars["String"]>>;
  profile?: Maybe<FieldWrapper<Profile>>;
  role?: Maybe<FieldWrapper<Role>>;
  sessions?: Maybe<FieldWrapper<SessionConnection>>;
  status?: Maybe<FieldWrapper<UserStatus>>;
};

export type UseraccountsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserentriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UsersessionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<FieldWrapper<UserEdge>>>>;
  /** Flattened list of User type */
  nodes?: Maybe<Array<Maybe<FieldWrapper<User>>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
};

export type UserCount = {
  __typename?: "UserCount";
  accounts: FieldWrapper<Scalars["Int"]>;
  comments: FieldWrapper<Scalars["Int"]>;
  entries: FieldWrapper<Scalars["Int"]>;
  sessions: FieldWrapper<Scalars["Int"]>;
};

export type UserEdge = {
  __typename?: "UserEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<FieldWrapper<User>>;
};

export enum UserOrderByRelevanceFieldEnum {
  email = "email",
  firstName = "firstName",
  id = "id",
  image = "image",
  lastName = "lastName",
  password = "password"
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
  firstName?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<SortOrderEnum>;
  lastName?: InputMaybe<SortOrderEnum>;
  password?: InputMaybe<SortOrderEnum>;
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
  createdAt = "createdAt",
  email = "email",
  emailVerified = "emailVerified",
  firstName = "firstName",
  id = "id",
  image = "image",
  lastName = "lastName",
  password = "password",
  role = "role",
  status = "status",
  updatedAt = "updatedAt"
}

/** User Status */
export enum UserStatus {
  BANNED = "BANNED",
  DEACTIVATED = "DEACTIVATED",
  DELETED = "DELETED",
  OFFLINE = "OFFLINE",
  ONLINE = "ONLINE",
  SUSPENDED = "SUSPENDED"
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
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
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
  expires?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  id?: Maybe<FieldWrapper<Scalars["ID"]>>;
  identifier?: Maybe<FieldWrapper<Scalars["String"]>>;
  token?: Maybe<FieldWrapper<Scalars["String"]>>;
};

export type VerificationTokenConnection = {
  __typename?: "VerificationTokenConnection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<FieldWrapper<VerificationTokenEdge>>>>;
  /** Flattened list of VerificationToken type */
  nodes?: Maybe<Array<Maybe<FieldWrapper<VerificationToken>>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
};

export type VerificationTokenEdge = {
  __typename?: "VerificationTokenEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<FieldWrapper<VerificationToken>>;
};

export type Viewer = Node & {
  __typename?: "Viewer";
  GetAllEntries?: Maybe<FieldWrapper<EntryConnection>>;
  GetAllSessions?: Maybe<FieldWrapper<SessionConnection>>;
  GetEntry?: Maybe<FieldWrapper<Entry>>;
  GetSession?: Maybe<FieldWrapper<Session>>;
  SearchEntriesByTitle?: Maybe<FieldWrapper<EntryConnection>>;
  entries?: Maybe<FieldWrapper<EntryConnection>>;
  getUserByAccount?: Maybe<FieldWrapper<AccountConnection>>;
  id?: Maybe<FieldWrapper<Scalars["ID"]>>;
  profiles?: Maybe<FieldWrapper<ProfileConnection>>;
  session?: Maybe<FieldWrapper<SessionConnection>>;
  userAccount?: Maybe<FieldWrapper<AccountConnection>>;
  userByEmail?: Maybe<FieldWrapper<User>>;
  userById?: Maybe<FieldWrapper<User>>;
  verificationTokens?: Maybe<FieldWrapper<VerificationTokenConnection>>;
};

export type ViewerGetAllEntriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchString: Scalars["String"];
  take?: InputMaybe<Scalars["Int"]>;
};

export type ViewerGetAllSessionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy: SessionOrderBy;
};

export type ViewerGetEntryArgs = {
  id: Scalars["String"];
};

export type ViewerGetSessionArgs = {
  id: Scalars["String"];
};

export type ViewerSearchEntriesByTitleArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchString: Scalars["String"];
};

export type ViewerentriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ViewergetUserByAccountArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  id: Scalars["String"];
  last?: InputMaybe<Scalars["Int"]>;
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
};

export type ViewerprofilesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type ViewersessionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type VieweruserAccountArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type VieweruserByEmailArgs = {
  email: Scalars["String"];
};

export type VieweruserByIdArgs = {
  id: Scalars["String"];
};

export type ViewerverificationTokensArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export const PageInfoPartial = gql`
  fragment PageInfoPartial on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
    __typename
  }
`;
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo
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
  info?: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info?: GraphQLResolveInfo
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
  info?: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: ResolverTypeWrapper<DeepPartial<Account>>;
  AccountConnection: ResolverTypeWrapper<DeepPartial<AccountConnection>>;
  AccountEdge: ResolverTypeWrapper<DeepPartial<AccountEdge>>;
  AccountListRelationFilter: ResolverTypeWrapper<
    DeepPartial<AccountListRelationFilter>
  >;
  AccountOrderBy: ResolverTypeWrapper<DeepPartial<AccountOrderBy>>;
  AccountOrderByRelationAggregateInput: ResolverTypeWrapper<
    DeepPartial<AccountOrderByRelationAggregateInput>
  >;
  AccountWhereInput: ResolverTypeWrapper<DeepPartial<AccountWhereInput>>;
  Bio: ResolverTypeWrapper<DeepPartial<Bio>>;
  BoolFilter: ResolverTypeWrapper<DeepPartial<BoolFilter>>;
  Boolean: ResolverTypeWrapper<DeepPartial<Scalars["Boolean"]>>;
  Comment: ResolverTypeWrapper<DeepPartial<Comment>>;
  CommentListRelationFilter: ResolverTypeWrapper<
    DeepPartial<CommentListRelationFilter>
  >;
  CommentOrderByRelationAggregateInput: ResolverTypeWrapper<
    DeepPartial<CommentOrderByRelationAggregateInput>
  >;
  CommentWhereInput: ResolverTypeWrapper<DeepPartial<CommentWhereInput>>;
  Date: ResolverTypeWrapper<DeepPartial<Scalars["Date"]>>;
  DateTime: ResolverTypeWrapper<DeepPartial<Scalars["DateTime"]>>;
  DateTimeFilter: ResolverTypeWrapper<DeepPartial<DateTimeFilter>>;
  DateTimeNullableFilter: ResolverTypeWrapper<
    DeepPartial<DateTimeNullableFilter>
  >;
  Entry: ResolverTypeWrapper<DeepPartial<Entry>>;
  EntryConnection: ResolverTypeWrapper<DeepPartial<EntryConnection>>;
  EntryEdge: ResolverTypeWrapper<DeepPartial<EntryEdge>>;
  EntryListRelationFilter: ResolverTypeWrapper<
    DeepPartial<EntryListRelationFilter>
  >;
  EntryOrderBy: ResolverTypeWrapper<DeepPartial<EntryOrderBy>>;
  EntryOrderByRelationAggregateInput: ResolverTypeWrapper<
    DeepPartial<EntryOrderByRelationAggregateInput>
  >;
  EntryRelationFilter: ResolverTypeWrapper<DeepPartial<EntryRelationFilter>>;
  EntryWhereInput: ResolverTypeWrapper<DeepPartial<EntryWhereInput>>;
  EnumCommentReactionsNullableListFilter: ResolverTypeWrapper<
    DeepPartial<EnumCommentReactionsNullableListFilter>
  >;
  EnumGenderNullableFilter: ResolverTypeWrapper<
    DeepPartial<EnumGenderNullableFilter>
  >;
  EnumPronounsNullableFilter: ResolverTypeWrapper<
    DeepPartial<EnumPronounsNullableFilter>
  >;
  EnumRoleNullableFilter: ResolverTypeWrapper<
    DeepPartial<EnumRoleNullableFilter>
  >;
  EnumUserStatusNullableFilter: ResolverTypeWrapper<
    DeepPartial<EnumUserStatusNullableFilter>
  >;
  FindManyUsersPaginatedInput: ResolverTypeWrapper<
    DeepPartial<FindManyUsersPaginatedInput>
  >;
  Float: ResolverTypeWrapper<DeepPartial<Scalars["Float"]>>;
  Gender: ResolverTypeWrapper<DeepPartial<Gender>>;
  ID: ResolverTypeWrapper<DeepPartial<Scalars["ID"]>>;
  Int: ResolverTypeWrapper<DeepPartial<Scalars["Int"]>>;
  IntNullableFilter: ResolverTypeWrapper<DeepPartial<IntNullableFilter>>;
  Json: ResolverTypeWrapper<DeepPartial<Scalars["Json"]>>;
  MediaItem: ResolverTypeWrapper<DeepPartial<MediaItem>>;
  MediaItemDestination: ResolverTypeWrapper<DeepPartial<MediaItemDestination>>;
  MimeType: ResolverTypeWrapper<DeepPartial<MimeType>>;
  Mutation: ResolverTypeWrapper<{}>;
  NestedBoolFilter: ResolverTypeWrapper<DeepPartial<NestedBoolFilter>>;
  NestedDateTimeFilter: ResolverTypeWrapper<DeepPartial<NestedDateTimeFilter>>;
  NestedDateTimeNullableFilter: ResolverTypeWrapper<
    DeepPartial<NestedDateTimeNullableFilter>
  >;
  NestedEnumGenderNullableFilter: ResolverTypeWrapper<
    DeepPartial<NestedEnumGenderNullableFilter>
  >;
  NestedEnumPronounsNullableFilter: ResolverTypeWrapper<
    DeepPartial<NestedEnumPronounsNullableFilter>
  >;
  NestedEnumRoleNullableFilter: ResolverTypeWrapper<
    DeepPartial<NestedEnumRoleNullableFilter>
  >;
  NestedEnumUserStatusNullableFilter: ResolverTypeWrapper<
    DeepPartial<NestedEnumUserStatusNullableFilter>
  >;
  NestedIntNullableFilter: ResolverTypeWrapper<
    DeepPartial<NestedIntNullableFilter>
  >;
  NestedStringFilter: ResolverTypeWrapper<DeepPartial<NestedStringFilter>>;
  NestedStringNullableFilter: ResolverTypeWrapper<
    DeepPartial<NestedStringNullableFilter>
  >;
  Node:
    | ResolversTypes["Account"]
    | ResolversTypes["Comment"]
    | ResolversTypes["Entry"]
    | ResolversTypes["Profile"]
    | ResolversTypes["Session"]
    | ResolversTypes["User"]
    | ResolversTypes["VerificationToken"]
    | ResolversTypes["Viewer"];
  PageInfo: ResolverTypeWrapper<DeepPartial<PageInfo>>;
  PaginationArgsInput: ResolverTypeWrapper<DeepPartial<PaginationArgsInput>>;
  PhoneNumber: ResolverTypeWrapper<DeepPartial<Scalars["PhoneNumber"]>>;
  Profile: ResolverTypeWrapper<DeepPartial<Profile>>;
  ProfileConnection: ResolverTypeWrapper<DeepPartial<ProfileConnection>>;
  ProfileEdge: ResolverTypeWrapper<DeepPartial<ProfileEdge>>;
  ProfileOrderBy: ResolverTypeWrapper<DeepPartial<ProfileOrderBy>>;
  ProfileOrderByRelevanceFieldEnum: ResolverTypeWrapper<
    DeepPartial<ProfileOrderByRelevanceFieldEnum>
  >;
  ProfileOrderByRelevanceInput: ResolverTypeWrapper<
    DeepPartial<ProfileOrderByRelevanceInput>
  >;
  ProfileOrderByWithRelationAndSearchRelevanceInput: ResolverTypeWrapper<
    DeepPartial<ProfileOrderByWithRelationAndSearchRelevanceInput>
  >;
  ProfileRelationFilter: ResolverTypeWrapper<
    DeepPartial<ProfileRelationFilter>
  >;
  ProfileWhereInput: ResolverTypeWrapper<DeepPartial<ProfileWhereInput>>;
  Pronouns: ResolverTypeWrapper<DeepPartial<Pronouns>>;
  Query: ResolverTypeWrapper<{}>;
  QueryModeEnum: ResolverTypeWrapper<DeepPartial<QueryModeEnum>>;
  Reaction: ResolverTypeWrapper<DeepPartial<Reaction>>;
  Role: ResolverTypeWrapper<DeepPartial<Role>>;
  Session: ResolverTypeWrapper<DeepPartial<Session>>;
  SessionConnection: ResolverTypeWrapper<DeepPartial<SessionConnection>>;
  SessionEdge: ResolverTypeWrapper<DeepPartial<SessionEdge>>;
  SessionListRelationFilter: ResolverTypeWrapper<
    DeepPartial<SessionListRelationFilter>
  >;
  SessionOrderBy: ResolverTypeWrapper<DeepPartial<SessionOrderBy>>;
  SessionOrderByRelationAggregateInput: ResolverTypeWrapper<
    DeepPartial<SessionOrderByRelationAggregateInput>
  >;
  SessionWhereInput: ResolverTypeWrapper<DeepPartial<SessionWhereInput>>;
  SortOrderEnum: ResolverTypeWrapper<DeepPartial<SortOrderEnum>>;
  String: ResolverTypeWrapper<DeepPartial<Scalars["String"]>>;
  StringFilter: ResolverTypeWrapper<DeepPartial<StringFilter>>;
  StringNullableFilter: ResolverTypeWrapper<DeepPartial<StringNullableFilter>>;
  StringNullableListFilter: ResolverTypeWrapper<
    DeepPartial<StringNullableListFilter>
  >;
  Time: ResolverTypeWrapper<DeepPartial<Scalars["Time"]>>;
  UUID: ResolverTypeWrapper<DeepPartial<Scalars["UUID"]>>;
  Upload: ResolverTypeWrapper<DeepPartial<Scalars["Upload"]>>;
  User: ResolverTypeWrapper<DeepPartial<User>>;
  UserConnection: ResolverTypeWrapper<DeepPartial<UserConnection>>;
  UserCount: ResolverTypeWrapper<DeepPartial<UserCount>>;
  UserEdge: ResolverTypeWrapper<DeepPartial<UserEdge>>;
  UserOrderByRelevanceFieldEnum: ResolverTypeWrapper<
    DeepPartial<UserOrderByRelevanceFieldEnum>
  >;
  UserOrderByRelevanceInput: ResolverTypeWrapper<
    DeepPartial<UserOrderByRelevanceInput>
  >;
  UserOrderByWithRelationAndSearchRelevanceInput: ResolverTypeWrapper<
    DeepPartial<UserOrderByWithRelationAndSearchRelevanceInput>
  >;
  UserRelationFilter: ResolverTypeWrapper<DeepPartial<UserRelationFilter>>;
  UserScalarFieldsEnum: ResolverTypeWrapper<DeepPartial<UserScalarFieldsEnum>>;
  UserStatus: ResolverTypeWrapper<DeepPartial<UserStatus>>;
  UserWhereInput: ResolverTypeWrapper<DeepPartial<UserWhereInput>>;
  UserWhereUniqueInput: ResolverTypeWrapper<DeepPartial<UserWhereUniqueInput>>;
  VerificationToken: ResolverTypeWrapper<DeepPartial<VerificationToken>>;
  VerificationTokenConnection: ResolverTypeWrapper<
    DeepPartial<VerificationTokenConnection>
  >;
  VerificationTokenEdge: ResolverTypeWrapper<
    DeepPartial<VerificationTokenEdge>
  >;
  Viewer: ResolverTypeWrapper<DeepPartial<Viewer>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: DeepPartial<Account>;
  AccountConnection: DeepPartial<AccountConnection>;
  AccountEdge: DeepPartial<AccountEdge>;
  AccountListRelationFilter: DeepPartial<AccountListRelationFilter>;
  AccountOrderBy: DeepPartial<AccountOrderBy>;
  AccountOrderByRelationAggregateInput: DeepPartial<AccountOrderByRelationAggregateInput>;
  AccountWhereInput: DeepPartial<AccountWhereInput>;
  Bio: DeepPartial<Bio>;
  BoolFilter: DeepPartial<BoolFilter>;
  Boolean: DeepPartial<Scalars["Boolean"]>;
  Comment: DeepPartial<Comment>;
  CommentListRelationFilter: DeepPartial<CommentListRelationFilter>;
  CommentOrderByRelationAggregateInput: DeepPartial<CommentOrderByRelationAggregateInput>;
  CommentWhereInput: DeepPartial<CommentWhereInput>;
  Date: DeepPartial<Scalars["Date"]>;
  DateTime: DeepPartial<Scalars["DateTime"]>;
  DateTimeFilter: DeepPartial<DateTimeFilter>;
  DateTimeNullableFilter: DeepPartial<DateTimeNullableFilter>;
  Entry: DeepPartial<Entry>;
  EntryConnection: DeepPartial<EntryConnection>;
  EntryEdge: DeepPartial<EntryEdge>;
  EntryListRelationFilter: DeepPartial<EntryListRelationFilter>;
  EntryOrderBy: DeepPartial<EntryOrderBy>;
  EntryOrderByRelationAggregateInput: DeepPartial<EntryOrderByRelationAggregateInput>;
  EntryRelationFilter: DeepPartial<EntryRelationFilter>;
  EntryWhereInput: DeepPartial<EntryWhereInput>;
  EnumCommentReactionsNullableListFilter: DeepPartial<EnumCommentReactionsNullableListFilter>;
  EnumGenderNullableFilter: DeepPartial<EnumGenderNullableFilter>;
  EnumPronounsNullableFilter: DeepPartial<EnumPronounsNullableFilter>;
  EnumRoleNullableFilter: DeepPartial<EnumRoleNullableFilter>;
  EnumUserStatusNullableFilter: DeepPartial<EnumUserStatusNullableFilter>;
  FindManyUsersPaginatedInput: DeepPartial<FindManyUsersPaginatedInput>;
  Float: DeepPartial<Scalars["Float"]>;
  ID: DeepPartial<Scalars["ID"]>;
  Int: DeepPartial<Scalars["Int"]>;
  IntNullableFilter: DeepPartial<IntNullableFilter>;
  Json: DeepPartial<Scalars["Json"]>;
  MediaItem: DeepPartial<MediaItem>;
  Mutation: {};
  NestedBoolFilter: DeepPartial<NestedBoolFilter>;
  NestedDateTimeFilter: DeepPartial<NestedDateTimeFilter>;
  NestedDateTimeNullableFilter: DeepPartial<NestedDateTimeNullableFilter>;
  NestedEnumGenderNullableFilter: DeepPartial<NestedEnumGenderNullableFilter>;
  NestedEnumPronounsNullableFilter: DeepPartial<NestedEnumPronounsNullableFilter>;
  NestedEnumRoleNullableFilter: DeepPartial<NestedEnumRoleNullableFilter>;
  NestedEnumUserStatusNullableFilter: DeepPartial<NestedEnumUserStatusNullableFilter>;
  NestedIntNullableFilter: DeepPartial<NestedIntNullableFilter>;
  NestedStringFilter: DeepPartial<NestedStringFilter>;
  NestedStringNullableFilter: DeepPartial<NestedStringNullableFilter>;
  Node:
    | ResolversParentTypes["Account"]
    | ResolversParentTypes["Comment"]
    | ResolversParentTypes["Entry"]
    | ResolversParentTypes["Profile"]
    | ResolversParentTypes["Session"]
    | ResolversParentTypes["User"]
    | ResolversParentTypes["VerificationToken"]
    | ResolversParentTypes["Viewer"];
  PageInfo: DeepPartial<PageInfo>;
  PaginationArgsInput: DeepPartial<PaginationArgsInput>;
  PhoneNumber: DeepPartial<Scalars["PhoneNumber"]>;
  Profile: DeepPartial<Profile>;
  ProfileConnection: DeepPartial<ProfileConnection>;
  ProfileEdge: DeepPartial<ProfileEdge>;
  ProfileOrderBy: DeepPartial<ProfileOrderBy>;
  ProfileOrderByRelevanceInput: DeepPartial<ProfileOrderByRelevanceInput>;
  ProfileOrderByWithRelationAndSearchRelevanceInput: DeepPartial<ProfileOrderByWithRelationAndSearchRelevanceInput>;
  ProfileRelationFilter: DeepPartial<ProfileRelationFilter>;
  ProfileWhereInput: DeepPartial<ProfileWhereInput>;
  Query: {};
  Session: DeepPartial<Session>;
  SessionConnection: DeepPartial<SessionConnection>;
  SessionEdge: DeepPartial<SessionEdge>;
  SessionListRelationFilter: DeepPartial<SessionListRelationFilter>;
  SessionOrderBy: DeepPartial<SessionOrderBy>;
  SessionOrderByRelationAggregateInput: DeepPartial<SessionOrderByRelationAggregateInput>;
  SessionWhereInput: DeepPartial<SessionWhereInput>;
  String: DeepPartial<Scalars["String"]>;
  StringFilter: DeepPartial<StringFilter>;
  StringNullableFilter: DeepPartial<StringNullableFilter>;
  StringNullableListFilter: DeepPartial<StringNullableListFilter>;
  Time: DeepPartial<Scalars["Time"]>;
  UUID: DeepPartial<Scalars["UUID"]>;
  Upload: DeepPartial<Scalars["Upload"]>;
  User: DeepPartial<User>;
  UserConnection: DeepPartial<UserConnection>;
  UserCount: DeepPartial<UserCount>;
  UserEdge: DeepPartial<UserEdge>;
  UserOrderByRelevanceInput: DeepPartial<UserOrderByRelevanceInput>;
  UserOrderByWithRelationAndSearchRelevanceInput: DeepPartial<UserOrderByWithRelationAndSearchRelevanceInput>;
  UserRelationFilter: DeepPartial<UserRelationFilter>;
  UserWhereInput: DeepPartial<UserWhereInput>;
  UserWhereUniqueInput: DeepPartial<UserWhereUniqueInput>;
  VerificationToken: DeepPartial<VerificationToken>;
  VerificationTokenConnection: DeepPartial<VerificationTokenConnection>;
  VerificationTokenEdge: DeepPartial<VerificationTokenEdge>;
  Viewer: DeepPartial<Viewer>;
}>;

export type AccountResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Account"] = ResolversParentTypes["Account"]
> = ResolversObject<{
  access_token?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  expires_at?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
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
  ContextType = ResolverContext,
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
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["AccountEdge"] = ResolversParentTypes["AccountEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Account"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BioResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Bio"] = ResolversParentTypes["Bio"]
> = ResolversObject<{
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  intro?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"]
> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  authorId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  entry?: Resolver<Maybe<ResolversTypes["Entry"]>, ParentType, ContextType>;
  entryId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
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

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type EntryResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Entry"] = ResolversParentTypes["Entry"]
> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  featuredImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  published?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  userId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryConnectionResolvers<
  ContextType = ResolverContext,
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

export type EntryEdgeResolvers<
  ContextType = ResolverContext,
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
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["MediaItem"] = ResolversParentTypes["MediaItem"]
> = ResolversObject<{
  ariaLabel?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  caption?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
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
  mediaItemId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
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
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  CreateNewUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateNewUserArgs, "email" | "role">
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
    Partial<MutationcreateEntryArgs>
  >;
  createProfile?: Resolver<
    Maybe<ResolversTypes["Profile"]>,
    ParentType,
    ContextType,
    RequireFields<MutationcreateProfileArgs, "email">
  >;
}>;

export type NodeResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Node"] = ResolversParentTypes["Node"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | "Account"
    | "Comment"
    | "Entry"
    | "Profile"
    | "Session"
    | "User"
    | "VerificationToken"
    | "Viewer",
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
}>;

export type PageInfoResolvers<
  ContextType = ResolverContext,
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
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Profile"] = ResolversParentTypes["Profile"]
> = ResolversObject<{
  coverImage?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  dob?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType,
    Partial<ProfiledobArgs>
  >;
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  memberSince?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType,
    Partial<ProfilememberSinceArgs>
  >;
  phoneNumber?: Resolver<
    Maybe<ResolversTypes["PhoneNumber"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileConnectionResolvers<
  ContextType = ResolverContext,
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
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["ProfileEdge"] = ResolversParentTypes["ProfileEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["Profile"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  ActiveFilter?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    Partial<QueryActiveFilterArgs>
  >;
  FilterUsers?: Resolver<
    Maybe<ResolversTypes["UserConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFilterUsersArgs, "searchString">
  >;
  SearchByUserEmail?: Resolver<
    Maybe<ResolversTypes["UserConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchByUserEmailArgs, "search">
  >;
  accounts?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryaccountsArgs, "userId">
  >;
  allAccounts?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryallAccountsArgs, "take">
  >;
  allEntries?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryallEntriesArgs, "take">
  >;
  entryFeed?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    RequireFields<QueryentryFeedArgs, "searchString" | "skip" | "take">
  >;
  node?: Resolver<
    Maybe<ResolversTypes["Node"]>,
    ParentType,
    ContextType,
    Partial<QuerynodeArgs>
  >;
  userEntries?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    Partial<QueryuserEntriesArgs>
  >;
  usersQuery?: Resolver<
    Maybe<ResolversTypes["UserConnection"]>,
    ParentType,
    ContextType,
    Partial<QueryusersQueryArgs>
  >;
  viewer?: Resolver<
    Maybe<ResolversTypes["Viewer"]>,
    ParentType,
    ContextType,
    RequireFields<QueryviewerArgs, "id">
  >;
}>;

export type SessionResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Session"] = ResolversParentTypes["Session"]
> = ResolversObject<{
  expires?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
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
  ContextType = ResolverContext,
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
  ContextType = ResolverContext,
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

export interface UUIDScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["UUID"], any> {
  name: "UUID";
}

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type UserResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  _count?: Resolver<ResolversTypes["UserCount"], ParentType, ContextType>;
  accounts?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    Partial<UseraccountsArgs>
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
    Partial<UserentriesArgs>
  >;
  firstName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  imageMeta?: Resolver<
    Maybe<ResolversTypes["MediaItem"]>,
    ParentType,
    ContextType
  >;
  lastName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes["Profile"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["Role"]>, ParentType, ContextType>;
  sessions?: Resolver<
    Maybe<ResolversTypes["SessionConnection"]>,
    ParentType,
    ContextType,
    Partial<UsersessionsArgs>
  >;
  status?: Resolver<
    Maybe<ResolversTypes["UserStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<
  ContextType = ResolverContext,
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
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["UserCount"] = ResolversParentTypes["UserCount"]
> = ResolversObject<{
  accounts?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  sessions?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["UserEdge"] = ResolversParentTypes["UserEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["VerificationToken"] = ResolversParentTypes["VerificationToken"]
> = ResolversObject<{
  expires?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  identifier?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  token?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenConnectionResolvers<
  ContextType = ResolverContext,
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
  ContextType = ResolverContext,
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

export type ViewerResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Viewer"] = ResolversParentTypes["Viewer"]
> = ResolversObject<{
  GetAllEntries?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    RequireFields<ViewerGetAllEntriesArgs, "searchString">
  >;
  GetAllSessions?: Resolver<
    Maybe<ResolversTypes["SessionConnection"]>,
    ParentType,
    ContextType,
    RequireFields<ViewerGetAllSessionsArgs, "orderBy">
  >;
  GetEntry?: Resolver<
    Maybe<ResolversTypes["Entry"]>,
    ParentType,
    ContextType,
    RequireFields<ViewerGetEntryArgs, "id">
  >;
  GetSession?: Resolver<
    Maybe<ResolversTypes["Session"]>,
    ParentType,
    ContextType,
    RequireFields<ViewerGetSessionArgs, "id">
  >;
  SearchEntriesByTitle?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    RequireFields<ViewerSearchEntriesByTitleArgs, "searchString">
  >;
  entries?: Resolver<
    Maybe<ResolversTypes["EntryConnection"]>,
    ParentType,
    ContextType,
    Partial<ViewerentriesArgs>
  >;
  getUserByAccount?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    RequireFields<
      ViewergetUserByAccountArgs,
      "id" | "provider" | "providerAccountId"
    >
  >;
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  profiles?: Resolver<
    Maybe<ResolversTypes["ProfileConnection"]>,
    ParentType,
    ContextType,
    Partial<ViewerprofilesArgs>
  >;
  session?: Resolver<
    Maybe<ResolversTypes["SessionConnection"]>,
    ParentType,
    ContextType,
    Partial<ViewersessionArgs>
  >;
  userAccount?: Resolver<
    Maybe<ResolversTypes["AccountConnection"]>,
    ParentType,
    ContextType,
    Partial<VieweruserAccountArgs>
  >;
  userByEmail?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<VieweruserByEmailArgs, "email">
  >;
  userById?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<VieweruserByIdArgs, "id">
  >;
  verificationTokens?: Resolver<
    Maybe<ResolversTypes["VerificationTokenConnection"]>,
    ParentType,
    ContextType,
    Partial<ViewerverificationTokensArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ResolverContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountConnection?: AccountConnectionResolvers<ContextType>;
  AccountEdge?: AccountEdgeResolvers<ContextType>;
  Bio?: BioResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  EntryConnection?: EntryConnectionResolvers<ContextType>;
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
  Viewer?: ViewerResolvers<ContextType>;
}>;

export type PageInfoPartialFragment = {
  __typename: "PageInfo";
  endCursor?: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
};

export const PageInfoPartialFragmentDoc = gql`
  fragment PageInfoPartial on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
    __typename
  }
`;
export const namedOperations = {
  Fragment: {
    PageInfoPartial: "PageInfoPartial"
  }
};