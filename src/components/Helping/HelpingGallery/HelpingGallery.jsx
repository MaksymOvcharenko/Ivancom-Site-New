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
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <img src={img1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="Slide 7" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HelpingGallery;
