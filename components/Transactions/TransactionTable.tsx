"use client";

import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
import transactions from "@/data/transactions";
import DataTable from "../ui/DataTable";
import { Column, Transaction } from "data-table";

const TransactionTable: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<Transaction[]>(transactions);

  const columns: Column<Transaction>[] = [
    {
      key: "transactionId",
      label: "Transaction ID",
      render: (row) => `# ${row.transactionId}`,
    },
    { key: "dateTime", label: "Date & Time" },
    { key: "customerName", label: "Customer Name" },
    { key: "phoneNumber", label: "Phone Number" },
    { key: "paymentMethod", label: "Payment Method" },
    { key: "serviceType", label: "Service Type" },
    { key: "serviceName", label: "Service Name" },
    {
      key: "amount",
      label: "Amount",
      render: (row) => `${row.amount}.00 Birr`,
    },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <div className="bg-[#D3FCE3] text-[#35C04E] flex items-center justify-center p-1 rounded-full">
          {row.status}
        </div>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div
          className="bg-[#D5D6E3] text-[#6F018D] flex items-center justify-center w-10 h-10 hover:bg-[#b1b2b3] rounded-md"
          onClick={() => router.push(`/transactions/${row.transactionId}`)}
        >
          <AiFillEye size={18} />
        </div>
      ),
    },
  ];

  const handleSort = (key: keyof Transaction, direction: "asc" | "desc") => {
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
  };

  return (
    <div className="px-6 py-4 flex flex-col gap-2">
      <p className="text-sm font-medium">Transaction List</p>

      <DataTable
        columns={columns}
        data={data}
        pagination={{ rowsPerPage: 10 }}
        onSort={handleSort}
      />
    </div>
  );
};

export default TransactionTable;
