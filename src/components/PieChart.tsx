import React from "react";
import { Pie } from "react-chartjs-2";
import { MyObject } from "../lib/calculateStats";
type Props = {
  data: MyObject;
};
const PieChart = ({ data }: Props) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Theft rate by country",
        data: Object.values(data).map((e) => e),
      },
    ],
  };
  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
