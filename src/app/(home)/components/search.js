import { LiaIndustrySolid } from "react-icons/lia";
import { FaLocationDot } from "react-icons/fa6";
import { VscSymbolKeyword } from "react-icons/vsc";

const Search = () => {
  return (
    <div className="md:flex items-center bg-white p-4 rounded-xl md:rounded-full shadow-md md:space-x-4 space-y-5 md:space-y-0">
      {/* Industry Dropdown */}
      <div className="flex items-center space-x-2">
        <LiaIndustrySolid />
        <select className="focus:outline-none bg-transparent">
          <option>Industry</option>
          <option>Technology</option>
          <option>Finance</option>
        </select>
      </div>

      {/* Location Dropdown */}
      <div className="flex items-center space-x-2">
        <FaLocationDot />
        <select className="focus:outline-none bg-transparent">
          <option>Location</option>
          <option>New York</option>
          <option>San Francisco</option>
        </select>
      </div>

      {/* Keyword Input */}
      <div className="flex items-center space-x-2">
        <VscSymbolKeyword />

        <input
          type="text"
          placeholder="Your keyword..."
          className="w-full focus:outline-none bg-transparent"
        />
      </div>

      {/* Search Button */}
      <button className="bg-[#0053a1] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-2xl transition ease-in-out duration-300 transform hover:scale-110 hover:shadow-xl">
        <i className="fas fa-search"></i>
        <span>Search</span>
      </button>
    </div>
  );
};

export default Search;
