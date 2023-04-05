import { useState } from "react";
import { FilterValues } from "../pages/ResultsPage";

interface FilterBarProps {
  onChange: (values: FilterValues) => void;
}

const FilterBar = ({ onChange }: FilterBarProps) => {
  const [values, setValues] = useState<FilterValues>({
    location: "",
    fromDate: "",
    toDate: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChange(values);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof FilterValues
  ) => {
    setValues({ ...values, [key]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 mt-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 
        focus:border-purple-500 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
        dark:focus:ring-purple-500 dark:focus:border-purple-500"
      >
        <input
          type="text"
          placeholder="Location"
          value={values.location}
          className="px-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          onChange={(e) => handleInputChange(e, "location")}
        />
        <input
          type="date"
          placeholder="From Date"
          value={values.fromDate}
          className="px-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          onChange={(e) => handleInputChange(e, "fromDate")}
        />
        <input
          type="date"
          placeholder="To Date"
          value={values.toDate}
          className="px-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          onChange={(e) => handleInputChange(e, "toDate")}
        />
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-600 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <span>Filter</span>
        </button>
      </div>
    </form>
  );
};
export default FilterBar;
