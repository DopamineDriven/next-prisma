import { serialize, CookieSerializeOptions } from "cookie";
import { NextApiResponse, NextApiHandler, NextApiRequest } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

/**
 * This sets `cookie` on `res` object
 */

export const setCookie = <T = unknown extends infer U ? U : unknown>(
  res: NextApiResponse<T>,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === "object"
      ? "j:" + JSON.stringify(value)
      : String(value);

  if ("maxAge" in options) {
    options.expires = new Date(
      Date.now() + (options.maxAge ? options.maxAge : 60 * 60 * 24 * 7)
    );
  }

  res.setHeader("Set-Cookie", serialize(name, stringValue, options));
};

// /**
//  * Adds `cookie` function on `res.cookie` to set cookies for response
//  */
// const cookies =
//   (handler: NextApiHandler) =>
//   (req: NextApiRequest, res: NextApiResponse<CookieProps>) => {
//     res.send = ({ name, value, options }: CookieProps) =>
//       cookie({ res, name, value, options });
//     return handler(req, res);
//   };

// export default cookies;
