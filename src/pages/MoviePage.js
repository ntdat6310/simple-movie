import React, { useState } from "react";
import "swiper/css";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { api_key_themoviedb, fetcher } from "../config";
import "../scss/movie.scss";

export default function MoviePage() {
  const [searchKey, setSearchKey] = useState("");
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key_themoviedb}`
  );

  const handleSearchInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchKey === "") {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key_themoviedb}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key_themoviedb}&query=${searchKey}`
      );
    }
  };

  const handleEnterPress = (e) => {
    //it triggers by pressing the Enter key
    if (e.keyCode === 13) {
      handleSearchSubmit();
    }
  };

  const { data, error } = useSWR(url, fetcher);
  if (error) {
    return (
      <div className="text-white text-center text-3xl">Failed to load data</div>
    );
  }

  const movies = data?.results;
  return (
    <>
      {/* SEARCH INPUT */}
      <div className="search-form flex mx-5 my-5 border-4 border-slate-700 rounded-md">
        <input
          type="text"
          className="flex-1 text-xl px-5 py-2 outline-none bg-transparent  text-white "
          placeholder="Type to search..."
          value={searchKey}
          onKeyDown={handleEnterPress}
          onChange={handleSearchInputChange}
        />
        <button
          className="text-white py-2 px-4 bg-transparent hover:text-lg transition-all"
          onClick={handleSearchSubmit}
        >
          <i className="fas fa-search" />
        </button>
      </div>

      {/* LOADING */}
      {!data && (
        <div className="flex justify-center items-center gap-10 my-10">
          <div className="inline-block w-10 h-10 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          <div className="text-white text-center text-3xl">Loading</div>
        </div>
      )}

      {/* MOVIES */}
      {data && (
        <div className="grid grid-cols-4 gap-5 text-white px-5">
          {movies.length > 0 &&
            movies.map((movie) => {
              return <MovieCard key={movie.id} item={movie} />;
            })}
        </div>
      )}
    </>
  );
}
