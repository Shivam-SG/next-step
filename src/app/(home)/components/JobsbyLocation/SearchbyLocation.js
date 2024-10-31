"use client";

import Locations from "./Locations";

const SearchbyLocation = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-40 my-10 md:my-20">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Jobs by Location
        </h1>
        <div className="flex justify-center">
          <div className="md:flex items-center justify-center md:gap-20 xl:gap-60 space-y-7 md:space-y-0">
            <p className="text-gray-600 text-lg md:text-xl">
            Find your favourite jobs and get the benefits of yourself
            </p>
          </div>
        </div>
      </div>

      <Locations/>
    </div>
  );
};

export default SearchbyLocation;
