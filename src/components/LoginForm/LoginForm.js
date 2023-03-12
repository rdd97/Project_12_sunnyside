import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Shared/Button/Button";
import { toast } from "react-toastify";
import { onLogin } from "../../features/auth/authSlice";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state for loading
  const [isLoading, setIsLoading] = useState(false);

  // validation schema for the form using yup
  const validationSchema = object().shape({
    email: string()
      .required("Email is required")
      .email("Invalid email address"),
    password: string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // form submit handler function when the user clicks on the login button
  const loginFormSubmitHandler = async (data) => {
    // set loading to true
    setIsLoading(true);
    // get the email and password from the form data
    const email = data.email;
    const password = data.password;

    // create a login data object
    const loginData = {
      email,
      password,
    };

    // make a post request to the backend to login the user
    const response = await axios
      .post(`${BACKEND_URL}/users/login`, loginData)
      .catch((err) => {
        // if there is an error, show the error message
        toast.error(err.response.data.error);
        setIsLoading(false);
      });

    // if there is a response, dispatch the onLogin action and navigate to the home page
    if (response) {
      // dispatch the onLogin action to update the redux store
      dispatch(onLogin(response.data));
      toast.success(response.data.message);
      navigate("/");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-[600]">Please Login Here</h1>
      <form
        className="flex flex-col gap-6 mt-8 w-[90vw] xs:w-[80vw] md:w-[50vw] xl:w-[30vw]"
        onSubmit={handleSubmit(loginFormSubmitHandler)}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xl font-[600]">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs italic text-red-500">
              {errors.email.message}
            </p>
          )}
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
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs italic text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button disabled={isLoading}>Login</Button>
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
