import React from "react";
import { products } from "../../assets/assets2";
import { Filter, Star, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ValueStore = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Filter Column */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Filter className="text-green-600" size={18} /> Filters
              </h2>
              <button className="text-sm text-green-600 hover:text-green-700">
                Reset All
              </button>
            </div>

            {/* Price Filter */}


            {/* Categories Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
              <div className="space-y-2">
                {[
                  "Vitamins",
                  "Personal Care",
                  "Protective Gear",
                  "Medical Equipment",
                  "Hygiene",
                ].map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={category}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={category}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Bestsellers Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-700 mb-3">Special Offers</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="bestsellers"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="bestsellers"
                  className="ml-3 text-sm text-gray-600"
                >
                  Bestsellers Only
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Product Grid */}
        <div className="w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h2 className="text-3xl font-bold text-green-700 mb-4 sm:mb-0">
              Value Store
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-green-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Discount %</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(1,20).map((item) => (
              <NavLink to={item._id}>
              <div
                key={item._id}
                className=" cursor-pointer relative bg-white border border-gray-200 hover:border-green-500 transition duration-300 rounded-xl shadow-sm p-4 group hover:shadow-md"
              >
                {/* Discount Badge */}
                {item.offer && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md z-10">
                    {item.offer.includes("OFF") ? item.offer : `${item.offer} OFF`}
                  </span>
                )}

                {/* Bestseller Badge */}
                {item.bestseller && (
                  <span className="absolute top-2 right-2 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded-full shadow-md z-10 flex items-center">
                    <Star className="mr-1" size={12} /> Bestseller
                  </span>
                )}

                {/* Product Image */}
                <div className="relative overflow-hidden rounded-lg bg-gray-50 h-40 mb-4">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-full h-full object-contain p-4 transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-green-50 text-gray-700 hover:text-green-600">
                      <Heart size={16} />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-green-50 text-gray-700 hover:text-green-600">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-2">
                  {/* Category */}
                  <p className="text-xs text-green-600 font-medium mb-1">
                    {item.category[0]}
                  </p>

                  {/* Product Name */}
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 leading-tight">
                    {item.name.length > 50
                      ? `${item.name.substring(0, 50)}...`
                      : item.name}
                  </h3>

                  {/* Rating (placeholder) */}
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={`w-3 h-3 ${i < 4 ? "fill-current" : ""}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(42)</span>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-green-600 font-bold text-lg">
                        ₹{item.discountPrice}
                      </p>
                      <div className="text-xs text-gray-500 flex gap-1 items-center">
                        <span>MRP</span>
                        <span className="line-through">₹{item.originalPrice}</span>
                        {item.offer && (
                          <span className="ml-1 text-red-500 font-medium">
                            {item.offer.includes("OFF")
                              ? item.offer
                              : `${item.offer} OFF`}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
            ))}
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default ValueStore;