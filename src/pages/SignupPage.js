import React from "react";
import SignupForm from "../components/SignupForm/SignupForm";
import SimpleNavbar from "../components/SimpleNavbar/SimpleNavbar";

const SignupPage = () => {
  return (
    <div className="bg-secondary text-white h-full">
      <SimpleNavbar />
      <div className="flex justify-center items-center p-4 mt-8">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
