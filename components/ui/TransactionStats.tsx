import Image from "next/image";

interface StatsProps {
  amount: string;
  count: number;
}

const TransactionStats: React.FC<StatsProps> = ({ amount, count }) => (
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div className="p-6 bg-white rounded-2xl shadow">
      <div className="bg-[#EFEEFF] w-20 h-20 rounded-full flex items-center justify-center mb-4">
        <Image src="/wallet.svg" alt="Transactions" width={50} height={50} />
      </div>

      <p className="w-full">Total Transaction Amount</p>

      <h2 className="text-xl sm:text-3xl font-bold">{amount} Birr</h2>
    </div>

    <div className="p-6 bg-white rounded-2xl shadow">
      <div className="bg-[#EFEEFF] w-20 h-20 rounded-full flex items-center justify-center mb-4">
        <Image src="/invoice.svg" alt="Transactions" width={50} height={50} />
      </div>

      <p className="w-full">Total Transaction Count</p>
      <h2 className="text-xl sm:text-3xl font-bold">{count} Transactions</h2>
    </div>
  </div>
);
export default TransactionStats;
