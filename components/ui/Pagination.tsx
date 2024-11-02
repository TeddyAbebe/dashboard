"use client";

import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="bg-white text-gray-800 flex items-center gap-3 justify-center sm:justify-end p-3">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
        className={`p-2 rounded-full ${
          currentPage === 1 ? "text-gray-400" : "text-purple-700"
        }`}
      >
        <MdKeyboardDoubleArrowLeft size={20} />
      </button>
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className={`p-2 rounded-full ${
          currentPage === 1 ? "text-gray-400" : "text-purple-700"
        }`}
      >
        <MdKeyboardArrowLeft size={20} />
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-lg text-sm ${
              currentPage === index + 1
                ? "bg-purple-700 text-white font-semibold"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className={`p-2 rounded-full ${
          currentPage === totalPages ? "text-gray-400" : "text-purple-700"
        }`}
      >
        <MdKeyboardArrowRight size={20} />
      </button>

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`p-2 rounded-full ${
          currentPage === totalPages ? "text-gray-400" : "text-purple-700"
        }`}
      >
        <MdKeyboardDoubleArrowRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
