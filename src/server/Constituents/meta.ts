import { core } from "nexus";

export const OrderByEnum: core.NexusEnumTypeDef<"OrderBy"> =
  core.enumType<"OrderBy">({
    name: "OrderBy",
    members: ["asc", "desc"],
    description: "Direction in which to order one or more corresponding fields"
  });

export const Role: core.NexusEnumTypeDef<"Role"> = core.enumType<"Role">({
  name: "Role",
  members: ["USER", "ADMIN", "SUPERADMIN", "MAINTAINER"],
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
    ],
    description: "User Status"
  });

export const MimeType: core.NexusEnumTypeDef<"MimeType"> =
  core.enumType<"MimeType">({
    name: "MimeType",
    members: ["GIF", "JPEG", "WEBP", "AVIF", "PNG", "SVG", "TIFF", "BMP"],
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
    ],
    description: "Media Item Destination"
  });

export const Gender: core.NexusEnumTypeDef<"Gender"> = core.enumType<"Gender">({
  name: "Gender",
  members: ["MALE", "FEMALE", "UNCERTAIN", "OTHER"],
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
    ],
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
    ],
    description: "Comment/Entry Reactions"
  });
