import React from 'react';
import '../globals.css'; // Import global styles

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (

        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
          {/* Left Sidebar */}
          <aside className="w-64 bg-midnight-black dark:bg-midnight-black text-white dark:text-white p-4 shadow-lg">
            <div className="text-2xl font-playfair mb-8 text-soft-gold dark:text-soft-gold">VOILÀ</div>
            <nav>
              <ul>
                <li className="mb-4">
                  <a href="/admin" className="flex items-center text-lg hover:text-soft-gold transition-colors duration-300">
                    <span className="mr-3">📊</span> Dashboard
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/admin/products" className="flex items-center text-lg hover:text-soft-gold transition-colors duration-300">
                    <span className="mr-3">📦</span> Products
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/admin/orders" className="flex items-center text-lg hover:text-soft-gold transition-colors duration-300">
                    <span className="mr-3">🛒</span> Orders
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/admin/settings" className="flex items-center text-lg hover:text-soft-gold transition-colors duration-300">
                    <span className="mr-3">⚙️</span> Settings
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Panel */}
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Header Bar */}
            <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
              <div className="relative w-1/3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 pl-10 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-soft-gold"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
              </div>
              <div className="flex items-center space-x-4">
                {/* Theme Toggle (Placeholder) */}
                <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
                  💡
                </button>
                <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
                  🔔
                </button>
                <div className="w-10 h-10 rounded-full bg-soft-gold flex items-center justify-center text-white font-bold">JD</div>
              </div>
            </header>

            {/* Content Area */}
            <div className="flex-1 overflow-auto p-6 bg-gray-50 dark:bg-gray-900">
              {children}
            </div>
          </main>

          {/* Right-Side Insights Panel (Placeholder) */}
          <aside className="w-80 bg-white dark:bg-gray-800 p-4 shadow-lg overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Insights</h2>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mb-4 glassmorphism">
              <h3 className="font-medium text-gray-700 dark:text-gray-200">Real-time Visitors</h3>
              <p className="text-3xl font-bold text-soft-gold">124</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mb-4 glassmorphism">
              <h3 className="font-medium text-gray-700 dark:text-gray-200">Conversion Tips</h3>
              <p className="text-gray-600 dark:text-gray-300">Optimize product images for better engagement.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md glassmorphism">
              <h3 className="font-medium text-gray-700 dark:text-gray-200">Top Channels</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
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