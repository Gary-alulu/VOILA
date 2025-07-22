import { useSession } from 'next-auth/react';
import Icon from '../icons/Icon';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading

    if (!session || session.user.role !== 'admin') {
      router.push('/unauthorized'); // Redirect to an unauthorized page or login
    }
  }, [session, status, router]);

  const [userData, setUserData] = useState(null);
  const [productData, setProductData] = useState(null);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading

    if (!session || session.user.role !== 'admin') {
      router.push('/unauthorized'); // Redirect to an unauthorized page or login
    } else {
      // Fetch user data
      fetch('/api/admin/data?type=users')
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error('Error fetching user data:', error));

      // Fetch product data
      fetch('/api/admin/data?type=products')
        .then((res) => res.json())
        .then((data) => setProductData(data))
        .catch((error) => console.error('Error fetching product data:', error));

      // Fetch order data
      fetch('/api/admin/data?type=orders')
        .then((res) => res.json())
        .then((data) => setOrderData(data))
        .catch((error) => console.error('Error fetching order data:', error));
    }
  }, [session, status, router]);

  if (status === 'loading' || !session || session.user.role !== 'admin') {
    return <p>Loading or Access Denied...</p>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-20 bg-gray-800 text-white p-4">
         <nav>
           <ul className="space-y-4">
             <li>
               <a href="#" className="flex items-center justify-center p-3 rounded hover:bg-gray-700" title="Dashboard">
                 <Icon name="dashboard" className="w-6 h-6" />
               </a>
             </li>
             <li>
               <a href="#" className="flex items-center justify-center p-3 rounded hover:bg-gray-700" title="Users">
                 <Icon name="users" className="w-6 h-6" />
               </a>
             </li>
             <li>
               <a href="#" className="flex items-center justify-center p-3 rounded hover:bg-gray-700" title="Products">
                 <Icon name="box" className="w-6 h-6" />
               </a>
             </li>
             <li>
               <a href="#" className="flex items-center justify-center p-3 rounded hover:bg-gray-700" title="Orders">
                 <Icon name="shopping-cart" className="w-6 h-6" />
               </a>
             </li>
             <li>
               <a href="#" className="flex items-center justify-center p-3 rounded hover:bg-gray-700" title="Settings">
                 <Icon name="settings" className="w-6 h-6" />
               </a>
             </li>
           </ul>
         </nav>
       </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard, {session.user.name}!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for admin content cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Total Users</h3>
            <p className="text-gray-600 text-3xl">{userData ? userData.totalUsers : 'Loading...'}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Total Products</h3>
            <p className="text-gray-600 text-3xl">{productData ? productData.totalProducts : 'Loading...'}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Pending Orders</h3>
            <p className="text-gray-600 text-3xl">{orderData ? orderData.pendingOrders : 'Loading...'}</p>
          </div>
        </div>
        {/* More admin-specific content can go here */}
      </main>
    </div>
  );
}