import React from "react";

export default function LoadMore({ disabled = false, onClick }) {
  return (
    !disabled && (
      <button
        className="my-5 mx-auto text-white bg-primary py-2 px-5 block rounded-md"
        onClick={onClick}
      >
        Load More
      </button>
    )
  );
}
