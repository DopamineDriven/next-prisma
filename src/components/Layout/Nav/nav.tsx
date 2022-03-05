import { Fragment, useState, useEffect } from "react";
import { Menu, Transition, Popover } from "@headlessui/react";
import {
  Analytics,
  ChevronDown,
  Engagement,
  GitHubNav,
  Logo,
  MenuIcon,
  Users,
  XIcon
} from "@/components/Icons";
import cn from "classnames";
import css from "./nav.module.css";
import Image from "next/image";
import Link from "next/link";
import throttle from "lodash/throttle";
import { useRouter } from "next/router";
import { SVGAttribs } from "@/types/mapped";
import { blurDataURLShimmer } from "@/lib/shimmer";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { ViewerStatus } from "@/types/enums";

export type UnderPressurePropsIeConstruction = {
  name: string;
  href: string;
  icon: ({
    ...props
  }: SVGAttribs<
    "className" | "aria-hidden" | "fill" | "stroke"
  >) => JSX.Element;
  description: string;
  current: boolean;
};

export type GitHubProps = {
  name: string;
  href: string;
  description: string;
  current: boolean;
};

const github: GitHubProps[] = [
  {
    name: "GitHub",
    href: "/github",
    description: "GitHub Landing",
    current: false
  },
  {
    name: "Repositories",
    href: "/github/repositories",
    description: "Your repositories",
    current: false
  },
  {
    name: "Profile",
    href: "/github/profile",
    description: "Your GitHub Profile",
    current: false
  },
  {
    name: "Stars",
    href: "/github/stars",
    description: "Your GitHub Stars",
    current: false
  }
];

const hubspot: UnderPressurePropsIeConstruction[] = [
  {
    name: "Home",
    href: "/github",
    icon: GitHubNav,
    description: "GitHub Integration",
    current: true
  },
  {
    name: "Contacts",
    href: "/github/stars",
    icon: Engagement,
    description: "View Contacts, follow Leads, and more.",
    current: false
  },
  {
    name: "Users",
    href: "/hubspot/users",
    icon: Users,
    description: "View Internal HubSpot Users.",
    current: false
  },
  {
    name: "Analytics",
    href: "/github",
    icon: Analytics,
    description: "View HubSpot-generated Analytics.",
    current: false
  }
];
const userNavigation = [
  { name: "Profile", href: "/profile", as: "/profile" },
  { name: "Settings", href: "/settings", as: "/settings" },
  { name: "Sign out", href: "/api/auth/[...nextauth]", as: "/api/auth/signout" }
];

