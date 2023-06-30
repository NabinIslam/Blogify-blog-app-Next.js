import dbConnect from '@/utils/dbConnect';
import Favorite from '@/models/favorite';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConnect();

    await Favorite.create(body);

    return NextResponse.json({
      message: 'Blog added to favorites successfully!',
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

    const favorites = await Favorite.find();
    return NextResponse.json(favorites, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
