import dbConnect from '@/utils/dbConnect';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect();

    await Blog.create(body);

    return NextResponse.json({
      message: 'Blog added successfully!',
      status: 200,
    });
  } catch (e) {
    return NextResponse.json({
      message: e.message,
      status: 500,
    });
  }
}

export async function GET(req, res) {
  try {
    await dbConnect();

    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
