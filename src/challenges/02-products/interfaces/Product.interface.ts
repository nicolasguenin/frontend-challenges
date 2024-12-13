export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  discountedPrice: number;
  price: number;
  stock: number;
  createdAt: string; // ISO 8601 date string
  updatedAt: string | null; // ISO 8601 date string or null
  estimatedShippingDate: string; // ISO 8601 date string
  pictures: string[];
  rating: number;
  reviewers: number;
  sku: string;
}

export type IProductListItem = Omit<
  IProduct,
  'createdAt' | 'updatedAt' | 'estimatedShippingDate'
>;

export type IProducts = IProductListItem[];
