import Blog from "@/models/blog";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { email } = params;

  try {
    await dbConnect();
    const usersBlogs = await Blog.find({ "author.email": email });

    return NextResponse.json(usersBlogs, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
