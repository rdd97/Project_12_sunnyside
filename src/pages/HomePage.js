import React, { useState } from "react";
import BrandsSection from "../components/BrandsSection/BrandsSection";
import Footer from "../components/Footer/Footer";
import GallerySection from "../components/GallerySection/GallerySection";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
  // activeCategory is the state variable and setActiveCategory is the function to update the state variable
  const [activeCategory, setActiveCategory] = useState("bike");
  return (
    <div>
      <div id={`main-section-${activeCategory}`} className="text-white">
        <div className="bg-[rgba(0,0,0,0.3)] min-h-[100vh]">
          <Navbar /> {/* Navbar */}
          <HeroSection
            onCategoryChange={(category) => {
              setActiveCategory(category);
            }}
          />{" "}
          {/* Hero Section */}
        </div>
      </div>
      <div className="bg-secondary text-white ">
        <div className="container py-10 lg:px-0 px-4 xxs:px-10">
          <InfoSection /> {/* Info Section */}
          <GallerySection /> {/* Gallery Section */}
          <BrandsSection /> {/* Brands Section */}
        </div>
        <Footer /> {/* Footer */}
      </div>
    </div>
  );
};

export default HomePage;
