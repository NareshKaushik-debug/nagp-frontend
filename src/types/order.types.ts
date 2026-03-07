// Order related types
import type { CartItem } from './cart.types';

export interface ShippingAddress {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface PaymentInfo {
  method: 'credit_card' | 'debit_card' | 'paypal' | 'cash_on_delivery';
  cardLast4?: string;
  transactionId?: string;
}

export type OrderStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'processing' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled';

export interface Order {
  id: string;
  userId: string;
  orderNumber: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  paymentInfo: PaymentInfo;
  subtotal: number;
  tax: number;
  shippingCost: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  deliveredAt?: string;
}

export interface CreateOrderData {
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  shippingAddress: ShippingAddress;
  paymentInfo: PaymentInfo;
}

export interface OrderStatusUpdate {
  orderId: string;
  status: OrderStatus;
}
