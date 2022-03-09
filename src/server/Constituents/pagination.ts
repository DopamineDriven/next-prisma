import { core } from "nexus";

export const PaginationArgsInput = core.inputObjectType({
  name: "PaginationArgsInput",
  definition(t) {
    t.string("after", { default: null });
    t.string("before", { default: null });
    t.int("skip", { default: null });
    t.int("first", { default: 10 });
    t.int("last", { default: null });
  }
});
