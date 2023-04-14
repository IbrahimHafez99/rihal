import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import { calculateStats } from "../lib/calculateStats";
import DateLineChart from "../components/DateLineChart";
import ChartContainer from "../components/ChartContainer";
import Searcher from "../components/Search";
export interface LocationStatsType {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
}
const LandingPage = (): JSX.Element => {
  const { locs, groupedData } = calculateStats();
  return (
    <main className="min-h-screen bg-hero bg-no-repeat bg-cover bg-center relative h-1">
      <div className="absolute bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 w-[100%] h-[100%] opacity-20"></div>
      <div className="h-full relative z-20 flex justify-center items-center">
        {/* hero */}
        <div className="flex flex-col items-center p-4 ">
          <h1 className="text-3xl md:text-6xl text-center text-white leading-relaxed">
            Don't Let Bike Theft Ruin Your Day <br /> Use Our Theft Tracker
          </h1>
          <p className="mt-10 text-sm md:text-lg text-white text-center">
            Bike theft can be a frustrating and upsetting experience,
            <br />
            especially if you rely on your bike for transportation or use it
            <br />
            for leisure activities. That's why we created our theft tracker
            <br />
            web app
          </p>
          <form className="w-full max-w-xl mt-10">
            <Searcher />
          </form>
        </div>
      </div>
      <div className="flex flex-wrap bg-[#e3e3e3] ">
        <ChartContainer
          title="Bar Chart"
          content="This is a placeholder for more explaination about the Bar Chart"
        >
          <BarChart data={locs} />
        </ChartContainer>
        <ChartContainer
          title="Line Chart"
          content="This is a placeholder for more explaination about the Line Chart"
        >
          <DateLineChart data={groupedData} />
        </ChartContainer>
        <ChartContainer
          title="Pie Chart"
          content="This is a placeholder for more explaination about the Pie Chart"
        >
          <PieChart data={locs} />
        </ChartContainer>
      </div>
    </main>
  );
};

export default LandingPage;
