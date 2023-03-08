import React from "react";

const GalleryItem = ({ id, name }) => {
  // render the gallery item component with the passed props
  return (
    <div
      id={`gallery${id}`}
      className="h-72 flex items-end p-4 cursor-pointer transition-all duration-300 ease-in hover:opacity-80"
    >
      <a href="/" className="text-xl drop-shadow-2xl">
        {name}
      </a>
    </div>
  );
};

export default GalleryItem;
