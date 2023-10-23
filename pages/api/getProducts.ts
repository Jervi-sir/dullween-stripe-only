import { stripe } from './stripe'


export const getProducts = async () => {
  const productsResponse = await stripe.products.list();
  const products = productsResponse.data;

  // Fetch the prices for each product
  const productsWithPrices = await Promise.all(
    products.map(async (product) => {
      const pricesResponse = await stripe.prices.list({ product: product.id });
      const pricesArray = pricesResponse.data;
      const price = pricesArray[0]
      return {
        ...product,
        price,
      };
    })
  );

  return productsWithPrices;
};