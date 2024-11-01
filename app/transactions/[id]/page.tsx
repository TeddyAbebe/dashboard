import TransactionDetail from "@/components/Transactions/Detail";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

interface TransactionsDetailProps {
  params: {
    id: string;
  };
}

const TransactionsDetail: React.FC<TransactionsDetailProps> = ({ params }) => {
  const { id } = params;

  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <PageHeader title="Transaction Details" />

      <TransactionDetail id={id} />
    </div>
  );
};

export default TransactionsDetail;
