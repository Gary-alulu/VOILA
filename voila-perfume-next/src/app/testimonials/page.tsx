import React from 'react';
import TestimonialCard from '../../components/TestimonialCard';

const testimonials = [
  {
    quote: 'Wearing VOILÀ is like bottling a memory. I’ve never had so many compliments in one day.',
    clientName: 'Client Name 1',
    clientRole: 'Stylist, New York',
    avatarSrc: '/images/client1.jpg', // Placeholder image
  },
  {
    quote: 'VOILÀ transformed my evening. The scent is truly unforgettable and unique.',
    clientName: 'Client Name 2',
    clientRole: 'Fashion Designer, Paris',
    avatarSrc: '/images/client2.jpg', // Placeholder image
  },
  {
    quote: 'An exquisite fragrance that perfectly captures elegance and sophistication.',
    clientName: 'Client Name 3',
    clientRole: 'Art Curator, London',
    avatarSrc: '/images/client3.jpg', // Placeholder image
  },
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-gradient-start to-dark-gradient-end text-white flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl md:text-5xl font-playfair-display italic text-center mb-4">
        Voices of Fragrance
      </h2>
      <p className="text-lg md:text-xl font-inter text-center mb-12 opacity-80">
        Moments captured. Stories scented.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            clientName={testimonial.clientName}
            clientRole={testimonial.clientRole}
            avatarSrc={testimonial.avatarSrc}
          />
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex space-x-2 mt-12">
        <div className="w-3 h-3 rounded-full bg-accent-gold"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
      </div>
    </div>
  );
};

export default TestimonialsPage;