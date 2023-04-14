import React, { useState } from "react";
import { BikeTheft } from "../dummy";

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  searchFilteredData: BikeTheft[];
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  searchFilteredData,
}: Props) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => --prev);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(searchFilteredData.length / 10)) {
      setCurrentPage((prev) => ++prev);
    }
  };
  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={handlePrevPage}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Previous
      </button>
      <span className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        {currentPage}
      </span>
      <button
        onClick={handleNextPage}
        className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
