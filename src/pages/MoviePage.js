import React from "react";
import "swiper/css";
import useSWR from "swr";
import "../scss/movie.scss";
import MovieCard from "../components/movie/MovieCard";
import { api_key_themoviedb, fetcher } from "../config";

export default function MoviePage() {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key_themoviedb}`,
    fetcher
  );
  if (error) return <div className="text-red-600">Failed to load data</div>;
  if (!data) return <div className="">Loading...</div>;

  const movies = data.results;
  return (
    <>
      <div className="search-form flex mx-5 my-5 border-4 border-slate-700 rounded-md">
        <input
          type="text"
          name=""
          id=""
          className="flex-1 text-xl px-5 py-2 outline-none bg-transparent  text-white "
          placeholder="Type to search..."
        />
        <button className="text-white py-2 px-4 bg-transparent hover:text-primary transition-all">
          <i className="fas fa-search" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 text-white px-5">
        {movies.length > 0 &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} item={movie} />;
          })}
      </div>
    </>
  );
}
