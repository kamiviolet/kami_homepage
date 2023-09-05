import connectDB from "@/db_setup/connection";
import ProjectModel from "@/db_setup/models/project.model";
import { NextResponse } from "next/server";

connectDB();

export async function fetchAllProjectsFromDb() {
  const allProjects = await ProjectModel.find().sort({ projectsId: -1 });
  return allProjects;
}
