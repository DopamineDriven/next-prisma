import { asNexusMethod } from "nexus";
import {
  JSONMock,
  JSONObjectMock,
  JSONObjectResolver,
  JSONResolver
} from "graphql-scalars";
import { GraphQLScalarType } from "graphql";
import { JSONObject } from "graphql-scalars/mocks";

export const jsonScalar = asNexusMethod(
  new GraphQLScalarType({
    ...JSONResolver,
    name: "Json"
  }),
  "Json",
  typeof JSON.stringify(JSONMock())
);
