import connectDB from "@/db_setup/connection";
import ProjectModel from "@/db_setup/models/project.model";
import { ObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(
  req: NextRequest,
  {params}: { params: Promise<{ id: ObjectId }> }
) {
  let {id} = await params;
  try {
    const project = await ProjectModel.findOne({ id: +id });
    return NextResponse.json({ project });
  } catch (err) {
    console.error(err);
  }
}

export async function DELETE(
  req: NextRequest,
  {params}: { params: Promise<{ id: ObjectId }> }
) {
  let {id} = await params;
  try {
    await ProjectModel.deleteOne({ id: +id });
    return NextResponse.json({
      message: `Project ${id} is deleted successfully`,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function PATCH(
  req: NextRequest,
  {params}: { params: Promise<{ id: ObjectId }> }
) {
  let {id} = await params;
  const updatedBody = await req.json();
  try {
    const updatedProject = await ProjectModel.updateOne(
      { id: +id },
      { ...updatedBody }
    );
    return NextResponse.json({ updatedProject });
  } catch (err) {
    console.error(err);
  }
}
