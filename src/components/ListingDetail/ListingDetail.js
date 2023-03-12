import React from "react";
import { HiLocationMarker } from "react-icons/hi";

import Image from "../../assets/bikes.jpg";
import Button from "../Shared/Button/Button";

const ListingDetail = ({ id }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font=[600]">Listing Details of {id}</h1>
      <div className="my-10 flex flex-col lg:flex-row justify-center gap-8">
        <div className="flex-1">
          <img src={Image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl xs:text-5xl font-[600]">
            Lorem ipsum dolor sit
          </h1>
          <p className="text-2xl xs:text-3xl text-primary my-4 font-[600]">
            Price: 89$
          </p>
          <div className="flex items-center gap-2 my-4">
            <HiLocationMarker className="text-3xl text-red-600" />
            <p className="text-2xl">Location</p>
          </div>
          <p className="text-lg my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            pariatur eaque reprehenderit officiis quis omnis impedit voluptatem
            autem? Dolorem debitis eveniet veritatis vitae, quam ducimus, ipsam
            maiores vel, doloribus esse incidunt sapiente?
          </p>
          <p className="text-lg my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            pariatur eaque reprehenderit officiis quis omnis impedit voluptatem
            autem? Dolorem debitis eveniet veritatis vitae, quam ducimus, ipsam
            maiores vel, doloribus esse incidunt sapiente?
          </p>
          <Button className="my-4 w-full">Book the ride</Button>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
