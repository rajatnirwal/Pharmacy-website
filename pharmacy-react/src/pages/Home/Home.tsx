import React from "react";
import ServiceCategory from "./ServiceCategory/ServiceCategory";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import ProductSlider from "../../customer/components/ProductSlider/ProductSlider";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Deal from "./Deal/Deal";
import { Button } from "@mui/material";
import { Storefront } from "@mui/icons-material";
import SearchBar from "../../customer/components/SearchBar/SearchBar";
import Deals from "../../customer/components/Deals/Deals";

const Home = () => {
  return (
    <div className="relative mt-[70px]">
      {/* ✅ Outer container for alignment */}
      <div className="container mx-auto px-0 space-y-4 lg:space-y-6">
        {/* Search Bar */}
        <div className="py-5 rounded-2xl">
          <SearchBar />
        </div>

        {/* Deals Slider */}
        <Deals />

        {/* Other Sections */}
        <ServiceCategory />
        <CategoryGrid />
        <ProductSlider />

        {/* TODAY'S DEAL Section */}
        <section className="pt-10">
          <h1 className="text-lg lg:text-4xl font-bold text-primary-color mb-6 text-center">
            TODAY'S DEALS
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
      </div>

      {/* Banner Section (full-width) */}
      <section className="mt-12 lg:px-20 relative h-[200px] lg:h-[450px] object-cover">
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
