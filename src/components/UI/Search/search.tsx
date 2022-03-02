import { useEffect, KeyboardEvent } from "react";
import cn from "classnames";
import css from "./search.module.css";
import { useRouter } from "next/router";
import type { UnwrapInputProps, UnwrapDivProps } from "@/types/mapped";
import { filterQuery } from "@/lib/filter-query";

const InjectInput = ({
  ...props
}: UnwrapInputProps<
  | "id"
  | "name"
  | "onChange"
  | "className"
  | "aria-hidden"
  | "defaultValue"
  | "placeholder"
  | "onKeyUp"
  | "key"
>) => <input {...props} />;

const InjectDiv = ({
  children,
  ...props
}: UnwrapDivProps<"children" | "className">) => (
  <div {...props}>{children}</div>
);

export type SearchProps = {
  className?: string;
  id?: string;
};

const Search = ({ className, id = "search" }: SearchProps) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/search`, `/search`, {
      priority: true
    });
  }, [router]);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      const q = e.currentTarget.value;

      router.push(
        {
          pathname: `/search`,
          query: q ? filterQuery({ q }) : {}
        },
        undefined,
        { shallow: true }
      );
    }
  };

  return (
    <InjectDiv className={cn(css.root, className ?? "")}>
      <label htmlFor={id}>Search</label>
      <InjectInput
        id={id}
        name={id}
        placeholder={"Search common questions by topic"}
        onKeyUp={handleKeyUp}
      />
      <div>
        <svg fill='currentColor' viewBox='0 0 20 20'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
          />
        </svg>
      </div>
    </InjectDiv>
  );
};

export default Search;

/**
 * import { UserEntriesQuery } from "@/graphql/LocalGen/Core/Queries/user-entries.graphql";
import Image from "next/image";
import { UserByEmailQuery } from "@/graphql/LocalGen/Core/Queries/user-by-email.graphql";
import { blurDataURLShimmer } from "@/lib/shimmer";
import cn from "classnames";
import Link from "next/link";
export interface EntryFeedProps extends UserEntriesQuery, UserByEmailQuery {
  className?: string;
}

const EntryFeed = ({ userEntries, className, viewer }: EntryFeedProps) => {
  return (
    <div
      className={cn(
        "relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8",
        className ?? ""
      )}>
      <div className='absolute inset-0'>
        <div className='bg-white h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
            User Entries
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
          {userEntries?.edges?.map(post => (
            <div
              key={post?.node?.title}
              className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <div className='flex-shrink-0'>
                {post?.node?.featuredImage ? (
                  <Image
                    quality={90}
                    placeholder='blur'
                    width={2434}
                    height={1250}
                    blurDataURL={blurDataURLShimmer({ w: 2434, h: 192 })}
                    objectFit='cover'
                    className='h-48 w-full object-cover'
                    src={post.node.featuredImage}
                    alt={`${viewer?.userByEmail?.name}'s cover image`}
                  />
                ) : (
                  <Image
                    quality={90}
                    placeholder='blur'
                    width={2434}
                    height={192}
                    blurDataURL={blurDataURLShimmer({ w: 2434, h: 192 })}
                    objectFit='cover'
                    className='h-48 w-full object-cover'
                    src={`https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2434&q=80`}
                    alt={`${viewer?.userByEmail?.name}'s cover image`}
                  />
                )}
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-indigo-600'>
                    <Link
                      href='/entry/[id]'
                      as={`/entry/${post?.node?.userId}`}
                      passHref={true}
                      scroll={true}>
                      <a
                        id={`#/entry/${post?.node?.userId}`}
                        className='hover:underline'>
                        <sub>
                          {"View All Entries By" + viewer?.userByEmail?.name}
                        </sub>
                      </a>
                    </Link>
                  </p>
                  <a id={`#${post?.node?.id}`} className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>
                      {post?.node?.title}
                    </p>
                    <p className='mt-3 text-base text-gray-500'>
                      {post?.node?.content}
                    </p>
                  </a>
                </div>
                <div className='mt-6 flex items-center'>
                  <div className='flex-shrink-0'>
                    <Link
                      href='/entry/[id]'
                      as={`/entry/${post?.node?.userId}`}
                      passHref={true}
                      scroll={true}>
                      <a
                        id={`#/entry/${post?.node?.userId}`}
                        className='hover:underline'>
                        <span className='sr-only'>
                          {viewer?.userByEmail?.name}
                        </span>
                        <Image
                          quality={90}
                          placeholder='blur'
                          width={40}
                          height={40}
                          blurDataURL={blurDataURLShimmer({ w: 40, h: 40 })}
                          objectFit='cover'
                          className='h-10 w-10 rounded-full'
                          src={`${viewer?.userByEmail?.image}`}
                          alt={`${viewer?.userByEmail?.name}`}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className='ml-3'>
                    <p className='text-sm font-medium text-gray-900'>
                      <span
                        id={`#${viewer?.userByEmail?.name}`}
                        className='hover:underline'>
                        {viewer?.userByEmail?.name}
                      </span>
                    </p>
                    <div className='flex space-x-1 text-sm text-gray-500'>
                      <time dateTime={`${post?.node?.createdAt}`}>
                        {post?.node?.createdAt}
                      </time>
                      <span aria-hidden='true'>&middot;</span>
                      <span>{viewer?.userByEmail?.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntryFeed;

 */
