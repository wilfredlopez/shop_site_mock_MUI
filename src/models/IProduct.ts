export interface IProduct {
  _id: string;
  name: string;
  price: number;
  regularPrice: number;
  description: string;
  category: string;
  sku: string;
  currency: string;
  slug: string;
  images: string[];
  tags: string[];
  //0 | 1 | 2 | 3 | 4 | 5
  stars: number;
  createdAt: string;
  updatedAt: string;
  likes: number;
  // sellerId: string;
  quantity: number;
}
