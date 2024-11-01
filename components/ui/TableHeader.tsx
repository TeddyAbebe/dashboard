"use client";

import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { TableHeaderProps, SortConfig } from "data-table";

const TableHeader = <T,>({ columns, onSort }: TableHeaderProps<T>) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: "asc",
  });

  const handleSort = (key: keyof T) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: key as string | null, direction });
    onSort(key, direction);
  };

  return (
    <thead className="w-full">
      <tr className="bg-[#ECEDF3] text-[#6F018D] text-sm">
        <th className="pl-2">
          <input type="checkbox" />
        </th>
        {columns.map((col, index) => (
          <th
            key={String(col.key)}
            onClick={() => handleSort(col.key as keyof T)}
            className={`py-4 text-left cursor-pointer ${
              columns.length - 1 === index ? "pr-2" : ""
            }`}
          >
            <span className="flex gap-2 items-center text-nowrap">
              {col.label}
              {sortConfig.key === col.key ? (
                sortConfig.direction === "asc" ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )
              ) : null}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
