import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
const Error404 = () => {
  return (
    <div className="flex flex-col text-center p-4 md:p-0 items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-600 text-xl mb-8">
        Oops! The page you requested could not be found.
      </p>
      <Link
        to="/"
        className="flex items-center justify-center text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out"
      >
        <FiArrowLeft className="mr-2" />
        Go back to home
      </Link>
    </div>
  );
};

export default Error404;
