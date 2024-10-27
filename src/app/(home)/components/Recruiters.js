"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";
import { SiHonda } from "react-icons/si";
import { TbBrandToyota } from "react-icons/tb";
import { FaPinterestSquare } from "react-icons/fa";
import { SiDailymotion } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMercedes } from "react-icons/si";
import { SiLamborghini } from "react-icons/si";
import { SiTata } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { SiSamsung } from "react-icons/si";
import { SiMsi } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const recruiters = [
  {
    logo: <FaLinkedin />,
    name: "Linkedin",
    rating: 4.8,
    reviews: 68,
    location: "New York, US",
    jobs: 25,
  },
  {
    logo: <SiAdobe className="text-red-500" />,
    name: "Adobe",
    rating: 4.2,
    reviews: 42,
    location: "New York, US",
    jobs: 17,
  },
  {
    logo: <SiDailymotion className="bg-black p-2 text-white" />,
    name: "Dailymotion",
    rating: 4.6,
    reviews: 46,
    location: "New York, US",
    jobs: 65,
  },
  {
    logo: <ImFacebook2 />,
    name: "Facebook",
    rating: 4.8,
    reviews: 68,
    location: "New York, US",
    jobs: 25,
  },
  {
    logo: <FaSquareInstagram className="text-pink-600" />,
    name: "Instagram",
    rating: 4.7,
    reviews: 87,
    location: "New York, US",
    jobs: 34,
  },
  {
    logo: <SiMercedes className="bg-black p-1 text-white rounded-md" />,
    name: "Mercedes",
    rating: 3.4,
    reviews: 34,
    location: "New York, US",
    jobs: 56,
  },
  {
    logo: <SiTata className=" text-blue-500" />,
    name: "Tata",
    rating: 4.9,
    reviews: 124,
    location: "New York, US",
    jobs: 78,
  },
  {
    logo: <FcGoogle />,
    name: "Google",
    rating: 4.5,
    reviews: 54,
    location: "New York, US",
    jobs: 98,
  },
  {
    logo: <SiSamsung />,
    name: "Samsung",
    rating: 4.6,
    reviews: 76,
    location: "New York, US",
    jobs: 9,
  },
  {
    logo: <SiHonda className="text-red-500" />,
    name: "Honda",
    rating: 4.8,
    reviews: 89,
    location: "New York, US",
    jobs: 34,
  },
  {
    logo: <TbBrandToyota className="bg-red-500 text-white rounded-md p-1" />,
    name: "Toyota",
    rating: 4.3,
    reviews: 34,
    location: "New York, US",
    jobs: 26,
  },
  {
    logo: <SiLamborghini className="bg-black text-white p-1 rounded-md" />,
    name: "Lamborghini",
    rating: 4.1,
    reviews: 27,
    location: "New York, US",
    jobs: 54,
  },
  {
    logo: <SiMsi className="bg-red-500 text-white p-1" />,
    name: "MSI",
    rating: 4.5,
    reviews: 54,
    location: "New York, US",
    jobs: 58,
  },
  {
    logo: <FaPinterestSquare className="text-red-500" />,
    name: "Pinterest",
    rating: 4.0,
    reviews: 16,
    location: "New York, US",
    jobs: 37,
  },
  {
    logo: <FaAmazon className="text-black" />,
    name: "Amazon",
    rating: 4.7,
    reviews: 97,
    location: "New York, US",
    jobs: 43,
  },
  {
    logo: <SiSamsung />,
    name: "Samsung",
    rating: 4.6,
    reviews: 76,
    location: "New York, US",
    jobs: 9,
  },
  {
    logo: <SiHonda className="text-red-500" />,
    name: "Honda",
    rating: 4.8,
    reviews: 89,
    location: "New York, US",
    jobs: 34,
  },
  {
    logo: <TbBrandToyota className="bg-red-500 text-white rounded-md p-1" />,
    name: "Toyota",
    rating: 4.3,
    reviews: 34,
    location: "New York, US",
    jobs: 26,
  },
  {
    logo: <SiLamborghini className="bg-black text-white p-1 rounded-md" />,
    name: "Lamborghini",
    rating: 4.1,
    reviews: 27,
    location: "New York, US",
    jobs: 54,
  },
  {
    logo: <SiMsi className="bg-red-500 text-white p-1" />,
    name: "MSI",
    rating: 4.5,
    reviews: 54,
    location: "New York, US",
    jobs: 58,
  },
  {
    logo: <FaPinterestSquare className="text-red-500" />,
    name: "Pinterest",
    rating: 4.0,
    reviews: 16,
    location: "New York, US",
    jobs: 37,
  },
  {
    logo: <FaAmazon className="text-black" />,
    name: "Amazon",
    rating: 4.7,
    reviews: 97,
    location: "New York, US",
    jobs: 43,
  },
  {
    logo: <FaLinkedin />,
    name: "Linkedin",
    rating: 4.8,
    reviews: 68,
    location: "New York, US",
    jobs: 25,
  },
  {
    logo: <SiAdobe className="text-red-500" />,
    name: "Adobe",
    rating: 4.2,
    reviews: 42,
    location: "New York, US",
    jobs: 17,
  },
  {
    logo: <SiDailymotion className="bg-black p-2 text-white" />,
    name: "Dailymotion",
    rating: 4.6,
    reviews: 46,
    location: "New York, US",
    jobs: 65,
  },
  {
    logo: <ImFacebook2 />,
    name: "Facebook",
    rating: 4.8,
    reviews: 68,
    location: "New York, US",
    jobs: 25,
  },
  {
    logo: <FaSquareInstagram className="text-pink-600" />,
    name: "Instagram",
    rating: 4.7,
    reviews: 87,
    location: "New York, US",
    jobs: 34,
  },
  {
    logo: <SiMercedes className="bg-black p-1 text-white rounded-md" />,
    name: "Mercedes",
    rating: 3.4,
    reviews: 34,
    location: "New York, US",
    jobs: 56,
  },
  {
    logo: <SiTata className=" text-blue-500" />,
    name: "Tata",
    rating: 4.9,
    reviews: 124,
    location: "New York, US",
    jobs: 78,
  },
  {
    logo: <FcGoogle />,
    name: "Google",
    rating: 4.5,
    reviews: 54,
    location: "New York, US",
    jobs: 98,
  },

  {
    logo: <ImFacebook2 />,
    name: "Facebook",
    rating: 4.8,
    reviews: 68,
    location: "New York, US",
    jobs: 25,
  },
  {
    logo: <FaSquareInstagram className="text-pink-600" />,
    name: "Instagram",
    rating: 4.7,
    reviews: 87,
    location: "New York, US",
    jobs: 34,
  },
  {
    logo: <SiMercedes className="bg-black p-1 text-white rounded-md" />,
    name: "Mercedes",
    rating: 3.4,
    reviews: 34,
    location: "New York, US",
    jobs: 56,
  },
  {
    logo: <SiTata className=" text-blue-500" />,
    name: "Tata",
    rating: 4.9,
    reviews: 124,
    location: "New York, US",
    jobs: 78,
  },
  {
    logo: <FcGoogle />,
    name: "Google",
    rating: 4.5,
    reviews: 54,
    location: "New York, US",
    jobs: 98,
  },

  {
    logo: <SiLamborghini className="bg-black text-white p-1 rounded-md" />,
    name: "Lamborghini",
    rating: 4.1,
    reviews: 27,
    location: "New York, US",
    jobs: 54,
  },
  {
    logo: <SiMsi className="bg-red-500 text-white p-1" />,
    name: "MSI",
    rating: 4.5,
    reviews: 54,
    location: "New York, US",
    jobs: 58,
  },
  {
    logo: <FaPinterestSquare className="text-red-500" />,
    name: "Pinterest",
    rating: 4.0,
    reviews: 16,
    location: "New York, US",
    jobs: 37,
  },
  {
    logo: <FaAmazon className="text-black" />,
    name: "Amazon",
    rating: 4.7,
    reviews: 97,
    location: "New York, US",
    jobs: 43,
  },

  {
    logo: <TbBrandToyota className="bg-red-500 text-white rounded-md p-1" />,
    name: "Toyota",
    rating: 4.3,
    reviews: 34,
    location: "New York, US",
    jobs: 26,
  },
  {
    logo: <SiLamborghini className="bg-black text-white p-1 rounded-md" />,
    name: "Lamborghini",
    rating: 4.1,
    reviews: 27,
    location: "New York, US",
    jobs: 54,
  },
  {
    logo: <SiMsi className="bg-red-500 text-white p-1" />,
    name: "MSI",
    rating: 4.5,
    reviews: 54,
    location: "New York, US",
    jobs: 58,
  },
  {
    logo: <FaPinterestSquare className="text-red-500" />,
    name: "Pinterest",
    rating: 4.0,
    reviews: 16,
    location: "New York, US",
    jobs: 37,
  },
  {
    logo: <FaAmazon className="text-black" />,
    name: "Amazon",
    rating: 4.7,
    reviews: 97,
    location: "New York, US",
    jobs: 43,
  },
  {
    logo: <FaLinkedin />,
    name: "Linkedin",
    rating: 4.8,
    reviews: 68,
    location: "New York, US",
    jobs: 25,
  },
  {
    logo: <SiMsi className="bg-red-500 text-white p-1" />,
    name: "MSI",
    rating: 4.5,
    reviews: 54,
    location: "New York, US",
    jobs: 58,
  },
  {
    logo: <FaPinterestSquare className="text-red-500" />,
    name: "Pinterest",
    rating: 4.0,
    reviews: 16,
    location: "New York, US",
    jobs: 37,
  },
  {
    logo: <FaAmazon className="text-black" />,
    name: "Amazon",
    rating: 4.7,
    reviews: 97,
    location: "New York, US",
    jobs: 43,
  },
  {
    logo: <SiSamsung />,
    name: "Samsung",
    rating: 4.6,
    reviews: 76,
    location: "New York, US",
    jobs: 9,
  },
  {
    logo: <SiHonda className="text-red-500" />,
    name: "Honda",
    rating: 4.8,
    reviews: 89,
    location: "New York, US",
    jobs: 34,
  },
];

