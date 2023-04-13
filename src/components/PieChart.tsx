import React from "react";
import { Pie } from "react-chartjs-2";
import { calculateStats } from "../lib/calculateStats";
type Props = {};

const PieChart = (props: Props) => {
  const { locs } = calculateStats();
  return (
    <div>
      <Pie
        data={{
          labels: Object.keys(locs),
          datasets: [
            {
              label: "Theft rate by country",
              data: Object.values(locs),
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;
