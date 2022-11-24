import React from "react";
import { useSwiper } from "swiper/react";

export default function MovieCard() {
  const swiper = useSwiper();

  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800">
      <div className="w-full h-[250px] overflow-hidden rounded-lg">
        <img
          src="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg"
          alt=""
          className=" object-cover w-full h-full rounded-lg hover:scale-110 transition-all duration-300"
        />
      </div>
      <h3 className=" text-lg font-bold mt-3 mb-1">Spiderman: Homecoming</h3>
      <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
        <p>2017</p>
        <p onClick={() => swiper.slideNext()}>
          7.4<i className="fa-solid fa-star text-yellow-400 ml-2 "></i>
        </p>
      </div>
      <button className="bg-primary py-2 px-8 rounded-lg font-bold text-md w-full">
        Watch <i className="fa-solid fa-circle-play" />
      </button>
    </div>
  );
}
