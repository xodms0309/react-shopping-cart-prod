export interface Cart {
  id: CartId;
  quantity: number;
  product: Product;
}

export interface Product {
  id: ProductId;
  price: number;
  name: string;
  imageUrl: string;
  isOnSale: boolean;
  salePrice: number;
}

export interface OrderProduct
  extends Omit<Product, 'price' | 'isOnSale' | 'salePrice'> {
  quantity: number;
  totalPrice: number;
  discountPrice: number;
}

export type CartId = number;
export type ProductId = number;

export type ServerName = '여우' | '루쿠' | '제이';
export type Server = '여우' | '루쿠' | 'http://13.124.43.137:8080/';

export interface Order {
  id: number;
  orderedTime: string;
  orderedItems: OrderProduct[];
}

export interface CouponType {
  id: number;
  name: string;
}
