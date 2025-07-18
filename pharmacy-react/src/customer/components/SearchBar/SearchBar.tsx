import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-2xl flex items-center bg-white shadow-lg rounded-full px-4 py-2 border border-gray-300">
        <SearchIcon className="text-gray-500" />
        <input
          type="text"
          placeholder="Search for medicines, healthcare, etc."
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
