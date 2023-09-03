import connectDB from "@/db_setup/connection";
import PostModel from "@/db_setup/models/post.model";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
  try {
    const allPosts = await PostModel.find();
    return NextResponse.json({ allPosts });
  } catch (error) {
    console.error(error);
  }
}
