import {
  arg,
  extendType,
  objectType,
  core,
  FieldResolver,
  nonNull
} from "nexus";
import { nanoid } from "nanoid";
import { ObjectId } from "bson";

export const ViewerQuery: core.NexusExtendTypeDef<"Query"> =
  extendType<"Query">({
    type: "Query",
    definition(t) {
      t.field("viewer", {
        type: "Viewer",
        args: {
          id: nonNull(
            arg({
              type: "String",
              default: new ObjectId().toHexString()
            })
          )
        },
        resolve(root, args, ctx, info) {
          return {
            id: args.id
          };
        }
      });
    }
  });

export const Viewer: core.NexusObjectTypeDef<"Viewer"> = objectType({
  name: "Viewer",
  definition(t) {
    t.implements("Node");
  }
});
