import { NextResponse } from 'next/server';
import Product from '@/models/Product';
import User from '@/models/User';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { productId } = await request.json();

  try {
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    if (!user.wishlist.includes(productId)) {
      user.wishlist.push(productId);
      await user.save();
    }

    return NextResponse.json({ success: true, wishlist: user.wishlist });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const { productId } = await request.json();

  try {
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    user.wishlist = user.wishlist.filter((id: string) => id.toString() !== productId);
    await user.save();

    return NextResponse.json({ success: true, wishlist: user.wishlist });
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await User.findById(session.user.id).populate('wishlist');
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, wishlist: user.wishlist });
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}