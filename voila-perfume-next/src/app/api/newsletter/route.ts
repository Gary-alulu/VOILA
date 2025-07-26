import dbConnect from '@/lib/dbConnect';
import NewsletterSubscriber from '@/models/NewsletterSubscriber';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    const existingSubscriber = await NewsletterSubscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ message: 'You are already subscribed' }, { status: 409 });
    }

    await NewsletterSubscriber.create({ email });

    return NextResponse.json({ message: 'Subscription successful!' }, { status: 201 });
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}