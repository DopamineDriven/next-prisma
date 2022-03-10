import { core } from "nexus";
import { GraphQLScalarType } from "graphql";
import { GraphQLDecimal } from "prisma-graphql-type-decimal";
import {
  HexadecimalResolver,
  HexadecimalTypeDefinition
} from "graphql-scalars";

export const hexadecimalScalar = core.asNexusMethod(
  new GraphQLScalarType({
    ...HexadecimalResolver,
    name: "Hexadecimal",
    description: HexadecimalTypeDefinition
  }),
  "Hexadecimal",
  core.SCALAR_TYPES["String"]
);

export const DecimalMethod = core.asNexusMethod(
  GraphQLDecimal,
  "Decimal",
  core.SCALAR_TYPES["Float"]
);

// const config: GraphQLScalarTypeConfig<
//   null | string | number | Prisma.Decimal,
//   string
// > = {
//   name: "DecimalScalar",
//   description: "An arbitrary-precision Decimal type",
//   serialize(value: ValueNode) {
//     return value.kind === "StringValue"
//       ? value.value
//       : value.kind === "FloatValue"
//       ? value.value.toString()
//       : "";
//   },
//   parseValue(value) {
//     return new Prisma.Decimal(value as Prisma.Decimal.Value);
//   },
//   parseLiteral(ast) {
//     if (
//       ast.kind === Kind.INT ||
//       ast.kind === Kind.FLOAT ||
//       ast.kind === Kind.STRING
//     ) {
//       return new Prisma.Decimal(ast.value);
//     }
//     return null;
//   }
// };

// // export const GraphQLDecimal = new GraphQLScalarType(config);

// export const GraphQLDecimalResolver = () =>
//   ({ ...GraphQLDecimal });

// export const DecimalScalar = core.asNexusMethod(
//   GraphQLDecimal,
//   "DecimalScalar",
//   {
//     export: "Decimal",
//     module: join(
//       process.cwd(),
//       "/node_modules/@prisma/client/runtime/index.d.ts"
//     )
//   }
// );
