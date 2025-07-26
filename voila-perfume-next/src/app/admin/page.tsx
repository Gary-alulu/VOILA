"use client";

import React, { useEffect, useState } from 'react';

import OverviewCards from '../../components/OverviewCards';
import OrdersTable from '../../components/OrdersTable';

const AdminDashboard = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const eventSource = new EventSource('/api/sse');
    eventSource.onmessage = (e) => {
      setVisitorCount(parseInt(e.data, 10));
    };
    
    return () => eventSource.close();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <OverviewCards visitorCount={visitorCount} />
      <OrdersTable />
    </div>
  );
};

export default AdminDashboard;