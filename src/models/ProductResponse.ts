import { IProduct } from "./IProduct";

export interface ProductResponse {
  totalItems: number;
  products: IProduct[];
  pageSize: number;
  totalPages: number;
}
