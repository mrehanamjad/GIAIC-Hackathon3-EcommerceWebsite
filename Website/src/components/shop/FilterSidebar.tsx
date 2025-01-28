"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface Category {
  id: string;
  name: string;
}

const FilterSidebar = ({
  showOnSmallDivices = true,
  categories = [],
  selectedCategories,
  priceRange,
  handelCategoryFilter,
  handlePriceFilter,
  handleClearFilters
}: {
  showOnSmallDivices: boolean;
  categories: string[];
  selectedCategories: string[];
  priceRange: { min?: string ; max?: string; };
  handelCategoryFilter: (category: string) => void;
  handlePriceFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearFilters: () => void
}) => {
 

  

  return (
    <div
      className={`w-64 bg-white p-4 border-r min-h-screen max-lg:absolute  z-50 ${showOnSmallDivices ? "left-0 h-full" : "-left-80 "} duration-500`}
    >
      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Price Range</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <label
                  htmlFor="min price"
                  className="text-sm text-gray-600 mb-1 block"
                >
                  Min ($)
                </label>
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={handlePriceFilter}
                  placeholder="Min price"
                  id="min-price"
                  name="min-price"
                  className="w-full p-2 h-auto text-sm border rounded"
                />
              </div>
              <div className="px-2">to</div>
              <div className="flex-1">
                <label
                  htmlFor="max-price"
                  className="text-sm text-gray-600 mb-1 block"
                >
                  Max ($)
                </label>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={handlePriceFilter}
                  id="max-price"
                  name="max-price"
                  placeholder="Max price"
                  className="w-full p-2 h-auto text-sm border-2 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <div className="space-y-2">
            {categories?.map((category, i) => (
              <label
                key={i}
                htmlFor={category}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handelCategoryFilter(category)}
                  id={category}
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={handleClearFilters}
          className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
          type="button"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
