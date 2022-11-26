import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

export default function HomePage() {
  return (
    <Fragment>
      <MovieList heading={"Now Playing"} type={"now_playing"} />
      <MovieList heading={"Top rated"} type={"top_rated"} />
      <MovieList heading={"Popular"} type={"popular"} />
    </Fragment>
  );
}
