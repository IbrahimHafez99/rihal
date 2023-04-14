import React, { FC } from "react";

type Props = {
  children: React.ReactElement;
  title: string;
  content: string;
};

const MainChart = ({ children, content, title }: Props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col text-left justify-center items-center">
        {children}

        <div className="p-4 self-start">
          <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-sm text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default MainChart;
