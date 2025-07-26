'use client';

import { useEffect, useState, useCallback } from 'react';
import ProductCard from '../../components/ProductCard';
import { fetchProducts } from '../../services/productService';
import { ProductCardProps } from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import { FaFilter } from 'react-icons/fa';

interface Filters {
  name?: string;
  brand?: string;
  notes?: string;
  minPrice?: number;
  maxPrice?: number;
  scentFamily?: string;
  size?: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({});
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState<boolean>(false);

  const getProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const allProducts = await fetchProducts(undefined, 1, 100, { ...filters, name: searchTerm || undefined });
      setProducts(allProducts);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [filters, searchTerm]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return <div className="text-center mt-[20vh]">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center mt-[20vh] text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-[20vh]">
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-grow">
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <button
          onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
          className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <FaFilter className="mr-2" />
          Filters
        </button>
      </div>

      {isFilterPanelOpen && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-semibold mb-4">Filter Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
              <input
                type="text"
                id="brand"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={filters.brand || ''}
                onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
              <input
                type="text"
                id="notes"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={filters.notes || ''}
                onChange={(e) => setFilters({ ...filters, notes: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">Min Price</label>
              <input
                type="number"
                id="minPrice"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={filters.minPrice || ''}
                onChange={(e) => setFilters({ ...filters, minPrice: parseFloat(e.target.value) || undefined })}
              />
            </div>
            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">Max Price</label>
              <input
                type="number"
                id="maxPrice"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={filters.maxPrice || ''}
                onChange={(e) => setFilters({ ...filters, maxPrice: parseFloat(e.target.value) || undefined })}
              />
            </div>
            <div>
              <label htmlFor="scentFamily" className="block text-sm font-medium text-gray-700">Scent Family</label>
              <input
                type="text"
                id="scentFamily"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={filters.scentFamily || ''}
                onChange={(e) => setFilters({ ...filters, scentFamily: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
              <input
                type="text"
                id="size"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={filters.size || ''}
                onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setFilters({})}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map(product => (
              <ProductCard key={product._id} {...product} />
            ))
          ) : ( searchTerm || Object.keys(filters).length > 0 ? (
            <p>No products found matching your criteria.</p>
          ) : (
            <p>No products available.</p>
          )
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
