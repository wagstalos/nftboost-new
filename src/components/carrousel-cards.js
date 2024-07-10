"use client";
import { useRef } from "react";
import { CardNFT } from "./card-nft";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

import Thumb01 from "@/assets/nfts/01.jpg";
import Arrow from "@/assets/arrow.svg";

export function CarrouselCards({ data }) {
  const swiperRef = useRef();

  return (
    <div className="w-full relative">
      <button
        className="w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide rounded-full hidden desktop:flex
        flex items-center justify-center absolute -left-6 z-10 top-1/2 -mt-6 
        transition-all ease-linear"
        onClick={() => {
          swiperRef.current?.slidePrev();
        }}
      >
        <Image src={Arrow} alt="Arrow previous" />
      </button>
      <Swiper
        slidesPerView={4}
        spaceBetween={33}
        speed={800}
        loop={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2.3,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        //   onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
        className="!px-3"
      >
        {data.map(({ name, thumbnail, value, value_brl, index }) => (
          <SwiperSlide key={index}>
            <CardNFT
              name={name}
              thumbnail={thumbnail}
              value={value}
              value_brl={value_brl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className="w-12 h-12 bg-blue-primary hover:bg-gray-hover-btn-slide rounded-full hidden desktop:flex
      flex items-center justify-center rotate-180 
      absolute -right-6 z-10 top-1/2 -mt-6 transition-all ease-linear"
        onClick={() => {
          swiperRef.current?.slideNext();
        }}
      >
        <Image src={Arrow} alt="Arrow previous" />
      </button>
    </div>
  );
}
