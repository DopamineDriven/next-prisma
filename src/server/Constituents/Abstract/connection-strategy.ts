import { ConnectionCursor } from "graphql-relay";
import { core, objectType } from "nexus";
interface IEdgeType<T> {
  cursor: string;
  node: T;
}

export type PageInfoCustom = {
  startCursor: ConnectionCursor | null;
  endCursor: ConnectionCursor | null;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export interface IPaginatedType<T> {
  edges: IEdgeType<T>[];
  nodes: T[];
  totalCount: number;
  hasNextPage: boolean;
}

export function connectionType(
  name: core.GetGen2<"abstractTypeMembers", "Node">
) {
  const Connection = objectType({
    name: `${name}Connection`,

    definition(t) {
      t.list.field(`${name}Nodes`, { type: name });
      t.field(`${name}Edges`, { type: Edge });
      t.field(`${name}PageInfo`, { type: PageInfo });
      t.field(`${name}TotalCount`, {
        type: "Int"
      });
    }
  });

  const Edge = objectType({
    name: `${name}Edge`,

    definition(t) {
      t.string("cursor", {
        resolve(root) {
          return `${name}:${root.cursor ?? root.node.id}`;
        }
      });

      t.field("node", { type: name });
    }
  });

  const TypeNode = objectType({
    name: `${name}Node`,
    definition(t) {
      t.field("node", { type: name });
    }
  });

  const PageInfo = objectType({
    name: `${name}PageInfo`,

    definition(t) {
      t.nullable.field("after", { type: "String" });
      t.nullable.field("before", { type: "String" });
      t.field("hasNextPage", { type: "Boolean" });
      t.field("hasPreviousPage", { type: "Boolean" });
    }
  });

  return { Connection, Edge, PageInfo, TypeNode };
}
