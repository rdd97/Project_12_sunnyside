import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onLogin, onLogout } from "./features/auth/authSlice";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ListingPage from "./pages/ListingPage";
import ListingDetailPage from "./pages/ListingDetailPage";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch the user data from the local storage and set it in the redux store
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    if (user && token) {
      // dispatch the action to set the user and token in the redux store
      dispatch(onLogin({ user, token }));
    } else {
      // dispatch the action to remove the user and token from the redux store
      dispatch(onLogout());
    }
  }, [dispatch]);

  return (
    // define the routes for the app here and render the appropriate component
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/listings" element={<ListingPage />} />
        <Route path="/listing/:id" element={<ListingDetailPage />} />
      </Routes>
      <div className="bg-secondary text-white pt-6">
        <Footer /> {/* Footer */}
      </div>
    </div>
  );
}

export default App;
