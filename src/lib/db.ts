import mongoose from "mongoose";

let MONGO_URL = process.env.MONGODB_URI;

if (!MONGO_URL) {
  throw new Error("Please provider mongo url!");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

export const connectDb = async () => {
  if (cached.conn) {
    console.log("USING PREVIOUS DATABASE INSTANCE");
    return cached.conn;
  }

  try {
    cached.conn = await mongoose.connect(MONGO_URL!);
    console.log("DATABASE CONNECTED");
    return cached.conn;
  } catch (error) {
    console.log(error);
  }
};
