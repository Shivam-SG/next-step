import Image from "next/image";
import Link from "next/link";

const SearchJobs = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-20">
        <div className="relative h-[250px] md:h-[550px] md:border flex items-center justify-center">
          <Image
            src="/growth.png"
            alt="Growth Image"
            width={320}
            height={72}
            className="absolute hidden md:block -left-5 md:-left-10 -top-5 md:-top-10 rounded-3xl shadow-2xl border border-black"
          />
          <Image
            src="/chart.png"
            alt="Chart Image"
            width={320}
            height={72}
            className="absolute hidden md:block -right-5 md:-right-10 -bottom-5 md:-bottom-10 rounded-3xl shadow-2xl border border-black"
          />
          <img
            src="/right.jpeg"
            alt="Right Image"
            width={500}
            height={72}
            className="absolute w-[350px] xl:w-[500px] md:left-6 top-10 xl:left-20 md:top-20 rounded-3xl"
          />
        </div>

        <div className="text-center md:text-left md:ml-20 my-20 xl:my-10 space-y-8 md:space-y-12">
          <div>
            <h1 className="text-[1.5rem] md:text-[2rem] font-bold text-[#979494]">
              Millions Of Jobs.
            </h1>
            <h1 className="text-[2.5rem] md:text-[4rem] font-bold leading-none">
              Find The One That’s <span className="text-[#29d4f3]">Right</span>{" "}
              For You
            </h1>
          </div>

          <div className="space-y-6 md:space-y-10">
            <p className="text-lg md:text-xl leading-relaxed">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide. The right job is out there.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 items-center">
              <button className="bg-[#0053a1] hover:bg-blue-600 text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-2xl transition ease-in-out duration-300 transform hover:scale-110 hover:shadow-xl">
                Search Jobs
              </button>
              <Link href="/" className="text-[#0053a1] underline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-5 sm:mx-10 lg:mx-20 my-20 lg:my-40">
        <div className="space-y-4 text-center">
          <h1 className="text-[#0053a1] text-[2.5rem] lg:text-[4rem] font-bold">
            25K+
          </h1>
          <h1 className="text-xl lg:text-2xl font-semibold">Completed Cases</h1>
          <p className="text-[#7a7979] text-sm lg:text-base">
            We always provide people a complete solution upon focused of any
            business
          </p>
        </div>

        <div className="space-y-4 text-center">
          <h1 className="text-[#0053a1] text-[2.5rem] lg:text-[4rem] font-bold">
            17+
          </h1>
          <h1 className="text-xl lg:text-2xl font-semibold">Our Office</h1>
          <p className="text-[#7a7979] text-sm lg:text-base">
            We always provide people a complete solution upon focused of any
            business
          </p>
        </div>

        <div className="space-y-4 text-center">
          <h1 className="text-[#0053a1] text-[2.5rem] lg:text-[4rem] font-bold">
            86+
          </h1>
          <h1 className="text-xl lg:text-2xl font-semibold">Skilled People</h1>
          <p className="text-[#7a7979] text-sm lg:text-base">
            We always provide people a complete solution upon focused of any
            business
          </p>
        </div>

        <div className="space-y-4 text-center">
          <h1 className="text-[#0053a1] text-[2.5rem] lg:text-[4rem] font-bold">
            28+
          </h1>
          <h1 className="text-xl lg:text-2xl font-semibold">Happy Clients</h1>
          <p className="text-[#7a7979] text-sm lg:text-base">
            We always provide people a complete solution upon focused of any
            business
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchJobs;
