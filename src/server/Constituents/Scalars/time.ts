import { asNexusMethod } from "nexus";
import { TimeResolver, TimeMock } from "graphql-scalars";
import { GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";

export const timeScalar: GraphQLScalarTypeConfig<Date, string> = asNexusMethod(
  new GraphQLScalarType({
    ...TimeResolver,
    name: "Time"
  }),
  "Time",
  typeof new Date(TimeMock()).toTimeString()
);
