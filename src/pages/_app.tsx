import "@/styles/index.css";

import { AppProps } from "next/app";
import { ComponentType, FC, HTMLAttributes, useEffect } from "react";
import cn from "classnames";
import { LinkProps } from "next/link";
import { useRouter } from "next/router";

const Noop: FC = ({ children }) => <>{children}</>;




export const Page: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => (
  <main {...props} className={cn("w-full max-w-3xl mx-auto py-16", className)}>
    {children}
  </main>
);

export type LinkPropsMapped<T extends keyof LinkProps> = {
  [P in T]: LinkProps[P];
};

export type RouterPropsMapped<K extends keyof ReturnType<typeof useRouter>> = {
  [L in K]: ReturnType<typeof useRouter>[L];
};

export function getLayout<LP extends {}>(
  Component: ComponentType<any>
): ComponentType<LP> {
  return (Component as any).Layout || Noop;
}

export default function NextPrismaApp({ Component, pageProps }: AppProps) {
  const LayoutGlobal = getLayout<any>(Component);
  const router = useRouter();

  useEffect(() => {
    const isProd = process.env.NODE_ENV === "production";
    const handleRouteChange = <
      T extends RouterPropsMapped<"events">,
      P extends URL,
      S extends LinkPropsMapped<"shallow">
    >(
      events: T,
      url: P,
      shallow: S
    ) => {
      !isProd
        ? console.log(
            `App is changing to ${url} ${
              shallow ? "with" : "without"
            } shallow routing with query: ${Object.values(
              router.query
            ).join(", \n")}`
          )
        : () => {
            events.events.emit("routeChangeError");
          };
    };
    router.events.on(
      "routeChangeStart",
      (
        events: RouterPropsMapped<"events">,
        url: URL,
        shallow: LinkPropsMapped<"shallow">
      ) => handleRouteChange(events, url, shallow)
    );
    return () => {
      router.events.off(
        "routeChangeComplete",
        (
          events: RouterPropsMapped<"events">,
          url: URL,
          shallow: LinkPropsMapped<"shallow">
        ) => handleRouteChange(events, url, shallow)
      );
    };
  }, [router.events, router.query]);
  useEffect(() => {
    document?.body?.classList?.remove("loading");
  }, [router]);
  return (
    <LayoutGlobal pageProps={pageProps}>
      <Component {...pageProps} />
    </LayoutGlobal>
  );
}
