import { enumType, core } from "nexus";

export const OrderByEnum: core.NexusEnumTypeDef<"OrderBy"> = enumType({
  name: "OrderBy",
  members: ["asc", "desc"],
  description: "Direction in which to order one or more corresponding fields"
});

export const Role: core.NexusEnumTypeDef<"Role"> = enumType({
  name: "Role",
  members: ["USER", "ADMIN", "SUPERADMIN"],
  description: "User hierarchical status"
});

export const Department: core.NexusEnumTypeDef<"Department"> = enumType({
  name: "Department",
  members: [
    "UNASSIGNED",
    "CUSTOMER_SUPPORT",
    "ENGINEERING",
    "MEDIA",
    "DESIGN",
    "EXECUTIVE",
    "MEDICAL",
    "LEGAL",
    "FINANCE",
    "MARKETING",
    "OPERATIONS",
    "SALES",
    "HUMAN_RESOURCES"
  ],
  description: "Primary User Department"
});
