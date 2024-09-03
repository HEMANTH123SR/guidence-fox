import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const res: any = await mongoose.connect(process.env.MONGO_URL as string);
    console.log(
      `mongoDB connnected:${res.connection.db.databaseName as string}`
    );
  } catch (err) {
    console.log(`mongoDB connection error: ${err}`);
  }
};
