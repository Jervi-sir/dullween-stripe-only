import styles from '@/styles/SuccessPage.module.scss'
import Head from 'next/head'
import Link from 'next/link'
// import { IoBagCheckSharp } from 'react-icons/io5'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'
import { ContinueShoping } from '@/components/ContinueShoping'

export default function canceled() {

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
          <ContinueShoping />

        </div>
      </div>
    </>
  )
}
