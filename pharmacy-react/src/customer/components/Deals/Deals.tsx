import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Deals: React.FC = () => {
  const products = [
    {
      name: "Vitamin C",
      image:
        "https://media.davaindia.com/davaindia/xS9TsZS3wVkp-I24BV1EX-Independence%20day%20banner%20web.jpg",
    },
    {
      name: "Protein Powder",
      image:
        "https://media.davaindia.com/davaindia/srpg0wPWkyodT8KkAigtf-Ganesh%20Chaturthi%20Banner%20date%20update.jpg",
    },
  ];

  return (
    <div className="px-0 mt-6 py-6 md:px-4">
      <div className="relative overflow-visible">
        <Swiper
          slidesPerView={1} // ek hi slide dikhani hai
          loop={true}
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border-[1.5px] border-primary-color rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 overflow-hidden w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Deals;
