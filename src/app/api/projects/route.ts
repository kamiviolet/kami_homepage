import connectDB from "@/db_setup/connection";
import ProjectModel from "@/db_setup/models/project.model";
import ProjectType from "@/types/project.type";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET() {
  try {
    const projectList: ProjectType[] = await ProjectModel.find().sort({
      projectsId: -1,
    });
    return NextResponse.json({ projectList });
  } catch (err: unknown) {
    console.error(err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const projectData = await req.json();
    await ProjectModel.create({ ...projectData });
    console.log("Data uploaded to database.");
  } catch (err) {
    console.error(err);
  }
}
