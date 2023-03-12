import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { onLogin } from "../../features/auth/authSlice";
import Button from "../Shared/Button/Button";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state for loading
  const [isLoading, setIsLoading] = useState(false);

  // state for phone number
  const [phoneNumber, setPhoneNumber] = useState();

  // validation schema for the form using yup
  const validationSchema = object().shape({
    firstName: string().required("First name is required"),
    lastName: string(),
    address: string(),
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

  // form submit handler function when the user clicks on the signup button
  const signupFormSubmitHandler = async (data) => {
    // set loading to true
    setIsLoading(true);
    // extract the data from the form
    const firstName = data.firstName;
    const lastName = data.lastName;
    const address = data.address;
    const email = data.email;
    const password = data.password;

    // create a signup data object
    const signupData = {
      firstName,
      lastName,
      phoneNumber,
      address,
      email,
      password,
    };

    // make a post request to the backend to signup the user
    const response = await axios
      .post(`${BACKEND_URL}/users/signup`, signupData)
      .catch((err) => {
        // if there is an error, show the error message
        toast.error(err.response.data.error);
        setIsLoading(false);
      });

    // if there is a response, dispatch the onLogin action and navigate to the home page
    if (response) {
      // dispatch the onLogin action and update the state in the redux store
      dispatch(onLogin(response.data));
      toast.success(response.data.message);
      navigate("/");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center font-[600]">Please Signup Here</h1>
      <form
        className="flex flex-col gap-3 mt-3 w-[90vw] xs:w-[80vw] md:w-[50vw] xl:w-[30vw]"
        onSubmit={handleSubmit(signupFormSubmitHandler)}
      >
        <div className="flex flex-col xs:flex-row justify-between gap-6 xs:gap-3">
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="firstName" className="text-xl font-[600]">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-xs italic text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="lastName" className="text-xl font-[600]">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
              {...register("lastName")}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber" className="text-xl font-[600]">
            Phone Number:
          </label>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="CA"
            placeholder="Enter phone number"
            className="bg-white text-black py-3 px-3 rounded-md mt-2 w-full"
            value={phoneNumber}
            onChange={setPhoneNumber}
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
            placeholder="Enter your address"
            className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
            {...register("address")}
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
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            className="py-3 px-3 rounded-md outline-none transition-all duration-300 ease-in focus:outline-primary text-black"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs italic text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button disabled={isLoading}>Signup</Button>
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
