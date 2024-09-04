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
    // Connect to the database
    await connectDB();

    // Parse the search parameters from the URL
    const { searchParams } = new URL(req.url);

    console.log("Search Parameters:", searchParams);

    // Build the filter and sort objects based on search parameters
    const filter = buildFilter(searchParams);
    const sort = buildSort(searchParams);

    // Query the database with the filter and sort
    const institutions = await Institution.find(filter).sort(sort);

    console.log("institutions", institutions);

    // Return the successful response
    return NextResponse.json({
      success: true,
      data: institutions,
    });
  } catch (error: any) {
    // Log the error and return an error response
    console.error("Error in GET method:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

function buildFilter(searchParams: URLSearchParams) {
  const filter: any = {};

  // Add simple filters
  const simpleFilters = ["location", "type", "affiliation", "specialization"];
  simpleFilters.forEach((param) => {
    if (searchParams.has(param)) {
      filter[param] = searchParams.get(param);
    }
  });

  // Add ranking range filter
  addRankingFilter(filter, searchParams);

  // Add minimum rating filter
  addMinRatingFilter(filter, searchParams);

  // Add facilities filter
  addFacilitiesFilter(filter, searchParams);

  return filter;
}

function addRankingFilter(filter: any, searchParams: URLSearchParams) {
  const minRanking = searchParams.get("minRanking");
  const maxRanking = searchParams.get("maxRanking");

  if (minRanking || maxRanking) {
    filter.ranking = {};
    if (minRanking) filter.ranking.$gte = parseInt(minRanking);
    if (maxRanking) filter.ranking.$lte = parseInt(maxRanking);
  }
}

function addMinRatingFilter(filter: any, searchParams: URLSearchParams) {
  const minRating = searchParams.get("minRating");
  if (minRating) {
    filter["reviews.rating"] = { $gte: parseFloat(minRating) };
  }
}

function addFacilitiesFilter(filter: any, searchParams: URLSearchParams) {
  const facilities = searchParams.get("facilities")?.split(",");
  if (facilities) {
    facilities.forEach((facility) => {
      filter[`facilities.${facility}`] = true;
    });
  }
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
