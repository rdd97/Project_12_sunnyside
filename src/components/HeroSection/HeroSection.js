import React, { useState } from "react";
import { GiDutchBike } from "react-icons/gi";
import { MdSurfing } from "react-icons/md";
import SearchBar from "../SearchBar/SearchBar";

const HeroSection = ({ onCategoryChange }) => {
  // use state to keep track of the active category (bike or surf)
  const [activeCategory, setActiveCategory] = useState("bike");

  // handle category change and update the active category state and call the onCategoryChange function
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="py-4 min-h-[95vh] xxs:min-h-[85vh] sm:min-h-[70vh] flex justify-center items-center px-6">
      <div>
        <h1 className="text-center text-5xl font-bold">
          Rent a bike any where in the world
        </h1>
        <p className="text-center text-xl my-6 font-semibold">
          Save money, meet awesome people, and consume less
        </p>
        <SearchBar />
        <div className="flex justify-center items-center gap-8 flex-wrap xs:gap-20 mt-14">
          <button
            className="flex items-center text-xl gap-2"
            onClick={() => handleCategoryChange("bike")}
          >
            <span
              className={`border border-white p-3 rounded-full ${
                activeCategory === "bike" ? "bg-white text-black" : "" // if active category is bike then add bg-white and text-black
              } `}
            >
              <GiDutchBike className="text-3xl" />
            </span>
            Bikes
          </button>
          <button
            className="flex items-center text-xl gap-2"
            onClick={() => handleCategoryChange("surf")}
          >
            <span
              className={`border border-white p-3 rounded-full ${
                activeCategory === "surf" ? "bg-white text-black" : "" // if active category is surf then add bg-white and text-black
              } `}
            >
              <MdSurfing className="text-3xl" />
            </span>
            Surf
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
