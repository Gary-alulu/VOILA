import dbConnect from '@/lib/dbConnect';
import Product from '@/models/Product';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const section = searchParams.get('section');
    const name = searchParams.get('name');
    const brand = searchParams.get('brand');
    const notes = searchParams.get('notes');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const scentFamily = searchParams.get('scentFamily');
    const size = searchParams.get('size');

    let query: any = {};

    if (section) {
      query.section = section;
    }
    if (name) {
      query.name = { $regex: name, $options: 'i' }; // Case-insensitive search
    }
    if (brand) {
      query.brand = { $regex: brand, $options: 'i' };
    }
    if (notes) {
      query.notes = { $regex: notes, $options: 'i' };
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) {
        query.price.$gte = parseFloat(minPrice);
      }
      if (maxPrice) {
        query.price.$lte = parseFloat(maxPrice);
      }
    }
    if (scentFamily) {
      query.scentFamily = { $regex: scentFamily, $options: 'i' };
    }
    if (size) {
      query.size = { $regex: size, $options: 'i' };
    }

    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);
    return NextResponse.json({ success: true, data: products, totalPages, currentPage: page });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}