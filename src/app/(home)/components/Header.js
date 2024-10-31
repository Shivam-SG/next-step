"use client";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useEffect  } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai"; 

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isHeaderVisible, setHeaderVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scrolling down
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setHeaderVisible(true);
      }
      lastScrollY = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
    className={`bg-white shadow-md fixed top-0 left-0 w-full z-50 rounded-b-3xl md:rounded-b-full transition-transform duration-300 ${
      isHeaderVisible ? "translate-y-0" : "-translate-y-full"
    }`}
  >      <div className="container mx-auto flex justify-between items-center md:px-10">
        <div className="flex items-center">
          <Image src={"/logo.png"} alt="Logo" width={70} height={70} />
          <div className="md:hidden">
            <h1 className="text-[1.3rem] font-bold text-[#10366c]">
              Next-Step
            </h1>
          </div>
        </div>

        <nav className="md:flex space-x-8 hidden md:block">
          <Link
            href="/"
            className="font-semibold text-[#3a3636] hover:text-blue-600"
          >
            Home
          </Link>

          {/* Jobs Dropdown */}
          <div className="relative group">
            <Link
              href="#"
              className="font-semibold text-[#3a3636] hover:text-blue-600 flex items-center"
            >
              Jobs <FaAngleDown className="ml-2" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48">
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Job Categories
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Job Locations
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Job Types
              </Link>
            </div>
          </div>

          {/* Companies Dropdown */}
          <div className="relative group">
            <Link
              href="#"
              className="font-semibold text-[#3a3636] hover:text-blue-600 flex items-center"
            >
              Companies <FaAngleDown className="ml-2" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48">
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Company Listings
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Featured Companies
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Company Reviews
              </Link>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group">
            <Link
              href="#"
              className="font-semibold text-[#3a3636] hover:text-blue-600 flex items-center"
            >
              About Us <FaAngleDown className="ml-2" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48">
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Our Story
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Mission & Vision
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Leadership
              </Link>
            </div>
          </div>

          {/* Blog Dropdown */}
          <div className="relative group">
            <Link
              href="#"
              className="font-semibold text-[#3a3636] hover:text-blue-600 flex items-center"
            >
              Blog <FaAngleDown className="ml-2" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48">
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Latest Posts
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Popular Topics
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Blog Categories
              </Link>
            </div>
          </div>

          {/* Contact Dropdown */}
          <div className="relative group">
            <Link
              href="#"
              className="font-semibold text-[#3a3636] hover:text-blue-600 flex items-center"
            >
              Contact <FaAngleDown className="ml-2" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48">
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Contact Form
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Customer Support
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Office Locations
              </Link>
            </div>
          </div>
        </nav>

        <div className="space-x-4 hidden md:block">
          <button className="text-[#0053a1] font-semibold px-3 py-2 transition ease-in-out duration-300 transform hover:scale-110">
            Login
          </button>
          <button className="bg-[#0053a1] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-2xl transition ease-in-out duration-300 transform hover:scale-110 hover:shadow-xl">
            SignUp
          </button>
        </div>

        <div className="md:hidden mr-4">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#3a3636]"
          >
            <RiMenu3Fill className="text-[30px] text-[#233dbb] font-bold" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#10224b] shadow-xl transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#3a3636]"
          >
            <AiOutlineClose className="text-[30px] text-white" />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 p-4">
          <div>
            <div className="space-x-4 flex justify-center">
              <button className="bg-[#0053a1] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-2xl transition ease-in-out duration-300 transform hover:scale-110 hover:shadow-xl">
                Login
              </button>
              <button className="bg-[#0053a1] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-2xl transition ease-in-out duration-300 transform hover:scale-110 hover:shadow-xl">
                SignUp
              </button>
            </div>
          </div>

          <hr/>
          <Link
            href="/"
            className="font-semibold text-white hover:text-blue-600"
          >
            Home
          </Link>

          {/* Jobs Dropdown */}
          <div className="relative group">
            <Link
              href="#"
              className="font-semibold text-white hover:text-blue-600 flex items-center"
            >
              Jobs <FaAngleDown className="ml-2" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48">
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Job Categories
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Job Locations
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Job Types
              </Link>
            </div>
          </div>

          {/* Companies Dropdown */}
          <div className="relative group">
            <Link
              href="#"
              className="font-semibold text-white hover:text-blue-600 flex items-center"
            >
              Companies <FaAngleDown className="ml-2" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48">
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Company Listings
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Featured Companies
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Company Reviews
              </Link>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group">
            <Link
              href="#"
              className="font-semibold text-white hover:text-blue-600 flex items-center"
            >
              About Us <FaAngleDown className="ml-2" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48">
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Our Story
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Mission & Vision
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Leadership
              </Link>
            </div>
          </div>

          {/* Blog Dropdown */}
          <div className="relative group">
            <Link
              href="#"
              className="font-semibold text-white hover:text-blue-600 flex items-center"
            >
              Blog <FaAngleDown className="ml-2" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48">
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Latest Posts
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Popular Topics
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Blog Categories
              </Link>
            </div>
          </div>

          {/* Contact Dropdown */}
          <div className="relative group">
            <Link
              href="#"
              className="font-semibold text-white hover:text-blue-600 flex items-center"
            >
              Contact <FaAngleDown className="ml-2" />
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-48">
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Contact Form
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Customer Support
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-blue-100">
                Office Locations
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
