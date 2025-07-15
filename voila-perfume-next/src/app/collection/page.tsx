import React from 'react';

const CollectionPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Exquisite Collection</h1>
      <p className="text-lg text-center mb-12 text-gray-700">Discover a world of captivating aromas, meticulously crafted to evoke emotions and memories. Each fragrance tells a unique story, waiting to become a part of yours.</p>

      {/* Filtering and Sorting Options */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <select className="border rounded-md px-3 py-2">
            <option>All Categories</option>
            <option>Floral</option>
            <option>Woody</option>
            <option>Fresh</option>
            <option>Oriental</option>
          </select>
          <select className="border rounded-md px-3 py-2">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
        <span className="text-gray-600">120 Products</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Placeholder Product Card 1 */}
        <div className="border rounded-lg p-4 shadow-md">
          <img src="/images/perfume1.jpg" alt="Perfume 1" className="w-full h-48 object-cover mb-4 rounded-md" />
          <h3 className="font-semibold text-lg mb-2">Midnight Bloom</h3>
          <p className="text-gray-600 mb-2">A captivating blend of jasmine and sandalwood.</p>
          <p className="font-bold text-xl">$95.00</p>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">Add to Cart</button>
        </div>

        {/* Placeholder Product Card 2 */}
        <div className="border rounded-lg p-4 shadow-md">
          <img src="/images/perfume2.jpg" alt="Perfume 2" className="w-full h-48 object-cover mb-4 rounded-md" />
          <h3 className="font-semibold text-lg mb-2">Golden Hour</h3>
          <p className="text-gray-600 mb-2">Warm notes of amber and vanilla, perfect for evenings.</p>
          <p className="font-bold text-xl">$110.00</p>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">Add to Cart</button>
        </div>

        {/* Placeholder Product Card 3 */}
        <div className="border rounded-lg p-4 shadow-md">
          <img src="/images/perfume3.jpg" alt="Perfume 3" className="w-full h-48 object-cover mb-4 rounded-md" />
          <h3 className="font-semibold text-lg mb-2">Ocean Breeze</h3>
          <p className="text-gray-600 mb-2">Crisp and refreshing, like a walk by the sea.</p>
          <p className="font-bold text-xl">$80.00</p>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">Add to Cart</button>
        </div>

        {/* Placeholder Product Card 4 */}
        <div className="border rounded-lg p-4 shadow-md">
          <img src="/images/perfume4.jpg" alt="Perfume 4" className="w-full h-48 object-cover mb-4 rounded-md" />
          <h3 className="font-semibold text-lg mb-2">Forest Whisper</h3>
          <p className="text-gray-600 mb-2">Earthy and mysterious, with hints of cedar and moss.</p>
          <p className="font-bold text-xl">$105.00</p>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">Add to Cart</button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold mb-4">Find Your Signature Scent</h2>
        <p className="text-lg text-gray-700 mb-6">Explore our full range and discover the perfect fragrance that resonates with your unique personality.</p>
        <button className="bg-black text-white px-8 py-3 rounded-md text-lg hover:bg-gray-800 transition duration-300">Shop All Perfumes</button>
      </div>
    </div>
  );
};

export default CollectionPage;