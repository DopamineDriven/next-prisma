import { asNexusMethod, scalarType, core } from "nexus";
import { GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
import { DateResolver, DateMock } from "graphql-scalars";

export const dateScalar: GraphQLScalarTypeConfig<Date, string> = asNexusMethod(
  new GraphQLScalarType({
    ...DateResolver,
    name: "Date"
  }),
  "Date",
  typeof new Date(DateMock()).toDateString()
);

// import {
//   GraphQLScalarTypeConfig,
//   GraphQLScalarLiteralParser,
//   GraphQLScalarType,
//   Kind,
//   GraphQLScalarSerializer,
//   GraphQLScalarValueParser,
//   ScalarTypeExtensionNode
// } from "graphql";
// export const dateScalar = asNexusMethod<GraphQLScalarType>(
//   new GraphQLScalarType({
//     ...DateResolver,
//     name: "Date",
//     serialize(value: Date) {
//       return value.getTime(); // convert outgoing Date to Int for JSON
//     },
//     parseValue(value: Date | number | string) {
//       return new Date(value); // Convert incoming Int to Date
//     },
//     parseLiteral(ast) {
//       if (ast.kind === Kind.INT) {
//         return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string => Int => Date
//       }
//       return null;
//     }
//   }),
//   typeof DateResolver
// ).toConfig() as GraphQLScalarTypeConfig<Date, Date> & {
//   specifiedByUrl: Maybe<string>;
//   serialize: GraphQLScalarSerializer<Date>;
//   parseValue: GraphQLScalarValueParser<Date>;
//   parseLiteral: GraphQLScalarLiteralParser<Date>;
//   extensions: Maybe<Date>;
//   extensionASTNodes: readonly ScalarTypeExtensionNode[];
// };
