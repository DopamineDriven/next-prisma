import { core } from "nexus";
import { GraphQLScalarType } from "graphql";
import { DateTimeResolver, DateTimeMock } from "graphql-scalars";

export const datetimeScalar =
  core.asNexusMethod(
    new GraphQLScalarType({
      ...DateTimeResolver,
      name: "DateTime"
    }),
    "DateTime",
    typeof new Date(DateTimeMock())
  );
