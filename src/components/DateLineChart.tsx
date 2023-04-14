import { Line } from "react-chartjs-2";
type Props = {
  [key: string]: any;
};

const DateLineChart = ({ data }: Props) => {
  const labels = Object.keys(data);
  const dataPoints = Object.values(data);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Number of Bike Thefts",
        data: dataPoints,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default DateLineChart;
