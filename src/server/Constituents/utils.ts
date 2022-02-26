import { core, inputObjectType } from "nexus";
import { OrderByEnum } from "./meta";
import { NexusGenRootTypes } from "../NexusSchema/nexus";

export function buildOrderBy<M extends keyof core.GetGen<"rootTypes">>(
  model: M,
  fields: Array<keyof core.GetGen<"rootTypes">[M]>
): core.NexusInputObjectTypeDef<`${M}OrderBy`> {
  return inputObjectType<`${M}OrderBy`>({
    name: `${model}OrderBy`,
    definition(t) {
      for (const f of fields as Array<keyof NexusGenRootTypes[M]>) {
        t.field(f as string, { type: OrderByEnum });
      }
    }
  });
}
