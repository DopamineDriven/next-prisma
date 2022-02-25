// export declare function Freeze<T>(o: T): Readonly<T>;
/**
 * @type {ParsedUrlQuery}
 * @description url query params
 */
export type Enumerable<T> = T | Array<T> | ArrayLike<T>;
export type ReadonlyEnumerable<T> = T | ReadonlyArray<T>;

export type ParsedUrlQuery<T = string, N = NodeJS.Dict<T | T[]>> = N;

export interface Q
  extends ParsedUrlQuery<{ [index: keyof Q]: Enumerable<Q> }> {}

type DictType =
  | string
  | number
  | boolean
  | ReadonlyEnumerable<string | number | boolean>
  | null;

export type ParsedUrlQueryInput = NodeJS.Dict<DictType>;
