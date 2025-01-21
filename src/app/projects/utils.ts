import connectDB from "@/db_setup/connection";
import ProjectModel from "@/db_setup/models/project.model";
import { NextResponse } from "next/server";


export async function fetchAllProjectsFromDb() {
  await connectDB();

  console.log(ProjectModel);
  const allProjects = await ProjectModel.find().sort({ _id: -1 });
  return allProjects;
}
