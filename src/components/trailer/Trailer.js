import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Trailer({ trailers, slidesPerView = 1 }) {
  if (!trailers || trailers.length === 0) return null;
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={slidesPerView}
      navigation={true}
    >
      {trailers.map((trailer) => {
        return (
          <SwiperSlide key={trailer.key}>
            <iframe
              width="800"
              height="480"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={`${trailer.name}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
