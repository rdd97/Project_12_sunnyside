import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ListingItem = ({ title, description, image, location, price, id }) => {
  const navigate = useNavigate();

  // navigate to the detail page of the listing when the listing item is clicked
  const navigateToDetailPageHandler = () => {
    navigate(`/listing/${id}`);
  };

  return (
    <div
      className="bg-white text-secondary rounded-lg overflow-hidden cursor-pointer"
      onClick={navigateToDetailPageHandler}
    >
      <div className="w-full h-72">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="py-4 px-4">
        <h1 className="text-3xl font-[600]">{title}</h1>
        <p className="text-2xl text-primary my-1 font-[600]">Price: {price}$</p>
        <div className="flex items-center gap-2 my-2">
          <HiLocationMarker className="text-xl text-red-600" />
          <p className="text-lg">{location}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ListingItem;
