import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession, signIn } from "next-auth/react";
import Image from "next/image";
import { useApollo } from "@/apollo/apollo";

const clientId = process.env.GITHUB_CLIENT_ID_DEV ?? "";
const clientSecret = process.env.GITHUB_CLIENT_SECRET_DEV ?? "";
const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = pathname =>
    router.pathname === pathname;
  const {
    query: { accessToken }
  } = router;
  console.log(JSON.stringify(accessToken, null, 2));
  const { data, status } = useSession({ required: false });
  let left = (
    <div className='left'>
      <Link href='/'>
        <a className='bold' data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }
        a {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }
        .left a[data-active="true"] {
          color: gray;
        }
        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  if (status === "loading") {
    left = (
      <div className='left'>
        <Link href='/'>
          <a className='bold' data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }
          .left a[data-active="true"] {
            color: gray;
          }
          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className='right'>
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!data || status !== "authenticated") {
    right = (
      <div className='right'>
        <Link href='/api/auth/signin' passHref>
          <a
            data-active={isActive("/signup")}
            onClick={e => {
              e.preventDefault();
              signIn();
            }}>
            Log in
          </a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }
          a + a {
            margin-left: 1rem;
          }
          .right {
            margin-left: auto;
          }
          .right a {
            border: 1px solid black;
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }
        `}</style>
      </div>
    );
  }

  if (data && status === "authenticated") {
    left = (
      <div className='left'>
        <Link href='/'>
          <a className='bold' data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <Link href='/drafts'>
          <a data-active={isActive("/drafts")}>My drafts</a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }
          a {
            text-decoration: none;
            color: #000;
            display: inline-block;
          }
          .left a[data-active="true"] {
            color: gray;
          }
          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className='font-sans absolute origin-right '>
        <p>
          {data?.user?.name} ({data?.user?.email})
        </p>
        <a className='max-w-[96px] max-h-[96px] container'>
          <Image
            alt='user-avatar'
            width='32'
            height='32'
            quality='100'
            className='rounded-full object-center object-cover ring-[2px] bg-clip-border bg-gradient-to-br from-violet-700 via-blue-700 to-sky-600'
            layout='responsive'
            objectFit='cover'
            src={data?.user?.image ? data.user.image : "/cortina-logo.png"}
          />
        </a>
        <button
          onClick={e => {
            e.preventDefault();
            signOut();
          }}>
          <a className='inline-block text-[#000] font-sans mr-1 border-1 border-black px-[0.5rem] py-[1rem]'>
            Log out
          </a>
        </button>
        <style jsx>{`
          p {
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
          }
          button {
            border: none;
          }
        `}</style>
      </div>
    );
  }

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;
