import React from "react";
import Listings from "../components/Listings/Listings";
import Navbar from "../components/Navbar/Navbar";

const ListingPage = () => {
  return (
    <div className="bg-secondary text-white">
      <Navbar />
      <Listings />
    </div>
  );
};

export default ListingPage;
