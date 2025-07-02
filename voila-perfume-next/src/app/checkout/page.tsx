'use client';

import React from 'react';
import ContactInfo from '../../components/ContactInfo';
import DeliveryDetails from '../../components/DeliveryDetails';
import PaymentMethod from '../../components/PaymentMethod';
import OrderSummary from '../../components/OrderSummary';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-dark-bg-80 rounded-lg shadow-xl p-8 border border-white/10 backdrop-blur-sm">
        <h1 className="text-4xl font-playfair mb-8 text-center text-accent-gold animate-fadeInDown">
          Secure Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel: Form Fields */}
          <div>
            <h2 className="text-2xl font-satoshi mb-6 text-white">Your Details</h2>
            <ContactInfo />
            <DeliveryDetails />
            <PaymentMethod />

            <button className="w-full bg-accent-gold text-dark-bg py-3 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-105 active:scale-95 shadow-lg animate-pulseGlow">
              Place Order
            </button>
          </div>

          {/* Right Panel: Order Summary */}
          <div>
            <h2 className="text-2xl font-satoshi mb-6 text-white">Order Summary</h2>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;