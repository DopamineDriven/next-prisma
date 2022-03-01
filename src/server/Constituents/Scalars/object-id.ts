import { core } from "nexus";
import { GraphQLScalarType } from "graphql";
import { ObjectIDResolver, DateTimeMock } from "graphql-scalars";
import { ObjectId } from "bson";
import { nanoid, random } from "nanoid";

export const objectIdScalar =
  core.asNexusMethod(
    new GraphQLScalarType({
      ...ObjectIDResolver,
      name: "ObjectID"
    }),
    "ObjectID",
    typeof new ObjectId(random(12)).toHexString()
  );
