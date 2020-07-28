// import { IOrder } from "./IOrder";
// import { IProduct } from "./IProduct";
// import { ISoldProduct } from "./SoldProduct";

export interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  fullname: string;
  email: string;
  password: string;
  token: string;
  // products: IProduct[];
  stripeSessionIds: string[];
  stripeId: string;
  ccLast4: string;
  profile_image?: string;
  logo?: string;
  description?: string;
  // orders: IOrder[];
  // soldProducts: ISoldProduct[];
  adminToken?: string;
  createdAt: string;
  updatedAt: string;
}
