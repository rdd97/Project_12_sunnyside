import React, { useState } from "react";
import { BsList, BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Shared/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  // state to toggle the navbar on mobile screens
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the navbar on mobile screens
  const navbarToggleHandler = () => {
    // toggle the state of isOpen to true or false on click of the navbar toggle button
    setIsOpen((prevValue) => !prevValue);
  };

  // function to logout the user and navigate to the home page on click of the logout button
  const logoutHandler = () => {
    // dispatch the onLogout action and update the state in the redux store
    dispatch(onLogout());
    navigate("/");
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
          {!isLoggedIn && (
            <li className="text-lg transition-all duration-200 ease-in hover:opacity-80">
              <Link to="/login">Login</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li className="text-lg transition-all duration-200 ease-in hover:opacity-80">
              <Link to="/signup">Signup</Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="text-lg transition-all duration-200 ease-in hover:opacity-80">
              <Link to="/profile" className="flex items-center gap-2">
                <BsPerson className="text-2xl" />
                Profile
              </Link>
            </li>
          )}
          {isLoggedIn && <Button onClick={logoutHandler}>Logout</Button>}
        </ul>
        <Button onClick={() => navigate("/listings")}>Book a Ride</Button>
      </nav>
    </div>
  );
};

export default Navbar;
