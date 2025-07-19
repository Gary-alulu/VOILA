import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route'; // Adjust path as needed

export async function POST(req: Request) {
  await dbConnect();

  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.email) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { name, email, phone, address, isProfileComplete } = await req.json();

    // Find the user by their email (assuming email is unique and used for identification)
    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      { name, email, phone, address, isProfileComplete },
      { new: true, runValidators: true }
    );

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Profile updated successfully', user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error updating profile', error: error.message }, { status: 500 });
  }
}