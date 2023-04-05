import Searcher from "../components/Search";

const LandingPage = (): JSX.Element => {
  return (
    <body className="bg-gray-100 min-h-screen">
      <nav className="flex justify-between p-4 text-2xl border-l">
        <div>Google For Cyclists</div>
      </nav>
      <main className="flex flex-col items-center justify-center ">
        <img
          src="./bike.png"
          alt="Bike image"
          className="mb-4 mt-36"
          style={{ width: "15%" }}
        />
        <Searcher />
      </main>
    </body>
  );
};

export default LandingPage;
