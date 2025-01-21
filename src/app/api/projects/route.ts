import connectDB from "@/db_setup/connection";
import ProjectModel from "@/db_setup/models/project.model";
import ProjectType from "@/types/project.type";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    await connectDB();

    const projectList: ProjectType[] = await ProjectModel.find().sort({
      id: -1,
    });
    console.log(projectList)
    return NextResponse.json({ projectList });
  } catch (err: unknown) {
    console.error(err);
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const projectData = await req.json();
    await ProjectModel.create({ ...projectData });
    console.log("Data uploaded to database.");
  } catch (err) {
    console.error(err);
  }
}
