import Link from 'next/link'
import styles from '@/styles/HamburgerMenu.module.scss'
import { CgClose } from 'react-icons/cg'
import { useStateContext } from '@/context/StateContext'
import categoryName from '@/utils/categoryNames'
import { ToastContext } from '@/context/toastContext'
import { useContext } from 'react';

export default function HamburgerMenu() {
  const { setShowHamburgerMenu } = useStateContext()
  const { showLoading } = useContext(ToastContext);
   
  return (
    <>
      {/* Hamburger Menu Overlay */}
      <section className='w-full h-full bg-slate-900 bg-opacity-80 fixed right-0 top-0 z-50 transition-all duration-1000 ease-in-out'>
        {/* Hamburger Menu */}
        <div className='w-full xs2:w-10/12 sm:w-[37.5rem] h-full bg-indigo-200 float-right relative border-l-2 border-black overflow-y-scroll'>
          {/* HamburgerMenu Header */}
          <nav className='w-full bg-white px-4 py-4 border-b-2 border-black select-none flex flex-col xs5:flex-row justify-start items-center'>
            <button
              onClick={() => setShowHamburgerMenu(false)}
              className='mb-1 xs5:mb-0'
            >
              <CgClose size={30} />
            </button>
            <button
              className={`text-3xl font-bold tracking-tight pl-3 mr-2`}
              onClick={() => setShowHamburgerMenu(false)}
            >
              Menu
            </button>
          </nav>

          {/* Hamburger Menu Items */}
          <ul className='px-1 xs3:px-7 flex flex-col justify-center items-center pt-10 mb-6 select-none'>
            
            {
              categoryName?.map((element, index) => (
                <li className='mb-1' key={index}>
                  <Link
                    className={`${styles.hamburgerMenuLink} first-letter:uppercase text-black wordSpacingTight tracking-tight hover:no-underline active:scale-95`}
                    href={`/category/${element}`}
                    onClick={() => {
                      setShowHamburgerMenu(false)
                      showLoading()
                    }}
                  >
                    {element}
                  </Link>
                </li>
              ))
            }

            <li className='mb-1'>
              <Link
                className={`${styles.hamburgerMenuLink} text-black wordSpacingTight tracking-tight hover:no-underline active:scale-95`}
                href='/about-us'
                onClick={() => {
                  setShowHamburgerMenu(false)
                  showLoading()
                }}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
