"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import MovieCard from "./MovieCard";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { SwiperNavButtons } from "../SwiperNavButton";
import "swiper/css/autoplay";
import "swiper/css";
export default function SwiperMovies({ title, data, href, children }) {
  return (
    <>
      <div className="flex justify-between mb-2 text-foreground/60">
        <h2 className="text-2xl ">{title}</h2>
        {href !== "#" ? (
          <Link
            href={href}
            className="flex items-center justify-between gap-2 text-xl group hover:text-foreground/80"
          >
            <span>see more</span>
            <MoveRight className="transition-all size-6 group-hover:translate-x-2 " />
          </Link>
        ) : (
          <></>
        )}
      </div>
      <Swiper
        modules={[Autoplay]}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          330: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {data.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          );
        })}
        <SwiperNavButtons />
      </Swiper>
    </>
  );
}
