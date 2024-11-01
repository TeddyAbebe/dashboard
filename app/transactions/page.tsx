import TransactionTable from "@/components/Transactions/TransactionTable";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

export default function TransactionListPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <PageHeader title="Transactions" />

      <TransactionTable />
    </div>
  );
}
