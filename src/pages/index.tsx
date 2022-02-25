import { useRouter } from 'next/router';


export default function Index() {
  const router = useRouter()

  return (
    <>
    <div className='text-stone-600 font-interVar'>
      {router.pathname ? router.pathname : "no pathname here"}
    </div>
  </>)
}

