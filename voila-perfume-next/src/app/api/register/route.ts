import dbConnect from '@/lib/dbConnect';
import User from '../../../../src/models/User';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: 'User with this email already exists' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const emailVerificationToken = crypto.randomBytes(20).toString('hex');
    const hashedEmailVerificationToken = crypto.createHash('sha256').update(emailVerificationToken).digest('hex');
    const emailVerificationExpires = Date.now() + 3600000; // 1 hour

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      isProfileComplete: false,
      emailVerificationToken: hashedEmailVerificationToken,
      emailVerificationExpires,
    });

    const verificationUrl = `${process.env.NEXTAUTH_URL}/verify-email/${emailVerificationToken}`;

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: user.email,
      subject: 'Email Verification',
      html: `
        <p>Please verify your email by clicking on the following link:</p>
        <p><a href="${verificationUrl}">${verificationUrl}</a></p>
        <p>This link will expire in one hour.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'User registered successfully. Please check your email for verification.', user }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}