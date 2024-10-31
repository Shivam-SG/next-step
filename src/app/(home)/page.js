import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import NewsNotify from "./components/NewsNotify";
import BrowsebyCategories from "./components/BrowsebyCategories";
import HiringApply from "./components/HiringApply";
import JoboftheDay from "./components/JoboftheDay";
import Recruiter from "./components/Recruiters";
import SearchJobs from "./components/SearchJobs";
import SearchbyLocation from "./components/JobsbyLocation/SearchbyLocation";
import Blog from "./components/blogs/blogPosts";

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <BrowsebyCategories/>
      <HiringApply/>
      <JoboftheDay/>
      <SearchJobs/>
      <Recruiter/>
      <SearchbyLocation/>
      <Blog/>
      <NewsNotify/>
      <Footer/>
    </div>
  );
}

export default Home;
