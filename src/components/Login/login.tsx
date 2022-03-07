import Image from "next/image";
import Link from "next/link";
import css from "./login.module.css";
import {
  Google,
  GitHub,
  Logo,
  TwitterLogin,
  GitlabIcon,
  MediumIcon
} from "@/components/Icons";
import { signIn } from "node_modules/next-auth/react";
import { useRouter } from "next/router";
import { RedirectableProviderType } from "next-auth/providers";
import { SVGAttribs } from "@/types/mapped";
import Bg from "../../../public/dope-bg.avif";
import cn from "classnames";

export type DynamicCase<T extends string> =
  | Capitalize<T>
  | Lowercase<T>
  | Uppercase<T>;

export type LoginProviderProps = {
  providerName: string;
  svg: ({
    ...props
  }: SVGAttribs<
    "className" | "aria-hidden" | "width" | "height"
  >) => JSX.Element;
};

export const authPropsPopulated: Array<LoginProviderProps> = [
  {
    providerName: "github",
    svg: ({
      ...props
    }: SVGAttribs<"className" | "aria-hidden" | "width" | "height">) => (
      <GitHub {...props} />
    )
  },
  {
    providerName: "google",
    svg: ({
      ...props
    }: SVGAttribs<"className" | "aria-hidden" | "width" | "height">) => (
      <Google {...props} />
    )
  },
  {
    providerName: "twitter",
    svg: ({
      ...props
    }: SVGAttribs<"className" | "aria-hidden" | "width" | "height">) => (
      <TwitterLogin {...props} />
    )
  }
  // {
  //   providerName: "gitlab",
  //   svg: ({
  //     ...props
  //   }: SVGAttribs<"className" | "aria-hidden" | "width" | "height">) => (
  //     <GitlabIcon {...props} />
  //   )
  // },
  // {
  //   providerName: "medium",
  //   svg: ({
  //     ...props
  //   }: SVGAttribs<"className" | "aria-hidden" | "width" | "height">) => (
  //     <MediumIcon {...props} />
  //   )
  // }
];

export default function Login() {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = pathname =>
    router.pathname === pathname;
  return (
    <div className='min-h-screen bg-gradient-to-tl from-gray-700 via-slate-800 to-gray-900 flex'>
      <div className='flex-1 flex flex-col justify-center pb-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div className='relative'>
            <Link href='/' as='/' scroll={true} passHref={true}>
              <a
                id='/#'
                className='focus:outline-none ring-inset ring-1 relative ring-gray-400'>
                <Logo className={cn(css.logo)} />
              </a>
            </Link>
            <h1 className='lg:text-[1.025rem] text-[0.8rem] absolute -top-[7.75rem] lg:-top-[5.75rem] tracking-[0.25rem] leading-[2.34rem] font-extralight font-interVar text-stone-200'>
              Next. Prisma. Mongo. Nexus. Apollo. GraphQL. Tailwind. Init.
            </h1>
            <h2 className='lg:text-[1.025rem] text-[0.75rem] absolute -top-5 lg:-top-3 tracking-[0.25rem] leading-[2.54rem] font-light font-interVar text-stone-300'>
              <span className=''>Select a provider to get started.</span>
            </h2>
          </div>
          <div className='mt-16 relative'>
            <div>
              <div>
                <div className={css.mapped}>
                  {authPropsPopulated.map((value, p) => (
                    <div key={`${p++}:${value.providerName}`}>
                      <Link
                        href={`/api/auth/signin/${value.providerName}`}
                        as={`/api/auth/signin/${value.providerName}`}
                        passHref={true}
                        scroll={true}>
                        <a
                          role='button'
                          data-active={isActive(
                            `/api/auth/signin/${value.providerName}`
                          )}
                          onClick={e => {
                            e.preventDefault();
                            signIn<RedirectableProviderType>(
                              value.providerName
                            );
                          }}>
                          <span className='sr-only'>
                            {"Sign in with "
                              .concat(
                                value.providerName as Capitalize<`${typeof value.providerName}`>
                              )
                              .trim()}
                          </span>
                          {value.svg({
                            "aria-hidden": true,
                            height: "20",
                            width: "20",
                            className: ""
                          })}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sr-only lg:relative w-0 lg:flex-1 lg:filter  lg:grayscale lg:mix-blend-color-burn lg:not-sr-only  lg:brightness-[1.925] lg:overflow-hidden lg:bg-gradient-to-r lg:from-stone-400 lg:via-gray-600 lg:to-stone-400 '>
        <Image
          width={Bg.width}
          layout='intrinsic'
          objectFit='contain'
          blurDataURL={Bg.blurDataURL}
          placeholder='blur'
          height={Bg.height}
          quality='100'
          priority={true}
          className='absolute inset-0 top-50 w-full object-contain mix-blend-exclusion filter-grayscale'
          src={Bg.src}
          alt='Login'
        />
      </div>
    </div>
  );
}
