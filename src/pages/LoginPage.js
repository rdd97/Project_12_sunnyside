import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import SimpleNavbar from "../components/SimpleNavbar/SimpleNavbar";

const LoginPage = () => {
  return (
    <div className="bg-secondary text-white h-[100vh]">
      <SimpleNavbar />
      <div className="flex justify-center items-center h-[80vh] sm:h-[70vh] p-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
