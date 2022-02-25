import { XOR } from "@/types/helpers";
export enum BufferEncodingOptions {
  ascii = "ascii",
  utf8 = "utf8",
  "utf-8" = "utf-8",
  utf16le = "utf16le",
  ucs2 = "ucs2",
  "ucs-2" = "ucs-2",
  base64 = "base64",
  base64url = "base64url",
  latin1 = "latin1",
  binary = "binary",
  hex = "hex"
}

export default function buf<
  T extends WithImplicitCoercion<string | Uint8Array | readonly number[]>,
  K extends keyof typeof BufferEncodingOptions,
  S extends number | undefined,
  E extends number | undefined
>(data: T, encoding: K, start: S, end: E): string {
  return Buffer.from(data).toString(encoding, start, end);
}
/**
 * "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex"
 */
