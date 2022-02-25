import type { UnwrapPromise } from "./helpers";
import type {
  NextApiRequest,
  GetServerSidePropsContext,
  GetStaticPropsContext
} from "next";
import type { AddressInfo } from "net";
import { JSONObjectResolver, JSONResolver, GraphQLBigInt } from 'graphql-scalars';
import { IncomingHttpHeaders } from "http";
export type Enumerable<T> = T | Array<T>;
export type HarvestNetworkDataProps = {
  ClientIp: string;
  BoundAFP: AddressInfo | Record<string, never>;
  Cookies: NodeJS.Dict<string | string[]>;
  Headers:
  | IncomingHttpHeaders
  | Headers
    | Record<
        string | number | symbol,
        unknown extends infer U ? U : unknown
      >;
};
export declare function HarvestNetworkInfo<
  T extends HarvestNetworkDataProps extends infer U
    ? U
    : HarvestNetworkDataProps
  // N extends GetStaticPropsContext extends keyof GetStaticPropsContext<
  //   infer R
  // >
  //   ? keyof GetServerSidePropsContext<R>
  //   : GetServerSidePropsContext
  // >
>(
  req:
    | GetServerSidePropsContext
    | NextApiRequest
    | (T extends undefined | null ? never : T extends infer U ? U : T)
): Promise<{
  harvestedData: T;
}>;

export type HarvestNetworkReturnTypeUnwrapped = UnwrapPromise<
  ReturnType<typeof HarvestNetworkInfo extends PromiseLike<infer U> ? U : typeof HarvestNetworkInfo>
>;

