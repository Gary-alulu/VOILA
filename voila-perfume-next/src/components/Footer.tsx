'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedLink from './AnimatedLink';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-white">
      {/* Newsletter Section */}
      <div className="container mx-auto px-6 py-16 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-playfair mb-4">Join the VOILÀ Society</h2>
          <p className="text-lg text-neutral-400 mb-8">
            Be first to receive exclusive launches, scent stories, and secret sales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 px-4">
            <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 w-full sm:max-w-md rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
              />
            <button className="px-8 py-3 bg-[#D4AF37] text-white rounded-xl font-satoshi hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:scale-[1.02] mt-2 sm:mt-0">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Columns */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="font-playfair text-2xl text-[#D4AF37]">VOILÀ.</h2>
            <p className="text-neutral-400 italic font-serif">Perfume is the art that makes memory speak.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:scale-110">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">
                <span className="sr-only">X (Twitter)</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8 0 3.374 2.051 6.276 4.998 7.491-.07-.633-.133-1.604.028-2.295.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.112.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097.749.232 1.545.357 2.37.357 4.411 0 8-3.589 8-8s-3.589-8-8-8z"/></svg>
              </Link>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><AnimatedLink href="#" hoverEffect="translate-x">Best Sellers</AnimatedLink></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:translate-x-1">New Arrivals</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:translate-x-1">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Learn</h4>
            <ul className="space-y-2">
              <li><Link href="/blog-stories" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:translate-x-1">Blog & Stories</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:translate-x-1">FAQs</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:translate-x-1">Scent Guide</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="font-playfair text-lg mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/about#our-story" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:translate-x-1">Our Story</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:translate-x-1">Our Craft</Link></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:translate-x-1">Sustainability</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-playfair text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:translate-x-1">Get in Touch</Link></li>
              <li><AnimatedLink href="#" hoverEffect="scale">
                <span className="sr-only">Instagram</span>
                {/* SVG content */}
              </AnimatedLink></li>
              <li><Link href="#" className="text-neutral-400 hover:text-[#D4AF37] transition-colors transform hover:translate-x-1">Pinterest</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-6 py-6">
          <p className="text-xs text-neutral-400 text-center">&copy; {new Date().getFullYear()} VOILÀ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
