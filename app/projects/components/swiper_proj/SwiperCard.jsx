"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import "../../../components/ex_styles/swiperstyle/style.css";

import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';

const SwiperCard = ({ slides, onSlideChange }) => {
  return (
    <div id="app">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination, Mousewheel]}
        className="swiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        mousewheel={true}
        
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={src}
                alt={`${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
