import { type FC, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Product, ProductCategory } from '../types/product.types';
import { ProductCard } from '../components/features/products/ProductCard';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { FiSliders } from 'react-icons/fi';
import { productApi } from '../api/product.api';

export const Products: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [error, setError] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('');
        setIsLoading(true);

        const categoryParam = searchParams.get('category') || undefined;
        const searchParam = searchParams.get('q') || undefined;

        const [categoryData, productData] = await Promise.all([
          productApi.getCategories(),
          productApi.getAll({
            category: categoryParam,
            search: searchParam,
          }),
        ]);

        setCategories(categoryData);
        setProducts(productData);
      } catch (err: any) {
        setError(err.message || 'Failed to load products');
      } finally {
        setIsLoading(false);
        if (!hasLoaded) {
          setHasLoaded(true);
        }
      }
    };

    fetchData();
  }, [searchParams]);

  useEffect(() => {
    setSearchInput(searchParams.get('q') || '');
  }, [searchParams]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const next = new URLSearchParams(searchParams);
      if (searchInput.trim()) {
        next.set('q', searchInput.trim());
      } else {
        next.delete('q');
      }
      setShowFilters(false);
      setSearchParams(next, { replace: true });
    }, 300);

    return () => window.clearTimeout(timer);
  }, [searchInput, searchParams, setSearchParams]);

  if (isLoading && !hasLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Search products"
                className="w-64 px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FiSliders />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="w-64 bg-white rounded-lg shadow-md p-6">
              <h2 className="font-semibold mb-4">Filters</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Category</h3>
                <div className="space-y-2">
                  {categories.length === 0 && (
                    <p className="text-sm text-gray-500">No categories yet</p>
                  )}
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>$1000</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-medium mb-2">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{rating}+ stars</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {products.length} products
              </p>
              {isLoading && (
                <span className="text-sm text-gray-500">Loading...</span>
              )}
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
                <option>Newest</option>
              </select>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {products.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No products found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
