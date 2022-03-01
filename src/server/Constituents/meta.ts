import { Prisma } from "@prisma/client";
import { core } from "nexus";
import {
  UserStatus as UserStatusEnum,
  Role as RoleEnum,
  MimeType as MimeTypeEnum,
  Country as CountryEnum,
  CountryCode as CountryCodeEnum,
  Gender as GenderEnum,
  Pronouns as PronounsEnum,
  Reaction as ReactionEnum,
  MediaItemDestination as MediaItemDestinationEnum,
  SetMediaItem,
  SetBio,
  SetCategory
} from "./type-handling";
export type { SetMediaItem, SetBio, SetCategory };

export const QueryModeEnum: core.NexusEnumTypeDef<"QueryModeEnum"> =
  core.enumType<"QueryModeEnum">({
    name: "QueryModeEnum",
    members: ["default", "insensitive"]
  });

export const SortOrderEnum: core.NexusEnumTypeDef<"SortOrderEnum"> =
  core.enumType<"SortOrderEnum">({
    name: "SortOrderEnum",
    members: ["asc", "desc"],
    description: "Direction in which to order one or more corresponding fields"
  });

export const Role: core.NexusEnumTypeDef<"Role"> = core.enumType<"Role">({
  name: "Role",
  members: ["USER", "ADMIN", "SUPERADMIN", "MAINTAINER"] as Array<
    keyof typeof RoleEnum
  >,
  description: "User Role"
});

export const UserStatus: core.NexusEnumTypeDef<"UserStatus"> =
  core.enumType<"UserStatus">({
    name: "UserStatus",
    members: [
      "ONLINE",
      "OFFLINE",
      "SUSPENDED",
      "DELETED",
      "BANNED",
      "DEACTIVATED"
    ] as Array<keyof typeof UserStatusEnum>,
    description: "User Status"
  });

export const MimeType: core.NexusEnumTypeDef<"MimeType"> =
  core.enumType<"MimeType">({
    name: "MimeType",
    members: [
      "GIF",
      "JPEG",
      "WEBP",
      "AVIF",
      "PNG",
      "SVG",
      "TIFF",
      "BMP"
    ] as Array<keyof typeof MimeTypeEnum>,
    description: "Mime Types"
  });

export const MediaItemDestination: core.NexusEnumTypeDef<"MediaItemDestination"> =
  core.enumType<"MediaItemDestination">({
    name: "MediaItemDestination",
    members: [
      "COVER_IMAGE",
      "AVATAR",
      "COMMENT_ATTACHMENT",
      "ENTRY_ATTACHMENT",
      "FEATURED_IMAGE"
    ] as Array<keyof typeof MediaItemDestinationEnum>,
    description: "Media Item Destination"
  });

export const Gender: core.NexusEnumTypeDef<"Gender"> = core.enumType<"Gender">({
  name: "Gender",
  members: ["MALE", "FEMALE", "UNCERTAIN", "OTHER"] as Array<
    keyof typeof GenderEnum
  >,
  description: "User Gender"
});

export const Pronouns: core.NexusEnumTypeDef<"Pronouns"> =
  core.enumType<"Pronouns">({
    name: "Pronouns",
    members: [
      "HE_HIM_HIS",
      "SHE_HER_HERS",
      "NOT_LISTED",
      "PREFER_NOT_TO_SAY",
      "THEY_THEM_THEIRS"
    ] as Array<keyof typeof PronounsEnum>,
    description: "User pronouns"
  });

export const Reaction: core.NexusEnumTypeDef<"Reaction"> =
  core.enumType<"Reaction">({
    name: "Reaction",
    members: [
      "LIKE",
      "LOVE",
      "LAUGH",
      "TEARS",
      "DISLIKE",
      "ANGRY",
      "CONFUSED",
      "CARE",
      "WOW",
      "PARROT",
      "ROCKET"
    ] as Array<keyof typeof ReactionEnum>,
    description: "Comment/Entry Reactions"
  });

export const UserScalarFieldsEnum: core.NexusEnumTypeDef<"UserScalarFieldsEnum"> =
  core.enumType<"UserScalarFieldsEnum">({
    asNexusMethod: "UserScalarFieldsEnum",
    name: "UserScalarFieldsEnum",
    members: [
      "id",
      "firstName",
      "lastName",
      "email",
      "image",
      "role",
      "status",
      "password",
      "createdAt",
      "updatedAt",
      "emailVerified"
    ]
  });

export const UserOrderByRelevanceFieldEnum: core.NexusEnumTypeDef<"UserOrderByRelevanceFieldEnum"> =
  core.enumType<"UserOrderByRelevanceFieldEnum">({
    name: "UserOrderByRelevanceFieldEnum",
    members: ["email", "firstName", "id", "image", "lastName", "password"]
  });

export const ProfileOrderByRelevanceFieldEnum: core.NexusEnumTypeDef<"ProfileOrderByRelevanceFieldEnum"> =
  core.enumType<"ProfileOrderByRelevanceFieldEnum">({
    name: "ProfileOrderByRelevanceFieldEnum",
    members: [
      "activiyFeed",
      "bio",
      "city",
      "country",
      "coverPhoto",
      "dob",
      "id",
      "occupation",
      "phoneNumber",
      "recentActivity",
      "userId"
    ]
  });
