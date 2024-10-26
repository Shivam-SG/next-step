import { IoMdMailUnread } from "react-icons/io";
import Wave from "./wave";

const NewsNotify = () => {
  return (
    <div className="mx-4 md:mx-20 mt-10">
      <div className="bg-gradient-to-r from-[#0d3560] to-[#1b4b8b] rounded-3xl md:rounded-full space-y-10 py-16 px-6 shadow-xl">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center leading-relaxed">
          Stay Updated with Our Latest News & Insights
        </h1>
        <p className="text-white text-center max-w-2xl mx-auto">
          Subscribe to receive updates directly in your inbox. We promise no spam, only quality content.
        </p>

        <div className="flex justify-center">
          <div className="md:flex items-center bg-white p-4 rounded-xl md:rounded-full shadow-lg space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto max-w-lg">
            {/* Email Input */}
            <div className="flex items-center space-x-2 w-full">
              <IoMdMailUnread className="text-[#0d3560] text-2xl" />
              <input
                type="email"
                placeholder="Enter your email here..."
                className="w-full focus:outline-none bg-transparent placeholder-gray-400"
              />
            </div>

            <button className="bg-[#0053a1] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-2xl transition ease-in-out duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
              <i className="fas fa-bell"></i>
              <span>Subscribe</span>
            </button>
          </div>
        </div>

        <div className="text-center pt-8 text-white">
          <p className="text-sm italic opacity-75">Stay tuned for exciting updates!</p>
        </div>
      </div>
    </div>
  );
};

export default NewsNotify;
