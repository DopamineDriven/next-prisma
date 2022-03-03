import { GraphQLUpload, Upload  } from "graphql-upload";
import { asNexusMethod } from "nexus";
import { GraphQLScalarType } from "graphql";

export const UploadScalar = asNexusMethod(
  new GraphQLScalarType({
    name: "Upload",
    description: GraphQLUpload.description,
    ...Upload.prototype.file
  }),
  "Upload",
 typeof new Upload()
);
