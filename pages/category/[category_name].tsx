import Head from 'next/head'
import { ProductCard } from '@/components'

import { IProduct } from '@/types'
import { getByCategory } from '../api/getByCategory'
import { GetStaticPaths } from 'next'

interface IProps {
  products: IProduct[]
  category_name: string
}

export default function iPhoneCategoryPage({ products, category_name }: IProps) {
  return (
    <>
      <Head>
        <title>DullWeen products</title>
      </Head>
      {/* PRODUCTS */}
      {/* TODO: Then valuate if it should be moved to own Component */}
      <h2 className='px-10 pt-7 text-xl xs4:text-4xl font-bold text-center tracking-tight select-none text-white first-letter:uppercase'>
        {category_name}
      </h2>
      <section className='container mx-auto flex gap-12 flex-wrap justify-center items-center py-10'>
        {products.map((product: any) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],  // No paths are pre-rendered at build time
    fallback: 'blocking',  // Enable on-demand SSG
  };
};

// -< getStaticProps >-
export const getStaticProps = async ({ params }) => {
  const { category_name } = params as { category_name: string }
  const products = await getByCategory({ category_name: category_name });

  const randomIndex = Math.floor(Math.random() * products.length);
  const heroBanner = products[randomIndex];

  return {
    props: {
      products,
      heroBanner,
      category_name
    },

    // Revalidate every 60 seconds***
    revalidate: 60,
  }
}
// TIP: *** see pages/index.tsx for more info
