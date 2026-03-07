import apiClient from './client';
import type { Cart, AddToCartData, UpdateCartItemData } from '../types/cart.types';

export const cartApi = {
  // Get user's cart
  getCart: async (): Promise<Cart> => {
    const response = await apiClient.get<Cart>('/cart');
    return response.data;
  },

  // Add item to cart
  addItem: async (data: AddToCartData): Promise<Cart> => {
    const response = await apiClient.post<Cart>('/cart/items', data);
    return response.data;
  },

  // Update cart item quantity
  updateItem: async (data: UpdateCartItemData): Promise<Cart> => {
    const response = await apiClient.put<Cart>(
      `/cart/items/${data.cartItemId}`,
      { quantity: data.quantity }
    );
    return response.data;
  },

  // Remove item from cart
  removeItem: async (cartItemId: string): Promise<Cart> => {
    const response = await apiClient.delete<Cart>(`/cart/items/${cartItemId}`);
    return response.data;
  },

  // Clear cart
  clearCart: async (): Promise<void> => {
    await apiClient.delete('/cart');
  },

  // Apply coupon code
  applyCoupon: async (code: string): Promise<Cart> => {
    const response = await apiClient.post<Cart>('/cart/coupon', { code });
    return response.data;
  },

  // Remove coupon
  removeCoupon: async (): Promise<Cart> => {
    const response = await apiClient.delete<Cart>('/cart/coupon');
    return response.data;
  },
};
