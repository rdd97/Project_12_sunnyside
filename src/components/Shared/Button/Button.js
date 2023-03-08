import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    // shared button component with default styles and props
    <button
      className={`bg-primary px-4 py-2 text-white rounded-md transition-all duration-300 ease-in-out hover:opacity-90 text-lg ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
