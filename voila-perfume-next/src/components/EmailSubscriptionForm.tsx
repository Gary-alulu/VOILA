import React, { useState } from 'react';

const EmailSubscriptionForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    try {
      // Here you would typically send the email to your backend API
      // For demonstration, we'll just simulate a successful subscription
      console.log(`Subscribing email: ${email}`);
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Failed to subscribe. Please try again later.');
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
      <p className="text-gray-700 mb-4">Get updates on new arrivals and exclusive offers!</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <p className={`mt-4 ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default EmailSubscriptionForm;