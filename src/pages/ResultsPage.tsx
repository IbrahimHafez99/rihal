import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import ResultCard from "../components/ResultCard";
import Searcher from "../components/Search";
import { BikeTheft, data } from "../dummy";

export interface FilterValues {
  location: string;
  fromDate: string;
  toDate: string;
}

const ResultsPage = () => {
  const { query = "" } = useParams();
  const navigate = useNavigate();
  const [filterValues, setFilterValues] = useState<FilterValues>({
    location: "",
    fromDate: "",
    toDate: "",
  });

  const handleFilterChange = (values: FilterValues) => {
    setFilterValues(values);
  };

  const filteredData = data.filter((item: BikeTheft) => {
    const { location, fromDate, toDate } = filterValues;
    const isLocationMatch =
      location === "" ||
      item.location.toLowerCase().includes(location.toLowerCase());
    const isDateMatch =
      (fromDate === "" || item.theftDate >= fromDate) &&
      (toDate === "" || item.theftDate <= toDate);
    const isQueryMatch =
      query === "" ||
      item.caseTitle.toLowerCase().includes(query.toLowerCase());

    return isLocationMatch && isDateMatch && isQueryMatch;
  });

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  console.log(currentData);
  return (
    <body className="bg-gray-100 min-h-screen px-36">
      <div className="flex">
        <div className="flex flex-col p-12">
          <div className="w-5/6">
            <button
              className="p-2.5 mb-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <Searcher initialValue={query} />
            <FilterBar onChange={handleFilterChange} />
            {currentData.length ? (
              <>
                {currentData.map((item, key) => (
                  <ResultCard
                    key={key}
                    name={item.caseTitle}
                    description={item.description}
                    area={item.location}
                    date={item.reportDate}
                    lat={item.latitude}
                    lon={item.longitude}
                  />
                ))}
              </>
            ) : (
              <h1 className="mt-12">No results Found</h1>
            )}
          </div>
          <div className="w-5/6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </body>
  );
};

export default ResultsPage;
