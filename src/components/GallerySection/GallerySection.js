import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Shared/Button/Button";
import GalleryItem from "./GalleryItem";

// gallery data to be rendered
const GALLERY_DATA = [
  {
    id: 2,
    name: "Toronto",
  },
  {
    id: 3,
    name: "Quebec City",
  },
  {
    id: 4,
    name: "Vancouver",
  },
  {
    id: 5,
    name: "Calgary",
  },
  {
    id: 6,
    name: "Ottawa",
  },
  {
    id: 7,
    name: "Montreal",
  },
];

const GallerySection = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10">
      <div
        className="flex justify-between items-center py-28 px-8 rounded-lg"
        id="gallery1"
      >
        <div className="flex-1 hidden md:block"></div>
        <div className="flex-1">
          <h1 className="text-3xl">Introducing Bike & Kayak Pro</h1>
          <p className="text-xl my-4">
            Rentals, reservations, and more right on your counter.
          </p>
          <p>
            We worked closely with leading bike shops to design a system that
            seamlessly manages the rental process from start to finish.
          </p>
          <Button className={"mt-4 w-full"}>Learn More</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {/* // map through the gallery data and render the gallery item component */}
        {GALLERY_DATA.map((item) => (
          <GalleryItem key={item.id} {...item} />
        ))}
      </div>
      <div
        className="flex justify-between items-center py-20 px-20 rounded-lg text-center"
        id="gallery8"
      >
        <div className="flex-1">
          <h1 className="text-3xl">
            Make money from your under utilized bikes!
          </h1>
          <p className="my-4">
            Make extra cash by sharing your bikes with travelers, racers, and
            enthusiasts.
          </p>
          <Button onClick={() => navigate("/listings")} className={"mt-4 w-52"}>
            Book a Ride
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
