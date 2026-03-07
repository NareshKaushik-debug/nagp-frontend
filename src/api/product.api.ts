import apiClient from './client';
import type { Product, ProductFilters, ProductCategory, ProductReview } from '../types/product.types';

type CatalogCategory = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
};

type CatalogProduct = {
  _id: string;
  name: string;
  description?: string;
  price: number;
  category?: { name: string; slug: string } | string | null;
  imageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
};

type CatalogListResponse = {
  items: CatalogProduct[];
  total: number;
  page: number;
  limit: number;
};

const mapCategory = (category: CatalogCategory): ProductCategory => ({
  id: category._id,
  name: category.name,
  slug: category.slug,
  description: category.description,
  imageUrl: category.imageUrl
});

const mapProduct = (product: CatalogProduct): Product => {
  const categoryName =
    typeof product.category === 'string'
      ? product.category
      : product.category?.name || 'Uncategorized';

  return {
    id: product._id,
    name: product.name,
    description: product.description || '',
    price: product.price,
    category: categoryName,
    brand: 'N/A',
    imageUrl: product.imageUrl || '',
    images: product.imageUrl ? [product.imageUrl] : [],
    stock: 999,
    rating: 0,
    reviewCount: 0,
    createdAt: product.createdAt || new Date().toISOString(),
    updatedAt: product.updatedAt || new Date().toISOString()
  };
};

export const productApi = {
  // Get all products with optional filters
  getAll: async (filters?: ProductFilters): Promise<Product[]> => {
    const response = await apiClient.get<CatalogListResponse>('/catalog/products', {
      params: filters,
    });
    return response.data.items.map(mapProduct);
  },

  // Get product by ID
  getById: async (id: string): Promise<Product> => {
    const response = await apiClient.get<CatalogProduct>(`/catalog/products/${id}`);
    return mapProduct(response.data);
  },

  // Search products
  search: async (query: string): Promise<Product[]> => {
    const response = await apiClient.get<{ items: CatalogProduct[] }>('/catalog/search', {
      params: { q: query },
    });
    return response.data.items.map(mapProduct);
  },

  // Get products by category
  getByCategory: async (category: string): Promise<Product[]> => {
    const response = await apiClient.get<CatalogListResponse>('/catalog/products', {
      params: { category },
    });
    return response.data.items.map(mapProduct);
  },

  // Get all categories
  getCategories: async (): Promise<ProductCategory[]> => {
    const response = await apiClient.get<CatalogCategory[]>('/catalog/categories');
    return response.data.map(mapCategory);
  },

  // Get product reviews
  getReviews: async (productId: string): Promise<ProductReview[]> => {
    const response = await apiClient.get<ProductReview[]>(`/products/${productId}/reviews`);
    return response.data;
  },

  // Add product review
  addReview: async (productId: string, rating: number, comment: string): Promise<ProductReview> => {
    const response = await apiClient.post<ProductReview>(`/products/${productId}/reviews`, {
      rating,
      comment,
    });
    return response.data;
  },

  // Get featured products
  getFeatured: async (): Promise<Product[]> => {
    const response = await apiClient.get<CatalogListResponse>('/catalog/products', {
      params: { limit: 8 },
    });
    return response.data.items.map(mapProduct);
  },

  // Get best sellers
  getBestSellers: async (): Promise<Product[]> => {
    const response = await apiClient.get<CatalogListResponse>('/catalog/products', {
      params: { limit: 8 },
    });
    return response.data.items.map(mapProduct);
  },
};
