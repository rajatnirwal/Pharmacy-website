import React, { useEffect, useState } from "react";

type SearchBarProps = {
  placeholder?: string; // optional prop
};

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const [index, setIndex] = useState(0);

  // Placeholder suggestions
  const suggestions = [
    placeholder || "Search for medicines...",
    "Search for healthcare products...",
    "Search for diabetes care...",
    "Search for skin care...",
    "Search for lab tests...",
  ];

  // Rotate placeholder every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % suggestions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [suggestions.length]);

  return (
    <div
      className="w-full flex justify-center items-center py-10 bg-cover bg-center rounded-2xl"
      style={{
        backgroundColor: "#e6f7e6", // 👈 solid color background
        backgroundImage: "url('/assets/search-bg.png')", // 👈 PNG overlay
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center w-full">
        <h2 className="text-2xl font-semibold mb-6">
          Buy generic medicines online for the lowest price
        </h2>

        <div className="flex justify-center">
          <div className="flex w-[90%] sm:w-[70%] lg:w-[50%] bg-white rounded-full shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder={suggestions[index]}
              className="flex-grow px-4 py-3 outline-none text-gray-700 text-sm sm:text-base"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm sm:text-base font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Correct default export
export default SearchBar;
