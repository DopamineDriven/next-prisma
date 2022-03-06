import Image from "next/image";
import { Anchor } from "../UI";
import Link from "next/link";
import css from "./login.module.css";
import {
  Google,
  GitHub,
  Logo,
  TwitterLogin,
  GitlabIcon
} from "@/components/Icons";
import { signIn } from "node_modules/next-auth/react";
import { useRouter } from "next/router";
import { GoogleProfile } from "next-auth/providers/google";
import { RedirectableProviderType } from "next-auth/providers";
import { Url } from "url";
import { SVGAttribs } from "@/types/mapped";
import Bg from "../../../public/dope-bg.avif";
import cn from "classnames";

export type DynamicCase<T extends string> =
  | Capitalize<T>
  | Lowercase<T>
  | Uppercase<T>;

export type LoginProviderProps = {
  as?: Omit<Url["path"], "null">;
  providerName: string;
  svg: ({
    ...props
  }: SVGAttribs<
    "className" | "aria-hidden" | "width" | "height"
  >) => JSX.Element;
};

export const authPropsPopulated: Array<LoginProviderProps> = [
  {
    as: `/api/auth/signin/github`,
    providerName: "github",
    svg: ({
      ...props
    }: SVGAttribs<"className" | "aria-hidden" | "width" | "height">) => (
      <GitHub {...props} />
    )
  },
  {
    as: `/api/auth/signin/google`,
    providerName: "google",
    svg: ({
      ...props
    }: SVGAttribs<"className" | "aria-hidden" | "width" | "height">) => (
      <Google {...props} />
    )
  },
  {
    as: `/api/auth/signin/twitter`,
    providerName: "twitter",
    svg: ({
      ...props
    }: SVGAttribs<"className" | "aria-hidden" | "width" | "height">) => (
      <TwitterLogin {...props} />
    )
  },
  {
    as: `/api/auth/signin/gitlab`,
    providerName: "gitlab",
    svg: ({
      ...props
    }: SVGAttribs<"className" | "aria-hidden" | "width" | "height">) => (
      <GitlabIcon {...props} />
    )
  }
];

export const lazyReturnInfer = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = pathname =>
    router.pathname === pathname;
  return authPropsPopulated.map((value, p) => (
    <div key={++p * 4 ** (1 / ++p)}>
      <Link
        href='/api/auth/[...nextauth]'
        as={value.as}
        passHref={true}
        scroll={true}>
        <a
          data-active={isActive(`${value.as}`)}
          onClick={e => {
            e.preventDefault();
            signIn<RedirectableProviderType>(value.providerName);
          }}
          className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
          <span className='sr-only'>
            {"Sign in with "
              .concat(
                value.providerName as Capitalize<typeof value.providerName>
              )
              .trim()}
          </span>
          <Google />
        </a>
      </Link>
    </div>
  ));
};

export default function Login() {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = pathname =>
    router.pathname === pathname;
  return (
    <div className='lg:max-h-screen bg-gradient-to-tl from-gray-700 via-slate-800 to-gray-900 flex'>
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
            <h1 className='text-[1.025rem] absolute -top-[5.75rem] tracking-[0.25rem] leading-[2.34rem] font-extralight font-interVar text-stone-200'>
              Next. Prisma. Mongo. Nexus. Apollo. GraphQL. Tailwind. Init.
            </h1>
            <h2 className='text-[1.025rem] absolute -top-3 tracking-[0.25rem] leading-[2.54rem] font-light font-interVar text-stone-300'>
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
                        href='/api/auth/[...nextauth]'
                        as={value.as}
                        passHref={true}
                        scroll={true}>
                        <a
                          role='button'
                          data-active={isActive(`${value.as}`)}
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
      <div className=' relative w-0 flex-1 filter  grayscale mix-blend-color-burn   brightness-[1.925] overflow-hidden bg-gradient-to-r from-stone-400 via-gray-600 to-stone-400 '>
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
