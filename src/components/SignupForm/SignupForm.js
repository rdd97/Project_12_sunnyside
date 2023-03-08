import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button/Button";

const SignupForm = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-[600]">Please Signup Here</h1>
      <form className="flex flex-col gap-6 mt-8 w-[90vw] xs:w-[80vw] md:w-[50vw] xl:w-[30vw]">
        <div className="flex flex-col xs:flex-row justify-between gap-6 xs:gap-3">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="firstname" className="text-xl font-[600]">
              First Name:
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="lastname" className="text-xl font-[600]">
              Last Name:
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xl font-[600]">
            Phone Number:
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-xl font-[600]">
            Address:
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xl font-[600]">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xl font-[600]">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
          />
        </div>
        <Button>Signup</Button>
        <div className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
