import React, { useState, useEffect } from "react";
import { ImLocation } from "react-icons/im";
import { AiFillFilter } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { data } from "../dummy";
import type { BikeTheft } from "../dummy";
import { useParams } from "react-router-dom";
import ResultCard from "../components/ResultCard";
type Props = {};
type formData = {
  from: string;
  to: string;
  location: string;
};

const ResultsPage = (props: Props) => {
  const { query } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState<BikeTheft[]>();
  const [searchFilteredData, setSearchFilteredData] = useState<BikeTheft[]>(
    data.filter((e) =>
      e.caseTitle
        .split(" ")
        .map((e) => e.toLowerCase())
        .includes(query?.toLowerCase()!)
    )
  );
  const [formData, setFormData] = useState<formData>({
    from: "",
    to: "",
    location: "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  console.log("current", currentPage);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => --prev);
    }
    console.log(currentPage);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(searchFilteredData.length / 10)) {
      setCurrentPage((prev) => ++prev);
    }
    console.log(currentPage);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(formData).every((e) => e === "")) {
      setContent(searchFilteredData);
    } else {
      const filteredData =
        searchFilteredData &&
        searchFilteredData
          .filter((bike) =>
            bike.location.split(" ").includes(formData.location)
          )
          .filter((bike) => {
            if (formData.from) {
              return new Date(bike.theftDate) >= new Date(formData.from);
            }
            return bike;
          })
          .filter((bike) => {
            if (formData.to) {
              return new Date(bike.theftDate) <= new Date(formData.to);
            }
            return bike;
          });
      setContent(filteredData);
    }
  };
  return (
    <main className="min-h-screen bg-[#f1f2f8] p-2">
      <div className="w-full h-[300px] md:h-[200px] mb-4 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80"
          alt="bike"
          className="w-full h-full object-cover"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-white w-[90%] mt-[-80px] md:mt-[-50px] mx-auto relative z-10 md:rounded-full p-2 flex items-center justify-between flex-wrap rounded-lg md:gap-[1%] gap-[2%] gap-y-3 ">
          <div className="flex items-center border-r-[1px] w-[48%] md:w-[24%] border-r-slate-200 ">
            <ImLocation className="text-slate-400 mr-2 w-10" />
            <div className="flex flex-col">
              <label htmlFor="location" className="capitalize text-gray-400">
                WHERE
              </label>
              <input
                name="location"
                id="location"
                type="text"
                className="my-input focus:outline-none w-full focus:border-b-[1px]"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="flex items-center md:border-r-[1px] w-[48%] md:w-[24%] md:border-r-slate-200 ">
            <BsCalendarDate className="text-slate-400 mr-2 w-10" />
            <div className="flex flex-col">
              <label htmlFor="location" className="capitalize text-gray-400">
                FROM
              </label>
              <input
                name="from"
                max={formData.to}
                id="location"
                type="date"
                className="focus:outline-none w-full"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="flex items-center border-r-[1px] w-[48%] md:w-[24%] border-r-slate-200 ">
            <BsCalendarDate className="text-slate-400 mr-2 w-10" />
            <div className="flex flex-col">
              <label htmlFor="location" className="capitalize text-gray-400">
                TO
              </label>
              <input
                name="to"
                min={formData.from}
                id="location"
                type="date"
                className="focus:outline-none w-full"
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className="w-[48%] md:w-[24%]">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium w-full p-3 md:rounded-br-full md:rounded-tr-full transition-color duration-200"
            >
              <span className="flex items-center justify-center">
                <AiFillFilter className="mr-2" /> Filter
              </span>
            </button>
          </div>
        </div>
      </form>
      {content?.length === 0 ? (
        <h1 className="mt-5 font-medium text-xl">NO CONTENT FOUND</h1>
      ) : (
        <div className="">
          <h1 className="font-medium text-xl my-5">
            {searchFilteredData.length} Theft Founds
          </h1>
          <div className="w-[90%] flex flex-wrap justify-start items-center gap-5  mx-auto">
            {searchFilteredData
              .slice(currentPage * 10 - 10, currentPage * 10)
              .map((e) => (
                <ResultCard
                  key={e.id}
                  id={e.id}
                  name={e.caseTitle}
                  area={e.location}
                  date={e.theftDate}
                  lat={e.latitude}
                  lon={e.longitude}
                  description={e.description}
                  reported={e.reportDate}
                />
              ))}
          </div>
        </div>
      )}
      {/* pages */}

      {content?.length !== 0 && (
        <div className="flex justify-center mt-5">
          <button
            onClick={handlePrevPage}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
          <span className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            {currentPage}
          </span>
          <button
            onClick={handleNextPage}
            className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
};

export default ResultsPage;
