import styles from '@/styles/Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useStateContext } from '@/context/StateContext'
import { Cart } from '@/components'
import { HamburgerMenu } from '@/components'
import categoryName from '@/utils/categoryNames'
import { ToastContext } from '@/context/toastContext'
import { useContext } from 'react';
import { useRouter } from 'next/router'

export default function Header() {
  const {
    showCart,
    setShowCart,
    showHamburgerMenu,
    setShowHamburgerMenu,
    totalQuantities,
  } = useStateContext()

  const { showLoading } = useContext(ToastContext);
  const router = useRouter()

  return (
    <>
      <div className='w-full flex justify-center items-center flex-col bg-white text-black'>
        <div className='relative w-full flex justify-between items-center border-t-2 border-b-2 border-black font-medium p-0'>
          <div className='w-full flex justify-between px-4 xs3:px-10'>
            {/* Header Logo */}
            <Link
              className='animate-pulse-one-time hidden xs4:inline active:scale-95 select-none'
              href='/'
              style={{display: 'flex', alignItems: 'center', gap: '10px'}}
            >
              <Image
                className='hover:brightness-105'
                src='/logo.png'
                alt='logo'
                width={29}
                height={29}
                onClick={showLoading}
              />
              <span style={{fontWeight: 'bold', fontSize: '15px'}}>
                DullWeen
              </span>
            </Link>

            {/* Header Hamburger Menu Button */}
            <button
              onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
              className='block sm:hidden'
            >
              <RxHamburgerMenu className='text-3xl ml-4' />
            </button>

            {/* Header Menu */}
            <ul className='px-7 hidden sm:flex select-none'>
              <li className='mr-5'>
                <Link
                  className={`${styles.headerLink} active text-black wordSpacingTight tracking-tight `}
                  href='/'
                  onClick={showLoading}
                  style={router.asPath.toLowerCase() === '/' ? {textDecoration: 'underline'} : null}
                >
                  Home
                </Link>
              </li>
              {
                categoryName.map((element, index) => (
                  <li className='mr-5' key={index}>
                    <Link
                      className={`${styles.headerLink} first-letter:uppercase text-black wordSpacingTight tracking-tight hover:no-underline active:scale-95`}
                      href={`/category/${element}`}
                      onClick={showLoading}
                      style={router.asPath.toLowerCase() === ('/category/' + element) ? {textDecoration: 'underline'} : null}
                    >
                      {element}
                    </Link>
                  </li>
                ))
              }

              <li className='mr-5'>
                <Link
                  className={`${styles.headerLink} text-black wordSpacingTight tracking-tight hover:no-underline active:scale-95`}
                  href='/about-us'
                  onClick={showLoading}
                  style={router.asPath.toLowerCase() === ('/about-us') ? {textDecoration: 'underline'} : null}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <button
            className='flex bg-black text-white px-4 xs3:px-10 py-3 text-lg border-l-2 border-black hover:bg-red-500 active:bg-red-400 select-none'
            type='button'
            onClick={() => setShowCart(true)}
          >
            <span>Cart</span>{' '}
            <span className='text-yellow-300 hidden xs4:inline'>
              (<span className='text-green-300'>{totalQuantities}</span>)
            </span>
          </button>
        </div>
      </div>

      {/* Cart */}
      {showCart && <Cart />}

      {/* Hamburger Menu */}
      {showHamburgerMenu && <HamburgerMenu />}
    </>
  )
}
