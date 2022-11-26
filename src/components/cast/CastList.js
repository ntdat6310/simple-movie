import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../scss/cast.scss";
import CastCard from "./CastCard";

export default function CastList({ casts, slidesPerView = 3 }) {
  if (!casts || casts.length === 0) return null;

  return (
    <>
      <h3 className="text-center text-2xl text-white pb-10">Casts</h3>
      <div className="cast-list relative w-[800px] mx-auto">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          navigation={true}
        >
          {casts.map((cast) => {
            return (
              <SwiperSlide key={cast.id}>
                <CastCard cast={cast} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
