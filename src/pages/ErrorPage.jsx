import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import error404 from "../../assets/error-404.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <img
          src={error404}
          alt="Error illustration"
          className="w-80 mb-6"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Something Went Wrong Page Not Found
        </h1>

        <p className="text-gray-600 mb-4">
          {error?.statusText || error?.message || "Unexpected error occurred."}
        </p>

        <a
          href="/"
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-2 rounded-sm"
        >
          Go Back Home
        </a>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;