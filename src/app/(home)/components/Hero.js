import Image from "next/image";
import Wave from "./wave";
import Search from "./search";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Wave Component */}
      <Wave />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="md:flex justify-between items-center mx-3 md:mx-20 mt-10 md:mt-0 w-full">
          <div className="space-y-6">
            <h1 className="text-[1.9rem] md:text-[3rem] font-bold text-white">
              Find Your <span className="text-[#29d4f3]">Dream Job</span> Today!
            </h1>

            <h2 className="md:text-2xl text-white">
              Connecting talents with top companies around the world.
            </h2>

            <div className="pt-8">
            <Search/>
            </div>
          </div>
          <div className="h-96 w-96 relative flex items-center hidden md:block">
            {/* Floating Animation for Image 1 */}
            <div className="absolute left-10 xl:-left-60 top-10 xl:-top-10 animate-float1">
              <Image
                src="/hero1.jpeg"
                alt="Hero Image 1"
                width={400}
                height={300}
                className="rounded-t-[90px] rounded-br-[90px] object-cover border-[#29d4f3] mb-4 border-l-8 border-b-8"
              />
            </div>
            {/* Floating Animation for Image 2 */}
            <div className="absolute -right-10 -bottom-10 animate-float2">
              <Image
                src="/hero2.jpeg"
                alt="Hero Image 2"
                width={300}
                height={300}
                className="rounded-t-[90px] rounded-br-[90px] border-[#29d4f3] object-cover mb-4 border-l-8 border-b-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;