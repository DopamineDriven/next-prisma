import { Role, Department } from "@/graphql/LocalGen/graphql";
export declare const RoleConst: {
  SUPERADMIN: "SUPERADMIN";
  ADMIN: "ADMIN";
  USER: "USER";
};

export type RoleType = { role: keyof typeof Role };

export declare const DepartmentConst: {
  UNASSIGNED: "UNASSIGNED";
  CUSTOMER_SUPPORT: "CUSTOMER_SUPPORT";
  ENGINEERING: "ENGINEERING";
  MEDIA: "MEDIA";
  DESIGN: "DESIGN";
  EXECUTIVE: "EXECUTIVE";
  MEDICAL: "MEDICAL";
  LEGAL: "LEGAL";
  FINANCE: "FINANCE";
  MARKETING: "MARKETING";
  OPERATIONS: "OPERATIONS";
  SALES: "SALES";
  HUMAN_RESOURCES: "HUMAN_RESOURCES";
};

export type DepartmentType = { department: keyof typeof Department };