export type NavProps = {
  data?: Session | null;
  status: keyof typeof ViewerStatus;
};
const GlobalNav = ({ data: user, status: statusSession }: NavProps) => {
  const { data: data = user, status: status = statusSession } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;
      setHasScrolled(scrolled);
    }, 200);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  const isActive: (pathname: string) => boolean = pathname =>
    router.pathname === pathname;
  return (
    <Popover
      as='section'
      className={cn(css.root, css.stickyNav, "relative bg-white", {
        "bg-opacity-80": hasScrolled,
        "bg-opacity-100 shadow": !hasScrolled
      })}>
      <div
        className={cn(
          css.stickyNav,
          "flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10"
        )}>
        <div>
          <Link href='/' passHref={true} scroll={true}>
            <a data-active='/' id='/' className='flex'>
              <span className='sr-only'>AR</span>
              <Logo
                className={cn("block relative md:not-sr-only", {
                  "sr-only md:not-sr-only": !menuOpen,
                  "not-sr-only": !!menuOpen
                })}
              />
            </a>
          </Link>
        </div>
        <div className='-mr-2 -my-2 md:hidden'>
          {menuOpen === true ? (
            <Popover.Button
              as='button'
              className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon
                className='h-6 w-6'
                aria-hidden='true'
                onClick={e => {
                  e.preventDefault();
                  setMenuOpen(false);
                }}
              />
            </Popover.Button>
          ) : (
            <Popover.Button
              as='button'
              className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Close Menu</span>
              <XIcon
                className='h-6 w-6'
                aria-hidden='true'
                onClick={e => {
                  e.preventDefault();
                  setMenuOpen(true);
                }}
              />
            </Popover.Button>
          )}
        </div>
        <div className='hidden md:flex-1 md:flex md:items-center md:justify-between'>
          <Popover.Group as='nav' className='flex space-x-10'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={cn(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}>
                    <span>About</span>
                    <ChevronDown
                      className={cn(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'>
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                          {hubspot.map(item => (
                            <Link
                              key={item.name}
                              href={item.href}
                              passHref={true}
                              scroll={true}>
                              <a
                                href={item.href}
                                data-active={isActive(item.href)}
                                className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'>
                                <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                                  <item.icon
                                    className='h-6 w-6'
                                    aria-hidden='true'
                                  />
                                </div>
                                <div className='ml-4'>
                                  <p className='text-base font-medium text-gray-900'>
                                    {item.name}
                                  </p>
                                  <p className='mt-1 text-sm text-gray-500'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className='p-5 bg-gray-50 sm:p-8'>
                          <a
                            href='#'
                            className='-m-3 p-3 flow-root rounded-md hover:bg-gray-100'>
                            <div className='flex items-center'>
                              <div className='text-base font-medium text-gray-900'>
                                Influencers
                              </div>
                              <span className='ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800'>
                                New
                              </span>
                            </div>
                            <p className='mt-1 text-sm text-gray-500'>
                              Track influencer stats, earnings, and more.
                            </p>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Blog
            </a>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Integrations
            </a>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={cn(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}>
                    <span>More</span>
                    <ChevronDown
                      className={cn(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'>
                    <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {github.map(item => (
                            <Link
                              key={item.name}
                              href={item.href}
                              passHref={true}
                              scroll={true}>
                              <a
                                data-active={isActive(item.href)}
                                href={item.href}
                                className='-m-3 p-3 block rounded-md hover:bg-gray-50'>
                                <p className='text-base font-medium text-gray-900'>
                                  {item.name}
                                </p>
                                <p className='mt-1 text-sm text-gray-500'>
                                  {item.description}
                                </p>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <Menu as='div' className='flex items-center md:ml-12'>
            {({ open }) => (
              <>
                <div>
                  <Menu.Button
                    as='button'
                    className='bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 '
                    onClick={() => !open}>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      width='40'
                      height='40'
                      objectFit='cover'
                      quality='85'
                      className='w-8 h-8 rounded-full'
                      src={
                        status === "unauthenticated"
                          ? "/dope-bg.avif"
                          : status === "authenticated"
                          ? `${data?.user.image}`
                          : "/archer.gif"
                      }
                      alt={`${data?.user.name}'s Avatar`}
                    />
                  </Menu.Button>
                </div>
                {status === "unauthenticated" ? (
                  <></>
                ) : (
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'>
                    <Menu.Items className='origin-top-right absolute top-16 right-0 mt-2 w-36 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {userNavigation.map((item, l) => (
                        <Menu.Item
                          as='li'
                          key={(2 + l++) ** 3}
                          className='list-none ease-in'>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              as={item.as}
                              passHref={true}
                              scroll={true}>
                              {item.name.includes("Sign out") ? (
                                <a
                                  data-active={isActive(item.as)}
                                  id={`#${item.as}`}
                                  onClick={e => {
                                    e.preventDefault();
                                    signOut<true>();
                                  }}
                                  className={cn(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  {item.name}
                                </a>
                              ) : (
                                <a
                                  data-active={isActive(item.as)}
                                  id={`#${item.as}`}
                                  className={cn(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}>
                                  {item.name}
                                </a>
                              )}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                )}
              </>
            )}
          </Menu>
        </div>
      </div>
      {/* <div className='absolute inset-0'></div> */}
      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'>
        <Popover.Panel
          focus
          className={cn(
            "absolute top-0 inset-x-0 min-h-[calc(100vh)] transition transform origin-top-right md:hidden",
            {
              "sr-only": menuOpen === true,
              "not-sr-only": menuOpen === false
            }
          )}>
          <div
            aria-hidden='true'
            className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'></div>
              <div className='mt-6'>
                <nav className='grid gap-6'>
                  {hubspot.map((item, yy) => (
                    <Link
                      href={item.href}
                      passHref={true}
                      scroll={true}
                      key={hubspot.length ** -++yy}>
                      <a
                        data-active={isActive(item.href)}
                        id={"#" + item.href}
                        className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white'>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </div>
                        <div className='ml-4 text-base font-medium text-gray-900'>
                          {item.name}
                        </div>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className='py-6 px-5'>
              <div className='grid grid-cols-2 gap-4'>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Pricing
                </a>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Docs
                </a>
                <a
                  href='#'
                  className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Enterprise
                </a>
                {github.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    passHref={true}
                    scroll={true}>
                    <a
                      data-active={isActive(item.href)}
                      id={`#${item.href}`}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'>
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <Menu as='div' className='mt-6'>
                {({ open }) => (
                  <>
                    <div className='grid grid-cols-3'>
                      <button className=' flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                        <span className='sr-only'>Open user menu</span>
                        <Image
                          width='48'
                          height='48'
                          objectPosition={"50%,50%"}
                          objectFit='cover'
                          placeholder='blur'
                          blurDataURL={blurDataURLShimmer({
                            w: 48,
                            h: 48
                          })}
                          quality='100'
                          className='w-[3.375rem] h-[3.375rem] object-center object-contain rounded-full relative'
                          src={
                            status === "unauthenticated"
                              ? "/archer.gif"
                              : status === "authenticated" && data?.user.image
                              ? data.user.image
                              : blurDataURLShimmer({
                                  w: 48,
                                  h: 48
                                })
                          }
                          alt={`${data?.user.name}'s Avatar`}
                        />
                      </button>
                      {userNavigation.map((item, b) => (
                        <Link
                          href={item.href}
                          as={item.as}
                          key={(3 + b++) ** 3}
                          passHref={true}
                          scroll={true}>
                          {item.name.includes("Sign out") ? (
                            <a
                              data-active={isActive(item.href)}
                              id={`#${item.as}`}
                              onClick={e => {
                                e.preventDefault();
                                signOut<true>();
                              }}
                              className='list-none text-left text-black ease-in container'>
                              <span
                                className={cn(
                                  "text-sm text-black font-medium bg-transparent "
                                )}>
                                {item.name}
                              </span>
                            </a>
                          ) : item.name.includes("Profile") ? (
                            <></>
                          ) : (
                            <a
                              data-active={isActive(item.href)}
                              id={`#${item.as}`}
                              className='list-none text-left text-black ease-in container'>
                              <span
                                className={cn(
                                  "text-sm text-black font-medium bg-transparent "
                                )}>
                                {item.name}
                              </span>
                            </a>
                          )}
                        </Link>
                      ))}
                      {status === "unauthenticated" ? (
                        <></>
                      ) : (
                        <Transition
                          as={"div"}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'>
                          <Menu.Items className='flex-grow right-20 bg-transparent  min-w-fit grid grid-cols-3 min-h-fit rounded-md  py-1.5 ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            {userNavigation.map((item, b) => (
                              <Link
                                href={item.href}
                                as={item.as}
                                key={(3 + b++) ** 3}
                                passHref={true}
                                scroll={true}>
                                {item.name.includes("Sign out") ? (
                                  <a
                                    data-active={isActive(item.href)}
                                    id={`#${item.as}`}
                                    onClick={e => {
                                      e.preventDefault();
                                      signOut<true>();
                                    }}
                                    className='list-none text-center text-black ease-in container'>
                                    <span
                                      className={cn(
                                        "text-sm text-black font-medium bg-transparent "
                                      )}>
                                      {item.name}
                                    </span>
                                  </a>
                                ) : (
                                  <a
                                    data-active={isActive(item.href)}
                                    id={`#${item.as}`}
                                    className='list-none text-center text-black ease-in container'>
                                    <span
                                      className={cn(
                                        "text-sm text-black font-medium bg-transparent "
                                      )}>
                                      {item.name}
                                    </span>
                                  </a>
                                )}
                              </Link>
                            ))}
                          </Menu.Items>
                        </Transition>
                      )}
                    </div>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default GlobalNav;
