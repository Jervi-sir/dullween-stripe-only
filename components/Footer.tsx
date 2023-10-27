import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* 3 lines 
      bg-indigo-300
      bg-indigo-200
      bg-fuchsia-400
      */}
      <div className='border-slate-700 border-b-2 bg-gray-100 w-full h-3'></div>
      <div className='border-black border-t-2 bg-red-700  w-full h-3'></div>
      <div className='bg-yellow-500 w-full h-3'></div>

      {/* Black Footer */}
      <div className='bg-black text-white py-12'>
        <div className='container mx-auto flex justify-center items-center flex-col'>
          <div className='text-lg font-medium tracking-tight leading-8 mb-1'>
            <Link
              href='#'
              className='text-indigo-300 hover:text-indigo-400 hover:underline'
            >
              Dull Ween
            </Link>
            {' '}
            <span>&copy;</span> {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </>
  )
}
