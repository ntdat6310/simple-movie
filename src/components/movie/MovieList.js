import React from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../scss/movie.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";

export default function MovieList({ title }) {
  return (
    <section className="movies-layout page-container text-white mb-10 relative">
      <div className="movie-heading flex justify-between mb-5">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="movies-list text-white">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          navigation={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
