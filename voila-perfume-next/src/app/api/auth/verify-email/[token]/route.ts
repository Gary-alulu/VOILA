import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET(request: Request, { params }: { params: { token: string } }) {
  await dbConnect();
  try {
    const { token } = params;

    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      emailVerificationToken: hashedToken,
      emailVerificationExpires: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ success: false, message: 'Email verification token is invalid or has expired.' }, { status: 400 });
    }

    user.emailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    return NextResponse.json({ success: true, message: 'Email verified successfully.' }, { status: 200 });
  } catch (error: any) {
    console.error('Email verification error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}