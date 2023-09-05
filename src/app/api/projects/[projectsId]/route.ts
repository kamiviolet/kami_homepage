import connectDB from "@/db_setup/connection";
import ProjectModel from "@/db_setup/models/project.model";
import ProjectType from "@/types/project.type";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(
  req: NextRequest,
  context: { params: { projectsId: number } }
) {
  const projectsId = +context.params.projectsId;
  try {
    const project = await ProjectModel.findOne({ projectsId });
    return NextResponse.json({ project });
  } catch (err) {
    console.error(err);
  }
}

export async function DELETE(
  req: NextRequest,
  context: {
    params: { projectsId: number };
  }
) {
  const projectsId = +context.params.projectsId;
  try {
    await ProjectModel.deleteOne({ projectsId });
    return NextResponse.json({
      message: `Project ${projectsId} is deleted successfully`,
    });
  } catch (err) {
    console.error(err);
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: { projectsId: number } }
) {
  const projectsId = +context.params.projectsId;
  const updatedBody = await req.json();
  try {
    const updatedProject = await ProjectModel.updateOne(
      { projectsId },
      { ...updatedBody }
    );
    return NextResponse.json({ updatedProject });
  } catch (err) {
    console.error(err);
  }
}

