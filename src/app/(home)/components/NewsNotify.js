'use client'
import { IoMdMailUnread } from "react-icons/io";
import Wave from "./wave";

const NewsNotify = () => {
  return (
    <div className="mx-4 md:mx-20 mt-10">
      <div className="relative bg-gradient-to-r from-[#0d3560] to-[#1b4b8b] rounded-3xl md:rounded-tl-full md:rounded-br-full space-y-10 py-16 px-6 shadow-xl">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center leading-relaxed">
          Stay Updated with Our Latest News & Insights
        </h1>
        <p className="text-white text-center max-w-2xl mx-auto">
          Subscribe to receive updates directly in your inbox. We promise no
          spam, only quality content.
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
          <p className="text-sm italic opacity-75">
            Stay tuned for exciting updates!
          </p>
        </div>

    
          <div className="absolute w-20 h-20 bg-[#abcefc] opacity-10 md:bg-[#5d93da] md:opacity-50 bottom-10 right-0 md:left-20 -rotate-12 animate-randomMovement1"></div>
          <div className="absolute w-16 h-16 bg-[#abcefc] opacity-10 md:bg-[#5d93da] md:opacity-50 bottom-20 md:bottom-40 left-10 md:left-24 -rotate-45 animate-randomMovement2"></div>
          <div className="absolute w-20 h-20 bg-[#abcefc] opacity-10 md:bg-[#5d93da] md:opacity-50 top-0 md:right-20 -rotate-12 animate-randomMovement3"></div>
          <div className="absolute w-16 h-16 bg-[#abcefc] opacity-10 md:bg-[#5d93da] md:opacity-50 top-32 right-24 -rotate-45 animate-randomMovement4"></div>
     

          <style jsx>{`
  @keyframes randomMovement1 {
    0%, 100% { transform: translate(0, 0) rotate(-12deg); }
    20% { transform: translate(20px, -20px) rotate(-20deg); }
    40% { transform: translate(-20px, 20px) rotate(-8deg); }
    60% { transform: translate(15px, -15px) rotate(-15deg); }
    80% { transform: translate(-15px, 10px) rotate(-18deg); }
  }

  @keyframes randomMovement2 {
    0%, 100% { transform: translate(0, 0) rotate(-45deg); }
    20% { transform: translate(-15px, 25px) rotate(-55deg); }
    40% { transform: translate(25px, -15px) rotate(-40deg); }
    60% { transform: translate(-10px, 15px) rotate(-50deg); }
    80% { transform: translate(10px, -10px) rotate(-48deg); }
  }

  @keyframes randomMovement3 {
    0%, 100% { transform: translate(0, 0) rotate(-12deg); }
    20% { transform: translate(18px, -18px) rotate(-15deg); }
    40% { transform: translate(-18px, 18px) rotate(-10deg); }
    60% { transform: translate(12px, -12px) rotate(-20deg); }
    80% { transform: translate(-12px, 8px) rotate(-16deg); }
  }

  @keyframes randomMovement4 {
    0%, 100% { transform: translate(0, 0) rotate(-45deg); }
    20% { transform: translate(20px, -20px) rotate(-35deg); }
    40% { transform: translate(-25px, 25px) rotate(-55deg); }
    60% { transform: translate(15px, -15px) rotate(-40deg); }
    80% { transform: translate(-10px, 10px) rotate(-52deg); }
  }

  .animate-randomMovement1 {
    animation: randomMovement1 8s ease-in-out infinite;
  }

  .animate-randomMovement2 {
    animation: randomMovement2 9s ease-in-out infinite;
  }

  .animate-randomMovement3 {
    animation: randomMovement3 7s ease-in-out infinite;
  }

  .animate-randomMovement4 {
    animation: randomMovement4 10s ease-in-out infinite;
  }
`}</style>
      </div>
    </div>
  );
};

export default NewsNotify;
