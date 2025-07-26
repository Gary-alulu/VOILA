import React from 'react';
import '../globals.css'; // Import global styles
import { Activity, ShoppingBag, Users, Box, Warehouse, Megaphone, BarChart, Settings } from 'lucide-react';
import AnimatedNavLink from '../../components/AnimatedNavLink';
import HeaderBar from '../../components/HeaderBar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (

        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
          {/* Left Sidebar */}
          <aside className="w-64 bg-gray-50 text-gray-800 p-4 shadow-lg">
            <div className="text-2xl font-playfair mb-8 text-gray-900">VOILÀ</div>
            <nav>
              <ul>
                <li className="mb-4">
                  <AnimatedNavLink href="/admin" label="Dashboard"><Activity /></AnimatedNavLink>
                </li>
                <li className="mb-4">
                  <AnimatedNavLink href="/admin/orders" label="Orders"><ShoppingBag /></AnimatedNavLink>
                </li>
                <li className="mb-4">
                  <AnimatedNavLink href="/admin/customers" label="Customers"><Users /></AnimatedNavLink>
                </li>
                <li className="mb-4">
                  <AnimatedNavLink href="/admin/products" label="Products"><Box /></AnimatedNavLink>
                </li>


                <li className="mb-4">
                  <AnimatedNavLink href="/admin/analytics" label="Analytics"><BarChart /></AnimatedNavLink>
                </li>
                <li className="mb-4">
                  <AnimatedNavLink href="/admin/settings" label="Settings"><Settings /></AnimatedNavLink>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Panel */}
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Content Area */}
            <div className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900">
              {children}
            </div>
          </main>

          {/* Right-Side Insights Panel (Placeholder) */}
          <aside className="w-80 bg-gray-50 p-4 shadow-lg overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Insights</h2>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4 glassmorphism">
              <h3 className="font-medium text-gray-700">Real-time Visitors</h3>
              <p className="text-3xl font-bold text-purple-600">124</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4 glassmorphism">
              <h3 className="font-medium text-gray-700">Conversion Tips</h3>
              <p className="text-gray-600">Optimize product images for better engagement.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md glassmorphism">
              <h3 className="font-medium text-gray-700">Top Channels</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Instagram: 45%</li>
                <li>Facebook: 30%</li>
                <li>Google Search: 25%</li>
              </ul>
            </div>
          </aside>
        </div>

  );
};

export default AdminLayout;