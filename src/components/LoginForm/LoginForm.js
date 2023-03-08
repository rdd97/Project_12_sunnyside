import React from "react";
import { Link } from "react-router-dom";
import Button from "../Shared/Button/Button";

const LoginForm = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-[600]">Please Login Here</h1>
      <form className="flex flex-col gap-6 mt-8 w-[90vw] xs:w-[80vw] md:w-[50vw] xl:w-[30vw]">
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
        <Button>Login</Button>
        <div className="text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Signup now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
