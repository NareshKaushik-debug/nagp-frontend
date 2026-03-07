import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi';

export const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Welcome to NAGP Shopping
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-50 font-light max-w-3xl mx-auto">
              Discover amazing products at unbeatable prices. Your one-stop destination for everything you need.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/products"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
              >
                Shop Now
              </Link>
              <Link
                to="/register"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-all hover:shadow-2xl border border-indigo-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl mb-6 shadow-lg">
                <FiShoppingBag className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Wide Selection</h3>
              <p className="text-gray-600">Thousands of products to choose from</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-all hover:shadow-2xl border border-blue-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-2xl mb-6 shadow-lg">
                <FiTruck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Fast Delivery</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-all hover:shadow-2xl border border-green-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl mb-6 shadow-lg">
                <FiShield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Secure Payment</h3>
              <p className="text-gray-600">100% secure transactions</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center transform hover:scale-105 transition-all hover:shadow-2xl border border-orange-100">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-600 text-white rounded-2xl mb-6 shadow-lg">
                <FiRefreshCw className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Shop by Category</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Explore our wide range of products</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', gradient: 'from-blue-600 to-indigo-600' },
              { name: 'Fashion', gradient: 'from-pink-600 to-rose-600' },
              { name: 'Home & Garden', gradient: 'from-green-600 to-emerald-600' },
              { name: 'Sports', gradient: 'from-orange-600 to-red-600' }
            ].map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold group-hover:scale-110 transition-transform">{category.name}</h3>
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20 group-hover:scale-110 transition-transform duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to start shopping?</h2>
          <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers today and enjoy exclusive deals
          </p>
          <Link
            to="/register"
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            Create an Account - It's Free!
          </Link>
        </div>
      </section>
    </div>
  );
};
