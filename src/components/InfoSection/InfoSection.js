import React from "react";
import InfoItem from "./InfoItem";

import Info1 from "../../assets/info1.png";
import Info2 from "../../assets/info2.png";
import Info3 from "../../assets/info3.png";
import Button from "../Shared/Button/Button";

// data for the info section
const INFO_DATA = [
  {
    id: 1,
    title: "Find the perfect ride",
    description:
      "Search through thousands of rides all over the world for one near you. Search by city, zip code, ride type, available dates, and more.",
    image: Info1,
  },
  {
    id: 2,
    title: "Book and pay securely",
    description:
      "Book your ride in seconds and pay securely through our website, mobile app, or in-store kiosks. We offer a variety of protection options to keep you and your ride safe.",
    image: Info2,
  },
  {
    id: 3,
    title: "Pick up and ride",
    description:
      "Meet your host, pick up your ride, and enjoy your adventure. When you’re done, return the ride to the host and complete the rental process.",
    image: Info3,
  },
];

const InfoSection = () => {
  return (
    <div className="py-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">How it works</h1>
        <p className="text-xl my-4">
          Bike & Kayak helps active people connect with trusted bike owners all
          over the world
        </p>
        <p>
          Bike & Kayak is a premier bike rental and sharing service that
          provides a platform to connect bike owners with active people looking
          to rent or borrow around the world. Through our service, owners list
          their bikes, renters search for a bike in whatever area they want, and
          complete the rental process easily through our website, mobile app, or
          in-store kiosks. We even offer various protection options and delivery
          services to make everyone happy.
        </p>
      </div>
      <div className="mt-14">
        <div className="flex gap-10 items-center justify-between flex-wrap sm:flex-nowrap">
          {/* // map through the data and render the info item component for each item */}
          {INFO_DATA.map((item) => (
            <InfoItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Button className={"w-52"}>List a Ride</Button>
      </div>
    </div>
  );
};

export default InfoSection;
