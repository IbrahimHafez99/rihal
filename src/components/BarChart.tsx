import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import { MyObject } from "../lib/calculateStats";
type Props = {
  data: MyObject;
};

const BarChart = ({ data }: Props) => {
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
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
