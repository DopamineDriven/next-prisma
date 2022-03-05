import { FC } from "react";

import Image from "next/image";
import { blurDataURLShimmer } from "@/lib/shimmer";
import { Mail, Phone } from "@/components/Icons";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import { ApolloError } from "@apollo/client";
import { ViewerStatus } from "@/types/enums";

export type ProfileHeadingProps = {
  // viewer: UserByEmailQuery["viewer"];
  viewerSession?: Session;
  viewerStatus: keyof typeof ViewerStatus;
  className?: string;
};

const ProfileHeading: FC<ProfileHeadingProps> = ({
  children,
  viewerSession,
  viewerStatus
}) => {
  const { data: viewer = viewerSession, status: status = viewerStatus } =
    useSession();

  return (
    <>
      <div className=''></div>
    </>
  );
  // const { previousData, data, called, client, error, loading } =
  //   useViewerQuery({
  //     query: ViewerDocument
  //   });
  // return (
  //   <div className='font-interVar'>
  //     {loading ? (
  //       <>loading...</>
  //     ) : error ? (
  //       <>{new ApolloError(error)}</>
  //     ) : (
  //       <>
  //         <div className='relative'>
  //           <Image
  //             quality={90}
  //             placeholder='blur'
  //             objectFit='cover'
  //             width={1950}
  //             height={256}
  //             className='h-32 w-full min-w-fit object-cover lg:h-48'
  //             blurDataURL={blurDataURLShimmer({ w: 1200, h: 256 })}
  //             alt={`${data?.me.auth?.user?.firstName}'s cover image`}
  //             src='https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80'
  //           />
  //         </div>
  //         <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
  //           <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
  //             <div className='z-100 sm:h-32 rounded-full sm:w-32'>
  //               {data?.me?.auth?.user?.image ? (
  //                 <Image
  //                   priority={true}
  //                   className=' z-100 rounded-full  ring-white'
  //                   src={data.me.auth.user.image}
  //                   layout='responsive'
  //                   objectFit={"cover"}
  //                   width={128}
  //                   blurDataURL={blurDataURLShimmer({ w: 128, h: 128 })}
  //                   placeholder='blur'
  //                   height={128}
  //                   alt='User Profile Photo'
  //                 />
  //               ) : (
  //                 <svg
  //                   xmlns='http://www.w3.org/2000/svg'
  //                   width='250'
  //                   height='250'
  //                   viewBox='0 0 192.756 192.756'>
  //                   <g fillRule='evenodd' clipRule='evenodd'>
  //                     <path fill='#fff' d='M0 0h192.756v192.756H0V0z' />
  //                     <path d='M171.428 94.027L122.939 2.835 30.176 52.159l48.488 91.192 92.764-49.324z' />
  //                     <path d='M105.344 74.472l2.369 4.455 17.033-9.057 18.113 34.066 4.455-2.369-18.113-34.066 17.033-9.056-2.369-4.455-38.521 20.482z' />
  //                     <path
  //                       fill='#fff'
  //                       d='M105.344 74.472l38.521-20.482 2.369 4.455-17.033 9.056 18.113 34.066-4.455 2.369-18.113-34.066-17.033 9.057-2.369-4.455z'
  //                     />
  //                     <path d='M62.27 89.404l-4.455 2.368-20.482-38.521 47.854 12.875-15.884-29.873 4.454-2.369 21.179 39.831-47.575-12.35L62.27 89.404z' />
  //                     <path
  //                       d='M95.086 48.432c4.835 8.26 15.375 11.302 23.902 6.767 6.562-3.489 10.072-10.473 9.453-17.438l5.018-.448c.793 8.92-3.701 17.864-12.105 22.333-11.205 5.958-25.12 1.704-31.078-9.501-5.958-11.206-1.705-25.12 9.502-31.079 11.205-5.958 25.119-1.704 31.078 9.501.115.219.229.439.336.66L95.086 48.432z'
  //                       fill='#fff'
  //                     />
  //                     <path d='M123.906 27.331c-5.379-6.001-14.342-7.806-21.777-3.852-7.424 3.948-10.939 12.368-8.992 20.174l30.769-16.322z' />
  //                     <path
  //                       d='M87.422 108.247l-25.078-7.337 1.472-4.817 25.148 7.469 7.669-25.086 4.885 1.604-7.677 24.755 25.48 7.46-1.271 4.878-25.68-7.523-7.6 25.217-5.017-1.533s7.539-25.017 7.669-25.087zM57.815 91.772L37.333 53.251l47.854 12.875-15.884-29.873 4.454-2.369 21.179 39.831-47.575-12.35L62.27 89.404l-4.455 2.368z'
  //                       fill='#fff'
  //                     />
  //                     <path d='M79.755 146.536l90.538-48.14-14.547 44.709-88.048 46.817 12.057-43.386zM64.661 188.555l11.75-42.382-47.304-88.965-7.779 49.851 43.333 81.496zM148.908 151.594c-1.293 0-2.379 1.016-2.379 2.347a2.36 2.36 0 0 0 2.379 2.372 2.351 2.351 0 0 0 2.365-2.372c0-1.332-1.078-2.347-2.365-2.347zm0 4.372c-1.105 0-1.949-.87-1.949-2.025 0-1.129.844-1.999 1.949-1.999 1.09 0 1.936.87 1.936 1.999 0 1.155-.846 2.025-1.936 2.025z' />
  //                     <path d='M149.293 154.111c.41-.045.725-.252.725-.751 0-.53-.309-.788-.965-.788h-1.066v2.756h.43v-1.186h.455l.75 1.186h.461l-.79-1.217zm-.43-.318h-.447v-.877h.568c.289 0 .605.057.605.422.001.435-.347.455-.726.455z' />
  //                   </g>
  //                 </svg>
  //               )}
  //             </div>
  //             <div className='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
  //               <div className='sm:hidden md:block mt-6 min-w-0 flex-1'>
  //                 <h1 className='text-2xl font-bold text-gray-900 truncate'>
  //                   {data?.me.auth?.user?.firstName
  //                     ? data?.me.auth.user.firstName
  //                     : "Name Null"}
  //                 </h1>
  //               </div>
  //               <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
  //                 <button
  //                   type='button'
  //                   className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'>
  //                   <Mail className='-ml-1 mr-2 h-5 w-5 text-gray-400' />
  //                   <span>Message</span>
  //                 </button>
  //                 <button
  //                   type='button'
  //                   className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'>
  //                   <Phone className='-ml-1 mr-2 h-5 w-5 text-gray-400' />
  //                   <span>Call</span>
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //           <div className='hidden sm:block md:hidden mt-6 min-w-0 flex-1'>
  //             <h1 className='text-2xl font-bold text-white truncate'>
  //               {data?.me.auth?.user?.firstName
  //                 ? data.me.auth.user.firstName
  //                 : "Name Null"}
  //               {data?.me.auth?.user.role ? (
  //                 <span className='lowercase text-2xl font-bold text-white'>
  //                   {data.me.auth.user.role}
  //                 </span>
  //               ) : (
  //                 <></>
  //               )}
  //             </h1>
  //           </div>
  //         </div>
  //         {children ?? <></>}
  //       </>
  //     )}
  //   </div>
  // );
};

export default ProfileHeading;
