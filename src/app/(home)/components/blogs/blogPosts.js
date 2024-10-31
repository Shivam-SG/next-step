"use client";
import { useState, useRef, useEffect  } from "react";
import BlogCard from "./BlogCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const blogPosts = [
  {
    image: "/news1.png",
    category: "News",
    title: "21 Job Interview Tips: How To Make a Great Impression",
    excerpt:
      "Our mission is to create the world’s most sustainable healthcare company...",
    author: "Sarah Harding",
    authorImage: "/user1.png",
    date: "06 September",
    readTime: 8,
  },
  {
    image: "/news2.png",
    category: "Events",
    title: "39 Strengths and Weaknesses To Discuss in a Job Interview",
    excerpt:
      "Our mission is to create the world’s most sustainable healthcare company...",
    author: "Steven Jobs",
    authorImage: "/user2.png",
    date: "06 September",
    readTime: 6,
  },
  {
    image: "/news3.png",
    category: "News",
    title: "Interview Question: Why Don't You Have a Degree?",
    excerpt:
      "Learn how to respond if an interviewer asks why you don’t have a degree...",
    author: "William Kend",
    authorImage: "/user3.png",
    date: "06 September",
    readTime: 9,
  },
  {
    image: "/news1.png",
    category: "Events",
    title: "How to Ace Your Job Interview",
    excerpt: "Learn tips and tricks for acing your next job interview...",
    author: "Emily Clark",
    authorImage: "/user1.png",
    date: "06 September",
    readTime: 5,
  },
  {
    image: "/news2.png",
    category: "News",
    title: "The Future of Remote Work",
    excerpt:
      "Exploring the trends that will shape the future of remote work...",
    author: "Michael Smith",
    authorImage: "/user2.png",
    date: "06 September",
    readTime: 7,
  },
];

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(3); // Default is 3 posts per page on larger screens
  const sliderRef = useRef(null);

  useEffect(() => {
    const updatePostsPerPage = () => {
      setPostsPerPage(window.innerWidth < 768 ? 1 : 3); // 1 post for screens < 768px, 3 posts otherwise
    };

    updatePostsPerPage();
    window.addEventListener("resize", updatePostsPerPage);

    return () => window.removeEventListener("resize", updatePostsPerPage);
  }, []);

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  // Handle mouse drag events
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    sliderRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const moveX = e.clientX - startX;
    setTranslateX(moveX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderRef.current.style.cursor = "grab";

    if (translateX > 50) {
      prevPost();
    } else if (translateX < -50) {
      nextPost();
    }

    setTranslateX(0);
  };

  // Handle touch drag events
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const moveX = e.touches[0].clientX - startX;
    setTranslateX(moveX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    if (translateX > 50) {
      prevPost();
    } else if (translateX < -50) {
      nextPost();
    }

    setTranslateX(0);
  };

  return (
    <div className="mx-4 md:mx-10 lg:mx-20 xl:mx-40">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">News and Blog</h1>
        <div className="flex justify-center lg:justify-end">
          <div className="md:flex items-center justify-center md:gap-20 xl:gap-60 space-y-7 md:space-y-0">
            <p className="text-gray-600 text-lg md:text-xl">Get the latest news, updates and tips</p>
            <div className="flex items-center justify-center">
              <button onClick={prevPost} className="left-0 z-10 mr-4 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full disabled:opacity-50">
                <FaChevronLeft className="text-blue-500" />
              </button>
              <button onClick={nextPost} className="right-0 ml-4 z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full disabled:opacity-50">
                <FaChevronRight className="text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="overflow-hidden cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out mb-10"
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / postsPerPage)}% + ${translateX}px))`,
          }}
        >
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 p-4" style={{ minWidth: `${100 / postsPerPage}%` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}