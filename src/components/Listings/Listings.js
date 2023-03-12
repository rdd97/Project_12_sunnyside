import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ListingItem from "./ListingItem";

import Image from "../../assets/bikes.jpg";

// dummy data for the listings
const DUMMY_DATA = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    price: 89,
    location: "Location",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: Image,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    price: 89,
    location: "Location",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: Image,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    price: 89,
    location: "Location",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: Image,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit",
    price: 89,
    location: "Location",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: Image,
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit",
    price: 89,
    location: "Location",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: Image,
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit",
    price: 89,
    location: "Location",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: Image,
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit",
    price: 89,
    location: "Location",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: Image,
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit",
    price: 89,
    location: "Location",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: Image,
  },
];

const Listings = () => {
  return (
    <div>
      <div className="sm:w-fit mx-auto py-6 px-6">
        <SearchBar />
      </div>
      <div className="px-6 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-[600]">Listings</h1>
          <p className="text-xl font-[600]">190 results</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-6">
          {/* map through the dummy data and render the listing item component */}
          {DUMMY_DATA.map((item) => (
            <ListingItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              location={item.location}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listings;
