import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searcher = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div className="bg-white rounded-full flex justify-between items-center p-2">
      <input
        type="text"
        className="rounded-full border-none outline-none px-4 w-full"
        placeholder="Bike"
        value={searchQuery}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(event.target.value)
        }
      />
      <button
        onClick={handleSearch}
        className="text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full px-4 py-2"
      >
        Search
      </button>
    </div>
  );
};

export default Searcher;
