'use client';

import { useState, useEffect } from 'react';


const CartPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-light-bg text-black dark:bg-dark-bg dark:text-white p-4 md:p-8 lg:p-12 font-sans">
      <h1 className="text-4xl md:text-5xl font-serif text-center mt-16 mb-8 md:mb-12 dark:text-white">
        Your Shopping Cart
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Cart Overview (60% width on desktop) */}
        <div className="w-full md:w-3/5"
        >
          <h2 className="text-2xl font-serif mb-6 dark:text-white">Your Items</h2>
          {/* Placeholder for Cart Item Cards */}
          <div className="bg-light-bg-alt dark:bg-dark-bg-alt p-6 rounded-2xl shadow-xl min-h-[300px] flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Cart items will be displayed here.</p>
          </div>
        </div>

        {/* Right Section: Summary + CTA (40% width on desktop) */}
        <div className={`w-full md:w-2/5 ${isMobile ? 'fixed bottom-0 left-0 right-0 z-50 bg-light-bg-alt dark:bg-dark-bg-alt p-4 shadow-lg rounded-t-2xl' : 'sticky top-8'}`}
        >
          <h2 className="text-2xl font-serif mb-6 dark:text-white">You’re almost there…</h2>
          <div className="bg-light-bg-alt dark:bg-dark-bg-alt p-6 rounded-2xl shadow-xl">
            {/* Payment Method Preview */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Payment Preview</h3>
              <div className="flex gap-2 text-gray-500 dark:text-gray-400">
                {/* Placeholder for payment icons */}
                <span>VISA</span>
                <span>Apple Pay</span>
                <span>Stripe</span>
              </div>
            </div>

            {/* Gift Message Input */}
            <div className="mb-4">
              <label htmlFor="gift-message" className="block text-sm font-light uppercase text-gray-600 dark:text-gray-300 mb-2">
                Gift Message (Optional)
              </label>
              <textarea
                id="gift-message"
                rows={3}
                className="w-full p-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-gold-400 transition-all duration-300"
                placeholder="Add a special note..."
              ></textarea>
            </div>

            {/* Order Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 dark:text-white">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-300">Subtotal:</span>
                <span className="font-medium dark:text-white">$0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-300">Shipping:</span>
                <span className="text-muted-gold dark:text-rose-glow font-medium">Free shipping over $100</span>
              </div>
              <div className="mb-4">
                <label htmlFor="discount-code" className="block text-sm font-light uppercase text-gray-600 dark:text-gray-300 mb-2">
                  Discount Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="discount-code"
                    className="flex-grow p-3 rounded-l-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-gold-400 transition-all duration-300"
                    placeholder="Enter code"
                  />
                  <button
                    className="bg-royal-purple text-white p-3 rounded-r-lg font-semibold transition-all duration-300"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-gray-300 dark:border-gray-600 pt-4 mt-4">
                <span className="text-xl font-semibold dark:text-white">Total:</span>
                <span className="text-3xl font-bold text-royal-purple dark:text-soft-gold">$0.00</span>
              </div>
            </div>

            {/* Call-To-Action Button */}
            <button
              className="w-full bg-royal-purple text-white py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg"
              disabled={true} // Placeholder for empty cart state
            >
              Proceed to Checkout
            </button>

            {/* Brand Message */}
            <p className="text-center text-sm italic text-gray-500 dark:text-gray-400 mt-6">
              “Scent is the silent story of who you are.”
            </p>
          </div>
        </div>
      </div>

      {/* Empty Cart UX Placeholder */}
      {false && ( // This will be conditionally rendered based on cart state
        <div
          className="flex flex-col items-center justify-center mt-20 text-gray-500 dark:text-gray-400"
        >
          {/* Placeholder for glowing perfume bottle icon */}
          <div className="text-6xl mb-4">🧴</div>
          <p className="text-xl mb-6">Your cart is scent-free.</p>
          <button
            className="bg-soft-gold text-white py-3 px-8 rounded-full font-semibold shadow-lg"
          >
            Explore Collections
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;