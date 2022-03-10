import { Context } from "../../server/Context/index";
import { Upload } from "graphql-upload";
import {
  GraphQLDate,
  GraphQLDateTime,
  GraphQLTime,
  GraphQLHexadecimal,
  GraphQLJSON,
  GraphQLPhoneNumber,
  GraphQLUUID,
  GraphQLJSONObject,
  JSONResolver,
  GraphQLBigInt
} from "graphql-scalars";
import { Prisma } from "@prisma/client";
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
  /** An arbitrary-precision Decimal type */
  Decimal: Prisma.Decimal.Value;
  /** scalar Hexadecimal */
  Hexadecimal: typeof GraphQLHexadecimal;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: typeof GraphQLJSON;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: typeof GraphQLPhoneNumber;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: typeof GraphQLTime;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: typeof GraphQLUUID;
  /** The `Upload` scalar type represents a file upload. */
  Upload: File;
};

export type Account = Node & {
  __typename?: "Account";
  access_token?: Maybe<FieldWrapper<Scalars["String"]>>;
  expires_at?: Maybe<FieldWrapper<Scalars["Int"]>>;
  id: FieldWrapper<Scalars["String"]>;
  id_token?: Maybe<FieldWrapper<Scalars["String"]>>;
  oauth_token?: Maybe<FieldWrapper<Scalars["String"]>>;
  oauth_token_secret?: Maybe<FieldWrapper<Scalars["String"]>>;
  provider: FieldWrapper<Scalars["String"]>;
  providerAccountId: FieldWrapper<Scalars["String"]>;
  refresh_token?: Maybe<FieldWrapper<Scalars["String"]>>;
  scope?: Maybe<FieldWrapper<Scalars["String"]>>;
  session_state?: Maybe<FieldWrapper<Scalars["String"]>>;
  token_type?: Maybe<FieldWrapper<Scalars["String"]>>;
  type: FieldWrapper<Scalars["String"]>;
  user?: Maybe<FieldWrapper<User>>;
  userId: FieldWrapper<Scalars["String"]>;
};

export type AccountEdge = {
  __typename?: "AccountEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: FieldWrapper<Account>;
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
  body?: Maybe<FieldWrapper<Scalars["String"]>>;
  createdAt: FieldWrapper<Scalars["DateTime"]>;
  headline: FieldWrapper<Scalars["String"]>;
  intro?: Maybe<FieldWrapper<Scalars["String"]>>;
  status?: Maybe<FieldWrapper<Scalars["String"]>>;
  updatedAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
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
  createdAt: FieldWrapper<Scalars["DateTime"]>;
  creatorId?: Maybe<FieldWrapper<Scalars["String"]>>;
  name: FieldWrapper<Scalars["String"]>;
  root: FieldWrapper<Scalars["Boolean"]>;
  updatedAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
};

export type Comment = Node & {
  __typename?: "Comment";
  attachment?: Maybe<FieldWrapper<MediaItem>>;
  author?: Maybe<FieldWrapper<User>>;
  authorId: FieldWrapper<Scalars["String"]>;
  body?: Maybe<FieldWrapper<Scalars["String"]>>;
  createdAt: FieldWrapper<Scalars["DateTime"]>;
  entry?: Maybe<FieldWrapper<Entry>>;
  entryId: FieldWrapper<Scalars["String"]>;
  id: FieldWrapper<Scalars["String"]>;
  position?: Maybe<FieldWrapper<Scalars["String"]>>;
  reactions: Array<FieldWrapper<Reaction>>;
  updatedAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
};

export type CommentEdge = {
  __typename?: "CommentEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: FieldWrapper<Comment>;
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
  _count: FieldWrapper<EntryCount>;
  attachments: Array<FieldWrapper<MediaItem>>;
  author?: Maybe<FieldWrapper<User>>;
  authorId: FieldWrapper<Scalars["String"]>;
  categories: Array<FieldWrapper<Category>>;
  comments: FieldWrapper<EntryComments_Connection>;
  content?: Maybe<FieldWrapper<Scalars["String"]>>;
  createdAt: FieldWrapper<Scalars["DateTime"]>;
  featuredImage?: Maybe<FieldWrapper<MediaItem>>;
  id: FieldWrapper<Scalars["String"]>;
  published: FieldWrapper<Scalars["Boolean"]>;
  reactions: Array<FieldWrapper<Reaction>>;
  title: FieldWrapper<Scalars["String"]>;
  updatedAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
};

export type EntrycommentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  searchString: Scalars["String"];
  take?: InputMaybe<Scalars["Int"]>;
};

