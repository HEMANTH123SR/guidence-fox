"use client";
import React, { useState } from "react";
import { SearchIcon, ChevronDownIcon, XIcon } from "lucide-react";

type FilterCategory =
  | "Location"
  | "Total Fees"
  | "Rating"
  | "Ownership"
  | "Specialization";

type FilterCategories = {
  [key in FilterCategory]: string[];
};

const filterCategories: FilterCategories = {
  Location: ["Bangalore", "Mumbai", "Delhi", "Chennai", "Kolkata"],
  "Total Fees": ["< ₹5 Lakh", "₹5-10 Lakh", "₹10-15 Lakh", "> ₹15 Lakh"],
  Rating: ["5 Star", "4 Star", "3 Star", "2 Star", "1 Star"],
  Ownership: ["Government", "Private", "Deemed"],
  Specialization: ["Engineering", "Management", "Medical", "Arts", "Science"],
};

type SelectedFilters = {
  [key in FilterCategory]?: string[];
};

const CollegeRankings: React.FC = () => {
  
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const [openCategory, setOpenCategory] = useState<FilterCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

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
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 mb-6"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold text-blue-600">
                        {index}. Sample University Name
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
                          4.2
                        </span>
                        <div className="ml-1 text-yellow-400">★★★★☆</div>
                      </div>
                      <span className="text-sm text-gray-500">
                        (1000+ reviews)
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>Fees: ₹5.00 Lakh</span>
                      <span>Salary: ₹6.00 Lakh</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-sm font-medium text-gray-600 mr-4">
                        Outlook 23
                      </span>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-800 font-semibold">
                        {index}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeRankings;
