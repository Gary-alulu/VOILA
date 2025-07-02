import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, subject, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // In a real application, you would send this data to an email service (e.g., SendGrid, Nodemailer)
    // or save it to a database.
    console.log('Contact form submission received:', {
      firstName, lastName, email, subject, message
    });

    // Simulate a delay for API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}