export type EntryComments_Connection = {
  __typename?: "EntryComments_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<CommentEdge>>;
  /** Flattened list of Comment type */
  nodes: Array<FieldWrapper<Comment>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type EntryCount = {
  __typename?: "EntryCount";
  comments: FieldWrapper<Scalars["Int"]>;
};

export type EntryEdge = {
  __typename?: "EntryEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: FieldWrapper<Entry>;
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
  description?: Maybe<FieldWrapper<Scalars["String"]>>;
  destination?: Maybe<FieldWrapper<MediaItemDestination>>;
  fileLastModified?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  filename?: Maybe<FieldWrapper<Scalars["String"]>>;
  filetype?: Maybe<FieldWrapper<MimeType>>;
  height: FieldWrapper<Scalars["Float"]>;
  id: FieldWrapper<Scalars["String"]>;
  quality: FieldWrapper<Scalars["Int"]>;
  size?: Maybe<FieldWrapper<Scalars["String"]>>;
  src?: Maybe<FieldWrapper<Scalars["String"]>>;
  srcSet?: Maybe<FieldWrapper<Scalars["String"]>>;
  title?: Maybe<FieldWrapper<Scalars["String"]>>;
  updatedAt?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  uploadedAt: FieldWrapper<Scalars["DateTime"]>;
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
  CreateNewUser: FieldWrapper<User>;
  DeleteUser: FieldWrapper<User>;
  createEntry: FieldWrapper<Entry>;
  createProfile: FieldWrapper<Profile>;
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

export type MutationcreateEntryArgs = {
  content?: InputMaybe<Scalars["String"]>;
  featuredImage?: InputMaybe<Scalars["String"]>;
  publish?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

export type MutationcreateProfileArgs = {
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
  id: FieldWrapper<Scalars["String"]>;
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
  skip?: InputMaybe<Scalars["Int"]>;
};

export type Profile = Node & {
  __typename?: "Profile";
  activityFeed?: Maybe<FieldWrapper<Scalars["String"]>>;
  bio?: Maybe<FieldWrapper<Bio>>;
  city?: Maybe<FieldWrapper<Scalars["String"]>>;
  country?: Maybe<FieldWrapper<Scalars["String"]>>;
  coverPhoto?: Maybe<FieldWrapper<MediaItem>>;
  dob: FieldWrapper<Scalars["Date"]>;
  gender: FieldWrapper<Gender>;
  id: FieldWrapper<Scalars["String"]>;
  lastSeen?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  memberSince: FieldWrapper<Scalars["DateTime"]>;
  occupation?: Maybe<FieldWrapper<Scalars["String"]>>;
  phoneNumber: FieldWrapper<Scalars["PhoneNumber"]>;
  pronouns: FieldWrapper<Pronouns>;
  recentActivity?: Maybe<FieldWrapper<Scalars["String"]>>;
  user?: Maybe<FieldWrapper<User>>;
  userId: FieldWrapper<Scalars["String"]>;
};

export type ProfileEdge = {
  __typename?: "ProfileEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: FieldWrapper<Profile>;
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

export type ProfileOrderByWithRelationInput = {
  activityFeed?: InputMaybe<SortOrderEnum>;
  city?: InputMaybe<SortOrderEnum>;
  country?: InputMaybe<SortOrderEnum>;
  dob?: InputMaybe<SortOrderEnum>;
  gender?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  lastSeen?: InputMaybe<SortOrderEnum>;
  memberSince?: InputMaybe<SortOrderEnum>;
  occupation?: InputMaybe<SortOrderEnum>;
  phoneNumber?: InputMaybe<SortOrderEnum>;
  pronouns?: InputMaybe<SortOrderEnum>;
  recentActivity?: InputMaybe<SortOrderEnum>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
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
  HE_HIM_HIS = "HE_HIM_HIS",
  NOT_LISTED = "NOT_LISTED",
  PREFER_NOT_TO_SAY = "PREFER_NOT_TO_SAY",
  SHE_HER_HERS = "SHE_HER_HERS",
  THEY_THEM_THEIRS = "THEY_THEM_THEIRS"
}

export type Query = {
  __typename?: "Query";
  FilterUsers: FieldWrapper<QueryFilterUsers_Connection>;
  GetAllEntries: FieldWrapper<QueryGetAllEntries_Connection>;
  GetSession?: Maybe<FieldWrapper<Session>>;
  SearchByUserEmail: FieldWrapper<QuerySearchByUserEmail_Connection>;
  SearchEntriesByTitle: FieldWrapper<QuerySearchEntriesByTitle_Connection>;
  accounts: FieldWrapper<QueryAccounts_Connection>;
  allAccounts: FieldWrapper<QueryAllAccounts_Connection>;
  allEntries: FieldWrapper<QueryAllEntries_Connection>;
  entries: FieldWrapper<QueryEntries_Connection>;
  entryFeed: FieldWrapper<QueryEntryFeed_Connection>;
  findEntryById?: Maybe<FieldWrapper<Entry>>;
  getUserByAccount: FieldWrapper<QueryGetUserByAccount_Connection>;
  listProfiles: FieldWrapper<QueryListProfiles_Connection>;
  listSessions: FieldWrapper<QueryListSessions_Connection>;
  node: FieldWrapper<Node>;
  session: FieldWrapper<QuerySession_Connection>;
  userAccount: FieldWrapper<QueryUserAccount_Connection>;
  userByEmail?: Maybe<FieldWrapper<User>>;
  userById?: Maybe<FieldWrapper<User>>;
  userEntries: FieldWrapper<QueryUserEntries_Connection>;
  usersQuery: FieldWrapper<QueryUsersQuery_Connection>;
  verificationTokens: FieldWrapper<QueryVerificationTokens_Connection>;
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

export type QueryentriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
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

export type QueryfindEntryByIdArgs = {
  id: Scalars["String"];
};

export type QuerygetUserByAccountArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  id: Scalars["String"];
  last?: InputMaybe<Scalars["Int"]>;
  provider: Scalars["String"];
  providerAccountId: Scalars["String"];
};

export type QuerylistProfilesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy: SortOrderEnum;
};

export type QuerylistSessionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  orderBy: SessionOrderBy;
};

export type QuerynodeArgs = {
  id: Scalars["String"];
};

export type QuerysessionArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryuserAccountArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryuserByEmailArgs = {
  email: Scalars["String"];
};

export type QueryuserByIdArgs = {
  id: Scalars["String"];
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

export type QueryverificationTokensArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type QueryAccounts_Connection = {
  __typename?: "QueryAccounts_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<AccountEdge>>;
  /** Flattened list of Account type */
  nodes: Array<FieldWrapper<Account>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryAllAccounts_Connection = {
  __typename?: "QueryAllAccounts_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<AccountEdge>>;
  /** Flattened list of Account type */
  nodes: Array<FieldWrapper<Account>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryAllEntries_Connection = {
  __typename?: "QueryAllEntries_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<EntryEdge>>;
  /** Flattened list of Entry type */
  nodes: Array<FieldWrapper<Entry>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryEntries_Connection = {
  __typename?: "QueryEntries_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<EntryEdge>>;
  /** Flattened list of Entry type */
  nodes: Array<FieldWrapper<Entry>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryEntryFeed_Connection = {
  __typename?: "QueryEntryFeed_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<EntryEdge>>;
  /** Flattened list of Entry type */
  nodes: Array<FieldWrapper<Entry>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryFilterUsers_Connection = {
  __typename?: "QueryFilterUsers_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<UserEdge>>;
  /** Flattened list of User type */
  nodes: Array<FieldWrapper<User>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryGetAllEntries_Connection = {
  __typename?: "QueryGetAllEntries_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<EntryEdge>>;
  /** Flattened list of Entry type */
  nodes: Array<FieldWrapper<Entry>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryGetUserByAccount_Connection = {
  __typename?: "QueryGetUserByAccount_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<AccountEdge>>;
  /** Flattened list of Account type */
  nodes: Array<FieldWrapper<Account>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryListProfiles_Connection = {
  __typename?: "QueryListProfiles_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<ProfileEdge>>;
  /** Flattened list of Profile type */
  nodes: Array<FieldWrapper<Profile>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryListSessions_Connection = {
  __typename?: "QueryListSessions_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<SessionEdge>>;
  /** Flattened list of Session type */
  nodes: Array<FieldWrapper<Session>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export enum QueryModeEnum {
  default = "default",
  insensitive = "insensitive"
}

export type QuerySearchByUserEmail_Connection = {
  __typename?: "QuerySearchByUserEmail_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<UserEdge>>;
  /** Flattened list of User type */
  nodes: Array<FieldWrapper<User>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QuerySearchEntriesByTitle_Connection = {
  __typename?: "QuerySearchEntriesByTitle_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<EntryEdge>>;
  /** Flattened list of Entry type */
  nodes: Array<FieldWrapper<Entry>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QuerySession_Connection = {
  __typename?: "QuerySession_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<SessionEdge>>;
  /** Flattened list of Session type */
  nodes: Array<FieldWrapper<Session>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryUserAccount_Connection = {
  __typename?: "QueryUserAccount_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<AccountEdge>>;
  /** Flattened list of Account type */
  nodes: Array<FieldWrapper<Account>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryUserEntries_Connection = {
  __typename?: "QueryUserEntries_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<EntryEdge>>;
  /** Flattened list of Entry type */
  nodes: Array<FieldWrapper<Entry>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryUsersQuery_Connection = {
  __typename?: "QueryUsersQuery_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<UserEdge>>;
  /** Flattened list of User type */
  nodes: Array<FieldWrapper<User>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type QueryVerificationTokens_Connection = {
  __typename?: "QueryVerificationTokens_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<VerificationTokenEdge>>;
  /** Flattened list of VerificationToken type */
  nodes: Array<FieldWrapper<VerificationToken>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

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
  expires: FieldWrapper<Scalars["DateTime"]>;
  id: FieldWrapper<Scalars["String"]>;
  sessionToken: FieldWrapper<Scalars["String"]>;
  user?: Maybe<FieldWrapper<User>>;
  userId: FieldWrapper<Scalars["String"]>;
};

export type SessionEdge = {
  __typename?: "SessionEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: FieldWrapper<Session>;
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

export type SessionOrderByWithRelationshipInput = {
  expires?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  sessionToken?: InputMaybe<SortOrderEnum>;
  userId?: InputMaybe<SortOrderEnum>;
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
  accounts: FieldWrapper<UserAccounts_Connection>;
  comments: FieldWrapper<UserComments_Connection>;
  email?: Maybe<FieldWrapper<Scalars["String"]>>;
  emailVerified?: Maybe<FieldWrapper<Scalars["DateTime"]>>;
  entries: FieldWrapper<UserEntries_Connection>;
  id: FieldWrapper<Scalars["String"]>;
  image?: Maybe<FieldWrapper<Scalars["String"]>>;
  imageMeta?: Maybe<FieldWrapper<MediaItem>>;
  name?: Maybe<FieldWrapper<Scalars["String"]>>;
  profile?: Maybe<FieldWrapper<Profile>>;
  role: FieldWrapper<Role>;
  sessions: FieldWrapper<UserSessions_Connection>;
  status?: Maybe<FieldWrapper<UserStatus>>;
};

export type UseraccountsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type UsercommentsArgs = {
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

export type UserAccounts_Connection = {
  __typename?: "UserAccounts_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<AccountEdge>>;
  /** Flattened list of Account type */
  nodes: Array<FieldWrapper<Account>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

export type UserComments_Connection = {
  __typename?: "UserComments_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<CommentEdge>>;
  /** Flattened list of Comment type */
  nodes: Array<FieldWrapper<Comment>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
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
  node: FieldWrapper<User>;
};

export type UserEntries_Connection = {
  __typename?: "UserEntries_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<EntryEdge>>;
  /** Flattened list of Entry type */
  nodes: Array<FieldWrapper<Entry>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
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
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  profile?: InputMaybe<ProfileOrderByWithRelationAndSearchRelevanceInput>;
  role?: InputMaybe<SortOrderEnum>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrderEnum>;
  updatedAt?: InputMaybe<SortOrderEnum>;
};

export type UserOrderByWithRelationInput = {
  UserOrderByWithRelationInput?: InputMaybe<
    Array<InputMaybe<UserOrderByWithRelationInput>>
  >;
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrderEnum>;
  email?: InputMaybe<SortOrderEnum>;
  emailVerified?: InputMaybe<SortOrderEnum>;
  entries?: InputMaybe<EntryOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrderEnum>;
  image?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  profile?: InputMaybe<ProfileOrderByWithRelationInput>;
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

export type UserSessions_Connection = {
  __typename?: "UserSessions_Connection";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges: Array<FieldWrapper<SessionEdge>>;
  /** Flattened list of Session type */
  nodes: Array<FieldWrapper<Session>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: FieldWrapper<PageInfo>;
  totalCount: FieldWrapper<Scalars["Int"]>;
};

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
  expires: FieldWrapper<Scalars["DateTime"]>;
  id: FieldWrapper<Scalars["String"]>;
  identifier: FieldWrapper<Scalars["String"]>;
  token: FieldWrapper<Scalars["String"]>;
};

export type VerificationTokenEdge = {
  __typename?: "VerificationTokenEdge";
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: FieldWrapper<Scalars["String"]>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node: FieldWrapper<VerificationToken>;
};

export const AccountPartial = gql`
  fragment AccountPartial on Account {
    id
    userId
    type
    provider
    providerAccountId
    refresh_token
    access_token
    expires_at
    token_type
    scope
    id_token
    session_state
    oauth_token_secret
    oauth_token
    __typename
  }
`;
export const AccountEdgePartial = gql`
  fragment AccountEdgePartial on AccountEdge {
    cursor
    __typename
  }
`;
export const BioPartial = gql`
  fragment BioPartial on Bio {
    headline
    intro
    body
    status
    createdAt
    updatedAt
    __typename
  }
`;
export const EntryCountPartial = gql`
  fragment EntryCountPartial on EntryCount {
    comments
    __typename
  }
`;
export const EntryPartial = gql`
  fragment EntryPartial on Entry {
    id
    title
    content
    published
    reactions
    authorId
    createdAt
    updatedAt
    __typename
  }
`;
export const EntryEdgePartial = gql`
  fragment EntryEdgePartial on EntryEdge {
    cursor
    __typename
  }
`;
export const MediaItemPartial = gql`
  fragment MediaItemPartial on MediaItem {
    ariaLabel
    id
    description
    uploadedAt
    updatedAt
    filename
    size
    filetype
    destination
    fileLastModified
    width
    height
    quality
    src
    srcSet
    caption
    title
    __typename
  }
`;
export const PageInfoPartial = gql`
  fragment PageInfoPartial on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
    __typename
  }
`;
export const ProfilePartial = gql`
  fragment ProfilePartial on Profile {
    id
    userId
    memberSince
    dob
    phoneNumber
    gender
    pronouns
    lastSeen
    occupation
    city
    country
    activityFeed
    recentActivity
    __typename
  }
`;
export const SessionPartial = gql`
  fragment SessionPartial on Session {
    id
    userId
    expires
    sessionToken
    __typename
  }
`;
export const SessionEdgePartial = gql`
  fragment SessionEdgePartial on SessionEdge {
    cursor
    __typename
  }
`;
export const UserCountPartial = gql`
  fragment UserCountPartial on UserCount {
    accounts
    comments
    entries
    sessions
    __typename
  }
`;
export const UserEdgePartial = gql`
  fragment UserEdgePartial on UserEdge {
    cursor
    __typename
  }
`;
export const UserPartial = gql`
  fragment UserPartial on User {
    id
    name
    email
    image
    emailVerified
    role
    status
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
  BioListRelationFilter: ResolverTypeWrapper<
    DeepPartial<BioListRelationFilter>
  >;
  BioRelationFilter: ResolverTypeWrapper<DeepPartial<BioRelationFilter>>;
  BioWhereInput: ResolverTypeWrapper<DeepPartial<BioWhereInput>>;
  BoolFilter: ResolverTypeWrapper<DeepPartial<BoolFilter>>;
  Boolean: ResolverTypeWrapper<DeepPartial<Scalars["Boolean"]>>;
  Category: ResolverTypeWrapper<DeepPartial<Category>>;
  Comment: ResolverTypeWrapper<DeepPartial<Comment>>;
  CommentEdge: ResolverTypeWrapper<DeepPartial<CommentEdge>>;
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
  Decimal: ResolverTypeWrapper<DeepPartial<Scalars["Decimal"]>>;
  Entry: ResolverTypeWrapper<DeepPartial<Entry>>;
  EntryComments_Connection: ResolverTypeWrapper<
    DeepPartial<EntryComments_Connection>
  >;
  EntryCount: ResolverTypeWrapper<DeepPartial<EntryCount>>;
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
  EnumMediaItemDestinationNullableFilter: ResolverTypeWrapper<
    DeepPartial<EnumMediaItemDestinationNullableFilter>
  >;
  EnumMimeTypeNullableFilter: ResolverTypeWrapper<
    DeepPartial<EnumMimeTypeNullableFilter>
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
  FloatNullableFilter: ResolverTypeWrapper<DeepPartial<FloatNullableFilter>>;
  Gender: ResolverTypeWrapper<DeepPartial<Gender>>;
  Hexadecimal: ResolverTypeWrapper<DeepPartial<Scalars["Hexadecimal"]>>;
  Int: ResolverTypeWrapper<DeepPartial<Scalars["Int"]>>;
  IntNullableFilter: ResolverTypeWrapper<DeepPartial<IntNullableFilter>>;
  Json: ResolverTypeWrapper<DeepPartial<Scalars["Json"]>>;
  MediaItem: ResolverTypeWrapper<DeepPartial<MediaItem>>;
  MediaItemDestination: ResolverTypeWrapper<DeepPartial<MediaItemDestination>>;
  MediaItemInput: ResolverTypeWrapper<DeepPartial<MediaItemInput>>;
  MediaItemListRelationFilter: ResolverTypeWrapper<
    DeepPartial<MediaItemListRelationFilter>
  >;
  MediaItemRelationFilter: ResolverTypeWrapper<
    DeepPartial<MediaItemRelationFilter>
  >;
  MediaItemWhereInput: ResolverTypeWrapper<DeepPartial<MediaItemWhereInput>>;
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
  NestedEnumMediaItemDestinationNullableFilter: ResolverTypeWrapper<
    DeepPartial<NestedEnumMediaItemDestinationNullableFilter>
  >;
  NestedEnumMimeTypeNullableFilter: ResolverTypeWrapper<
    DeepPartial<NestedEnumMimeTypeNullableFilter>
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
  NestedFloatNullableFilter: ResolverTypeWrapper<
    DeepPartial<NestedFloatNullableFilter>
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
    | ResolversTypes["VerificationToken"];
  PageInfo: ResolverTypeWrapper<DeepPartial<PageInfo>>;
  PaginationArgsInput: ResolverTypeWrapper<DeepPartial<PaginationArgsInput>>;
  PhoneNumber: ResolverTypeWrapper<DeepPartial<Scalars["PhoneNumber"]>>;
  Profile: ResolverTypeWrapper<DeepPartial<Profile>>;
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
  ProfileOrderByWithRelationInput: ResolverTypeWrapper<
    DeepPartial<ProfileOrderByWithRelationInput>
  >;
  ProfileRelationFilter: ResolverTypeWrapper<
    DeepPartial<ProfileRelationFilter>
  >;
  ProfileWhereInput: ResolverTypeWrapper<DeepPartial<ProfileWhereInput>>;
  Pronouns: ResolverTypeWrapper<DeepPartial<Pronouns>>;
  Query: ResolverTypeWrapper<{}>;
  QueryAccounts_Connection: ResolverTypeWrapper<
    DeepPartial<QueryAccounts_Connection>
  >;
  QueryAllAccounts_Connection: ResolverTypeWrapper<
    DeepPartial<QueryAllAccounts_Connection>
  >;
  QueryAllEntries_Connection: ResolverTypeWrapper<
    DeepPartial<QueryAllEntries_Connection>
  >;
  QueryEntries_Connection: ResolverTypeWrapper<
    DeepPartial<QueryEntries_Connection>
  >;
  QueryEntryFeed_Connection: ResolverTypeWrapper<
    DeepPartial<QueryEntryFeed_Connection>
  >;
  QueryFilterUsers_Connection: ResolverTypeWrapper<
    DeepPartial<QueryFilterUsers_Connection>
  >;
  QueryGetAllEntries_Connection: ResolverTypeWrapper<
    DeepPartial<QueryGetAllEntries_Connection>
  >;
  QueryGetUserByAccount_Connection: ResolverTypeWrapper<
    DeepPartial<QueryGetUserByAccount_Connection>
  >;
  QueryListProfiles_Connection: ResolverTypeWrapper<
    DeepPartial<QueryListProfiles_Connection>
  >;
  QueryListSessions_Connection: ResolverTypeWrapper<
    DeepPartial<QueryListSessions_Connection>
  >;
  QueryModeEnum: ResolverTypeWrapper<DeepPartial<QueryModeEnum>>;
  QuerySearchByUserEmail_Connection: ResolverTypeWrapper<
    DeepPartial<QuerySearchByUserEmail_Connection>
  >;
  QuerySearchEntriesByTitle_Connection: ResolverTypeWrapper<
    DeepPartial<QuerySearchEntriesByTitle_Connection>
  >;
  QuerySession_Connection: ResolverTypeWrapper<
    DeepPartial<QuerySession_Connection>
  >;
  QueryUserAccount_Connection: ResolverTypeWrapper<
    DeepPartial<QueryUserAccount_Connection>
  >;
  QueryUserEntries_Connection: ResolverTypeWrapper<
    DeepPartial<QueryUserEntries_Connection>
  >;
  QueryUsersQuery_Connection: ResolverTypeWrapper<
    DeepPartial<QueryUsersQuery_Connection>
  >;
  QueryVerificationTokens_Connection: ResolverTypeWrapper<
    DeepPartial<QueryVerificationTokens_Connection>
  >;
  Reaction: ResolverTypeWrapper<DeepPartial<Reaction>>;
  Role: ResolverTypeWrapper<DeepPartial<Role>>;
  Session: ResolverTypeWrapper<DeepPartial<Session>>;
  SessionEdge: ResolverTypeWrapper<DeepPartial<SessionEdge>>;
  SessionListRelationFilter: ResolverTypeWrapper<
    DeepPartial<SessionListRelationFilter>
  >;
  SessionOrderBy: ResolverTypeWrapper<DeepPartial<SessionOrderBy>>;
  SessionOrderByRelationAggregateInput: ResolverTypeWrapper<
    DeepPartial<SessionOrderByRelationAggregateInput>
  >;
  SessionOrderByWithRelationshipInput: ResolverTypeWrapper<
    DeepPartial<SessionOrderByWithRelationshipInput>
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
  UserAccounts_Connection: ResolverTypeWrapper<
    DeepPartial<UserAccounts_Connection>
  >;
  UserComments_Connection: ResolverTypeWrapper<
    DeepPartial<UserComments_Connection>
  >;
  UserCount: ResolverTypeWrapper<DeepPartial<UserCount>>;
  UserEdge: ResolverTypeWrapper<DeepPartial<UserEdge>>;
  UserEntries_Connection: ResolverTypeWrapper<
    DeepPartial<UserEntries_Connection>
  >;
  UserOrderByRelevanceFieldEnum: ResolverTypeWrapper<
    DeepPartial<UserOrderByRelevanceFieldEnum>
  >;
  UserOrderByRelevanceInput: ResolverTypeWrapper<
    DeepPartial<UserOrderByRelevanceInput>
  >;
  UserOrderByWithRelationAndSearchRelevanceInput: ResolverTypeWrapper<
    DeepPartial<UserOrderByWithRelationAndSearchRelevanceInput>
  >;
  UserOrderByWithRelationInput: ResolverTypeWrapper<
    DeepPartial<UserOrderByWithRelationInput>
  >;
  UserRelationFilter: ResolverTypeWrapper<DeepPartial<UserRelationFilter>>;
  UserScalarFieldsEnum: ResolverTypeWrapper<DeepPartial<UserScalarFieldsEnum>>;
  UserSessions_Connection: ResolverTypeWrapper<
    DeepPartial<UserSessions_Connection>
  >;
  UserStatus: ResolverTypeWrapper<DeepPartial<UserStatus>>;
  UserWhereInput: ResolverTypeWrapper<DeepPartial<UserWhereInput>>;
  UserWhereUniqueInput: ResolverTypeWrapper<DeepPartial<UserWhereUniqueInput>>;
  VerificationToken: ResolverTypeWrapper<DeepPartial<VerificationToken>>;
  VerificationTokenEdge: ResolverTypeWrapper<
    DeepPartial<VerificationTokenEdge>
  >;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: DeepPartial<Account>;
  AccountEdge: DeepPartial<AccountEdge>;
  AccountListRelationFilter: DeepPartial<AccountListRelationFilter>;
  AccountOrderBy: DeepPartial<AccountOrderBy>;
  AccountOrderByRelationAggregateInput: DeepPartial<AccountOrderByRelationAggregateInput>;
  AccountWhereInput: DeepPartial<AccountWhereInput>;
  Bio: DeepPartial<Bio>;
  BioListRelationFilter: DeepPartial<BioListRelationFilter>;
  BioRelationFilter: DeepPartial<BioRelationFilter>;
  BioWhereInput: DeepPartial<BioWhereInput>;
  BoolFilter: DeepPartial<BoolFilter>;
  Boolean: DeepPartial<Scalars["Boolean"]>;
  Category: DeepPartial<Category>;
  Comment: DeepPartial<Comment>;
  CommentEdge: DeepPartial<CommentEdge>;
  CommentListRelationFilter: DeepPartial<CommentListRelationFilter>;
  CommentOrderByRelationAggregateInput: DeepPartial<CommentOrderByRelationAggregateInput>;
  CommentWhereInput: DeepPartial<CommentWhereInput>;
  Date: DeepPartial<Scalars["Date"]>;
  DateTime: DeepPartial<Scalars["DateTime"]>;
  DateTimeFilter: DeepPartial<DateTimeFilter>;
  DateTimeNullableFilter: DeepPartial<DateTimeNullableFilter>;
  Decimal: DeepPartial<Scalars["Decimal"]>;
  Entry: DeepPartial<Entry>;
  EntryComments_Connection: DeepPartial<EntryComments_Connection>;
  EntryCount: DeepPartial<EntryCount>;
  EntryEdge: DeepPartial<EntryEdge>;
  EntryListRelationFilter: DeepPartial<EntryListRelationFilter>;
  EntryOrderBy: DeepPartial<EntryOrderBy>;
  EntryOrderByRelationAggregateInput: DeepPartial<EntryOrderByRelationAggregateInput>;
  EntryRelationFilter: DeepPartial<EntryRelationFilter>;
  EntryWhereInput: DeepPartial<EntryWhereInput>;
  EnumCommentReactionsNullableListFilter: DeepPartial<EnumCommentReactionsNullableListFilter>;
  EnumGenderNullableFilter: DeepPartial<EnumGenderNullableFilter>;
  EnumMediaItemDestinationNullableFilter: DeepPartial<EnumMediaItemDestinationNullableFilter>;
  EnumMimeTypeNullableFilter: DeepPartial<EnumMimeTypeNullableFilter>;
  EnumPronounsNullableFilter: DeepPartial<EnumPronounsNullableFilter>;
  EnumRoleNullableFilter: DeepPartial<EnumRoleNullableFilter>;
  EnumUserStatusNullableFilter: DeepPartial<EnumUserStatusNullableFilter>;
  FindManyUsersPaginatedInput: DeepPartial<FindManyUsersPaginatedInput>;
  Float: DeepPartial<Scalars["Float"]>;
  FloatNullableFilter: DeepPartial<FloatNullableFilter>;
  Hexadecimal: DeepPartial<Scalars["Hexadecimal"]>;
  Int: DeepPartial<Scalars["Int"]>;
  IntNullableFilter: DeepPartial<IntNullableFilter>;
  Json: DeepPartial<Scalars["Json"]>;
  MediaItem: DeepPartial<MediaItem>;
  MediaItemInput: DeepPartial<MediaItemInput>;
  MediaItemListRelationFilter: DeepPartial<MediaItemListRelationFilter>;
  MediaItemRelationFilter: DeepPartial<MediaItemRelationFilter>;
  MediaItemWhereInput: DeepPartial<MediaItemWhereInput>;
  Mutation: {};
  NestedBoolFilter: DeepPartial<NestedBoolFilter>;
  NestedDateTimeFilter: DeepPartial<NestedDateTimeFilter>;
  NestedDateTimeNullableFilter: DeepPartial<NestedDateTimeNullableFilter>;
  NestedEnumGenderNullableFilter: DeepPartial<NestedEnumGenderNullableFilter>;
  NestedEnumMediaItemDestinationNullableFilter: DeepPartial<NestedEnumMediaItemDestinationNullableFilter>;
  NestedEnumMimeTypeNullableFilter: DeepPartial<NestedEnumMimeTypeNullableFilter>;
  NestedEnumPronounsNullableFilter: DeepPartial<NestedEnumPronounsNullableFilter>;
  NestedEnumRoleNullableFilter: DeepPartial<NestedEnumRoleNullableFilter>;
  NestedEnumUserStatusNullableFilter: DeepPartial<NestedEnumUserStatusNullableFilter>;
  NestedFloatNullableFilter: DeepPartial<NestedFloatNullableFilter>;
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
    | ResolversParentTypes["VerificationToken"];
  PageInfo: DeepPartial<PageInfo>;
  PaginationArgsInput: DeepPartial<PaginationArgsInput>;
  PhoneNumber: DeepPartial<Scalars["PhoneNumber"]>;
  Profile: DeepPartial<Profile>;
  ProfileEdge: DeepPartial<ProfileEdge>;
  ProfileOrderBy: DeepPartial<ProfileOrderBy>;
  ProfileOrderByRelevanceInput: DeepPartial<ProfileOrderByRelevanceInput>;
  ProfileOrderByWithRelationAndSearchRelevanceInput: DeepPartial<ProfileOrderByWithRelationAndSearchRelevanceInput>;
  ProfileOrderByWithRelationInput: DeepPartial<ProfileOrderByWithRelationInput>;
  ProfileRelationFilter: DeepPartial<ProfileRelationFilter>;
  ProfileWhereInput: DeepPartial<ProfileWhereInput>;
  Query: {};
  QueryAccounts_Connection: DeepPartial<QueryAccounts_Connection>;
  QueryAllAccounts_Connection: DeepPartial<QueryAllAccounts_Connection>;
  QueryAllEntries_Connection: DeepPartial<QueryAllEntries_Connection>;
  QueryEntries_Connection: DeepPartial<QueryEntries_Connection>;
  QueryEntryFeed_Connection: DeepPartial<QueryEntryFeed_Connection>;
  QueryFilterUsers_Connection: DeepPartial<QueryFilterUsers_Connection>;
  QueryGetAllEntries_Connection: DeepPartial<QueryGetAllEntries_Connection>;
  QueryGetUserByAccount_Connection: DeepPartial<QueryGetUserByAccount_Connection>;
  QueryListProfiles_Connection: DeepPartial<QueryListProfiles_Connection>;
  QueryListSessions_Connection: DeepPartial<QueryListSessions_Connection>;
  QuerySearchByUserEmail_Connection: DeepPartial<QuerySearchByUserEmail_Connection>;
  QuerySearchEntriesByTitle_Connection: DeepPartial<QuerySearchEntriesByTitle_Connection>;
  QuerySession_Connection: DeepPartial<QuerySession_Connection>;
  QueryUserAccount_Connection: DeepPartial<QueryUserAccount_Connection>;
  QueryUserEntries_Connection: DeepPartial<QueryUserEntries_Connection>;
  QueryUsersQuery_Connection: DeepPartial<QueryUsersQuery_Connection>;
  QueryVerificationTokens_Connection: DeepPartial<QueryVerificationTokens_Connection>;
  Session: DeepPartial<Session>;
  SessionEdge: DeepPartial<SessionEdge>;
  SessionListRelationFilter: DeepPartial<SessionListRelationFilter>;
  SessionOrderBy: DeepPartial<SessionOrderBy>;
  SessionOrderByRelationAggregateInput: DeepPartial<SessionOrderByRelationAggregateInput>;
  SessionOrderByWithRelationshipInput: DeepPartial<SessionOrderByWithRelationshipInput>;
  SessionWhereInput: DeepPartial<SessionWhereInput>;
  String: DeepPartial<Scalars["String"]>;
  StringFilter: DeepPartial<StringFilter>;
  StringNullableFilter: DeepPartial<StringNullableFilter>;
  StringNullableListFilter: DeepPartial<StringNullableListFilter>;
  Time: DeepPartial<Scalars["Time"]>;
  UUID: DeepPartial<Scalars["UUID"]>;
  Upload: DeepPartial<Scalars["Upload"]>;
  User: DeepPartial<User>;
  UserAccounts_Connection: DeepPartial<UserAccounts_Connection>;
  UserComments_Connection: DeepPartial<UserComments_Connection>;
  UserCount: DeepPartial<UserCount>;
  UserEdge: DeepPartial<UserEdge>;
  UserEntries_Connection: DeepPartial<UserEntries_Connection>;
  UserOrderByRelevanceInput: DeepPartial<UserOrderByRelevanceInput>;
  UserOrderByWithRelationAndSearchRelevanceInput: DeepPartial<UserOrderByWithRelationAndSearchRelevanceInput>;
  UserOrderByWithRelationInput: DeepPartial<UserOrderByWithRelationInput>;
  UserRelationFilter: DeepPartial<UserRelationFilter>;
  UserSessions_Connection: DeepPartial<UserSessions_Connection>;
  UserWhereInput: DeepPartial<UserWhereInput>;
  UserWhereUniqueInput: DeepPartial<UserWhereUniqueInput>;
  VerificationToken: DeepPartial<VerificationToken>;
  VerificationTokenEdge: DeepPartial<VerificationTokenEdge>;
}>;

export type AccountResolvers<
  ContextType = Context,
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
  provider?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  providerAccountId?: Resolver<
    ResolversTypes["String"],
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
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["AccountEdge"] = ResolversParentTypes["AccountEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Account"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BioResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Bio"] = ResolversParentTypes["Bio"]
> = ResolversObject<{
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  headline?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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
  ContextType = Context,
  ParentType extends ResolversParentTypes["Category"] = ResolversParentTypes["Category"]
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  creatorId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  root?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Comment"] = ResolversParentTypes["Comment"]
> = ResolversObject<{
  attachment?: Resolver<
    Maybe<ResolversTypes["MediaItem"]>,
    ParentType,
    ContextType
  >;
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  entry?: Resolver<Maybe<ResolversTypes["Entry"]>, ParentType, ContextType>;
  entryId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  reactions?: Resolver<
    Array<ResolversTypes["Reaction"]>,
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

export type CommentEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["CommentEdge"] = ResolversParentTypes["CommentEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Comment"], ParentType, ContextType>;
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

export interface DecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Decimal"], any> {
  name: "Decimal";
}

export type EntryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Entry"] = ResolversParentTypes["Entry"]
> = ResolversObject<{
  _count?: Resolver<ResolversTypes["EntryCount"], ParentType, ContextType>;
  attachments?: Resolver<
    Array<ResolversTypes["MediaItem"]>,
    ParentType,
    ContextType
  >;
  author?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  categories?: Resolver<
    Array<ResolversTypes["Category"]>,
    ParentType,
    ContextType
  >;
  comments?: Resolver<
    ResolversTypes["EntryComments_Connection"],
    ParentType,
    ContextType,
    RequireFields<EntrycommentsArgs, "searchString">
  >;
  content?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  featuredImage?: Resolver<
    Maybe<ResolversTypes["MediaItem"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  published?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  reactions?: Resolver<
    Array<ResolversTypes["Reaction"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryComments_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["EntryComments_Connection"] = ResolversParentTypes["EntryComments_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["CommentEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Comment"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryCountResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["EntryCount"] = ResolversParentTypes["EntryCount"]
> = ResolversObject<{
  comments?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntryEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["EntryEdge"] = ResolversParentTypes["EntryEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Entry"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface HexadecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Hexadecimal"], any> {
  name: "Hexadecimal";
}

export interface JsonScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Json"], any> {
  name: "Json";
}

export type MediaItemResolvers<
  ContextType = Context,
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
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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
  uploadedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  width?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  CreateNewUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<
      MutationCreateNewUserArgs,
      "email" | "expires" | "sessionToken"
    >
  >;
  DeleteUser?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, "id">
  >;
  createEntry?: Resolver<
    ResolversTypes["Entry"],
    ParentType,
    ContextType,
    Partial<MutationcreateEntryArgs>
  >;
  createProfile?: Resolver<
    ResolversTypes["Profile"],
    ParentType,
    ContextType,
    RequireFields<MutationcreateProfileArgs, "email">
  >;
}>;

export type NodeResolvers<
  ContextType = Context,
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
  ContextType = Context,
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
  ContextType = Context,
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
  dob?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes["Gender"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  lastSeen?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  memberSince?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  occupation?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  phoneNumber?: Resolver<
    ResolversTypes["PhoneNumber"],
    ParentType,
    ContextType
  >;
  pronouns?: Resolver<ResolversTypes["Pronouns"], ParentType, ContextType>;
  recentActivity?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProfileEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["ProfileEdge"] = ResolversParentTypes["ProfileEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Profile"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  FilterUsers?: Resolver<
    ResolversTypes["QueryFilterUsers_Connection"],
    ParentType,
    ContextType,
    RequireFields<QueryFilterUsersArgs, "searchString">
  >;
  GetAllEntries?: Resolver<
    ResolversTypes["QueryGetAllEntries_Connection"],
    ParentType,
    ContextType,
    RequireFields<QueryGetAllEntriesArgs, "searchString">
  >;
  GetSession?: Resolver<
    Maybe<ResolversTypes["Session"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSessionArgs, "id">
  >;
  SearchByUserEmail?: Resolver<
    ResolversTypes["QuerySearchByUserEmail_Connection"],
    ParentType,
    ContextType,
    RequireFields<QuerySearchByUserEmailArgs, "search">
  >;
  SearchEntriesByTitle?: Resolver<
    ResolversTypes["QuerySearchEntriesByTitle_Connection"],
    ParentType,
    ContextType,
    RequireFields<QuerySearchEntriesByTitleArgs, "searchString">
  >;
  accounts?: Resolver<
    ResolversTypes["QueryAccounts_Connection"],
    ParentType,
    ContextType,
    RequireFields<QueryaccountsArgs, "userId">
  >;
  allAccounts?: Resolver<
    ResolversTypes["QueryAllAccounts_Connection"],
    ParentType,
    ContextType,
    RequireFields<QueryallAccountsArgs, "take">
  >;
  allEntries?: Resolver<
    ResolversTypes["QueryAllEntries_Connection"],
    ParentType,
    ContextType,
    RequireFields<QueryallEntriesArgs, "take">
  >;
  entries?: Resolver<
    ResolversTypes["QueryEntries_Connection"],
    ParentType,
    ContextType,
    Partial<QueryentriesArgs>
  >;
  entryFeed?: Resolver<
    ResolversTypes["QueryEntryFeed_Connection"],
    ParentType,
    ContextType,
    RequireFields<QueryentryFeedArgs, "searchString" | "skip" | "take">
  >;
  findEntryById?: Resolver<
    Maybe<ResolversTypes["Entry"]>,
    ParentType,
    ContextType,
    RequireFields<QueryfindEntryByIdArgs, "id">
  >;
  getUserByAccount?: Resolver<
    ResolversTypes["QueryGetUserByAccount_Connection"],
    ParentType,
    ContextType,
    RequireFields<
      QuerygetUserByAccountArgs,
      "id" | "provider" | "providerAccountId"
    >
  >;
  listProfiles?: Resolver<
    ResolversTypes["QueryListProfiles_Connection"],
    ParentType,
    ContextType,
    RequireFields<QuerylistProfilesArgs, "orderBy">
  >;
  listSessions?: Resolver<
    ResolversTypes["QueryListSessions_Connection"],
    ParentType,
    ContextType,
    RequireFields<QuerylistSessionsArgs, "orderBy">
  >;
  node?: Resolver<
    ResolversTypes["Node"],
    ParentType,
    ContextType,
    RequireFields<QuerynodeArgs, "id">
  >;
  session?: Resolver<
    ResolversTypes["QuerySession_Connection"],
    ParentType,
    ContextType,
    Partial<QuerysessionArgs>
  >;
  userAccount?: Resolver<
    ResolversTypes["QueryUserAccount_Connection"],
    ParentType,
    ContextType,
    Partial<QueryuserAccountArgs>
  >;
  userByEmail?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryuserByEmailArgs, "email">
  >;
  userById?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryuserByIdArgs, "id">
  >;
  userEntries?: Resolver<
    ResolversTypes["QueryUserEntries_Connection"],
    ParentType,
    ContextType,
    Partial<QueryuserEntriesArgs>
  >;
  usersQuery?: Resolver<
    ResolversTypes["QueryUsersQuery_Connection"],
    ParentType,
    ContextType,
    Partial<QueryusersQueryArgs>
  >;
  verificationTokens?: Resolver<
    ResolversTypes["QueryVerificationTokens_Connection"],
    ParentType,
    ContextType,
    Partial<QueryverificationTokensArgs>
  >;
}>;

export type QueryAccounts_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryAccounts_Connection"] = ResolversParentTypes["QueryAccounts_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["AccountEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Account"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryAllAccounts_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryAllAccounts_Connection"] = ResolversParentTypes["QueryAllAccounts_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["AccountEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Account"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryAllEntries_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryAllEntries_Connection"] = ResolversParentTypes["QueryAllEntries_Connection"]
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes["EntryEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["Entry"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryEntries_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryEntries_Connection"] = ResolversParentTypes["QueryEntries_Connection"]
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes["EntryEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["Entry"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryEntryFeed_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryEntryFeed_Connection"] = ResolversParentTypes["QueryEntryFeed_Connection"]
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes["EntryEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["Entry"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryFilterUsers_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryFilterUsers_Connection"] = ResolversParentTypes["QueryFilterUsers_Connection"]
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes["UserEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryGetAllEntries_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryGetAllEntries_Connection"] = ResolversParentTypes["QueryGetAllEntries_Connection"]
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes["EntryEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["Entry"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryGetUserByAccount_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryGetUserByAccount_Connection"] = ResolversParentTypes["QueryGetUserByAccount_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["AccountEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Account"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryListProfiles_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryListProfiles_Connection"] = ResolversParentTypes["QueryListProfiles_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["ProfileEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Profile"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryListSessions_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryListSessions_Connection"] = ResolversParentTypes["QueryListSessions_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["SessionEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Session"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySearchByUserEmail_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QuerySearchByUserEmail_Connection"] = ResolversParentTypes["QuerySearchByUserEmail_Connection"]
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes["UserEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySearchEntriesByTitle_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QuerySearchEntriesByTitle_Connection"] = ResolversParentTypes["QuerySearchEntriesByTitle_Connection"]
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes["EntryEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["Entry"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySession_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QuerySession_Connection"] = ResolversParentTypes["QuerySession_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["SessionEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Session"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryUserAccount_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryUserAccount_Connection"] = ResolversParentTypes["QueryUserAccount_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["AccountEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Account"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryUserEntries_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryUserEntries_Connection"] = ResolversParentTypes["QueryUserEntries_Connection"]
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes["EntryEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["Entry"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryUsersQuery_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryUsersQuery_Connection"] = ResolversParentTypes["QueryUsersQuery_Connection"]
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes["UserEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryVerificationTokens_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["QueryVerificationTokens_Connection"] = ResolversParentTypes["QueryVerificationTokens_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["VerificationTokenEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes["VerificationToken"]>,
    ParentType,
    ContextType
  >;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Session"] = ResolversParentTypes["Session"]
> = ResolversObject<{
  expires?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sessionToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SessionEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["SessionEdge"] = ResolversParentTypes["SessionEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["Session"], ParentType, ContextType>;
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
  ContextType = Context,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  _count?: Resolver<ResolversTypes["UserCount"], ParentType, ContextType>;
  accounts?: Resolver<
    ResolversTypes["UserAccounts_Connection"],
    ParentType,
    ContextType,
    Partial<UseraccountsArgs>
  >;
  comments?: Resolver<
    ResolversTypes["UserComments_Connection"],
    ParentType,
    ContextType,
    Partial<UsercommentsArgs>
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  emailVerified?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  entries?: Resolver<
    ResolversTypes["UserEntries_Connection"],
    ParentType,
    ContextType,
    Partial<UserentriesArgs>
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
  role?: Resolver<ResolversTypes["Role"], ParentType, ContextType>;
  sessions?: Resolver<
    ResolversTypes["UserSessions_Connection"],
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

export type UserAccounts_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["UserAccounts_Connection"] = ResolversParentTypes["UserAccounts_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["AccountEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Account"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserComments_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["UserComments_Connection"] = ResolversParentTypes["UserComments_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["CommentEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Comment"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["UserCount"] = ResolversParentTypes["UserCount"]
> = ResolversObject<{
  accounts?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  comments?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  entries?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  sessions?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["UserEdge"] = ResolversParentTypes["UserEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEntries_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["UserEntries_Connection"] = ResolversParentTypes["UserEntries_Connection"]
> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes["EntryEdge"]>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes["Entry"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserSessions_ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["UserSessions_Connection"] = ResolversParentTypes["UserSessions_Connection"]
> = ResolversObject<{
  edges?: Resolver<
    Array<ResolversTypes["SessionEdge"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["Session"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["PageInfo"], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["VerificationToken"] = ResolversParentTypes["VerificationToken"]
> = ResolversObject<{
  expires?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerificationTokenEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["VerificationTokenEdge"] = ResolversParentTypes["VerificationTokenEdge"]
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  node?: Resolver<ResolversTypes["VerificationToken"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  AccountEdge?: AccountEdgeResolvers<ContextType>;
  Bio?: BioResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentEdge?: CommentEdgeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  Entry?: EntryResolvers<ContextType>;
  EntryComments_Connection?: EntryComments_ConnectionResolvers<ContextType>;
  EntryCount?: EntryCountResolvers<ContextType>;
  EntryEdge?: EntryEdgeResolvers<ContextType>;
  Hexadecimal?: GraphQLScalarType;
  Json?: GraphQLScalarType;
  MediaItem?: MediaItemResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PhoneNumber?: GraphQLScalarType;
  Profile?: ProfileResolvers<ContextType>;
  ProfileEdge?: ProfileEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QueryAccounts_Connection?: QueryAccounts_ConnectionResolvers<ContextType>;
  QueryAllAccounts_Connection?: QueryAllAccounts_ConnectionResolvers<ContextType>;
  QueryAllEntries_Connection?: QueryAllEntries_ConnectionResolvers<ContextType>;
  QueryEntries_Connection?: QueryEntries_ConnectionResolvers<ContextType>;
  QueryEntryFeed_Connection?: QueryEntryFeed_ConnectionResolvers<ContextType>;
  QueryFilterUsers_Connection?: QueryFilterUsers_ConnectionResolvers<ContextType>;
  QueryGetAllEntries_Connection?: QueryGetAllEntries_ConnectionResolvers<ContextType>;
  QueryGetUserByAccount_Connection?: QueryGetUserByAccount_ConnectionResolvers<ContextType>;
  QueryListProfiles_Connection?: QueryListProfiles_ConnectionResolvers<ContextType>;
  QueryListSessions_Connection?: QueryListSessions_ConnectionResolvers<ContextType>;
  QuerySearchByUserEmail_Connection?: QuerySearchByUserEmail_ConnectionResolvers<ContextType>;
  QuerySearchEntriesByTitle_Connection?: QuerySearchEntriesByTitle_ConnectionResolvers<ContextType>;
  QuerySession_Connection?: QuerySession_ConnectionResolvers<ContextType>;
  QueryUserAccount_Connection?: QueryUserAccount_ConnectionResolvers<ContextType>;
  QueryUserEntries_Connection?: QueryUserEntries_ConnectionResolvers<ContextType>;
  QueryUsersQuery_Connection?: QueryUsersQuery_ConnectionResolvers<ContextType>;
  QueryVerificationTokens_Connection?: QueryVerificationTokens_ConnectionResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  SessionEdge?: SessionEdgeResolvers<ContextType>;
  Time?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserAccounts_Connection?: UserAccounts_ConnectionResolvers<ContextType>;
  UserComments_Connection?: UserComments_ConnectionResolvers<ContextType>;
  UserCount?: UserCountResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UserEntries_Connection?: UserEntries_ConnectionResolvers<ContextType>;
  UserSessions_Connection?: UserSessions_ConnectionResolvers<ContextType>;
  VerificationToken?: VerificationTokenResolvers<ContextType>;
  VerificationTokenEdge?: VerificationTokenEdgeResolvers<ContextType>;
}>;

export type AccountPartialFragment = {
  __typename: "Account";
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
  oauth_token_secret?: string | null;
  oauth_token?: string | null;
};

export type AccountEdgePartialFragment = {
  __typename: "AccountEdge";
  cursor: string;
};

export type BioPartialFragment = {
  __typename: "Bio";
  headline: string;
  intro?: string | null;
  body?: string | null;
  status?: string | null;
  createdAt: Date;
  updatedAt?: Date | null;
};

export type EntryCountPartialFragment = {
  __typename: "EntryCount";
  comments: number;
};

export type EntryPartialFragment = {
  __typename: "Entry";
  id: string;
  title: string;
  content?: string | null;
  published: boolean;
  reactions: Array<Reaction>;
  authorId: string;
  createdAt: Date;
  updatedAt?: Date | null;
};

export type EntryEdgePartialFragment = {
  __typename: "EntryEdge";
  cursor: string;
};

export type MediaItemPartialFragment = {
  __typename: "MediaItem";
  ariaLabel?: string | null;
  id: string;
  description?: string | null;
  uploadedAt: Date;
  updatedAt?: Date | null;
  filename?: string | null;
  size?: string | null;
  filetype?: MimeType | null;
  destination?: MediaItemDestination | null;
  fileLastModified?: Date | null;
  width: number;
  height: number;
  quality: number;
  src?: string | null;
  srcSet?: string | null;
  caption?: string | null;
  title?: string | null;
};

export type PageInfoPartialFragment = {
  __typename: "PageInfo";
  endCursor?: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
};

export type ProfilePartialFragment = {
  __typename: "Profile";
  id: string;
  userId: string;
  memberSince: Date;
  dob: typeof GraphQLDate;
  phoneNumber: typeof GraphQLPhoneNumber;
  gender: Gender;
  pronouns: Pronouns;
  lastSeen?: Date | null;
  occupation?: string | null;
  city?: string | null;
  country?: string | null;
  activityFeed?: string | null;
  recentActivity?: string | null;
};

export type SessionPartialFragment = {
  __typename: "Session";
  id: string;
  userId: string;
  expires: Date;
  sessionToken: string;
};

export type SessionEdgePartialFragment = {
  __typename: "SessionEdge";
  cursor: string;
};

export type UserCountPartialFragment = {
  __typename: "UserCount";
  accounts: number;
  comments: number;
  entries: number;
  sessions: number;
};

export type UserEdgePartialFragment = {
  __typename: "UserEdge";
  cursor: string;
};

export type UserPartialFragment = {
  __typename: "User";
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  emailVerified?: Date | null;
  role: Role;
  status?: UserStatus | null;
};

export const AccountPartialFragmentDoc = gql`
  fragment AccountPartial on Account {
    id
    userId
    type
    provider
    providerAccountId
    refresh_token
    access_token
    expires_at
    token_type
    scope
    id_token
    session_state
    oauth_token_secret
    oauth_token
    __typename
  }
`;
export const AccountEdgePartialFragmentDoc = gql`
  fragment AccountEdgePartial on AccountEdge {
    cursor
    __typename
  }
`;
export const BioPartialFragmentDoc = gql`
  fragment BioPartial on Bio {
    headline
    intro
    body
    status
    createdAt
    updatedAt
    __typename
  }
`;
export const EntryCountPartialFragmentDoc = gql`
  fragment EntryCountPartial on EntryCount {
    comments
    __typename
  }
`;
export const EntryPartialFragmentDoc = gql`
  fragment EntryPartial on Entry {
    id
    title
    content
    published
    reactions
    authorId
    createdAt
    updatedAt
    __typename
  }
`;
export const EntryEdgePartialFragmentDoc = gql`
  fragment EntryEdgePartial on EntryEdge {
    cursor
    __typename
  }
`;
export const MediaItemPartialFragmentDoc = gql`
  fragment MediaItemPartial on MediaItem {
    ariaLabel
    id
    description
    uploadedAt
    updatedAt
    filename
    size
    filetype
    destination
    fileLastModified
    width
    height
    quality
    src
    srcSet
    caption
    title
    __typename
  }
`;
export const PageInfoPartialFragmentDoc = gql`
  fragment PageInfoPartial on PageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
    __typename
  }
`;
export const ProfilePartialFragmentDoc = gql`
  fragment ProfilePartial on Profile {
    id
    userId
    memberSince
    dob
    phoneNumber
    gender
    pronouns
    lastSeen
    occupation
    city
    country
    activityFeed
    recentActivity
    __typename
  }
`;
export const SessionPartialFragmentDoc = gql`
  fragment SessionPartial on Session {
    id
    userId
    expires
    sessionToken
    __typename
  }
`;
export const SessionEdgePartialFragmentDoc = gql`
  fragment SessionEdgePartial on SessionEdge {
    cursor
    __typename
  }
`;
export const UserCountPartialFragmentDoc = gql`
  fragment UserCountPartial on UserCount {
    accounts
    comments
    entries
    sessions
    __typename
  }
`;
export const UserEdgePartialFragmentDoc = gql`
  fragment UserEdgePartial on UserEdge {
    cursor
    __typename
  }
`;
export const UserPartialFragmentDoc = gql`
  fragment UserPartial on User {
    id
    name
    email
    image
    emailVerified
    role
    status
    __typename
  }
`;
export const namedOperations = {
  Fragment: {
    AccountPartial: "AccountPartial",
    AccountEdgePartial: "AccountEdgePartial",
    BioPartial: "BioPartial",
    EntryCountPartial: "EntryCountPartial",
    EntryPartial: "EntryPartial",
    EntryEdgePartial: "EntryEdgePartial",
    MediaItemPartial: "MediaItemPartial",
    PageInfoPartial: "PageInfoPartial",
    ProfilePartial: "ProfilePartial",
    SessionPartial: "SessionPartial",
    SessionEdgePartial: "SessionEdgePartial",
    UserCountPartial: "UserCountPartial",
    UserEdgePartial: "UserEdgePartial",
    UserPartial: "UserPartial"
  }
};
