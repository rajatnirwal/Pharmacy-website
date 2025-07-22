import React, { useEffect, useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";

<<<<<<< HEAD
=======
interface SearchBarProps {
  placeholder?: string; // ✅ Optional prop for custom placeholder
}

>>>>>>> abhi_branch
const suggestions = [
  "Search for medicines...",
  "Search for healthcare...",
  "Search for shampoo...",
  "Search for diabetes care...",
  "Search for skin care...",
];

<<<<<<< HEAD
const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState(suggestions[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % suggestions.length);
      setPlaceholder(suggestions[(index + 1) % suggestions.length]);
    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
  }, [index]);
=======
const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const [rotatingPlaceholder, setRotatingPlaceholder] = useState(
    suggestions[0]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Only rotate if no custom placeholder is provided
    if (!placeholder) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % suggestions.length);
        setRotatingPlaceholder(suggestions[(index + 1) % suggestions.length]);
      }, 3000); // Rotate every 3 seconds

      return () => clearInterval(interval);
    }
  }, [index, placeholder]);
>>>>>>> abhi_branch

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-2xl flex items-center bg-white shadow-[0_8px_30px_rgba(76,175,80,0.5)] rounded-full px-4 py-2 border border-gray-200">
        <SearchIcon className="text-gray-500" />
        <input
          type="text"
<<<<<<< HEAD
          placeholder={placeholder}
=======
          placeholder={placeholder || rotatingPlaceholder}
>>>>>>> abhi_branch
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
