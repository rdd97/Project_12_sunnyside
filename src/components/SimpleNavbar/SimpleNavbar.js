import React from "react";
import { useNavigate } from "react-router-dom";

const SimpleNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-4 border-b border-b-gray-200">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <h1 className="text-2xl font-[500] text-white">Bike & Kayak</h1>
      </div>
    </div>
  );
};

export default SimpleNavbar;
