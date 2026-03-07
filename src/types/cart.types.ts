// Cart related types
import { Product } from './product.types';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  updatedAt: string;
}

export interface AddToCartData {
  productId: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface UpdateCartItemData {
  cartItemId: string;
  quantity: number;
}
