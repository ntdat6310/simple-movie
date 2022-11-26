import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdb } from "../../config";
import "../../scss/movie.scss";
import FailedToLoadData from "../common/FailedToLoadData";
import Loading from "../loading/Loading";
import MovieCard from "./MovieCard";

export default function MovieList({
  heading,
  type = "now_playing",
  slidesPerView = 4,
}) {
  const { data, error } = useSWR(tmdb.getMovieList(type), fetcher);
  if (error) return <FailedToLoadData />;
  if (!data) return <Loading />;

  const movies = data.results;
  if (movies && movies.length > 0) {
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
}
