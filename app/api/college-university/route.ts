import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/db/index";
import { Institution } from "@/db/models/institute.model";
import mongoose from "mongoose";
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const data = await req.json();
    const institution = new Institution(data);
    await institution.save();

    return NextResponse.json({ success: true, data: institution });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);

    const filter = buildFilter(searchParams);
    const sort = buildSort(searchParams);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const institutions = await Institution.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Institution.countDocuments(filter);

    return NextResponse.json({
      success: true,
      data: institutions,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

function buildFilter(searchParams: URLSearchParams) {
  const filter: any = {};

  if (searchParams.has("location")) {
    filter.location = searchParams.get("location");
  }

  if (searchParams.has("type")) {
    filter.type = searchParams.get("type");
  }

  if (searchParams.has("affiliation")) {
    filter.affiliation = searchParams.get("affiliation");
  }

  if (searchParams.has("minRanking") || searchParams.has("maxRanking")) {
    filter.ranking = {};
    if (searchParams.has("minRanking")) {
      filter.ranking.$gte = parseInt(searchParams.get("minRanking") || "0");
    }
    if (searchParams.has("maxRanking")) {
      filter.ranking.$lte = parseInt(
        searchParams.get("maxRanking") || "1000000"
      );
    }
  }

  if (searchParams.has("specialization")) {
    filter.specialization = searchParams.get("specialization");
  }

  if (searchParams.has("minRating")) {
    filter["reviews.rating"] = {
      $gte: parseFloat(searchParams.get("minRating") || "0"),
    };
  }

  if (searchParams.has("facilities")) {
    const facilities = searchParams.get("facilities")?.split(",");
    if (facilities) {
      facilities.forEach((facility) => {
        filter[`facilities.${facility}`] = true;
      });
    }
  }

  return filter;
}

function buildSort(searchParams: URLSearchParams) {
  const sortField = searchParams.get("sortBy") || "ranking";
  const sortOrder = searchParams.get("sortOrder") === "desc" ? -1 : 1;
  return { [sortField]: sortOrder };
}

export async function DELETE(req: NextRequest) {
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

    await Institution.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Institution deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
