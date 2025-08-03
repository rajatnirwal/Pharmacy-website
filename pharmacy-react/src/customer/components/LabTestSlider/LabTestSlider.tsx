import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const LabTestSlider: React.FC = () => {
  const products = [
    {
      name: "Vitamin C",
      image: "https://cms-contents.pharmeasy.in/banner/1f86cfad563-699A.jpg",
    },
    {
      name: "Protein Powder",
      image: "https://cms-contents.pharmeasy.in/banner/7c5efa3f228-dfdss.jpg",
    },
    {
      name: "Pain Relief Spray",
      image: "https://cms-contents.pharmeasy.in/banner/98d73c5985b-13.jpg",
    },
    {
      name: "Ayurvedic Syrup",
      image: "https://cms-contents.pharmeasy.in/banner/c9a7fe04b13-Vein.jpg",
    },
    {
      name: "Diabetic Care",
      image:
        "https://cms-contents.pharmeasy.in/banner/1aa229a7ba5-gvrgvgrfvrfvw.jpg",
    },
    {
      name: "Vitamin C",
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/f3b98abe262-Cetaphilprimarybanne.jpg",
    },
  ];

  return (
    <div className="px-4 mt-12 py-6  md:px-50">
      <div className="relative overflow-visible">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          spaceBetween={40}
          watchSlidesProgress={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "50%", //  Beech wale card ke liye
              }}
            >
              <div className="bg-white border-[1.5px] border-primary-color rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 overflow-hidden">
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

export default LabTestSlider;
