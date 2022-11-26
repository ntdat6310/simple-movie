import React from "react";
import { default_img_path } from "../../config";

export default function CastCard({ cast }) {
  const { character, name, profile_path } = cast;
  if (!profile_path) console.log(cast.id);
  return (
    <div className="cast relative group">
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original/${profile_path}`
            : `${default_img_path}`
        }
        alt={cast.id}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="flex justify-center items-center rounded-b-lg opacity-0 w-full h-[100px] absolute bottom-0 bg-[rgba(0,0,0,0.8)] translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all">
        <p className="text-xl px-4 text-primary">
          {/* {character} ({name}) */}
          {name}
        </p>
      </div>
    </div>
  );
}