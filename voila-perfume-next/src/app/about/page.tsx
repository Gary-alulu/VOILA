'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BentoImageSlider from '../../components/BentoImageSlider';


const AboutPage = () => {


  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white font-satoshi">
      {/* Our Story Section */}
      <section
        id="our-story"
        className="relative py-20 px-6"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 row-span-2 rounded-lg overflow-hidden shadow-lg"
            >
              <BentoImageSlider images={['/images/bento-1.svg', '/images/bento-2.svg', '/images/bento-3.svg']} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-warm-neutral p-6 rounded-lg shadow-lg flex items-center justify-center"
            >
              <img src="/images/bento-placeholder-1.svg" alt="Placeholder 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-soft-white p-6 rounded-lg shadow-lg flex items-center justify-center"
            >
              <img src="/images/bento-placeholder-2.svg" alt="Placeholder 2" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 bg-soft-amber p-6 rounded-lg shadow-lg flex items-center justify-center"
            >
              <img src="/images/bento-placeholder-3.svg" alt="Placeholder 3" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 font-inter text-lg leading-relaxed"
          >
            <p className="mb-4 text-gray-900">A heartfelt story of VOILÀ’s origins — inspired by timeless femininity and masculine mystique. Our journey began with a simple desire: to capture the ephemeral beauty of scent and transform it into an enduring art form.</p>
            <p className="mb-4 text-gray-900">Every fragrance we create is a narrative, a whisper of memories, and a bold statement of individuality. We believe that perfume is more than just a product; it's an extension of oneself, a silent language spoken through the senses.</p>
            <p className="text-gray-900">From the initial spark of inspiration to the final delicate pour, our process is steeped in passion and precision, honoring the traditions of haute perfumery while embracing innovative techniques.</p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-inner"
          >
            <h3 className="text-2xl font-playfair mb-4">Our Journey: A Timeline</h3>
            <ul className="space-y-4">
              <li><span className="font-bold">2015:</span> VOILÀ’s inception, driven by a vision to redefine luxury fragrance.</li>
              <li><span className="font-bold">2017:</span> First signature collection launched, blending classic notes with modern twists.</li>
              <li><span className="font-bold">2020:</span> Pioneering sustainable sourcing initiatives for key ingredients.</li>
              <li><span className="font-bold">2023:</span> Introduction of refillable bottle program, embracing eco-conscious luxury.</li>
            </ul>
            {/* Motion Accent: Glowing droplet placeholder */}
            <motion.div
              className="w-8 h-8 bg-soft-amber rounded-full absolute -bottom-4 left-1/2 -translate-x-1/2 filter blur-md"
              animate={{ y: [0, 20, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Craft Section */}
      <section className="bg-dark-bg-alt text-white py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-playfair text-center mb-12"
          >
            Where Heritage Meets Innovation
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Sourcing', 'Blending', 'Bottling', 'Quality Assurance'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-dark-bg p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-2 font-playfair">{item}</h3>
                <p className="font-inter">
                  {item === 'Sourcing' && 'Discover our commitment to ethically sourced, high-quality ingredients.'}
                  {item === 'Blending' && 'The meticulous art of combining essences to create unique fragrances.'}
                  {item === 'Bottling' && 'Our precise bottling process ensures every drop is perfect.'}
                  {item === 'Quality Assurance' && 'Rigorous testing guarantees the purity and longevity of our perfumes.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-light-bg text-gray-900 py-20 px-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-5xl font-playfair mb-6 text-gray-900 dark:text-white">Luxury with a Conscience</h2>
            <p className="text-lg mb-4 font-inter text-gray-900 dark:text-white">
              VOILÀ prioritizes sustainability without compromising on quality. We are committed to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg font-inter text-gray-900 dark:text-white">
              <li>Refillable bottles</li>
              <li>Ethically sourced ingredients</li>
              <li>Eco-friendly packaging</li>
              <li>Zero-waste production goals</li>
            </ul>
            <p className="text-xl italic mt-6 font-playfair text-gray-900 dark:text-white">
              “We believe fragrance should leave an impression, not a footprint.”
            </p>
            <div className="mt-8 p-4 bg-green-100 text-green-800 rounded-lg inline-block font-inter">
              <span className="font-bold">Carbon Neutral Brand</span> – Est. 2025
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            {/* Placeholder for Earth-toned illustration or animated icons */}
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 font-inter">
              Illustration Placeholder
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg text-white py-10 text-center font-inter">
        <div className="container mx-auto px-6">
          <nav className="mb-4">
            <a href="#" className="mx-4 hover:underline text-soft-gold">Shop Perfumes</a>
            <a href="#" className="mx-4 hover:underline text-soft-gold">Meet the Founder</a>
            <a href="#" className="mx-4 hover:underline text-soft-gold">Our Ingredients</a>
          </nav>
          <p className="text-sm">
            Receive our fragrance letters — monthly journal stories, behind the scenes, and limited scent drops.
          </p>
          {/* Subscription CTA can be added here */}
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;