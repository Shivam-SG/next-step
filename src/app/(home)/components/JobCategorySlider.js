"use client";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const jobCategories = [
  { icon: "📊", title: "Management", jobs: "965 Jobs Available" },
  { icon: "🛍️", title: "Retail & Products", jobs: "563 Jobs Available" },
  { icon: "🔒", title: "Security Analyst", jobs: "254 Jobs Available" },
  { icon: "📄", title: "Content Writer", jobs: "142 Jobs Available" },
  { icon: "💸", title: "Finance", jobs: "168 Jobs Available" },
  { icon: "🔍", title: "Market Research", jobs: "532 Jobs Available" },
  { icon: "📊", title: "Management", jobs: "965 Jobs Available" },
  { icon: "🛍️", title: "Retail & Products", jobs: "563 Jobs Available" },
  { icon: "🔒", title: "Security Analyst", jobs: "254 Jobs Available" },
  { icon: "📄", title: "Content Writer", jobs: "142 Jobs Available" },
  { icon: "🔍", title: "Market Research", jobs: "532 Jobs Available" },
];

export default function JobCategorySlider() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const addSmoothScroll = () => {
    sliderRef.current.classList.add("smooth-scroll");
  };

  const removeSmoothScroll = () => {
    sliderRef.current.classList.remove("smooth-scroll");
  };

  const scrollLeftButton = () => {
    addSmoothScroll();
    sliderRef.current.scrollLeft -= 200;
  };

  const scrollRightButton = () => {
    addSmoothScroll();
    sliderRef.current.scrollLeft += 200;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    removeSmoothScroll();
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPosition(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    removeSmoothScroll();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startPosition) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startPosition) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex items-center overflow-hidden relative">
      <button
        onClick={scrollLeftButton}
        className="left-0 z-10 mr-4 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full"
      >
        <FaChevronLeft className="text-blue-500 mx-4" />
      </button>

      <div
        ref={sliderRef}
        className="flex gap-8 overflow-hidden whitespace-nowrap py-7"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUpOrLeave}
        onDragStart={(e) => e.preventDefault()}
        style={{ cursor: isDragging ? "grabbing" : "grab", userSelect: "none" }}
      >
        {jobCategories.map((category, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[250px] p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:border-[#1b4b8b] transition ease-in-out duration-300 transform hover:scale-110 hover:shadow-xl"
          >
            <div className="text-3xl mr-3">{category.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <p className="text-sm text-gray-500">{category.jobs}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRightButton}
        className="right-0 ml-4 z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full"
      >
        <FaChevronRight className="text-blue-500 mx-4" />
      </button>

      <style jsx>{`
        .smooth-scroll {
          scroll-behavior: smooth;
          transition: scroll-left 0.3s ease;
        }
      `}</style>
    </div>
  );
}