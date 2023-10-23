import { stripe } from './stripe';

export const getThisProduct = async ({ product_id }) => {
  const product = await stripe.products.retrieve(product_id);
  const pricesResponse = await stripe.prices.list({ product: product_id });
  const pricesArray = pricesResponse.data;
  const price = pricesArray[0]
  return {
    ...product,
    price,
  };
};