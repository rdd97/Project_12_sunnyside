import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  // Footer component with the links and social media icons
  return (
    <div className="border-t border-t-gray-300 py-4 px-4 xxs:px-10">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-2 justify-between">
          <div>
            <h1 className="text-xl font-bold">Rent a Ride</h1>
            <ul className="flex flex-col gap-4 mt-4 text-gray-300 list">
              <li>Renter FAQ</li>
              <li>Bike Rentals</li>
              <li>Surf Rentals</li>
              <li>Snow Rentals</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold">List a Ride</h1>
            <ul className="flex flex-col gap-4 mt-4 text-gray-300 list">
              <li>Lister FAQ</li>
              <li>Bike & Kayak Gurantee</li>
              <li>Bike Shop Rental Software</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold">About</h1>
            <ul className="flex flex-col gap-4 mt-4 text-gray-300 list">
              <li>How it works</li>
              <li>Bike & Kayak Blog</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-bold">Connect</h1>
            <div className="flex flex-col gap-4 mt-4 text-gray-300 list">
              <div className="flex items-center gap-3">
                <BsTwitter /> <li>Twitter</li>
              </div>
              <div className="flex items-center gap-3">
                <BsInstagram /> <li>Instagram</li>
              </div>
              <div className="flex items-center gap-3">
                <BsFacebook /> <li>Facebook</li>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6">
          <p>&copy; 2022 Bike & Kayak - All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
