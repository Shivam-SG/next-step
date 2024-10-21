import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrowsebyCategories from "./BrowsebyCategories/page";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <BrowsebyCategories/>
      <Footer/>
    </div>
  );
}

export default Home;
