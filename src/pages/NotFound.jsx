import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#001858] p-8">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-[#00B5B8] text-white px-6 py-3 rounded hover:bg-[#019aa0]">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
