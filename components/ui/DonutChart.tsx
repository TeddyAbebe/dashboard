"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Plugin,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const DonutChart = () => {
  const data: ChartData<"doughnut"> = {
    labels: [
      "Birth",
      "Marriage",
      "Divorce",
      "Death",
      "Adoption",
      "Paternity",
      "Child Acceptance",
    ],
    datasets: [
      {
        label: "Transactions by Type",
        data: [32.5, 25, 43, 12, 18, 45, 14],
        backgroundColor: [
          "#6F018D",
          "#5F5C00",
          "#C64700",
          "#D4AD6C",
          "#005650",
          "#95ADCF",
          "#4E4351",
        ],
        hoverOffset: 15,
        borderColor: "#ffffff",
        borderWidth: 2,
        cutout: "60%",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: window.innerWidth < 768 ? "top" : "right",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
          padding: 20,
          font: { size: 12, weight: "bold" },
          color: "#4b5563",
        },
      },
      tooltip: {
        backgroundColor: "#6b21a8",
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 12 },
        padding: 10,
      },
      datalabels: {
        formatter: (value, context) => {
          const dataset = context.chart.data.datasets[context.datasetIndex];
          const total = (dataset.data as number[]).reduce(
            (acc, val) => acc + val,
            0
          );
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          return percentage;
        },
        color: "#ffffff",
        font: {
          weight: "bold",
          size: 14,
        },
        anchor: "end",
        align: "start",
      },
    },
  };

  const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerText",
    beforeDraw: (chart) => {
      const {
        ctx,
        chartArea: { top, bottom, left, right },
      } = chart;
      const centerX = (left + right) / 2;
      const centerY = (top + bottom) / 2;

      ctx.save();

      const isSmallScreen = window.innerWidth < 768;

      ctx.font = isSmallScreen ? "bold 12px Arial" : "bold 16px Arial";
      ctx.fillStyle = "#9CA3AF";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Total Transactions", centerX, centerY - 10);

      ctx.font = isSmallScreen ? "bold 18px Arial" : "bold 24px Arial";
      ctx.fillStyle = "#374151";
      ctx.fillText("20,000,000.00 ETB", centerX, centerY + 20);

      ctx.restore();
    },
  };

  return (
    <div className="w-full max-w-[550px] mx-auto h-[550px] relative">
      <Doughnut
        data={data}
        options={options}
        plugins={[
          centerTextPlugin as Plugin<"doughnut">,
          ChartDataLabels as Plugin<"doughnut">,
        ]}
      />
    </div>
  );
};

export default DonutChart;
