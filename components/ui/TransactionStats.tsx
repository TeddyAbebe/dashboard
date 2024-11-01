import Image from "next/image";

interface StatsProps {
  amount: string;
  count: number;
}

const TransactionStats: React.FC<StatsProps> = ({ amount, count }) => (
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div className="p-6 bg-white rounded-md shadow">
      <div className="bg-[#EFEEFF] w-20 h-20 rounded-full flex items-center justify-center">
        <Image src="/wallet.svg" alt="Transactions" width={50} height={50} />
      </div>
      <p>Total Transaction Amount</p>
      <h2 className="text-3xl font-bold">{amount} Birr</h2>
    </div>

    <div className="p-6 bg-white rounded-md shadow">
      <div className="bg-[#EFEEFF] w-20 h-20 rounded-full flex items-center justify-center">
        <Image src="/invoice.svg" alt="Transactions" width={50} height={50} />
      </div>

      <p>Total Transaction Count</p>
      <h2 className="text-3xl font-bold">{count} Transactions</h2>
    </div>
  </div>
);
export default TransactionStats;