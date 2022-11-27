import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../scss/movie.scss";
import MovieCard from "./MovieCard";

export default function SimilarMovieList({ similarMovies }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      navigation={true}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1028: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
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
