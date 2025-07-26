'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

const AdminProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newProduct, setNewProduct] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    category: '',
    stock: 0,
  });
  const [selectedPage, setSelectedPage] = useState<'collection' | 'product' | ''>('');
  const [selectedSection, setSelectedSection] = useState<'perfumes' | 'hairoils' | 'beautyAccessories' | ''>('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const populateWithPlaceholders = () => {
    const placeholderProducts: Product[] = [
      {
        name: 'Floral Elegance',
        description: 'A delicate floral fragrance with notes of jasmine and rose',
        price: 89.99,
        imageUrl: '/images/floral-elegance.jpg',
        category: 'Floral',
        stock: 50
      },
      {
        name: 'Citrus Zest',
        description: 'Fresh and vibrant citrus scent with bergamot and grapefruit',
        price: 79.99,
        imageUrl: '/images/citrus-zest.jpg',
        category: 'Citrus',
        stock: 35
      },
      {
        name: 'Woody Mystique',
        description: 'Rich woody aroma with sandalwood and patchouli',
        price: 99.99,
        imageUrl: '/images/woody-mystique.jpg',
        category: 'Woody',
        stock: 25
      }
    ];
    setProducts(placeholderProducts);
  };
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/admin/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
      } else {
        setError(data.error);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target;
    if (name === 'imageFile' && files) {
      setImageFile(files[0]);
    } else if (name === 'pageSelection') {
      setSelectedPage(value as 'collection' | 'product' | '');
      setSelectedSection(''); // Reset section when page changes
    } else if (name === 'sectionSelection') {
      setSelectedSection(value as 'perfumes' | 'hairoils' | 'beautyAccessories' | '');
    } else if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleImageUpload = async () => {
    if (imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset

      try {
        const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', { // Replace with your Cloudinary cloud name
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (data.secure_url) {
          if (editingProduct) {
            setEditingProduct({ ...editingProduct, imageUrl: data.secure_url });
          } else {
            setNewProduct({ ...newProduct, imageUrl: data.secure_url });
          }
          alert('Image uploaded successfully!');
        } else {
          alert('Image upload failed!');
        }
      } catch (uploadError) {
        console.error('Error uploading image:', uploadError);
        alert('Error uploading image.');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const method = editingProduct ? 'PUT' : 'POST';
      const url = '/api/admin/products';
      const body = editingProduct ? { id: editingProduct._id, ...editingProduct } : { ...newProduct, page: selectedPage, section: selectedSection };

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        setNewProduct({
          name: '',
          description: '',
          price: 0,
          imageUrl: '',
          category: '',
          stock: 0,
        });
        setEditingProduct(null);
        setSelectedPage('');
        setSelectedSection('');
        fetchProducts();
      } else {
        setError(data.error);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct({ ...product });
    setNewProduct({
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
      category: '',
      stock: 0,
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/admin/products', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        fetchProducts();
      } else {
        setError(data.error);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 mt-[10vh]"
    >
      <h1 className="text-4xl font-bold text-center mb-8 font-playfair text-gray-800 dark:text-ivoryBeige">
        Admin Product Management
      </h1>
      <div className="flex justify-center mb-4">
        <button 
          onClick={populateWithPlaceholders}
          className="px-4 py-2 bg-ivoryBeige text-gray-800 rounded-md hover:bg-ivoryBeige-dark transition-colors"
        >
          Load Placeholder Products
        </button>
      </div>

      {error && <div className="text-red-500 text-center mb-4">Error: {error}</div>}

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-ivoryBeige">
          {editingProduct ? 'Edit Product' : 'Add New Product'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editingProduct ? editingProduct.name : newProduct.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              id="description"
              name="description"
              value={editingProduct ? editingProduct.description : newProduct.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
              rows={4}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="pageSelection" className="block text-gray-700 dark:text-gray-300">Upload to Page</label>
            <select
              id="pageSelection"
              name="pageSelection"
              value={selectedPage}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
              required
            >
              <option value="">Select Page</option>
              <option value="collection">Collection Page</option>
              <option value="product">Product Page</option>
            </select>
          </div>
          {selectedPage === 'product' && (
            <div>
              <label htmlFor="sectionSelection" className="block text-gray-700 dark:text-gray-300">Upload to Section</label>
              <select
                id="sectionSelection"
                name="sectionSelection"
                value={selectedSection}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
                required
              >
                <option value="">Select Section</option>
                <option value="perfumes">Perfumes</option>
                <option value="hairoils">HairOils</option>
                <option value="beautyAccessories">Beauty accessories</option>
              </select>
            </div>
          )}
          <div>
            <label htmlFor="price" className="block text-gray-700 dark:text-gray-300">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={editingProduct ? editingProduct.price : newProduct.price}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-gray-700 dark:text-gray-300">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={editingProduct ? editingProduct.imageUrl : newProduct.imageUrl}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
              placeholder="Enter image URL"
            />
          </div>
          <div>
            <label htmlFor="imageFile" className="block text-gray-700 dark:text-gray-300">Or Upload Image File</label>
            <input
              type="file"
              id="imageFile"
              name="imageFile"
              accept="image/*"
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
            />
            <button
              type="button"
              onClick={handleImageUpload}
              className="mt-2 px-4 py-2 bg-ivoryBeige text-gray-800 rounded-md hover:bg-ivoryBeige-dark transition-colors"
            >
              Upload Image
            </button>
          </div>
          <div>
            <label htmlFor="category" className="block text-gray-700 dark:text-gray-300">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={editingProduct ? editingProduct.category : newProduct.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label htmlFor="stock" className="block text-gray-700 dark:text-gray-300">Stock</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={editingProduct ? editingProduct.stock : newProduct.stock}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-ivoryBeige border-gray-300 dark:border-gray-600"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-soft-gold text-deepCharcoal px-6 py-2 rounded-md text-lg hover:bg-gold-dark transition duration-300 shadow-md"
            disabled={loading}
          >
            {loading ? 'Processing...' : (editingProduct ? 'Update Product' : 'Add Product')}
          </button>
          {editingProduct && (
            <button
              type="button"
              onClick={() => setEditingProduct(null)}
              className="ml-4 bg-gray-300 text-gray-800 px-6 py-2 rounded-md text-lg hover:bg-gray-400 transition duration-300 shadow-md"
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-ivoryBeige">Existing Products</h2>
      {loading && <div className="text-center">Loading products...</div>}
      {!loading && products.length === 0 && <div className="text-center">No products found.</div>}
      {!loading && products.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Stock</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-300 text-sm font-light">
              {products.map((product) => (
                <tr key={product._id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{product.name}</td>
                  <td className="py-3 px-6 text-left">{product.category}</td>
                  <td className="py-3 px-6 text-left">${product.price.toFixed(2)}</td>
                  <td className="py-3 px-6 text-left">{product.stock}</td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <button
                        onClick={() => handleEdit(product)}
                        className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => product._id && handleDelete(product._id)}
                        className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};

export default AdminProductsPage;