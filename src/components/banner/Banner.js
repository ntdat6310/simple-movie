import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdb } from "../../config";
import FailedToLoadData from "../common/FailedToLoadData";
import Loading from "../loading/Loading";

export default function Banner() {
  const { data, error } = useSWR(tmdb.getMovieList("upcoming"), fetcher);

  if (error) return <FailedToLoadData />;
  if (!data) return <Loading />;

  const movies = data?.results || [];

  return (
    <section className="banner h-[400px] bg-white page-container rounded-lg mb-10 select-none">
      <Swiper modules={[Navigation]} slidesPerView={1} navigation={true}>
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <BannerItem movie={movie} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );

  function BannerItem({ movie }) {
    return (
      <div className="banner w-full h-full rounded-lg bg-white relative">
        <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,1)] to-transparent"></div>
        <img
          src={`${tmdb.imageOriginal(movie.backdrop_path)}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute left-5 top-1/2 text-white">
          <h2 className="font-bold text-3xl mb-5">{movie.original_title}</h2>
          <div className="flex items-center gap-x-5 mb-8">
            <span className="border-2 border-white py-1 px-3 rounded-lg">
              {new Date(movie.release_date).getFullYear()}
            </span>
            <span className="border-2 border-white py-1 px-3 rounded-lg">
              {movie.vote_average}
              <i className="fa-solid fa-star text-yellow-400 ml-2 "></i>
            </span>
            {movie.adult ? (
              <span className="border-2 border-white py-1 px-3 rounded-lg">
                Adule
              </span>
            ) : null}
          </div>
          <Link to={`/movie/${movie.id}`}>
            <button className="bg-primary py-2 px-8 rounded-lg font-bold text-sm">
              Watch <i className="fa-solid fa-circle-play" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
