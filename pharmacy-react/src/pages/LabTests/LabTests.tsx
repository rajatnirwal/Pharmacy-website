import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LabTestSlider from "../../customer/components/LabTestSlider/LabTestSlider";
import SearchBar from "../../customer/components/SearchBar/SearchBar";
import { Autoplay, Navigation } from "swiper/modules";

const LabTests: React.FC = () => {
  const testPackages = [
    {
      name: "Full Body Checkup",
      tests: 70,
      price: 1399,
      originalPrice: 2999,
    },
    {
      name: "Diabetes Package",
      tests: 5,
      price: 499,
      originalPrice: 799,
    },
    {
      name: "Vitamin Deficiency Test",
      tests: 8,
      price: 899,
      originalPrice: 1399,
    },
    {
      name: "Thyroid Test",
      tests: 4,
      price: 299,
      originalPrice: 499,
    },
    {
      name: "Liver Function Test",
      tests: 10,
      price: 699,
      originalPrice: 999,
    },
    {
      name: "Kidney Function Test",
      tests: 7,
      price: 599,
      originalPrice: 899,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      {/* Banner Slider */}
      <LabTestSlider />

      {/* Heading + Search Bar */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700">
          Book Lab Tests at Home
        </h1>
        <p className="text-gray-600 mt-2">
          Accurate reports. Free sample pickup. Trusted by 1 Lakh+ users.
        </p>
        <SearchBar placeholder="Search for test packages or individual tests" />
      </div>

      {/* Popular Test Packages Slider */}
      <div className="mb-12 bg-secondary-color rounded-xl px-4 py-6">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Popular Test Packages
        </h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
          }}
        >
          {testPackages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 rounded-xl border border-primary-color transition-all duration-300 transform hover:scale-105 hover:shadow-[0_4px_16px_0_4caf50]">
                <h3 className="text-lg font-semibold text-black">{pkg.name}</h3>
                <p className="text-sm text-black mb-2">
                  {pkg.tests} tests included
                </p>
                <div className="text-black font-bold text-md mb-4">
                  ₹{pkg.price}{" "}
                  <span className="line-through text-black/70 text-sm ml-2">
                    ₹{pkg.originalPrice}
                  </span>
                </div>
                <button className="bg-primary-color text-white px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-secondary-color">
                  Book Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Certified Partner Labs Section */}
      <div className="my-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Certified Partner Labs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              name: "PharmEasy Labs (Covid RTPCR)",
              cert: "NABL, CAP Certified",
              location: "A.K. Marg, Mumbai",
              image:
                "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/CompanyLogo/5a842a49e01d3b0887c05e9c583a688a.png",
            },
            {
              name: "PharmEasy Labs (Thyrocare powered)",
              cert: "NABL Certified",
              location: "Saki Naka, Mumbai",
              image:
                "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/CompanyLogo/5a842a49e01d3b0887c05e9c583a688a.png",
            },
            {
              name: "PharmEasy Labs (Powered by Thyrocare)",
              cert: "NABL Certified",
              location: "Girgaon, Mumbai",
              image:
                "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/CompanyLogo/5a842a49e01d3b0887c05e9c583a688a.png",
            },
          ].map((lab, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border border-transparent hover:border-secondary-color transition"
            >
              <img src={lab.image} alt={lab.name} className="h-10 mb-2" />
              <h3 className="text-md font-semibold text-gray-800">
                {lab.name}
              </h3>
              <p className="text-sm text-gray-500">{lab.cert}</p>
              <p className="text-sm text-gray-400">{lab.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Affordable Health Packages Section */}
      <div className="my-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Affordable Health Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: "Comprehensive Full Body Checkup Test with Vitamin D and B12",
              tests: "87 tests",
              price: "₹1,949 onwards",
            },
            {
              name: "Women's Advanced Healthcare Package",
              tests: "97 tests",
              price: "₹2,699 onwards",
            },
            {
              name: "Complete Heart Health Checkup",
              tests: "93 tests",
              price: "₹2,349 onwards",
            },
            {
              name: "Aarogyam Full Body Checkup with Vitamin",
              tests: "97 tests",
              price: "₹2,499 onwards",
            },
          ].map((pkg, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border hover:border-secondary-color transition"
            >
              <div className="text-3xl mb-2">❤️</div>
              <h3 className="text-sm font-medium mb-1">{pkg.name}</h3>
              <p className="text-xs text-gray-500">{pkg.tests}</p>
              <p className="text-md font-semibold text-green-700">
                {pkg.price}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* How It Works Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-transparent hover:border-secondary-color transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl mb-2">🧪</div>
            <h4 className="font-semibold text-lg">Select Your Tests</h4>
            <p className="text-sm text-gray-500">
              Choose from a wide range of lab test packages.
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">🕒</div>
            <h4 className="font-semibold text-lg">Pick Date & Time</h4>
            <p className="text-sm text-gray-500">
              Schedule your free home sample collection.
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">📄</div>
            <h4 className="font-semibold text-lg">Get Reports Online</h4>
            <p className="text-sm text-gray-500">
              Receive accurate reports within 24–48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTests;
