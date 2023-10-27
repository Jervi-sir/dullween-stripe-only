import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import appName from '@/utils/appName'
import { StateContextProvider } from '@/context/StateContext'
import { Header, Footer } from '@/components'
import { Toaster } from 'react-hot-toast'
import { Inconsolata } from 'next/font/google'
import { Unbounded } from 'next/font/google'
import { ToastProvider } from '@/context/toastContext'
import {useRouter} from 'next/router'; 
import Image from 'next/image'

const unbounded = Unbounded({ subsets: ['latin'] })
const inconsolata = Inconsolata({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ToastProvider>
      <div className={`${inconsolata.className}`}>
        <Head>
          <title>{appName}</title>
          <meta
            name='description'
            content='An ecommerce selling the latest Christmass product available'
          />
          <meta
            name='keywords'
            content='Christmas, Santa, Joy, Home, Bring Joy to Your Home'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
          <link rel='robots' href='/robots.txt' />
          <link rel='manifest' href='/manifest.json' />
        </Head>

        {/* STATE CONTEXT */}
        <StateContextProvider>
          {/* HEADER */}
          <header className='sticky top-0 z-20'>
            <Header />
          </header>

          {/* BIG APP NAME HEADER */}
          {/* TODO: Move to separate component */}
          <div
            className={`${unbounded.className} bg-title-banner select-none text-center border-black border-b-2 pt-1 pb-1 pr-1 pl-1 text-xl xs5:text-xl xs4:text-4xl xs4:pb-1 xs3:text-4xl xs3:pb-3 xs3:pt-2 xs2:text-6xl xs2:pb-4 xs:text-7xl xs:pb-5 sm:text-8xl md:text-9xl`}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <div className="top-banner">
              <img src="https://res.cloudinary.com/dbnslnawc/image/upload/v1698364673/DullWeen/yffjfdhijlg7easltusc.png" alt="" style={{height: '200%'}} />
              <img src="https://res.cloudinary.com/dbnslnawc/image/upload/v1698364661/DullWeen/xakfdiwsaddm423topcc.png" alt="" style={{height: '100%'}} />
            </div>
            <h2 style={{color: 'transparent'}}>{appName}</h2>
            <div style={{position: 'absolute', width: '100%', top: '31%'}}>
              <h1 className="text-center text-sm xs5:text-sm xs4:text-sm xs3:text-base xs2:text-lg xs2:pb-4 xs:text-3xl sm:text-3xl md:text-4xl">
                Bring Joy to your Home
              </h1>
            </div>
            {/*appName*/}
          </div>

          {/* MAIN */}
          <main className={`bg-indigo-200 ${router.pathname === '/about-us' ? 'bg-hero-products-red': 'bg-hero-products-red'} `}>
            <Toaster />
            <Component {...pageProps} />
          </main>

          {/* FOOTER */}
          <footer>
            <Footer />
          </footer>
        </StateContextProvider>
      </div>
    </ToastProvider>
  )
}
