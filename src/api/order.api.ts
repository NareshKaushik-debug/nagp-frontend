import apiClient from './client';
import type { Order, CreateOrderData, OrderStatus } from '../types/order.types';

export const orderApi = {
  // Create new order
  create: async (data: CreateOrderData): Promise<Order> => {
    const response = await apiClient.post<Order>('/orders', data);
    return response.data;
  },

  // Get all user orders
  getAll: async (): Promise<Order[]> => {
    const response = await apiClient.get<Order[]>('/orders');
    return response.data;
  },

  // Get order by ID
  getById: async (id: string): Promise<Order> => {
    const response = await apiClient.get<Order>(`/orders/${id}`);
    return response.data;
  },

  // Cancel order
  cancel: async (id: string): Promise<Order> => {
    const response = await apiClient.post<Order>(`/orders/${id}/cancel`);
    return response.data;
  },

  // Track order
  trackOrder: async (orderNumber: string): Promise<Order> => {
    const response = await apiClient.get<Order>(`/orders/track/${orderNumber}`);
    return response.data;
  },

  // Get order status history
  getStatusHistory: async (id: string): Promise<Array<{ status: OrderStatus; timestamp: string }>> => {
    const response = await apiClient.get(`/orders/${id}/status-history`);
    return response.data;
  },
};
