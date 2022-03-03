import { asNexusMethod } from "nexus";
import { TimeResolver, TimeMock } from "graphql-scalars";
import { GraphQLScalarType } from "graphql";

export const timeScalar = asNexusMethod(
  new GraphQLScalarType({
    ...TimeResolver,
    name: "Time"
  }),
  "Time",
  typeof new Date(TimeMock()).toTimeString()
);
