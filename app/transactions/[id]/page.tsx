"use client";

import TransactionDetail from "@/components/Transactions/Detail";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";
import { useParams } from "next/navigation";

const TransactionsDetail: React.FC = () => {
  const params = useParams();
  const { id } = params as { id: string };

  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <PageHeader title="Transaction Details" />

      <TransactionDetail id={id} />
    </div>
  );
};

export default TransactionsDetail;
