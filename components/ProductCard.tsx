import styles from '@/styles/ProductCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'

import { IProduct } from '@/types'
import { useContext } from 'react';
import { ToastContext } from '@/context/toastContext'
import PriceFormatter from './PriceFormatter'
import PriceCurrency from './PriceCurrency';

interface IProps {
  product: IProduct
}

export default function ProductCard({ product }: IProps) {
  const { setQty } = useStateContext()
  const { showLoading } = useContext(ToastContext);

  return (
    // Set quantity to 1 when clicking on the product card
    <div onClick={() =>{
       setQty(1)
       showLoading()
      }
    }>
      <Link href={`/product/${product.id}`}>
        <div
          className={`bg-white text-black rounded-lg w-full xs3:w-72 h-96 px-4 xs3:px-8 py-3 xs3:py-6 flex flex-col justify-between relative active:top-[0.1rem]`}
        >
          <div className='relative w-full xs3:w-56 h-full rounded-2xl mb-4 flex-1'>
            <Image
              className='object-contain p-2 h-full select-none'
              src={product.images[0]}
              alt={product.name}
              fill
            />
          </div>

          <div className='flex-1 flex flex-col justify-between'>
            <div>
              <h2 className='text-2xl font-bold tracking-tight leading-8 mb-1'>
                {product.name}
              </h2>
              <p>{product.description}</p>
            </div>
            <p className='wordSpacingTight tracking-tight text-4xl font-extrabold'>
              {/*<span className='mr-2'>&euro;</span>  price.unit_amount */}
              {PriceCurrency({ currency_iso: product.price.currency})}
              {PriceFormatter({ price: product.price.unit_amount})} {' '}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
