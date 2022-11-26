import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { api_key_themoviedb, fetcher } from "../../config";
import "../../scss/movie.scss";
import MovieCard from "./MovieCard";

export default function MovieList({
  heading,
  type = "now_playing",
  slidesPerView = 4,
}) {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${api_key_themoviedb}`,
    fetcher
  );
  if (error) return <div>Failed to load - {error}</div>;
  if (!data) return <div>Loading...</div>;

  const movies = data.results;
  if (movies && movies.length > 10) {
    return (
      <section className="movies-layout page-container text-white mb-10 relative">
        <div className="movie-heading flex justify-between mb-5">
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>

        <div className="movies-list text-white">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            navigation={true}
          >
            {movies &&
              movies.length > 0 &&
              movies.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <MovieCard item={item} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
    );
  }
  if (movies && movies.length > 0) {
    return (
      <section className="movies-layout page-container text-white mb-10 relative">
        <div className="movie-heading flex justify-between mb-5">
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>

        <div className="movies-list text-white">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            navigation={true}
            pagination={{ clickable: true }}
          >
            {movies &&
              movies.length > 0 &&
              movies.map((item) => {
                return (
                  <SwiperSlide id={item.id}>
                    <MovieCard item={item} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
    );
  }
}
