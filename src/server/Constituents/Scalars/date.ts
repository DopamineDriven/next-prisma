import { core } from "nexus";
import { GraphQLScalarType } from "graphql";
import { DateResolver, DateMock } from "graphql-scalars";

export const dateScalar = core.asNexusMethod(
  new GraphQLScalarType({
    ...DateResolver,
    name: "Date"
  }),
  "Date",
  typeof new Date(DateMock()).toDateString()
);
