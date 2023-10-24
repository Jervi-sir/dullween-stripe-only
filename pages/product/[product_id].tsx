import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ProductCard } from '@/components'
import { useStateContext } from '@/context/StateContext'
import Zoom from 'react-medium-image-zoom'
import ImageZoom from "react-image-zooom";

import { IProduct } from '@/types'
import { getThisProduct } from '../api/getThisProduct'
import { getProducts } from '../api/getProducts'
import PriceFormatter from '@/components/PriceFormatter'
import PriceCurrency from '@/components/PriceCurrency';
import { ImageMagnify } from '@/components/ImageMagnify'
import { ImageCover } from '@/components/ImageCover'

interface IProps {
  product: IProduct
  products: IProduct[]
}

export default function ProductDetailPage({ product, products }: IProps) {
  const { qty, decQty, incQty, onAdd, setShowCart } = useStateContext()
  const [index, setIndex] = useState(0)

  const handleBuyNow = () => {

    onAdd(product, qty)
    setShowCart(true)
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <section className='bg-white flex items-center border-black border-b-2 flex-col sm:flex-row'>
        {/* PRODUCT IMAGE */}
        <div className='bg-white w-full h-80 sm:h-96 py-10 sm:w-1/2 flex items-center justify-center zoom-container'> 
          <ImageCover
            image_src={product.allImages[index]}
            alt={product.name}
          />
        </div>

        {/* PRODUCT SELECTABLE IMAGES */}
        <nav className='w-full flex justify-end items-center h-16 sm:h-full sm:w-16 mb-3 overflow-hidden sm:flex-col gap-2 px-4'>
          {product.allImages?.map((item, i) => (
            <div
              key={i}
              className={`rounded-md ${
                i === index ? 'border-black border' : ''
              }`}
            >
              <Image
                width={50}
                height={50}
                src={item}
                className={`h-16 sm:h-16 sm:w-20 object-contain select-none`}
                // select image on mouse enter (hover state on desktop, click on mobile)
                onMouseEnter={() => {
                  setIndex(i)
                  console.log(i)
                }}
                alt={`${i} ${product.name}`}
              />
            </div>
          ))}
        </nav>

        {/* PRODUCT DETAILS */}
        <div className='w-full flex justify-center items-center h-96 xs5:h-custom-mobile xs2:h-96 sm:h-96 sm:w-1/2 py-16 sm:py-8 md:py-16 px-1 xs5:px-4 xs3:px-8 bg-indigo-100 border-black border-t-2 sm:border-l-2 sm:border-t-0'>
          <div>
            <h1 className='wordSpacingTight text-3xl font-bold tracking-tight leading-8 mb-1'>
              {product.name}
            </h1>
            <p className='text-lg font-normal'>{product.description}</p>
            <p className='wordSpacingTight tracking-tight text-4xl font-extrabold mb-4'>
              {PriceCurrency({ currency_iso: product.price.currency})}
              {PriceFormatter({ price: product.price.unit_amount})}
            </p>

            {/* Product Quantity */}
            <nav className='flex flex-col xs3:flex-row justify-start items-center mb-2'>
              <p className='text-md font-semibold select-none mr-3 mb-3 xs3:mb-0'>
                Quantity:
              </p>
              <div className='flex flex-col xs5:flex-row'>
                <button
                  className='w-8 h-8 rounded-full bg-black text-red-400 text-3xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1 hover:text-red-300 active:text-red-500 active:scale-95'
                  onClick={decQty}
                >
                  -
                </button>
                <p className='w-8 h-8 rounded-full bg-white text-black border-black border-2 text-2xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1'>
                  {qty}
                </p>
                <button
                  className='w-8 h-8 rounded-full bg-black text-green-400 text-3xl font-semibold text-center flex justify-center items-center select-none p-1 mr-1 hover:text-green-300 active:text-green-500 active:scale-95'
                  onClick={incQty}
                >
                  +
                </button>
              </div>
            </nav>

            <nav className='flex flex-col xs3:flex-row justify-start items-center mb-5'>
              <p className='text-md font-semibold select-none mr-3 mb-3 xs3:mb-0'>
                Total:
              </p>
              <div className='flex flex-col xs5:flex-row'>
                <span className='wordSpacingTight tracking-tight text-lg font-extrabold'>
                  {PriceCurrency({ currency_iso: product.price.currency })}
                  {PriceFormatter({ price: (product.price.unit_amount) * (qty) })}
                </span>
              </div>
            </nav>

            {/* Product CTA */}
            <nav>
              <button
                className='productDetailButton wordSpacingCompact text-lg font-extrabold tracking-tight bg-white rounded-md py-1 w-full xs2:w-max px-4 border-black border-2 select-none mr-4 mb-2 relative active:top-[0.08rem]'
                onClick={() => {
                  onAdd(product, qty)
                }}
              >
                Add To Cart
              </button>
              <button
                className='productDetailButton wordSpacingCompact text-lg font-extrabold tracking-tight bg-amber-300 rounded-md py-1 w-full xs2:w-max px-4 border-black border-2 select-none relative active:top-[0.08rem]'
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* PRODUCT CARD CAROUSEL SECTION */}
      {/* TODO: Add swipe gestures (left, right) to carousel */}
      <div className='marquee overflow-x-hidden bg-slate-200'>
        <div className='px-7 pt-7'>
          <h2 className='font-extrabold text-2xl wordSpacingCompact tracking-tight select-none'>
            You may also like:
          </h2>
        </div>
        <section className='container mx-auto flex gap-12 justify-center items-center py-16'>
          {products.map((currentProduct: any) => (
            <>
              {currentProduct.id !== product.id ? (
                <div key={currentProduct.id}>
                  <ProductCard product={currentProduct} />
                </div>
              ) : (
                <div key={currentProduct.id} className='hidden'></div>
              )}
            </>
          ))}
        </section>
      </div>
    </>
  )
}

// -< getStaticPaths >-
// Fetch all products from sanity to generate paths (needed for SSG below)
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts()

  const paths = products.map((product: any) => ({
    params: { product_id: product.id },
  }))

  return {
    paths,

    // ? the server will return a 404 page for any paths that are not generated at build time. This means that all possible paths for the website must be specified in the paths array returned by getStaticPaths method.
    fallback: false,

    // ? the server will not return a 404 page for any path that is not generated at build time. Instead, Next.js will wait for the data to be generated on the server and then render the page with the new data.
    // fallback: 'blocking',
  }
}

// -< getStaticProps >-
// Fetch the product from sanity that matches the product_id in the url
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { product_id } = params as { product_id: string }

  const product = await getThisProduct({ product_id: product_id })
  const products = await getProducts()
  console.log(product)
  return {
    props: {
      product,
      products,
    },

    revalidate: 60,
  }
}
