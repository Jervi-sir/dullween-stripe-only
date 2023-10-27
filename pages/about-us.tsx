import { Delivery } from '@/components/Delivery';
import { TermsConditions } from '@/components/TermsConditions';
import { ToastContext } from '@/context/toastContext';
import styles from '@/styles/AboutUsPage.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react';

export default function AboutUsPage() {
  const { showLoading } = useContext(ToastContext);
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <div className='flex flex-col justify-center items-center px-0'>
        <div className='relative bg-indigo-400 w-full h-[600px] flex flex-col justify-center items-center border-b-2 border-black'>
          <Image
            className='object-cover max-h-[600px] select-none'
            fill
            src='https://res.cloudinary.com/dbnslnawc/image/upload/v1698364949/DullWeen/hn7kzaxcaol1tzbm7y3j.png'
            alt='team'
          />
        </div>
        <div className='backdrop-blur-sm bg-white/20 px-1 xs4:px-4 xs:px-10 pt-20 pb-40 flex flex-col justify-center items-center'>
          <div className='relative -top-[7.4rem] w-full'>
            <div className='absolute top-[4.6rem] left-1 w-24 h-1 bg-red-500'></div>
            <div className='absolute top-[4.1rem] left-1 w-24 h-1 bg-red-700'></div>
            <h1 className='relative xs2:absolute top-0 left-0 text-7xl font-extrabold wordSpacingTight tracking-tight uppercase text-yellow-300'>
              Who We Are
            </h1>
          </div>
          <div className='mb-10 text-xl font-medium tracking-tight max-w-prose '>
            <p className='mb-7 text-white'>
              Emerged from a simple idea: to bring joy and delight to every home during the Christmas season.
            </p>
            <p className='mb-7 text-white'>
              Since our inception in 2022,
              <br />
              we've grown from a small, local operation to a booming online hub.
            </p>
            <p className='mb-7 text-white'>
              Our passion for excellence and commitment to the community has allowed us to become the go-to destination for everyone's Halloween needs.
            </p>
            <div className='mb-7 text-white'>
              <h2 className='mb-4 text-5xl font-bold text-yellow-300'>Contacts</h2>
              <p>
                <span className='text-red-900'>
                  Instagram:{' '}
                </span>
                <a
                  className={`${styles.emailLink} mb-4 text-yellow-300 hover:underline`}
                  href='mailto:info@emanuelefavero.com'
                >
                  info@dullween.com
                </a>
              </p>
              <p>
                <span className='text-red-900'>
                  TikTok:{' '}
                </span>
                <a
                  className={`${styles.emailLink} mb-4 text-yellow-300 hover:underline`}
                  href='mailto:info@emanuelefavero.com'
                >
                  info@dullween.com
                </a>
              </p>
            </div>

            <div className='mb-7 text-white'>
              <h2 className='mb-4 text-5xl font-bold text-yellow-300'>Terms & Conditions</h2>
              <TermsConditions />
            </div>
            <div className='mb-7 text-white'>
              <h2 className='mb-4 text-5xl font-bold text-yellow-300'>Delivery</h2>
              <Delivery />
            </div>

          </div>
          <div
            id='successPageCard'
            className='tripleCardEffect bg-red-300 border-2 border-black px:1 xs4:px-4 xs:px-4 py-4 flex flex-col justify-center items-center'
          >
            <Link href='/'>
              <button
                className='text-sm xs4:text-2xl font-bold select-none text-white bg-red-700 py-1 px-2 xs4:px-10 rounded-lg uppercase border-red-900 border-2 hover:bg-red-900 hover:border-black active:border-white active:scale-95 transition-all duration-100 ease-in-out'
                onClick={showLoading}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
