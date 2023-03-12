import React from "react";
import Button from "../Shared/Button/Button";

const SearchBar = () => {
  return (
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
          defaultValue={new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(0, 10)} // this will set the default date to today + 7 days
        />
      </div>
      <Button className={"py-[14px] w-full xs:w-52 mx-auto"}>Search</Button>
    </div>
  );
};

export default SearchBar;
