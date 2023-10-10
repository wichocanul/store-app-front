export interface ProductData {
  id: number,
  name: string;
  description: string;
  price: string;
  priceOff?: string;
  stock: number;
  image: string[];
  sku: string;
  category_id: string;
  category?: string;
}

export interface ProductResponse {
  message: string;
  data: ProductData[];
}

export interface RemoveProduct {
  message: string;
  details: string;
}
