import React from "react";

const InfoItem = ({ title, description, image }) => {
  // render the info item component with the passed props
  return (
    <div className="flex flex-col gap-6 text-center">
      <div className="flex-1 flex justify-center items-end">
        <img src={image} alt="" className="h-32 object-contain" />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="my-4">{description}</p>
      </div>
    </div>
  );
};

export default InfoItem;
