import React, { useState } from "react";
import { products } from "../../../assets/assets2"; // Make sure assets2 exports `products` properly
import { BaggageClaim } from "lucide-react";

const Medicines = () => {
      const [hoveredItems, setHoveredItems] = useState<{ [key: string]: boolean }>({});

  const handleMouseEnter = (itemId: string) => {
    setHoveredItems((prev) => ({ ...prev, [itemId]: true }));
  };

  const handleMouseLeave = (itemId: string) => {
    setHoveredItems((prev) => ({ ...prev, [itemId]: false }));
  };
  return (
    <div>
        <div className="w-full py-5 px-4 md:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {products.slice(1, 20).map((item) => (
            <div
              key={item._id}
              className="rounded-xl border border-gray-200 hover:border-green-500 transition duration-300 shadow-md bg-white"
            >
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-full h-40 object-contain mb-4 rounded-t-xl"
              />
              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.category[0]}</p>
              <p className="text-md font-bold text-green-600 mb-2">₹{item.price}</p>

              <div className="w-full flex justify-center px-4 py-3">
                <button
                  className="w-10/12 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-300 rounded-full"
                  onMouseEnter={() => handleMouseEnter(item._id)}
                  onMouseLeave={() => handleMouseLeave(item._id)}
                >
                  {hoveredItems[item._id] ? (
                    <BaggageClaim className="w-5 h-5" />
                  ) : (
                    <>Add to cart</>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Medicines