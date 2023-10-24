# DullWeen With Stripe Only no Sanity

This repo is a clone of `Pineapple` made by the following developers, beautiful work,

I needed to clone it due to time tightness, and not to reinvinte the wheel

> this Repo is tweaked to use Stripe only for payment and product management
> this webapp gonna use Cloudinary for hosting extra images, 

## Credits to 

Repo made beautifully by
<div style="display:flex; align-items: center; gap: 10px">
<img src="https://avatars.githubusercontent.com/u/59388889?v=5" alt="image" style="width:49px;height:auto;border-radius:60px"> 
<a href="https://github.com/emanuelefavero">@emanuelefavero</a>
</div>

&nbsp;

## How to run this project locally

- run `npm install`
- create a `.env` add the following:
```bash
# STRIPE
# @see https://dashboard.stripe.com/test/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=''
NEXT_PUBLIC_STRIPE_SECRET_KEY=''
NEXT_PUBLIC_CLOUDINARY_URL=''
```

## How to deploy this project

### Deploy App to Vercel

`environment`
```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
NEXT_PUBLIC_STRIPE_SECRET_KEY
NEXT_PUBLIC_CLOUDINARY_URL
```

## How to add products

1. add in `Products` page, and make sure to fill these following inputs
    - Metadata:
      - amount: 10
      - category: iphone, apple
    - Feature list:
      - just from cloudinary, don't take whole url but just the name of the image in that url 
2. make sure the price is in EUR
    - make it One Time
3. after adding the product, go explore it from the dashboard,
    - find `Create payment link`
        - check the `Collect customers addresses`
        - check the `Let customers adjust quantity`
        - maybe check `Allow promotion codes`

## Resources

- [Next.js](https://nextjs.org/)
- [Stripe](https://stripe.com/)

## Reference Repo

https://github.com/emanuelefavero/pineapple-ecommerce

## Again Credits to

Repo made beautifully by
<div style="display:flex; align-items: center; gap: 10px">

<img src="https://avatars.githubusercontent.com/u/59388889?v=5" alt="image" style="width:49px;height:auto;border-radius:60px"> 
<a href="https://github.com/emanuelefavero">@emanuelefavero</a>
 
</div>

## Demo

- [https://pineapple-ecommerce.vercel.app/](https://pineapple-ecommerce.vercel.app/)

#### Screenshot

![screenshot](./screenshot.webp 'screenshot')

&nbsp;

