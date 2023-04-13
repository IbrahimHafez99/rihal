import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { data } from "../dummy";
import { IoChevronBack } from "react-icons/io5";
import { Map, Marker } from "pigeon-maps";
type Props = {};

const TheftPage = (props: Props) => {
  const { id } = useParams();
  const [theft] = data.filter((theft) => theft.id === id);
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-16 w-full max-w-3xl">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <IoChevronBack /> <span className="ml-2">Back</span>
        </button>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="bg-gray-200 rounded-lg w-full md:w-1/2 h-64 md:h-auto md:mr-8">
            <div className="bg-gray-400 h-full w-full">
              <Map
                defaultCenter={[theft.latitude, theft.longitude]}
                defaultZoom={5}
                mouseEvents={false}
                touchEvents={false}
              >
                <Marker width={50} anchor={[theft.latitude, theft.longitude]} />
              </Map>
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {theft?.caseTitle}
            </h1>
            <div className="mb-4">
              <p className="text-gray-600 text-sm">{theft.description}</p>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="mr-8">
                <h3 className="text-gray-700 font-medium mb-2">Stolen Date</h3>
                <p className="text-gray-600 text-sm">{theft.theftDate}</p>
              </div>
              <div>
                <h3 className="text-gray-700 font-medium mb-2">
                  Reported Date
                </h3>
                <p className="text-gray-600 text-sm">{theft.reportDate}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-700 font-medium mb-2">Location</h3>
              <p className="text-gray-600 text-sm">{theft.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheftPage;
