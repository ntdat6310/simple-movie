import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../scss/cast.scss";
import CastCard from "./CastCard";

export default function CastList({ casts }) {
  if (!casts || casts.length === 0) return null;

  return (
    <>
      <h3 className="text-center text-2xl text-white pb-10">Casts</h3>
      <div className="cast-list relative h-[400px] max-w-[60%] mx-auto sm:max-w-[50%] md:max-w-[70%] ">
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
            1280:{
              slidesPerView: 4,
            }
          }}
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
