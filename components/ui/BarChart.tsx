"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [timeFrame, setTimeFrame] = useState("Monthly");

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Transactions",
        data: [50, 30, 45, 60, 20, 30, 20, 30, 60, 30, 50, 20],
        backgroundColor: "#6b21a8",
        borderRadius: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#6b21a8",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        callbacks: {
          label: (context) => `${context.raw}K`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#6b21a8", font: { size: 12 } },
        grid: { display: false },
      },
      y: {
        ticks: {
          color: "#6b21a8",
          font: { size: 12 },
          callback: (value) => `${value}K`,
        },
        beginAtZero: true,
        grid: { color: "#e5e7eb" },
      },
    },
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between item-center p-2">
        <div className="w-1/2">
          <p>Total Transactions</p>

          <p className="text-3xl font-semibold">12,000</p>
        </div>

        <div className="flex items-center w-[10rem]">
          <select
            className="rounded-md text-sm w-full py-4 px-2"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
          >
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
      </div>

      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
