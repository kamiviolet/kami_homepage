import connectDB from "@/db_setup/connection";
import TagModel from "@/db_setup/models/tag.model";
import { NextResponse } from "next/server";

connectDB();

export async function GET() {
  try {
    const AllTags = await TagModel.find();
    return NextResponse.json({ AllTags });
  } catch (err) {
    console.error(err);
  }
}
