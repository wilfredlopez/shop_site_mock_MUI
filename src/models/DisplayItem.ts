export interface DisplayItem {
  amount: number;
  currency: string;
  custom: CustomItemDetails;
  quantity: number;
  type: string;
}

export interface CustomItemDetails {
  description: string;
  images: string[];
  name: string;
}
