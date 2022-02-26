import { asNexusMethod } from "nexus";
import { PhoneNumberResolver, PhoneNumberMock } from "graphql-scalars";
import { GraphQLScalarType } from "graphql";

export const phoneNumberScalar = asNexusMethod(
  new GraphQLScalarType({
    ...PhoneNumberResolver,
    name: "PhoneNumber"
  }),
  "PhoneNumber",
  typeof PhoneNumberMock().toString()
);
