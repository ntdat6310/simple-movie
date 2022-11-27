import React from "react";
import { Link } from "react-router-dom";

export default function FileNotFound() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center text-white text-3xl my-20">
      <i class="fa-solid fa-bug text-6xl" />
      <h1 className="mt-5">Page Not Found</h1>
      <p className="text-center text-gray-500 text-xl">
        We're sory, the page you requested could not be found
        <br />
        Please go back to the homepage
      </p>
      <Link to={"/"}>
        <button className="py-2 px-4 bg-primary rounded-lg opacity-80 hover:opacity-100 transition-all">
          Go Home
        </button>
      </Link>
    </div>
  );
}
