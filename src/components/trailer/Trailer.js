import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Trailer({ trailers }) {
  if (!trailers || trailers.length === 0) return null;
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation={true}
    >
      {trailers.map((trailer) => {
        return (
          <SwiperSlide key={trailer.key}>
            <iframe
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
