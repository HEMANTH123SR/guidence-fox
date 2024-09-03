import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/db/index";
import { Institution } from "@/db/models/institute.model";
import mongoose from "mongoose";
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");
    if (id) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
          { success: false, message: "Invalid WebToon ID" },
          { status: 400 }
        );
      }
    }

    const data = await Institution.findById(id);

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
