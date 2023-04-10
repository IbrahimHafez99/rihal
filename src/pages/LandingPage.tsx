import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search/  ${searchQuery}`);
  };
  return (
    <main className="min-h-screen bg-hero bg-no-repeat bg-cover bg-center relative h-1">
      <div className="absolute bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 w-screen h-screen opacity-20"></div>
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
            <div className="bg-white rounded-full flex justify-between items-center p-2">
              <input
                type="text"
                className="rounded-full border-none outline-none px-4 min-w"
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
          </form>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
