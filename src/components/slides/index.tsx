import { peopleAndNewsInfo } from "@/mock";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewsCard } from "../news-card";
import { useEffect, useState } from "react";

export function Slides() {
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setPageWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination]}
      navigation={pageWidth > 1279}
      pagination
      spaceBetween={37}
      breakpoints={{
        300: { slidesPerView: 1, slidesPerGroup: 1 },
        640: { slidesPerView: 2, slidesPerGroup: 2 },
        1140: { slidesPerView: 3, slidesPerGroup: 3 },
        1440: { slidesPerView: 4, slidesPerGroup: 2 },
        1770: { slidesPerView: 5, slidesPerGroup: 2 },
      }}
      centerInsufficientSlides
    >
      {peopleAndNewsInfo.map((el, index) => (
        <SwiperSlide key={index}>
          <NewsCard
            id={index.toString()}
            newsPhotoSrc={el.newsSrc}
            newsDate={el.newsDate}
            newsSubject={el.newsSubject}
            avatarSrc={el.avatarSrc}
            nameAuthor={el.name}
            newsParagraph={el.newsParagraph}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
