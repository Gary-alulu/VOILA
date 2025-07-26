'use client';

import React from 'react';
import { Eye, PencilLine, Check, XCircle, Loader, Repeat } from 'lucide-react'; // Lucide icons

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

interface Product {
  productId: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: string;
  userId: string;
  products: Product[];
  totalAmount: number;
  status: 'Pending' | 'Processing' | 'Delivered' | 'Cancelled';
  shippingAddress: string;
  paymentMethod: string;
  createdAt: string;
}



const getStatusTag = (status: Order['status']) => {
  let bgColor = '';
  let textColor = '';
  let icon: React.ElementType | null = null;

  switch (status) {
    case 'Delivered':
      bgColor = 'bg-green-100';
      textColor = 'text-green-800';
      icon = Check;
      break;
    case 'Pending':
      bgColor = 'bg-yellow-100';
      textColor = 'text-yellow-800';
      icon = Loader;
      break;
    case 'Cancelled':
      bgColor = 'bg-red-100';
      textColor = 'text-red-800';
      icon = XCircle;
      break;
    case 'Processing':
      bgColor = 'bg-purple-100';
      textColor = 'text-purple-800';
      icon = Repeat;
      break;
    default:
      break;
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
      {icon && <span className="mr-1"><icon size={14} /></span>}
      {status}
    </span>
  );
};

const OrdersTable: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading

    if (!session || session.user.role !== 'admin') {
      setLoading(false);
      setError('Unauthorized access. Please log in as an admin.');
      return;
    }

    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/admin/orders');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrders(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [session, status]);

  if (loading) {
    return <div className="text-center py-8">Loading orders...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Orders Table</h2>
      <div className="overflow-x-auto">
        {orders.length === 0 ? (
          <p className="text-center py-8 text-gray-500">No current orders.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ordered Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-serif">
                    {order.products.map((p, index) => (
                      <div key={index}>{p.quantity} x Product ID: {p.productId} (Price: ${p.price})</div>
                    ))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.totalAmount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{getStatusTag(order.status)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2"><Eye size={18} /></button>
                    <button className="text-indigo-600 hover:text-indigo-900"><PencilLine size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrdersTable;