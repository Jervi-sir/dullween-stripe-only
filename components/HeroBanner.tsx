import Image from 'next/image'
import Link from 'next/link'
import { IHeroBanner } from '@/types'
import { useContext } from 'react';
import { ToastContext } from '@/context/toastContext';
import PriceFormatter from './PriceFormatter';
import PriceCurrency from './PriceCurrency';

interface IProps {
  heroBanner: IHeroBanner
}

export default function HeroBanner({ heroBanner }: IProps) {
  const {
    id,
    name,
    description,
    images,
    price,
  } = heroBanner

  const { showLoading } = useContext(ToastContext);

  return (
    <>
      {heroBanner && (
        <section>
          <div className='bg-white flex items-center border-black border-b-2 flex-col sm:flex-row'>
            {/* PRODUCT DETAILS */}
            <div className='relative flex justify-center items-center w-full h-96 sm:h-96 sm:w-1/2 py-12 px-1 xs5:px-4 xs3:px-8 lg:p-16 bg-fuchsia-300 border-black border-b-2 sm:border-r-2 sm:border-b-0'>
              <div>
                {/* Hero Text */}
                <h2 className='text-lg xs4:text-3xl xs3:text-5xl font-bold wordSpacingTight tracking-tight uppercase select-none mb-2'>
                  Random Offer
                </h2>

                {/* Product Name */}
                <p className='text-2xl font-medium wordSpacingTight tracking-tight text-slate-800 mb-2'>
                  {name}
                </p>

                {/* Price */}
                <p className='text-4xl xs3:text-7xl font-black wordSpacingPrice tracking-tight text-emerald-700 mb-5'>
                  {true ? (
                    // If discounted, show discount price and original price with strikethrough
                    <>
                      {/* &euro;  price.unit_amount */}
                      {PriceCurrency({ currency_iso: price.currency})}
                      {PriceFormatter({ price: price.unit_amount})} {' '}
                      <span className='line-through text-red-800 text-xl xs3:text-3xl font-extrabold relative -top-4 -left-1 xs3:-top-9 select-none'>
                        {}
                      </span>
                    </>
                  ) : (
                    // If not discounted, show original price
                    <>&euro; {price.unit_amount} </>
                  )}
                </p>

                {/* CTA Button */}
                <Link
                  href={`/product/${id}`}
                  id='heroButtonCTA'
                  className='tripleCardEffect bg-slate-900 text-white text-2xl flex justify-center items-center max-w-[12rem] wordSpacingTight tracking-tight font-medium px-1 xs4:px-11 py-1 rounded-md select-none border-slate-700 border-2 active:border-white'
                  style={{
                    fontSize: '1.5rem',
                  }}
                  onClick={showLoading}
                >
                  Own now
                </Link>
              </div>
            </div>

            {/* PRODUCT IMAGE */}
            <div className='relative bg-white w-full h-80 sm:h-96 py-10 sm:w-1/2 flex items-center justify-center'>
              <Image
                className='object-contain max-h-full max-w-full select-none'
                src={images[0]}
                alt={name}
                width={600}
                height={600}
              />

              {/* Description */}
              <p className='absolute bottom-1 right-3 hidden xs3:block'>
                {description}
              </p>
            </div>
          </div>

          {true && (
            // If discounted, show discount percentage and time left
            <p className='w-full bg-yellow-300 text-lg font-extrabold px-4 text-center border-yellow-400 border-b-4 select-none'>
              {10}% 
            </p>
          )}
        </section>
      )}
    </>
  )
}
