import React, { useState } from "react";
import "swiper/css";
import useSWR from "swr";
import Loading from "../components/loading/Loading";
import MovieCard from "../components/movie/MovieCard";
import Pagination from "../components/pagination/Pagination";
import { fetcher, tmdb } from "../config";
import "../scss/movie.scss";

export default function MoviePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKey, setSearchKey] = useState("");
  const [url, setUrl] = useState(tmdb.getMovieList("popular", 1));

  const handleSearchInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handlePaginationClick = (newPage) => {
    if (typeof newPage !== "number") {
      throw new Error("newPage must be a number!");
    }
    setCurrentPage(newPage);

    if (searchKey === "") {
      setUrl(tmdb.getMovieList("popular", newPage));
    } else {
      setUrl(tmdb.getSearchMovie(searchKey, newPage));
    }
  };

  const handleSearchSubmit = () => {
    setCurrentPage(1);
    if (searchKey === "") {
      setUrl(tmdb.getMovieList("popular", 1));
    } else {
      setUrl(tmdb.getSearchMovie(searchKey, 1));
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
      {!data && <Loading />}

      {/* MOVIES */}
      {data && (
        <div className="grid grid-cols-4 gap-5 text-white px-5">
          {movies.length > 0 &&
            movies.map((movie) => {
              return <MovieCard key={movie.id} item={movie} />;
            })}
        </div>
      )}

      {/* PAGINATION */}
      {data && (
        <Pagination
          totalPages={data.total_pages}
          onPaginationClick={handlePaginationClick}
          currentPage={currentPage}
        />
      )}
    </>
  );
}
