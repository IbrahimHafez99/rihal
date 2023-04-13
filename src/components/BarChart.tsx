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
import { LocationStatsType } from "../pages/LandingPage";
type Props = {
  data: LocationStatsType;
};

const BarChart = ({ data }: Props) => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
