"use client"
import { useToast } from '@/context/toastContext'
import Link from 'next/link';

export const ContinueShoping = () => {
  const { showLoading } = useToast();
  return (
    <Link href='/'>
      <button
        className='text-sm xs4:text-2xl font-bold select-none text-white bg-red-500 py-1 px-2 xs4:px-10 rounded-lg uppercase border-red-700 border-2 hover:bg-red-900 hover:border-black active:border-white active:scale-95 transition-all duration-100 ease-in-out'
        onClick={showLoading}
      >
        Continue Shopping
      </button>
    </Link>
  )
}