import type React from "react";
import type { PaginationProps } from "~/types";

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex gap-2 mt-8 justify-center">
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          className={`px-3 py-1 border rounded cursor-pointer hover:bg-blue-500 ${currentPage === idx + 1 ? "bg-blue-500 border-blue-600" : "border-0 text-gray-200 bg-gray-700 b transform active:scale-95"}`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
