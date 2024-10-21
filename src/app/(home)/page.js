import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrowsebyCategories from "./BrowsebyCategories/page";

function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <BrowsebyCategories/>
    </div>
  );
}

export default Home;
