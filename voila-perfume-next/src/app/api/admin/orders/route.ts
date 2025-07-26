import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/Order';

export async function GET(req: Request) {
  const session = await getServerSession();

  if (!session || session.user.role !== 'admin') {
    return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  await dbConnect();

  try {
    const orders = await Order.find({});
    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return new NextResponse(JSON.stringify({ message: 'Error fetching orders' }), { status: 500 });
  }
}