import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import CastList from "../components/cast/CastList";
import FailedToLoadData from "../components/common/FailedToLoadData";
import Loading from "../components/loading/Loading";
import SimilarMovieList from "../components/movie/SimilarMovieList";
import Trailer from "../components/trailer/Trailer";
import { fetcher, tmdb } from "../config";
import "../scss/similar.scss";
import "../scss/trailer.scss";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const { data: movie, error: errMovie } = useSWR(
    tmdb.getMovieDetails(movieId),
    fetcher
  );

  const { data: credits, error: errCredits } = useSWR(
    tmdb.getMovieMeta(movieId, "credits"),
    fetcher
  );

  const { data: trailers, error: trailerError } = useSWR(
    tmdb.getMovieMeta(movieId, "videos"),
    fetcher
  );

  const { data: similars, error: similarError } = useSWR(
    tmdb.getMovieMeta(movieId, "similar"),
    fetcher
  );

  if (errMovie || errCredits || trailerError || similarError)
    return <FailedToLoadData />;

  if (!movie || !credits || !trailers || !similars) return <Loading />;

  const { backdrop_path, original_title, genres, overview } = movie;
  const { cast } = credits;
  return (
    // BANNER
    <div className="mt-5 mb-10 w-full">
      <div className="relative mb-[200px]">
        <div className="overlay bg-gradient-to-t from-black to-transparent w-full h-[600px] absolute inset-0 z-10"></div>

        <div
          className="w-full h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${tmdb.imageOriginal(backdrop_path)})`,
          }}
        ></div>

        <div className="w-[70%] h-[400px] lg:w-[60%] absolute z-20 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2">
          <img
            src={tmdb.imageOriginal(backdrop_path)}
            alt={movieId}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* TITLE */}
      <h1 className="text-white text-center py-10 text-xl sm:text-2xl lg:text-3xl">
        {original_title}
      </h1>

      {/* GENRE */}
      {genres.length > 0 && (
        <div className="flex flex-wrap items-center justify-center text-white gap-3 text-sm sm:text-base sm:gap-5">
          {genres.map((genre) => {
            return (
              <span
                key={genre.id}
                className="border-2 rounded-md border-primary py-2 px-4 min-w-[80px]"
              >
                {genre.name}
              </span>
            );
          })}
        </div>
      )}

      {/* OVERVIEW */}
      <p className="text-slate-300 text-center my-10 mx-auto text-sm sm:text-base w-[70%] lg:w-[60%]">
        {overview}
      </p>

      {/* CAST */}
      <CastList casts={cast} />

      {/* TRAILER */}
      <h3 className="text-center text-3xl text-white my-10">Trailers</h3>
      <div className="trailer max-w-[70%] sm:max-w-[80%] md:max-w-[70%] mx-auto relative aspect-video">
        <Trailer trailers={trailers.results} />
      </div>

      {/* SIMILAR */}
      <h3 className="text-center text-3xl text-white my-10">Similars</h3>
      <div className="similar relative text-white h-[400px] max-w-[60%] mx-auto sm:max-w-[50%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[1080px]">
        <SimilarMovieList similarMovies={similars.results} />
      </div>
    </div>
  );
}
