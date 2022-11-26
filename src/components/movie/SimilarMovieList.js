import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../scss/movie.scss";
import MovieCard from "./MovieCard";

export default function SimilarMovieList({ similarMovies, slidesPerView = 3 }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={slidesPerView}
      navigation={true}
    >
      {similarMovies.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <MovieCard item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
