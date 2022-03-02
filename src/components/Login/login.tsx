import Image from "next/image";
import { Anchor } from "../UI";
import Link from "next/link";
import css from "./login.module.css";
import { Google, GitHub, Vercel } from "@/components/Icons";
import { signIn } from "node_modules/next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = pathname =>
    router.pathname === pathname;
  return (
    <div className='min-h-screen bg-white flex'>
      <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <Link href='/' as='/' scroll={true} passHref={true}>
              <Anchor id='/#' className='focus:outline-none'>
                <Vercel className={`${css.logo}`} />
              </Anchor>
            </Link>
            <h2 className='mt-6 text-3xl font-extrabold font-sans text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <div className='mt-8'>
            <div>
              <div>
                <div className='mt-1 grid grid-cols-2 gap-3'>
                  <div>
                    <Link
                      href='/api/auth/[...nextauth]'
                      as='/api/auth/signin'
                      passHref={true}
                      scroll={true}>
                      <a
                        data-active={isActive("/signup")}
                        onClick={e => {
                          e.preventDefault();
                          signIn();
                        }}
                        className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                        <span className='sr-only'>Sign in with Google</span>
                        <Google />
                      </a>
                    </Link>
                  </div>

                  <div>
                    <Link
                      href='/api/auth/[...nextauth]'
                      as='/api/auth/signin'
                      passHref={true}
                      scroll={true}>
                      <a
                        data-active={isActive("/signup")}
                        onClick={e => {
                          e.preventDefault();
                          signIn();
                        }}
                        className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                        <span className='sr-only'>Sign in with GitHub</span>
                        <GitHub />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block relative w-0 flex-1'>
        <Image
          width='1000'
          layout='responsive'
          objectFit='cover'
          height='850'
          quality='85'
          className='absolute inset-0 max-h-[100vh] w-full object-cover'
          src='/stock.jpg'
          alt='Login'
        />
      </div>
    </div>
  );
}
