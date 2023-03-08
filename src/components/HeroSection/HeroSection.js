import React, { useState } from "react";
import { GiDutchBike } from "react-icons/gi";
import { MdSurfing } from "react-icons/md";
import Button from "../Shared/Button/Button";

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
        <div className="flex xs:items-center gap-3 mt-10 justify-center flex-col md:flex-row">
          <div className="flex flex-col gap-3 xs:gap-[1px] xs:flex-row ">
            <input
              type="text"
              placeholder="Search for a bike"
              className="py-[17px] px-4 text-black rounded-md xs:rounded-none xs:rounded-tl-md xs:rounded-bl outline-none border-0 w-full xs:w-auto lg:w-[300px]"
            />
            <input
              type="date"
              placeholder="Pickup Date"
              className="py-4 px-4 text-black rounded-md xs:rounded-none outline-none border-0 min-w-[95%] xs:min-w-fit "
              defaultValue={new Date().toISOString().slice(0, 10)} // this will set the default date to today
            />
            <input
              type="date"
              placeholder="Return Date"
              className="py-4 px-4 text-black rounded-md xs:rounded-none xs:rounded-tr-md xs:rounded-br outline-none border-0 min-w-[95%] xs:min-w-fit"
              defaultValue={new Date(
                new Date().getTime() + 7 * 24 * 60 * 60 * 1000
              )
                .toISOString()
                .slice(0, 10)} // this will set the default date to today + 7 days
            />
          </div>
          <Button className={"py-[14px] w-full xs:w-52 mx-auto"}>Search</Button>
        </div>
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
