/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useState } from "react";
import TableHeader from "./TableHeader";
import Pagination from "./Pagination";
import { DataTableProps } from "data-table";
import Button from "./Button";
import { FaFileExport } from "react-icons/fa";
import { MdSearch } from "react-icons/md";

const DataTable = <T,>({
  columns,
  data,
  pagination,
  onSort,
}: DataTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = pagination ? pagination.rowsPerPage : data.length;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="overflow-x-scroll rounded-md flex flex-col gap-4">
      <div className="bg-white p-3 rounded-xl flex items-center justify-between gap-5">
        <div className="flex items-center bg-[#F8F8F8] px-2 gap-2 rounded-md w-1/3">
          <MdSearch className="text-[#dadada]" size={22} />

          <input
            type="text"
            placeholder="Search by name, phone number or transaction ID"
            className="w-[90%] bg-transparent outline-none py-4 text-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="font-medium">Filters:</span>
          <select className="bg-[#F8F8F8] outline-none p-4 rounded-md text-[#b1b1b1] text-sm">
            <option value="">By service type</option>
          </select>

          <select className="bg-[#F8F8F8] outline-none p-4 rounded-md text-[#b1b1b1] text-sm">
            <option value="">By status</option>
          </select>

          <input
            type="date"
            className="bg-[#F8F8F8] outline-none p-4 rounded-md text-[#b1b1b1] text-sm"
          />
        </div>

        <div className="flex items-center justify-end">
          <Button
            label="Export"
            icon={<FaFileExport />}
            className="px-8 py-3 bg-[#6F018D] text-white rounded-md"
          />
        </div>
      </div>

      <table className="w-full bg-white text-black">
        <TableHeader columns={columns} onSort={onSort} />
        <tbody className="w-full">
          {currentData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`w-full cursor-pointer text-xs ${
                rowIndex % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F6F6F9]"
              }`}
            >
              <td className="pl-3">
                <input type="checkbox" />
              </td>
              {columns.map((col, colIndex) => (
                <td
                  key={String(col.key)}
                  className={`pt-3 p-2 text-nowrap ${
                    columns.length - 1 === colIndex ? "pr-4" : ""
                  }`}
                >
                  {col.render ? col.render(row) : (row as any)[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {pagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default DataTable;
