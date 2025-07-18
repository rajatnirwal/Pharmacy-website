import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ProductSlider: React.FC = () => {
  const products = [
    {
      name: "Vitamin C",
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/a73d1bb5f29-24PYFIT_HP.jpg",
    },
    {
      name: "Protein Powder",
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/f3b98abe262-Cetaphilprimarybanne.jpg",
    },
    {
      name: "Pain Relief Spray",
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/ef95be9d8ca-Banner_Doc_Consult.jpg",
    },
    {
      name: "Ayurvedic Syrup",
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/60c9facf368-CCHP.jpg",
    },
    {
      name: "Diabetic Care",
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/f5adb56bdfb-BPPP.jpg",
    },
    {
      name: "Vitamin C",
      image:
        "https://cdn01.pharmeasy.in/dam/banner/banner/f3b98abe262-Cetaphilprimarybanne.jpg",
    },
  ];

  return (
    <div className="w-full py-6 px-2">
      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500, // Medium speed autoplay
          disableOnInteraction: false, // Manual interaction ke baad bhi autoplay chalu rahega
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
