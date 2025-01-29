"use client";
import React, { useState } from "react";
import Container from "../Container";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "../ui/input";

interface ProductFilterBarProps {
  showSideFilterBarFunc: () => void;
  onViewChange: (view: "grid" | "list") => void;
  onItemsPerPageChange: (items: number) => void;
  onSortChange: (sort: string) => void;
  onSearchChange: (search: string) => void;
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  view?: "grid" | "list"
}

function ProductFilterBar({
  showSideFilterBarFunc,
  onViewChange,
  onItemsPerPageChange,
  onSortChange,
  onSearchChange,
  totalItems,
  currentPage,
  itemsPerPage,
  view = 'grid'
}: ProductFilterBarProps) {

  const handleViewChange = (newView: "grid" | "list") => {
   
    onViewChange(newView);
  };


  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const sortOptions = ["Default", "Price Low-High", "Price High-Low", "Newest"];

  return (
    <section className="bg-[#FAF4F4]">
      <Container>
        <div className=" px-2 max-md:flex-col max-md:gap-4 max-md:justify-center w-full min-h-24 flex items-center gap-14 justify-between my-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-7">
              <div className="flex items-center gap-7">
                <button onClick={showSideFilterBarFunc} className="">
                  <span className="flex items-center text-xl gap-2">
                    <SlidersHorizontal /> Filter
                  </span>
                </button>
                <button
                  onClick={() => handleViewChange("grid")}
                  className={`max-sm:hidden ${view === "grid" ? "opacity-100" : "opacity-50"}`}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6666 22.1667C17.7384 22.1667 16.8482 21.7979 16.1918 21.1415C15.5354 20.4852 15.1666 19.5949 15.1666 18.6667C15.1666 17.7384 15.5354 16.8482 16.1918 16.1918C16.8482 15.5354 17.7384 15.1667 18.6666 15.1667C19.5949 15.1667 20.4851 15.5354 21.1415 16.1918C21.7979 16.8482 22.1666 17.7384 22.1666 18.6667C22.1666 19.5949 21.7979 20.4852 21.1415 21.1415C20.4851 21.7979 19.5949 22.1667 18.6666 22.1667ZM9.33331 22.1667C8.40506 22.1667 7.51482 21.7979 6.85844 21.1415C6.20206 20.4852 5.83331 19.5949 5.83331 18.6667C5.83331 17.7384 6.20206 16.8482 6.85844 16.1918C7.51482 15.5354 8.40506 15.1667 9.33331 15.1667C10.2616 15.1667 11.1518 15.5354 11.8082 16.1918C12.4646 16.8482 12.8333 17.7384 12.8333 18.6667C12.8333 19.5949 12.4646 20.4852 11.8082 21.1415C11.1518 21.7979 10.2616 22.1667 9.33331 22.1667ZM18.6666 12.8333C17.7384 12.8333 16.8482 12.4646 16.1918 11.8082C15.5354 11.1518 15.1666 10.2616 15.1666 9.33333C15.1666 8.40508 15.5354 7.51484 16.1918 6.85846C16.8482 6.20208 17.7384 5.83333 18.6666 5.83333C19.5949 5.83333 20.4851 6.20208 21.1415 6.85846C21.7979 7.51484 22.1666 8.40508 22.1666 9.33333C22.1666 10.2616 21.7979 11.1518 21.1415 11.8082C20.4851 12.4646 19.5949 12.8333 18.6666 12.8333ZM9.33331 12.8333C8.40506 12.8333 7.51482 12.4646 6.85844 11.8082C6.20206 11.1518 5.83331 10.2616 5.83331 9.33333C5.83331 8.40508 6.20206 7.51484 6.85844 6.85846C7.51482 6.20208 8.40506 5.83333 9.33331 5.83333C10.2616 5.83333 11.1518 6.20208 11.8082 6.85846C12.4646 7.51484 12.8333 8.40508 12.8333 9.33333C12.8333 10.2616 12.4646 11.1518 11.8082 11.8082C11.1518 12.4646 10.2616 12.8333 9.33331 12.8333Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleViewChange("list")}
                  className={`max-sm:hidden ${view === "list" ? "opacity-100" : "opacity-50"}`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
              <div className="h-5 w-0.5 bg-black/80 max-[400px]:text-sm"></div>
              <p className="max-[400px]:text-sm">
                Showing {startItem}–{endItem} of {totalItems} results
              </p>
            </div>

            <div className="flex items-center gap-4 text-xl max-md:text-lg max-md:gap-2">
              <label htmlFor="show" className="max-sm:hidden">
                Show
              </label>
              <select
                id="show"
                className="text-[#9F9F9F] p-2 border rounded text-sm max-sm:hidden"
                value={itemsPerPage}
                onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              >
                {[8, 16, 24, 32].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <label htmlFor="sort">Sort by</label>
              <select
                id="sort"
                className="text-[#9F9F9F] p-2 border rounded text-sm"
                onChange={(e) => onSortChange(e.target.value)}
                defaultValue="Default"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex relative">
            <Search size={30} className="absolute right-4 top-1/2 transform -translate-y-1/2" />
            <Input
              placeholder="Search..."
              className="pr-16 bg-white m-0 sm:w-full sm:min-w-auto"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProductFilterBar;
