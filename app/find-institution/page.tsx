"use client";
import React, { useState, useEffect } from "react";
import { SearchIcon, ChevronDownIcon, XIcon } from "lucide-react";

type FilterCategory =
  | "Location"
  | "Total Fees"
  | "Rating"
  | "Type"
  | "Specialization";

type FilterCategories = {
  [key in FilterCategory]: string[];
};

const filterCategories: FilterCategories = {
  Location: ["Bangalore", "Mumbai", "Delhi", "Chennai", "Kolkata"],
  "Total Fees": ["< ₹5 Lakh", "₹5-10 Lakh", "₹10-15 Lakh", "> ₹15 Lakh"],
  Rating: ["5", "4", "3", "2", "1"],
  Type: ["Government", "Private", "Deemed"],
  Specialization: ["Engineering", "Management", "Medical", "Arts", "Science"],
};

type SelectedFilters = {
  [key in FilterCategory]?: string[];
};

type Institution = {
  _id: string;
  name: string;
  location: string;
  ranking: number;
  reviews: {
    rating: number;
    review_count: number;
  };
  courses: {
    name: string;
    fees: number;
  }[];
  type: string;
  specialization: string;
};

const CollegeRankings: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const [openCategory, setOpenCategory] = useState<FilterCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInstitutions();
  }, [selectedFilters, searchQuery]);

  const fetchInstitutions = async () => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams(buildQueryParams());
      const response = await fetch(`/api/college-university?${queryParams}`);
      const data = await response.json();
      if (data.success) {
        setInstitutions(data.data);
      } else {
        setError("Failed to fetch institutions");
      }
    } catch (error) {
      setError("An error occurred while fetching institutions");
    }
    setLoading(false);
  };

  const buildQueryParams = () => {
    const params: { [key: string]: string } = {};
    if (searchQuery) params.name = searchQuery;
    if (selectedFilters.Location)
      params.location = selectedFilters.Location.join(",");
    if (selectedFilters.Type) params.type = selectedFilters.Type.join(",");
    if (selectedFilters.Specialization)
      params.specialization = selectedFilters.Specialization.join(",");
    if (selectedFilters.Rating) {
      const minRating = Math.min(
        ...selectedFilters.Rating.map((r) => parseInt(r))
      );
      params.minRating = minRating.toString();
    }
    if (selectedFilters["Total Fees"]) {
      const [minFees, maxFees] = getFeesRange(selectedFilters["Total Fees"]);
      if (minFees !== null) params.minFees = minFees.toString();
      if (maxFees !== null) params.maxFees = maxFees.toString();
    }
    return params;
  };

  const getFeesRange = (fees: string[]): [number | null, number | null] => {
    let minFees: number | null = null;
    let maxFees: number | null = null;
    fees.forEach((fee) => {
      if (fee === "< ₹5 Lakh") {
        maxFees = maxFees !== null ? Math.min(maxFees, 500000) : 500000;
      } else if (fee === "₹5-10 Lakh") {
        minFees = minFees !== null ? Math.min(minFees, 500000) : 500000;
        maxFees = maxFees !== null ? Math.max(maxFees, 1000000) : 1000000;
      } else if (fee === "₹10-15 Lakh") {
        minFees = minFees !== null ? Math.min(minFees, 1000000) : 1000000;
        maxFees = maxFees !== null ? Math.max(maxFees, 1500000) : 1500000;
      } else if (fee === "> ₹15 Lakh") {
        minFees = minFees !== null ? Math.max(minFees, 1500000) : 1500000;
      }
    });
    return [minFees, maxFees];
  };

  const addFilter = (category: FilterCategory, filter: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), filter],
    }));
  };

  const removeFilter = (category: FilterCategory, filter: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category]?.filter((f) => f !== filter) || [],
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
  };

  const toggleCategory = (category: FilterCategory) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Section */}
          <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
              <button
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                onClick={clearAllFilters}
              >
                Clear All
              </button>
            </div>

            {/* Selected Filters */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-600 mb-2">
                Selected Filters
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(selectedFilters).flatMap(
                  ([category, filters]) =>
                    filters?.map((filter) => (
                      <span
                        key={`${category}-${filter}`}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {filter}
                        <button
                          onClick={() =>
                            removeFilter(category as FilterCategory, filter)
                          }
                          className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-200 hover:bg-blue-300 transition-colors"
                        >
                          <XIcon className="w-3 h-3 text-blue-800" />
                        </button>
                      </span>
                    ))
                )}
              </div>
            </div>

            {/* Filter Categories */}
            {Object.entries(filterCategories).map(([category, options]) => (
              <div key={category} className="mb-4">
                <h3
                  className="flex justify-between items-center text-sm font-medium text-gray-600 mb-2 cursor-pointer"
                  onClick={() => toggleCategory(category as FilterCategory)}
                >
                  {category}
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openCategory === category ? "transform rotate-180" : ""
                    }`}
                  />
                </h3>
                {openCategory === category && (
                  <div className="ml-2 space-y-1">
                    {options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters[
                            category as FilterCategory
                          ]?.includes(option)}
                          onChange={() => {
                            if (
                              selectedFilters[
                                category as FilterCategory
                              ]?.includes(option)
                            ) {
                              removeFilter(category as FilterCategory, option);
                            } else {
                              addFilter(category as FilterCategory, option);
                            }
                          }}
                          className="rounded text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Rankings Section */}
          <div className="w-full lg:w-3/4">
            {/* Publisher Selection and Search */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-2">
                    Choose rank publishers
                  </h3>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      India Today 2023
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                      Outlook 2023
                    </button>
                  </div>
                </div>
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search a college within this ranking"
                    className="w-full sm:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* College Cards */}
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              institutions.map((institution, index) => (
                <div
                  key={institution._id}
                  className="bg-white rounded-lg shadow-md p-6 mb-6"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg"></div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-semibold text-blue-600">
                          {index + 1}. {institution.name}
                        </h2>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            Compare
                          </button>
                          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                            Brochure
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-gray-800">
                            {institution.reviews.rating.toFixed(1)}
                          </span>
                          <div className="ml-1 text-yellow-400">
                            {"★".repeat(Math.round(institution.reviews.rating))}
                            {"☆".repeat(
                              5 - Math.round(institution.reviews.rating)
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          ({institution.reviews.review_count} reviews)
                        </span>
                      </div>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>
                          Fees: ₹
                          {(institution.courses[0]?.fees / 100000).toFixed(2)}{" "}
                          Lakh
                        </span>
                        <span>Type: {institution.type}</span>
                        <span>
                          Specialization: {institution.specialization}
                        </span>
                      </div>
                      <div className="mt-4">
                        <span className="text-sm font-medium text-gray-600 mr-4">
                          Ranking
                        </span>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-800 font-semibold">
                          {institution.ranking}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4 text-sm">
                    {[
                      "Admissions",
                      "Courses",
                      "Fees",
                      "Placements",
                      "Cutoff",
                    ].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="text-blue-600 hover:underline"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeRankings;
