import React from "react";
import { Link } from "react-router-dom";
import { default_img_path, tmdb } from "../../config";

export default function MovieCard({ item }) {
  const { original_title, backdrop_path, release_date, vote_average } = item;

  return (
    <div className="movie-card  flex flex-col justify-around rounded-lg p-3 bg-slate-800 w-full h-full select-none">
      <div className="w-full h-[250px] overflow-hidden rounded-lg">
        <img
          src={
            backdrop_path
              ? `${tmdb.image500(backdrop_path)}`
              : `${default_img_path}`
          }
          alt={original_title}
          className=" object-cover w-full h-full rounded-lg hover:scale-110 transition-all duration-300"
        />
      </div>
      <h3 className=" text-lg font-bold mt-3 mb-1">{original_title}</h3>
      <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
        <p>{new Date(release_date).getFullYear()}</p>
        <p>
          {vote_average}
          <i className="fa-solid fa-star text-yellow-400 ml-2 "></i>
        </p>
      </div>
      <Link to={`/movie/${item.id}`}>
        <button className="bg-primary py-2 px-8 rounded-lg font-bold text-md w-full mt-auto">
          Watch <i className="fa-solid fa-circle-play" />
        </button>
      </Link>
    </div>
  );
}
