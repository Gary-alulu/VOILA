import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product'; // Assuming you have a Product model

export async function GET(request: Request) {
  await dbConnect();
  try {
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { page, section, ...productData } = await request.json();
    const product = await Product.create({ ...productData, page, section });
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function PUT(request: Request) {
  await dbConnect();
  try {
    const { id, page, section, ...productData } = await request.json();
    const product = await Product.findByIdAndUpdate(id, { ...productData, page, section }, { new: true, runValidators: true });
    if (!product) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  await dbConnect();
  try {
    const { id } = await request.json();
    const deletedProduct = await Product.deleteOne({ _id: id });
    if (!deletedProduct.deletedCount) {
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}