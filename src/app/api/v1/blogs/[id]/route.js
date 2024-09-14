import Blog from "@/models/blog";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await dbConnect();
    const singleBlog = await Blog.findById(id);
    return NextResponse.json(singleBlog, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await dbConnect();
    const result = await Blog.deleteOne({ _id: id });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}

export async function PATCH(request, { params }) {
  const { id } = params;

  const updates = await request.json();

  try {
    await dbConnect();
    const result = await Blog.updateOne({ _id: id }, { $set: updates });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
