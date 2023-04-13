// import { Scatter } from "react-chartjs-2";

// const data = {
//   datasets: [
//     {
//       label: "Bike Thefts",
//       data: [
//         {
//           x: 52.5392,
//           y: 13.4242,
//         },
//         {
//           x: 52.4408,
//           y: 13.4445,
//         },
//         {
//           x: 52.5166,
//           y: 13.3041,
//         },
//       ],
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   scales: {
//     x: {
//       type: "linear",
//       position: "bottom",
//     },
//   },
// };

// const BikeTheftChart = () => {
//   return <Scatter data={data} />;
// };

// export default BikeTheftChart;

import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { data } from "../dummy";
interface MyObject {
  [key: string]: any;
}

const DateLineChart = () => {
  // Group the data by month
  const groupedData = data.reduce((acc: MyObject, curr) => {
    const month = moment(curr.theftDate).format("MMM YYYY");
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += 1;
    return acc;
  }, {});

  // Extract the labels and data from the grouped data
  const labels = Object.keys(groupedData);
  const dataPoints = Object.values(groupedData);

  // Define the chart data
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

  // Define the chart options
  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return <Line data={chartData} />;
};

export default DateLineChart;
