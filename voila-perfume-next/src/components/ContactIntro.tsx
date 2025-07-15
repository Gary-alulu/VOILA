import React from 'react';
import dynamic from 'next/dynamic';

const MotionSection = dynamic(() => import('framer-motion').then(mod => mod.motion.section), { ssr: false });

const ContactIntro: React.FC = () => {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-light-bg-alt dark:bg-dark-bg-alt rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 mb-12 text-center"
    >
      <h1 className="text-5xl md:text-6xl font-playfair-display font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
        Let’s Start a Conversation
      </h1>
      <p className="text-lg md:text-xl font-inter max-w-3xl mx-auto leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
        At VOILÀ, we believe every scent tells a story. Whether you&apos;re seeking personalized recommendations,
        have questions about your order, or wish to explore press and collaboration opportunities,
        we&apos;re here to connect. Your journey into the world of exquisite fragrances begins with a conversation.
      </p>
    </MotionSection>
  );
};

export default ContactIntro;