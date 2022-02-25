import {
  SVGAttributes,
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  AnchorHTMLAttributes
} from "react";
import { NextApiHandler } from "next";
import { ImageProps } from "next/image";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
// export type RecordContiional<T = unknown> = T extends {
//   [index: keyof T]: T extends infer U ? U extends Array<{ [index: keyof U]: U }> | PromiseLike<T> | Awaited<U> ? T extends Promise<Array<({ [index: keyof T]: T })>>
// };

export type LiteralUnion<T extends U, U = string> =
  | T
  | (U & Record<never, never>);
export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type RecursiveRequired<T> = {
  [P in keyof T]-?: RecursiveRequired<T[P]>;
};

export type RecursiveAmbivalent<T> = {
  [P in keyof T]: RecursiveAmbivalent<T[P]>;
};

export type ApolloRecursive<
  T,
  _Implements = ({
    ...props
  }) => ApolloClient<
    T extends Record<keyof T, infer U>
      ? Record<keyof U, U>
      : Record<keyof T, T>
  >
  > = RecursiveAmbivalent<ApolloClient<NormalizedCacheObject>>;



export const ApolloClientProps = async ({
  apolloProps: { ...props }
}: {
  apolloProps: RecursiveAmbivalent<ApolloClient<NormalizedCacheObject>>;
}) => ({ ...props });

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

const ApolloClientUnwrapped = ({
  __actionHookForDevTools,
  __requestRaw,
  addResolvers,
  cache,
  clearStore,
  defaultOptions,
  disableNetworkFetches,
  extract,
  getObservableQueries,
  getResolvers,
  link,
  mutate,
  onClearStore,
  onResetStore,
  query,
  queryDeduplication,
  reFetchObservableQueries,
  readFragment,
  readQuery,
  refetchQueries,
  resetStore,
  restore,
  setLink,
  setLocalStateFragmentMatcher,
  setResolvers,
  stop,
  subscribe,
  typeDefs,
  version,
  watchQuery,
  writeFragment,
  writeQuery
}: UnwrapPromise<ReturnType<typeof ApolloClientProps>>) => {};

// <svg/> props
export type SVGAttribs<T extends keyof SVGAttributes<SVGSVGElement>> = {
  [P in T]?: SVGAttributes<SVGSVGElement>[P];
};

// <path/> props
export type SVGPathAttribs<T extends keyof SVGAttributes<SVGPathElement>> =
  {
    [P in T]?: SVGAttributes<SVGPathElement>[P];
  };

// <a/> props
export type UnwrapAnchorProps<
  T extends keyof AnchorHTMLAttributes<HTMLAnchorElement>
> = {
  [P in T]?: AnchorHTMLAttributes<HTMLAnchorElement>[P];
};

export type UnwrapTextAreaProps<
  T extends keyof DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
> = {
  [P in T]?: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >[P];
};

export type UnwrapSelectProps<
  T extends keyof DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
> = {
  [P in T]?: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >[P];
};

export type UnwrapInputProps<
  T extends keyof DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = {
  [P in T]?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >[P];
};

export type UnwrapDivProps<
  T extends keyof DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = {
  [P in T]?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[P];
};

// <code/> props
export type CodeProps<
  T extends keyof DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  >
> = {
  [P in T]?: DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  >[P];
};

// <Image/> props
export type ImgPropsConditional<T extends keyof ImageProps> = {
  [P in T]?: ImageProps[P];
};

// <button/> props
export type UnwrapButtonProps<
  T extends keyof ButtonHTMLAttributes<HTMLButtonElement>
> = {
  [P in T]?: ButtonHTMLAttributes<HTMLButtonElement>[P];
};

// All-Purpose styles -- style={{}} -- styles unwrapped
export type CSSPropertiesConditional<S extends keyof CSSProperties> = {
  [R in S]?: CSSProperties[R];
};

export type RecursivelyConditional<I, J extends keyof I> = {
  [K in J]?: I[K];
};

export type RecursivelyRequired<P, R extends keyof P> = {
  [S in R]-?: P[S];
};
export type SvgPropsRecursiveConditional = RecursivePartial<
  SVGAttributes<SVGSVGElement>
>;
export type CSSRecursiveRequired = RecursiveRequired<CSSProperties>;
