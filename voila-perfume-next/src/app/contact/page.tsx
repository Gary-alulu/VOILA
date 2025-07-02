import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-off-white text-warm-gray p-4 md:p-8 lg:p-12">
      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 mb-12 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-playfair-display font-bold text-charcoal-black mb-6">
          Let’s Start a Conversation
        </h1>
        <p className="text-lg md:text-xl font-inter max-w-3xl mx-auto leading-relaxed">
          At VOILÀ, we believe every scent tells a story. Whether you&apos;re seeking personalized recommendations,
          have questions about your order, or wish to explore press and collaboration opportunities,
          we&apos;re here to connect. Your journey into the world of exquisite fragrances begins with a conversation.
        </p>
      </motion.section>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Contact Information Block */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 lg:w-1/3"
        >
          <h2 className="text-3xl font-playfair-display font-semibold text-charcoal-black mb-6">Reach Out</h2>
          <div className="space-y-6 font-inter text-lg">
            <div className="flex items-center group">
              <span className="text-rose-gold mr-4 text-2xl group-hover:animate-pulse">✉️</span>
              <div>
                <h3 className="font-medium">Email Us:</h3>
                <p className="text-gray-600">support@voila.parfum</p>
              </div>
            </div>
            <div className="flex items-center group">
              <span className="text-rose-gold mr-4 text-2xl group-hover:animate-pulse">📞</span>
              <div>
                <h3 className="font-medium">Call Us:</h3>
                <p className="text-gray-600">+254 723 456 789</p>
              </div>
            </div>
            <div className="flex items-center group">
              <span className="text-rose-gold mr-4 text-2xl group-hover:animate-pulse">📍</span>
              <div>
                <h3 className="font-medium">Visit Studio:</h3>
                <p className="text-gray-600">87 Fragrance Avenue, Paris | Nairobi | Dubai</p>
              </div>
            </div>
            <div className="flex items-center group">
              <span className="text-rose-gold mr-4 text-2xl group-hover:animate-pulse">⏰</span>
              <div>
                <h3 className="font-medium">Business Hours:</h3>
                <p className="text-gray-600">Mon–Fri, 9AM – 6PM EAT</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Interactive Form */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-10 lg:p-12 lg:w-2/3"
        >
          <h2 className="text-3xl font-playfair-display font-semibold text-charcoal-black mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-rose-gold focus:border-rose-gold transition-all duration-300 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-rose-gold focus:border-rose-gold transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-rose-gold focus:border-rose-gold transition-all duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject (Optional)</label>
              <select
                id="subject"
                name="subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-rose-gold focus:border-rose-gold transition-all duration-300 ease-in-out"
              >
                <option value="">Select a subject</option>
                <option value="inquiry">General Inquiry</option>
                <option value="order">Order Assistance</option>
                <option value="collaboration">Collaboration</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-rose-gold focus:border-rose-gold transition-all duration-300 ease-in-out"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(255, 192, 203, 0.6)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-full text-white font-semibold text-lg
                         bg-gradient-to-r from-muted-gold to-blush-pink shadow-lg
                         hover:from-blush-pink hover:to-muted-gold transition-all duration-300 ease-in-out"
            >
              Send Message
            </motion.button>
          </form>
        </motion.section>
      </div>

      {/* Optional CTA Banner - Placeholder */}
      {/*
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-r from-muted-gold to-blush-pink rounded-2xl shadow-lg p-8 md:p-12 mt-12 text-center"
      >
        <h2 className="text-3xl font-playfair-display font-bold text-white mb-4">Smell the Future: Download Our Fragrance Guide</h2>
        <p className="text-lg text-white mb-6">A downloadable PDF e-book with seasonal perfume guides.</p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="py-3 px-8 rounded-full bg-white text-muted-gold font-semibold text-lg shadow-md"
        >
          Download
        </motion.button>
      </motion.section>
      */}

      {/* Footer Section - Placeholder (will integrate existing Footer component) */}
      {/*
      <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} VOILÀ. All rights reserved.</p>
      </footer>
      */}
    </div>
  );
};

export default ContactPage;