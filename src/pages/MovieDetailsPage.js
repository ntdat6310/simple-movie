import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import CastList from "../components/cast/CastList";
import SimilarMovieList from "../components/movie/SimilarMovieList";
import Trailer from "../components/trailer/Trailer";
import { api_key_themoviedb, fetcher } from "../config";
import "../scss/similar.scss";
import "../scss/trailer.scss";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log("movieId", movieId);
  const { data: movie, error: errMovie } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key_themoviedb}`,
    fetcher
  );

  const { data: credits, error: errCredits } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key_themoviedb}`,
    fetcher
  );

  const { data: trailers, error: trailerError } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key_themoviedb}`,
    fetcher
  );

  const { data: similars, error: similarError } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key_themoviedb}`,
    fetcher
  );

  if (errMovie || errCredits || trailerError || similarError)
    return <div>Failed to load Data</div>;

  if (!movie || !credits || !trailers || !similars)
    return <div>Loading...</div>;

  const { backdrop_path, original_title, genres, overview } = movie;
  const { cast } = credits;
  console.log("similars", similars);
  return (
    <div className="my-10">
      <div className="relative mb-[200px]">
        <div className="overlay bg-gradient-to-t from-black to-transparent w-full h-[600px] absolute inset-0 z-10"></div>

        <div
          className="banner w-full h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>

        <div className="w-[800px] h-[400px] absolute z-20 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2">
          <img
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={movieId}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>

      {/* TITLE */}
      <h1 className="text-white text-center py-10 text-3xl">
        {original_title}
      </h1>

      {/* GENRE */}
      {genres.length > 0 && (
        <div className="flex gap-5 justify-center text-white">
          {genres.map((genre) => {
            return (
              <span
                key={genre.id}
                className="border-2 rounded-md border-primary py-2 px-4"
              >
                {genre.name}
              </span>
            );
          })}
        </div>
      )}

      {/* OVERVIEW */}
      <p className="text-sm text-slate-300 max-w-[800px] mx-auto my-10">
        {overview}
      </p>

      {/* CAST */}
      <CastList casts={cast} />

      {/* TRAILER */}
      <h3 className="text-center text-3xl text-white my-10">Trailers</h3>
      <div className="trailer w-[800px] mx-auto relative aspect-video">
        <Trailer trailers={trailers.results} />
      </div>

      {/* SIMILAR */}
      <h3 className="text-center text-3xl text-white my-10">Similars</h3>
      <div className="similar w-[800px] mx-auto relative text-white">
        <SimilarMovieList similarMovies={similars.results} />
      </div>
    </div>
  );
}
