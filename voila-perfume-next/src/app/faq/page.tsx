'use client';

import React, { useState } from 'react';
import Head from 'next/head';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What are your shipping options?',
    answer: 'We offer standard and express shipping options. Standard shipping typically takes 5-7 business days, while express shipping takes 2-3 business days. Shipping costs vary based on your location and chosen method.',
  },
  {
    question: 'What is your return policy?',
    answer: 'You can return most new, unopened items within 30 days of delivery for a full refund. Please note that some items, like personalized perfumes, may not be eligible for return. Refer to our full return policy for details.',
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order has shipped, you will receive an email with a tracking number and a link to the carrier\'s website. You can use this number to monitor the status of your delivery.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we do! International shipping rates and delivery times vary depending on the destination country. Please be aware that customs duties and taxes may apply upon arrival, which are the responsibility of the recipient.',
  },
  {
    question: 'Are your perfumes cruelty-free?',
    answer: 'We are committed to ethical practices. All our perfumes are cruelty-free and have not been tested on animals.',
  },
  {
    question: 'How should I store my perfume?',
    answer: 'To preserve the quality and longevity of your perfume, store it in a cool, dark place away from direct sunlight and extreme temperature changes. Avoid storing it in the bathroom, as humidity can degrade the fragrance.',
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Frequently Asked Questions - Voila Perfume</title>
        <meta name="description" content="Find answers to common questions about Voila Perfume's shipping, returns, products, and more." />
      </Head>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {item.question}
                </h2>
                <svg
                  className={`w-6 h-6 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;