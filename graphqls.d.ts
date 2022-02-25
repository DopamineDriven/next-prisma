/// <reference path="schema.gql" />

declare module gql {
  import { DocumentNode } from "graphql";
  export default typeof DocumentNode;
}

declare module "*yml";
