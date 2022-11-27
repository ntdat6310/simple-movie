import React, { useState } from "react";
import "swiper/css";
import useSWRInfinite from "swr/infinite";
import FailedToLoadData from "../components/common/FailedToLoadData";
import Loading from "../components/loading/Loading";
import LoadMore from "../components/loadMore/LoadMore";
import MovieCard from "../components/movie/MovieCard";
import { fetcher, tmdb } from "../config";
import "../scss/movie.scss";

const PAGE_SIZE = 20;

export default function MoviePageV2() {
  const [searchKey, setSearchKey] = useState("");

  const { data, error, size, setSize } = useSWRInfinite((pageIndex) => {
    if (searchKey === "") {
      return tmdb.getMovieList("popular", pageIndex + 1);
    }
    return tmdb.getSearchMovie(searchKey, pageIndex + 1);
  }, fetcher);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.results?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1].results.length < PAGE_SIZE);

  const handleSearchInputChange = (e) => {
    setSearchKey(e.target.value);
  };

  if (error) return <FailedToLoadData />;

  const movies = [];
  if (data) {
    data.forEach((arr) => {
      arr.results.forEach((movie) => {
        movies.push(movie);
      });
    });
  }
  // console.log("movies ~ ", movies);
  const handleLoadMore = () => {
    setSize(size + 1);
  };

  return (
    <>
      {/* SEARCH INPUT */}
      <div className="search-form flex mx-5 my-5 border-4 border-slate-700 rounded-md">
        <input
          type="text"
          className="flex-1 text-xl px-5 py-2 outline-none bg-transparent  text-white "
          placeholder="Type to search..."
          value={searchKey}
          onChange={handleSearchInputChange}
        />
        <button className="text-white py-2 px-4 bg-transparent hover:text-lg transition-all">
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

      {/* LOAD MORE */}
      {isLoadingMore ? (
        <Loading />
      ) : (
        <LoadMore disabled={isReachingEnd} onClick={handleLoadMore} />
      )}
    </>
  );
}
