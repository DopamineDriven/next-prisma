import { GraphQLUpload, Upload } from "graphql-upload";
import { asNexusMethod } from "nexus";
import { GraphQLScalarType } from "graphql";

export const UploadScalar: GraphQLScalarType = asNexusMethod(
  GraphQLUpload,
  "Upload",
  typeof new Upload()
);
