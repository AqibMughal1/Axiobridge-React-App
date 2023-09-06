import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Whyus from "./Whyus";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Whyus />
      <Services />
    </div>
  );
};

export default Home;
