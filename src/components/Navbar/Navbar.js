import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Shared/Button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  // state to toggle the navbar on mobile screens
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the navbar on mobile screens
  const navbarToggleHandler = () => {
    // toggle the state of isOpen to true or false on click of the navbar toggle button
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <div className="px-6 flex justify-between items-center py-4 border-b border-b-gray-300 relative">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <h1 className="text-2xl font-[500]">Bike & Kayak</h1>
      </div>
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <BsList className="text-2xl" />
        </button>
      </div>
      <nav
        className={`flex flex-col bg-secondary items-center gap-8 fixed top-0 left-0 h-[100vh] w-full justify-center z-10 transition-all duration-200 ease-in ${
          isOpen ? "opacity-100" : "opacity-0 sm:opacity-100"
        } sm:flex-row sm:bg-transparent sm:h-auto sm:w-auto sm:static`}
      >
        <div className="absolute top-10 right-10 sm:hidden">
          <button onClick={navbarToggleHandler} className="focus:outline-none">
            <AiOutlineClose className="text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col sm:flex-row items-center gap-8">
          <li className="text-lg transition-all duration-200 ease-in hover:opacity-80">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg transition-all duration-200 ease-in hover:opacity-80">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-lg transition-all duration-200 ease-in hover:opacity-80">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <Button>List a Ride</Button>
      </nav>
    </div>
  );
};

export default Navbar;
