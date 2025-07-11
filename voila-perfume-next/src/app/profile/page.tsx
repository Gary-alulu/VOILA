import React from 'react';
import UserProfileMotionCard from '@/components/UserProfileMotionCard';

const UserProfilePage = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-gray-900 dark:text-white font-satoshi flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col py-8 px-6 min-h-full">
          <h2 className="text-2xl font-bold mb-10">User Profile</h2>
          <nav className="flex-1">
            <ul className="space-y-6">
              <li className="flex items-center text-orange-500 font-semibold">
                <span className="material-icons mr-3">person</span>
                User info
              </li>
              <li className="flex items-center text-gray-400 cursor-pointer hover:text-orange-500 transition">
                <span className="material-icons mr-3">favorite_border</span>
                Favorites
              </li>
              <li className="flex items-center text-gray-400 cursor-pointer hover:text-orange-500 transition">
                <span className="material-icons mr-3">star_border</span>
                Watchlist
              </li>
              <li className="flex items-center text-gray-400 cursor-pointer hover:text-orange-500 transition">
                <span className="material-icons mr-3">settings</span>
                Setting
              </li>
              <li className="flex items-center text-gray-400 cursor-pointer hover:text-orange-500 transition">
                <span className="material-icons mr-3">notifications_none</span>
                Notifications
              </li>
            </ul>
          </nav>
          <button className="mt-auto flex items-center text-red-500 hover:text-red-700 transition font-semibold">
            <span className="material-icons mr-2">logout</span>
            Log out
          </button>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center py-12 px-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold">Sara Tancredi</h3>
            <span className="text-gray-500 text-sm">New York, USA</span>
          </div>
          <form className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" defaultValue="Sara" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" defaultValue="Tancredi" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" defaultValue="Sara Tancredi@gmail" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Phone Number</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" defaultValue="(+98) 9123728167" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Location</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="e.g. New York, USA" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-2">Postal Code</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" defaultValue="23728167" />
            </div>
            <div className="md:col-span-2 flex justify-center mt-6">
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-12 rounded-md shadow transition-all duration-200">
                Save Changes
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default UserProfilePage;