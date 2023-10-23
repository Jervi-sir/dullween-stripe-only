export interface IProduct {
  id: string,
  object: string,
  active: true,
  attributes: [],
  created: number,
  default_price: string,
  description: null,
  features: any[],
  images: any[],
  livemode: false,
  metadata: any[],
  name: string,
  package_dimensions: string,
  shippable: string,
  statement_descriptor: string,
  tax_code: string,
  type: string,
  unit_label: string,
  updated: number,
  url: string,
  price: {
    unit_amount: number,
    unit_amount_decimal: string,
    currency: string
  }
}

// NOTE: this is the same as IProduct but with quantity
export interface ICartItem {
  id: string,
  object: string,
  active: true,
  attributes: [],
  created: number,
  default_price: string,
  description: null,
  features: any[],
  images: any[],
  livemode: false,
  metadata: any[],
  name: string,
  package_dimensions: string,
  shippable: string,
  statement_descriptor: string,
  tax_code: string,
  type: string,
  unit_label: string,
  updated: number,
  url: string,
  price: {
    unit_amount: number,
    unit_amount_decimal: string,
    currency: string
  }
  quantity: number
}

export interface IHeroBanner {
  id: string,
  object: string,
  active: true,
  attributes: [],
  created: number,
  default_price: string,
  description: null,
  features: any[],
  images: any[],
  livemode: false,
  metadata: any[],
  name: string,
  package_dimensions: string,
  shippable: string,
  statement_descriptor: string,
  tax_code: string,
  type: string,
  unit_label: string,
  updated: number,
  url: string,
  price: {
    unit_amount: number,
    unit_amount_decimal: string,
    currency: string
  }
}