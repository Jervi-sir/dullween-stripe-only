import { stripe } from './stripe';

export const getThisProduct = async ({ product_id }) => {
  const product = await stripe.products.retrieve(product_id);
  const pricesResponse = await stripe.prices.list({ product: product_id });
  const pricesArray = pricesResponse.data;
  const price = pricesArray[0]

  let allImages = [...product.images, ...product.features];
  const base_url = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
  allImages = allImages.map(img => {
    if (typeof img === 'object' && img.name) {
      return base_url + img.name;
    }
    return img;
  });

  return {
    ...product,
    price,
    allImages
  };
};