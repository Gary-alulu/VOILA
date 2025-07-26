'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Clock, CheckCircle, Eye } from 'lucide-react'; // Assuming Lucide icons

interface OverviewCardProps {
  title: string;
  value: number;
  impression: number;
  icon: React.ElementType;
  bgColor: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  impression,
  icon: Icon,
  bgColor,
}) => {
  return (
    <motion.div
      className={`p-6 rounded-lg shadow-md ${bgColor} flex flex-col justify-between`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <Icon size={24} className="text-gray-600" />
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
      <p className="text-sm text-gray-600">Impression {impression}%</p>
      {/* Micro graph placeholder */}
      <div className="h-8 bg-gray-200 rounded-md mt-4"></div>
    </motion.div>
  );
};

const OverviewCards: React.FC<{ visitorCount: number }> = ({ visitorCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <OverviewCard
        key="new-orders"
        title="New Orders"
        value={245}
        impression={20}
        icon={ShoppingCart}
        bgColor="bg-purple-100" // Soft lavender
      />
      <OverviewCard
        key="pending-orders"
        title="Pending Orders"
        value={123}
        impression={11}
        icon={Clock}
        bgColor="bg-yellow-100" // Neutral beige
      />
      <OverviewCard
        key="delivered-orders"
        title="Delivered Orders"
        value={150}
        impression={18}
        icon={CheckCircle}
        bgColor="bg-pink-100" // Warm pink/champagne
      />
      <OverviewCard
        key="real-time-visitors"
        title="Real-time Visitors"
        value={visitorCount}
        impression={0} // Impression can be 0 or calculated if needed
        icon={Eye} // Using Eye icon for visitors
        bgColor="bg-blue-100" // A new color for this card
      />
    </div>
  );
};

export default OverviewCards;