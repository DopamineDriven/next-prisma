import { fractionateCommaDelimitedData } from "./helpers";
import type { NextApiRequest, GetServerSidePropsContext } from "next";
import type { MicroRequest } from 'apollo-server-micro/dist/types';

export type GetIpProps = {
  req: NextApiRequest | GetServerSidePropsContext["req"] | MicroRequest;
};

export function getIP({ req }: GetIpProps): { lastActiveIp: string } {
  const nonProxiedIp = req.headers["x-forwarded-for"] as string;
  const returnFirstRealIp = nonProxiedIp
    ? fractionateCommaDelimitedData(nonProxiedIp)[0]
    : req.socket.remoteAddress;
  return { lastActiveIp: returnFirstRealIp ?? "unknown" };
}
