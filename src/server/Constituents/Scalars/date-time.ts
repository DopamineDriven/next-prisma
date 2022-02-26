import { asNexusMethod } from "nexus";
import { GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { DateTimeResolver, DateTimeMock } from "graphql-scalars";

export const datetimeScalar: GraphQLScalarTypeConfig<Date, Date> =
  asNexusMethod(
    new GraphQLScalarType({
      ...DateTimeResolver,
      name: "DateTime"
    }),
    "DateTime",
    typeof new Date(DateTimeMock())
  );
//.parseValue(new Date(DateTimeMock()));
// import {
//   GraphQLScalarTypeConfig,
//   GraphQLScalarLiteralParser,
//   GraphQLScalarType,
//   Kind,
//   GraphQLScalarSerializer,
//   GraphQLScalarValueParser,
//   ScalarTypeExtensionNode
// } from "graphql";
// export const DateTimeScalar = asNexusMethod(
//   new GraphQLScalarType({
//     name: "DateTime",
//     ...DateTimeResolver,
//     serialize(value: Date) {
//       return value.getDate(); // convert outgoing Date to Int for JSON
//     },
//     parseValue(value) {
//       return new Date(value); // Convert incoming Int to Date
//     },
//     parseLiteral(ast) {
//       if (ast.kind === Kind.INT) {
//         return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string => Int => Date
//       }
//       return null;
//     }
//   }),
//   "DateTime"
// ).toConfig() as GraphQLScalarTypeConfig<Date, Date> & {
//   specifiedByUrl: Maybe<string>;
//   serialize: GraphQLScalarSerializer<Date>;
//   parseValue: GraphQLScalarValueParser<Date>;
//   parseLiteral: GraphQLScalarLiteralParser<Date>;
//   extensions: Maybe<typeof Date>;
//   extensionASTNodes: readonly ScalarTypeExtensionNode[];
// };
