import { ProductCard, HeroBanner } from '@/components'

import { IProduct, IHeroBanner } from '@/types'
import { stripe } from './api/stripe'
import { getThisProduct } from './api/getThisProduct'
import { getProducts } from './api/getProducts'

interface IProps {
  products: IProduct[]
  heroBanner: IHeroBanner
}

export default function Home({ products, heroBanner }: IProps) {
  return (
    <>
      {/* HERO BANNER */}
      <HeroBanner heroBanner={heroBanner} />

      {/* PRODUCTS */}
      {/* TODO: Move to separate Component? */}
      <h1 className='px-10 pt-14 text-xl xs4:text-4xl font-bold text-center tracking-tight select-none text-white'>
        Popular Products
      </h1>
      <section className='container mx-auto flex gap-12 flex-wrap justify-center items-center py-16'
        
      >
        {products.map((product: any) => (
          <div key={product._id}>
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </>
  )
}

// -< getStaticProps >-
export const getStaticProps = async () => {
  // Fetch all products and banner in the Sanity dataset
  const products = await getProducts();

  const randomIndex = Math.floor(Math.random() * products.length);
  const heroBanner = products[randomIndex];

  return {
    props: {
      products,
      heroBanner,
    },

    // Revalidate every 60 seconds***
    revalidate: 60,
  }
}

/* Used to be for the Sanity.io

  //const products = await client.fetch('*[_type == "product"]')
  //const heroBannerData = await client.fetch(`*[_type == "heroBanner"]`)
  //const heroBanner = heroBannerData.length > 0 ? heroBannerData[0] : null

*/