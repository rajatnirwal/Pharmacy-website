import React from "react";
import ServiceCategory from "./ServiceCategory/ServiceCategory";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import ProductSlider from "../../customer/components/ProductSlider/ProductSlider";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Deal from "./Deal/Deal";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";
import SearchBar from "../../customer/components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div className="space-y-5 lg:space-y-10 relative mt-[70px]">
      {/* Search Bar */}
      <div className="bg-[#f6f6f6] py-10">
        <h2 className="text-2xl font-semibold text-center mb-5">
          What are you looking for?
        </h2>
        <SearchBar />
      </div>

      <ServiceCategory />
      <CategoryGrid />
      <ProductSlider />

      {/* TODAY'S DEAL */}
      {/* TODAY'S DEAL Section */}
      <section className="pt-10">
        <h1 className="text-lg lg:text-4xl font-bold text-primary-color mb-6 text-center">
          TODAY'S DEAL
        </h1>
        <Deal />
      </section>

      {/* SHOP BY CATEGORY Section */}
      <section className="pt-10">
        <h1 className="text-lg lg:text-4xl font-bold text-primary-color mb-6 text-center">
          SHOP BY CATEGORY
        </h1>
        <ShopByCategory />
      </section>

      {/* Banner Section */}
      <section className="lg:px-20 relative h-[200px] lg:h-[450px] object-cover">
        <img
          className="w-full h-full"
          src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold lg:text-4xl space-y-3">
          <h1>Buy any Health Product</h1>
          <p className="text-lg md:text-2xl">
            from <span className="logo">Pharma Cure</span>
          </p>
          <div className="pt-4 flex justify-center">
            <Button startIcon={<Storefront />} variant="contained" size="large">
              Buy now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
