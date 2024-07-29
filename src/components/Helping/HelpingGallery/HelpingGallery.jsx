/* eslint-disable react/no-unescaped-entities */
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./HelpingGallery.module.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";

const HelpingGallery = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.heading}>
          IVANCOM годує тваринок, допомагає притулкам, купує ліки та інші
          необхідні речі
        </h2>
        <p className={s.description}>
          Ми робимо це від щирого серця, бо нам не все одно. Якщо ми маємо змогу
          допомогти – обов'язково робимо це.
        </p>
      </div>
      <Swiper
        className={s.swiper}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        freeMode={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <img
            src={img1}
            srcSet={`${img1} 320w, ${img1} 640w, ${img1} 1024w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            srcSet={`${img2} 320w, ${img2} 640w, ${img2} 1024w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            srcSet={`${img3} 320w, ${img3} 640w, ${img3} 1024w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            srcSet={`${img4} 320w, ${img4} 640w, ${img4} 1024w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="Slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            srcSet={`${img5} 320w, ${img5} 640w, ${img5} 1024w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="Slide 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img6}
            srcSet={`${img6} 320w, ${img6} 640w, ${img6} 1024w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="Slide 6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img7}
            srcSet={`${img7} 320w, ${img7} 640w, ${img7} 1024w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt="Slide 7"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HelpingGallery;
