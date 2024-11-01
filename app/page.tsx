import BarChart from "@/components/ui/BarChart";
import DonutChart from "@/components/ui/DonutChart";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import TransactionStats from "@/components/ui/TransactionStats";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EFEEFF]">
      <PageHeader title="Dashboard" />

      <div className="p-10">
        <h1 className="mb-4 text-xl font-semibold">Statistical information</h1>

        <TransactionStats amount="1,000,000.00" count={12200} />

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-white flex flex-col gap-5 rounded-2xl shadow">
            <span>
              <h3 className="mb-4">Graphical Information</h3>

              <Link href={"/transactions"}>
                <Button
                  label="Transactions"
                  className="px-8 py-3 bg-[#6F018D] text-white rounded-md text-sm font-normal text-nowrap"
                />
              </Link>
            </span>

            <BarChart />
          </div>

          <div className="p-6 bg-white rounded-2xl shadow flex flex-col items-center">
            <h3 className="mb-4 w-full">Transactions in Type</h3>

            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  );
}
