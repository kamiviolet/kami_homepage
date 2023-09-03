import connectDB from "@/db_setup/connection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
  try {
    const allPosts = await mongoose.model("Post").find();
    return NextResponse.json({ allPosts });
  } catch (error) {
    console.error(error);
  }
}
