import styles from '@/styles/SuccessPage.module.scss'
import Head from 'next/head'
import Link from 'next/link'
// import { IoBagCheckSharp } from 'react-icons/io5'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'
import { ToastContext } from '@/context/toastContext'
import { useContext } from 'react';

export default function canceled() {
  const { showLoading } = useContext(ToastContext);

  return (
    <>
      <Head>
        <title>Cancelled order</title>
      </Head>
      <div className='relative bg-red-200 px-1 xs4:px-4 xs:px-10 pt-20 pb-40 flex justify-center items-center'>
        <div className='absolute top-0 bg-red-400 w-full h-[600px] flex flex-col justify-center items-center border-b-2 border-black'>
          <Image
            className='object-cover max-h-[600px] select-none'
            fill
            src='https://res.cloudinary.com/dbnslnawc/image/upload/v1698364949/DullWeen/hn7kzaxcaol1tzbm7y3j.png'
            alt='team'
          />
        </div>
        <div
          id='successPageCard'
          className='tripleCardEffect backdrop-blur-sm bg-white/20 border-2 border-black px:1 xs4:px-4 xs:px-20 sm:px-32 py-12 flex flex-col justify-center items-center'
        >
          <MdCancel className='w-10 h-10 xs4:w-20 xs4:h-20 text-red-500 mb-4' />
          <h1 className='text-sm xs4:text-4xl font-extrabold text-center wordSpacingTight tracking-tight mb-1 select-none text-yellow-500 bg-red-500 px-2'>
            Your order has been canceled
          </h1>
          <Link href='/'>
            <button
              className='mt-5 text-sm xs4:text-2xl font-bold select-none text-white bg-red-500 py-1 px-2 xs4:px-10 rounded-lg uppercase border-red-700 border-2 hover:bg-red-900 hover:border-black active:border-white active:scale-95 transition-all duration-100 ease-in-out'
              onClick={showLoading}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
