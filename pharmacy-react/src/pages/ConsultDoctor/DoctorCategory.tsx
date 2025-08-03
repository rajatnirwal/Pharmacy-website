import React, { useRef, useEffect } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react"; // if using lucide icons
import DoctorCategoryCard from "./DoctorCategoryCard";

const DoctorData = [
  {
    id: 1,

    image:
      "https://assets.pharmeasy.in/web-assets/images/tile_docConsultFeverSymptoms.webp",
  },
  {
    id: 2,

    image:
      "https://assets.pharmeasy.in/web-assets/images/tile_docConsultCoughColdSymptoms.webp",
  },
  {
    id: 3,

    image:
      "https://assets.pharmeasy.in/web-assets/images/tile_docConsultStomachSymptoms.webp",
  },
  {
    id: 4,

    image:
      "https://assets.pharmeasy.in/web-assets/images/tile_docConsultSkinSymptoms.webp",
  },
  {
    id: 5,

    image:
      "https://assets.pharmeasy.in/web-assets/images/tile_docConsultBodySymptoms.webp",
  },
  {
    id: 6,
    image:
      "https://assets.pharmeasy.in/web-assets/images/tile_docConsultBreathlessnessSymptoms.webp",
  },
];

const DoctorCategory = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 200,
          behavior: "smooth",
        });
      }
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative px-6 py-8 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800"></h2>
        <button className="text-sm text-blue-500 hover:underline">
          View All
        </button>
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <ChevronLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex justify-center gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-6"
        style={{ scrollBehavior: "smooth" }}
      >
        {DoctorData.map((doctor) => (
          <DoctorCategoryCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default DoctorCategory;
