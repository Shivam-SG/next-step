const HiringApply = () => {
    return (
      <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-40 2xl:mx-60">
        <div className="flex flex-col lg:flex-row bg-[#accdf5] border border-[#1f2061] justify-between items-center p-4 space-y-4 lg:space-y-0 lg:space-x-4">
          <img src="/hiring.png" alt="" className="w-20 md:w-28 lg:w-32 xl:w-40" />
  
          <div className="flex items-center text-center lg:text-left">
            <h1 className="text-[#383e44] font-bold text-[20px] md:text-[25px] lg:text-[30px] uppercase leading-7 lg:leading-10">
              We are
              <br />
              <span className="text-[#101a5c] text-[3rem] md:text-[3.5rem] lg:text-[4rem]">Hiring</span>
            </h1>
          </div>
  
          <div className="flex items-center text-center lg:text-left">
            <h1 className="text-[#383e44] text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
              Let&apos;s Work Together
              <br />
              <span> & Explore Opportunities</span>
            </h1>
          </div>
  
          <div className="flex items-center">
            <button className="bg-[#0053a1] hover:bg-blue-600 text-white font-semibold px-4 md:px-6 py-2 rounded-2xl transition ease-in-out duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
              <span>Apply Now</span>
            </button>
          </div>
  
          <img src="/hiring2.png" alt="" className="w-20 md:w-28 lg:w-32 xl:w-48" />
        </div>
      </div>
    );
  };
  
  export default HiringApply;
  