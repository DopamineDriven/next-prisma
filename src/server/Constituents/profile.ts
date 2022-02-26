import {
  extendType,
  objectType,
  core,
  nonNull,
  stringArg,
  scalarType
} from "nexus";
import { Prisma } from "@prisma/client";
import { buildOrderBy } from "./utils";
import { Role, Department } from ".";
import { format } from "date-fns";
import { arg } from "nexus";
import { v4 } from "uuid";

export const Profile: core.NexusObjectTypeDef<"Profile"> = objectType({
  name: "Profile",
  definition(t) {
    t.implements("Node");
    t.id("id");
    t.string("userId");
    t.DateTime("memberSince", {
      args: {
        type: "DateTime"
      }
    });
    t.string("coverImage");
    t.DateTime("dob", {
      args: {
        type: "DateTime"
      }
    });
    t.PhoneNumber("phoneNumber");
    t.string("bio");
    t.field("user", {
      type: "User",
      async resolve(root, _args, ctx, _info) {
        const profileToUser = await ctx.prisma.profile
          .findFirst({
            where: {
              user: {
                id: String(root.userId)
              }
            }
          })
          .user();
        return profileToUser;
      }
    }) as core.FieldResolver<"Profile", "user"> | undefined;
  }
});

/** 
 *     t.connectionField("accounts", {
      type: "Account",
      inheritAdditionalArgs: true,
      additionalArgs: {},
      async nodes(root, args, ctx, info) {
        const accounts = ctx.prisma.profile
          .findFirst({
            where: { user: { id: String(root.userId) } }
          })
          .user()
          .accounts();
        return accounts;
      }
    });
 * 
*/

export const ProfileOrderBy = buildOrderBy("Profile", [
  "memberSince"
]) as core.NexusInputObjectTypeDef<"ProfileOrderBy">;

export const ProfileOrderByArgs: core.NexusArgDef<"ProfileOrderBy"> =
  ProfileOrderBy.asArg({
    default: { memberSince: "asc" }
  });

export const ProfileQuery = extendType({
  type: "Viewer",
  definition(t) {
    t.connectionField("profiles", {
      type: "Profile",
      async nodes(root, args, ctx, info) {
        const profiles = await ctx.prisma.profile.findMany({
          orderBy: {
            memberSince: "asc"
          },
          include: {
            user: true
          }
        });
        return profiles;
      }
    });
  }
});

// export type EnumRoleFieldUpdateOperationsInput = {
//   set?: RoleType;
// };

// export type EnumDepartmentFieldUpdateOperationsInput = {
//   set?: DepartmentType;
// };
// export declare const RoleExecutable: { input: "USER" | "ADMIN" | "SUPERADMIN" };
// export declare const DepartmentExecutable: {
//   input:
//     | "CUSTOMER_SUPPORT"
//     | "DESIGN"
//     | "ENGINEERING"
//     | "EXECUTIVE"
//     | "FINANCE"
//     | "HUMAN_RESOURCES"
//     | "LEGAL"
//     | "MARKETING"
//     | "MEDIA"
//     | "MEDICAL"
//     | "OPERATIONS"
//     | "SALES"
//     | "UNASSIGNED";
// };

// dis is good https://github.com/prisma/prisma/issues/3372
export const dateArg = (opts: core.SourceTypesConfigOptions) =>
  core.arg({ ...opts, type: "Date" }) as core.NexusArgDef<"Date">;
export const dateTimeArg = (opts: core.SourceTypesConfigOptions) =>
  core.arg({ ...opts, type: "DateTime" }) as core.NexusArgDef<"DateTime">;
export const PorfileMutations: core.NexusExtendTypeDef<"Mutation"> = extendType(
  {
    type: "Mutation",
    definition(t) {
      t.field("createProfile", {
        type: "Profile",
        args: {
          userId: stringArg(),
          email: nonNull(stringArg()),
          bio: stringArg(),
          coverImage: stringArg(),
          phoneNumber: stringArg({
            description:
              "compliant with standard E164 formatting (+15559871234)"
          })
        },
        async resolve(_root, args, ctx, _info) {
          const create = await ctx.prisma.profile.create({
            data: {
              id: v4(),
              user: {
                connect: {
                  email: args.email
                }
              },
              bio: args.bio,
              coverImage: args.coverImage,
              dob: new Date(700376889),
              memberSince: new Date(1631333289),
              phoneNumber: args.phoneNumber
            },
            include: {
              user: true
            }
          });
          return create;
        }
      } as core.NexusOutputFieldConfig<"Mutation", "createProfile">) as
        | core.FieldResolver<"Mutation", "createProfile">
        | undefined;
    }
  }
);

// const UpsertProfileArgs = Prisma.validator<Prisma.ProfileUpsertArgs>();
// Prisma.validator<
//   XOR<
//     Prisma.ProfileSelect | null | undefined,
//     Prisma.ProfileInclude | null | undefined
//   >
// >()({});
// const ProfileSelectUniqueInput = (
//   id?: boolean | undefined,
//   userId?: boolean | undefined,
//   memberSince?: boolean | undefined,
//   coverImage?: boolean | undefined,
//   dob?: boolean | undefined,
//   phoneNumber?: boolean | undefined,
//   bio?: boolean | undefined
// ) => {
//   return Prisma.validator<Prisma.ProfileSelect | null | undefined>()({
//     id,
//     userId,
//     memberSince,
//     coverImage,
//     dob,
//     phoneNumber,
//     bio
//   }) as {
//     id?: boolean | undefined;
//     userId?: boolean | undefined;
//     memberSince?: boolean | undefined;
//     coverImage?: boolean | undefined;
//     dob?: boolean | undefined;
//     phoneNumber?: boolean | undefined;
//     bio?: boolean | undefined;
//   };
// };
// const ProfileWhereUniqueInput = (
//   id: string | undefined,
//   userId: string | undefined
// ) => {
//   return Prisma.validator<Prisma.ProfileWhereUniqueInput>()({
//     id,
//     userId
//   } as { id: string | undefined; userId: string | undefined });
// };

// const PrismaPowerUp = () => Prisma.validator();
