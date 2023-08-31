import mongoose from "mongoose";
import dotenv from "dotenv";

const ENV = process.env.NODE_ENV || "development";

dotenv.config({ path: `@/../.env.${ENV}` });

const { MONGODB_CLUSTER, MONGODB_ID, MONGODB_PW } = process.env;

const url = `mongodb+srv://${MONGODB_ID}:${MONGODB_PW}@${MONGODB_CLUSTER}.hl5lxly.mongodb.net/`;

export default async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(url);
    console.log("Connected successfully");
  } catch (error) {
    console.error(error);
  }
}
