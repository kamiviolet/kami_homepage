import connectDB from "@/db_setup/connection";
import ProjectModel from "@/db_setup/models/project.model";
import { ObjectId } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(
  req: NextRequest,
  context: { params: { id: ObjectId } }
) {
  const id = +context.params.id;
  try {
    const project = await ProjectModel.findOne({ id });
    return NextResponse.json({ project });
  } catch (err) {
    console.error(err);
  }
}

export async function DELETE(
  req: NextRequest,
  context: {
    params: { id: ObjectId };
  }
) {
  const id = +context.params.id;
  try {
    await ProjectModel.deleteOne({ id });
    return NextResponse.json({
      message: `Project ${id} is deleted successfully`,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: { id: ObjectId } }
) {
  const id = +context.params.id;
  const updatedBody = await req.json();
  try {
    const updatedProject = await ProjectModel.updateOne(
      { id },
      { ...updatedBody }
    );
    return NextResponse.json({ updatedProject });
  } catch (err) {
    console.error(err);
  }
}
