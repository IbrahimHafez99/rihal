import React from "react";
import { Pie } from "react-chartjs-2";
import { LocationStatsType } from "../pages/LandingPage";
type Props = {
  data: LocationStatsType;
};
const PieChart = ({ data }: Props) => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
