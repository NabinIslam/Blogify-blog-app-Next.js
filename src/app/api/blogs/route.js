import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    await dbConnect();

    const body = await req.json();

    await Blog.create(body);

    return NextResponse.json({
      success: true,
      message: "Blog added successfully!",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
      status: 500,
    });
  }
}

export async function GET(req, res) {
  try {
    await dbConnect();

    const url = new URL(req.url);
    const sortQuery = url.searchParams.get("sort");

    let sort = { createdAt: -1 };

    if (sortQuery === "latest") sort = { createdAt: -1 };

    if (sortQuery === "oldest") sort = { createdAt: 1 };

    const blogs = await Blog.find({}).sort(sort);
    return NextResponse.json({
      success: true,
      message: `Fetched all blogs successfully!`,
      status: 200,
      blogs,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
      status: 500,
    });
  }
}
