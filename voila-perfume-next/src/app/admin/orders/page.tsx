import React from 'react';
import OrdersTable from '@/components/OrdersTable';

const AdminOrdersPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Orders</h1>
      <OrdersTable />
    </div>
  );
};

export default AdminOrdersPage;