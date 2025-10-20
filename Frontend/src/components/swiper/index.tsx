import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import image from "../../types/image";

const ImageSlider = () => {
  const images = [
    image.image1,
    image.image4,
    image.image2,
    image.image3,
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="rounded-2xl w-[200px] h-[250px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
