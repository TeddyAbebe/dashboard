import React from "react";
import { MdOutlinePrint } from "react-icons/md";
import Button from "../ui/Button";

interface TransactionDetailProps {
  id: string;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ id }) => {
  return (
    <div className="px-6 py-4 flex flex-col gap-3">
      <p className="text-sm font-semibold">Transaction Details</p>

      <div className="bg-white flex items-center justify-between p-2 rounded-lg">
        <p className="font-bold text-xl">
          Transaction ID: <span>#{id}</span>
        </p>

        <Button
          label="Print Receipt"
          className="px-8 py-3 bg-[#6F018D] text-white rounded-md text-sm font-normal text-nowrap"
          icon={<MdOutlinePrint />}
        />
      </div>

      <div className="bg-white p-2 rounded-lg flex flex-col gap-3">
        <p className="font-semibold text-sm">Customer Details</p>

        <hr />

        <div className="bg-[#F8F8F8] p-2 rounded-md grid grid-cols-4 max-md:grid-cols-2 max-md:gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">Customer Name:</p>

            <h5 className="font-medium text-sm">Solomon Kebede Alemu</h5>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">Phone Number:</p>

            <h5 className="font-medium text-sm">0912458964</h5>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">Service Type:</p>

            <h5 className="font-medium text-sm">Birth</h5>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">Service Name:</p>

            <h5 className="font-medium text-sm">Current Registration</h5>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 rounded-lg flex flex-col gap-3">
        <p className="font-semibold text-sm">Transaction Details</p>

        <hr />

        <div className="bg-[#F8F8F8] p-2 rounded-md grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-2 max-md:gap-2 max-lg:gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">Transaction Date & Time:</p>

            <h5 className="font-medium text-sm">Mar 12, 2024 05:30AM</h5>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">Payment Method:</p>

            <h5 className="font-medium text-sm">CBE Birr</h5>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">Amount</p>

            <h5 className="font-medium text-sm">100</h5>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">Currency</p>

            <h5 className="font-medium text-sm">ETB</h5>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-gray-400">Status</p>

            <h5 className="font-medium text-sm bg-[#D3FCE3] w-fit text-[#35C04E] flex items-center justify-center py-1 px-2 rounded-full">
              Completed
            </h5>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 rounded-lg flex items-end justify-between text-gray-400">
        <div className="flex flex-col gap-2">
          <h6 className="font-medium">VERP</h6>

          <div>
            <p className="text-sm">Email: info@VERPcontact.com</p>

            <p className="text-sm">Phone: +251 11 557 20 80</p>
          </div>
        </div>

        <h1 className="text-3xl font-bold">VERP</h1>
      </div>
    </div>
  );
};

export default TransactionDetail;
