import { NextRequest, NextResponse } from "next/server";
import cors, { CorsOptions } from "@/lib/cors";

// (next: () => NextResponse)

export async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("Referrer-Policy", "Origin-When-Cross-Origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
  response.headers.set(
    "Cache-Control",
    "public, stale-while-revalidate=600, s-maxage=1200"
  );
  // response.headers.set("X-XSS-Protection", "1; mode=block");
  // response.headers.set("X-Frame-Options", "DENY");
  // response.headers.set("X-Content-Type-Options", "nosniff");
  // response.headers.set("X-DNS-Prefetch-Control", "On");
  const options: CorsOptions = {
    origin: "*",
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Apollo-Federation-Include-Trace",
      "Authorization",
      "Cache-Control",
      "Vary",
      "Content-Length",
      "Cookie",
      "Accept-Encoding",
      "Transfer-Encoding",
      "Connection",
      "Referrer",
      "Referrer-Policy",
      "X-Csrf-Token",
      "Woocommerce-Session",
      "Accept-Charset",
      "Forwarded",
      "Host",
      "From",
      "ETag",
      "Retry-After",
      "Server",
      "Set-Cookie",
      "Trailer",
      "User-Agent",
      "Upgrade",
      "X-XSS-Protection",
      "Upgrade-Insecure-Requests",
      "Session"
    ],
    maxAge: 31536000,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    exposedHeaders: ["*", "Authorization"] // Authorization must be explicitly set
  };
  return cors(req, response, options);
}

// const CorsWrapper: NextApiHandler<typeof middleware> = (
//   req: NextApiRequest,
//   res: NextApiResponse<typeof middleware>
// ) => CorsWrapper(req, res);

// export default CorsWrapper;
