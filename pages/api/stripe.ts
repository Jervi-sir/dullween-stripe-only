import type { NextApiRequest, NextApiResponse } from 'next'
import { ICartItem } from '@/types'
import Stripe from 'stripe'

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
  apiVersion: process.env.NEXT_PUBLIC_STRIPE_API_VERSION as "2023-10-16",
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // console.log(req.body)
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',

        // Shipping options - create them in the Stripe dashboard and copy the IDs here
        // @link https://dashboard.stripe.com/test/shipping-rates
        shipping_options: [
          // FREE SHIPPING
          { shipping_rate: process.env.NEXT_PUBLIC_STRIPE_FREE_SHIPPING_RATE },
        ],

        line_items: req.body.map((item: ICartItem) => {
          const img = item.images[0]

          return {
            price_data: {
              currency: 'eur',
              product_data: {
                name: item.name,
                images: [img],
              },
              unit_amount: item.price.unit_amount,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          }
        }),

        // ? REDIRECT URLS when stripe checkout is successful or canceled
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
        automatic_tax: { enabled: true },
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params as any)

      res.status(200).json(session) // return session
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.status(405).end('Method Not Allowed')
    // Set the Allow header to POST
    res.setHeader('Allow', 'POST')
  }
}
