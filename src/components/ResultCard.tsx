import { Map, Marker } from "pigeon-maps";

interface ResultCardProps {
  name: string;
  description: string;
  area: string;
  date: string;
  lat: number;
  lon: number;
}

const ResultCard = ({
  name,
  description,
  area,
  date,
  lat,
  lon,
}: ResultCardProps) => {
  return (
    <div className="flex bg-white rounded-lg shadow-md my-4 overflow-hidden pl-6 cursor-pointer">
      <div className="w-2/3 p-4">
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-gray-500 mt-2">{description}</p>
        <ul className="list-none mt-4">
          <li>{date}</li>
          <li>{area}</li>
        </ul>
      </div>
      <div className="w-1/3">
        <Map
          height={200}
          defaultCenter={[lat, lon]}
          defaultZoom={5}
          mouseEvents={false}
          touchEvents={false}
        >
          <Marker width={50} anchor={[lat, lon]} />
        </Map>
      </div>
    </div>
  );
};

export default ResultCard;
