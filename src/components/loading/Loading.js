import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center gap-10 my-10">
      <div className="inline-block w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      <div className="text-white text-center text-3xl">Loading</div>
    </div>
  );
}
