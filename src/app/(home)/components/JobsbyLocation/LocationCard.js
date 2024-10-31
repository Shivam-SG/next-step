// components/LocationCard.js
import Image from "next/image";

const LocationCard = ({ label, imageUrl, location, vacancies, companies }) => {
  return (
    <div className="bg-white border rounded-xl shadow-md p-4 w-full max-w-[400px] transition ease-in-out duration-300 transform hover:scale-105 cursor-pointer">
      <div className="relative w-full h-[200px]">
        <Image
          src={imageUrl}
          alt={location}
          width={800}
          height={200}
          className="object-cover rounded-lg w-full h-full"
        />
        {label && (
          <span
            className={`absolute top-2 left-2 text-xs font-semibold ${
              label === "Hot" ? "bg-red-500" : "bg-blue-500"
            } text-white px-3 py-1 rounded-full`}
          >
            {label}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{location}</h3>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm text-gray-600">{vacancies} Vacancy</p>
          <p className="text-sm text-gray-600">{companies} companies</p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
