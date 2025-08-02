import React, { useEffect, useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";

interface SearchBarProps {
  placeholder?: string; // Optional prop for custom placeholder
}

const suggestions = [
  "Search for medicines...",
  "Search for healthcare...",
  "Search for shampoo...",
  "Search for diabetes care...",
  "Search for skin care...",
];

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!placeholder) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % suggestions.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [placeholder]); // ✅ Only depends on placeholder being undefined

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-2xl flex items-center bg-white shadow-[0_8px_30px_rgba(76,175,80,0.5)] rounded-full px-4 py-2 border border-gray-200">
        <SearchIcon className="text-gray-500" />
        <input
          type="text"
          placeholder={placeholder || suggestions[index]}
          className="flex-grow px-4 py-2 outline-none bg-transparent text-gray-700"
        />
        <button className="bg-primary-color text-white px-5 py-2 rounded-full hover:bg-primary-color-dark transition-all duration-200 text-sm lg:text-base">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