const RecruiterCard = ({ logo, name, rating, reviews, location, jobs }) => (
  <div className="bg-white border rounded-lg space-y-4 shadow-md p-4 w-full md:min-w-[200px] hover:border-[#1b4b8b] hover:shadow-lg transition-transform transform hover:scale-105">
    <div className="flex gap-4">
      <div className="w-10 h-10 text-[3rem] text-blue-500">{logo}</div>
      <div>
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
          <span>⭐ {rating.toFixed(1)}</span>
          <span className="text-gray-500">({reviews})</span>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center gap-4">
      <p className="text-gray-500 text-xs flex gap-1 items-center">
        <CiLocationOn className="text-[1.2rem]" />
        {location}
      </p>
      <p className="text-gray-500 text-xs">{jobs} Open Jobs</p>
    </div>
  </div>
);

const Recruiter = () => {
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 640 ? 5 : 15);
    };

    updateItemsPerPage(); // Set initial value
    window.addEventListener("resize", updateItemsPerPage); // Update on resize

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(recruiters.length / itemsPerPage);
  const currentItems = recruiters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-40 my-10 md:my-20">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Top Recruiters
        </h1>
        <div className="flex justify-center lg:justify-end">
          <div className="md:flex items-center justify-center md:gap-20 xl:gap-60 space-y-7 md:space-y-0">
            <p className="text-gray-600 text-lg md:text-xl">
              Discover your next career move, freelance gig, or internship
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="left-0 z-10 mr-4 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full disabled:opacity-50"
              >
                <FaChevronLeft className="text-blue-500 mx-4" />
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="right-0 ml-4 z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full disabled:opacity-50"
              >
                <FaChevronRight className="text-blue-500 mx-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
        {currentItems.map((recruiter, index) => (
          <RecruiterCard key={index} {...recruiter} />
        ))}
      </div>
      <div className="text-center mt-4 text-gray-500">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

export default Recruiter;
