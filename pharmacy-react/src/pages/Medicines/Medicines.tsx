import React from "react";
import { Search } from "lucide-react";

// Import object instead of name array
import { healthConditionsData } from "../../assets/assets"; // Ensure this file exports the object correctly

const Medicines = () => {
  return (
    <div className="pt-16 min-h-screen w-full">
      {/* Top Banner */}
      <div
        className="relative h-[30vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1471864190281-a93a3070b6de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY2V1dGljYWx8ZW58MHx8MHx8fDA%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-8">
            Buy Medicines and Essentials
          </h1>
          <div className="flex bg-white h-14 items-center rounded-lg sm:w-[80%] lg:w-[50%] w-[90%]">
            <Search size={24} className="mx-4 text-gray-600" />
            <input
              type="text"
              placeholder="Search Medicines"
              className="outline-none bg-white text-lg flex-1"
            />
            <button className="bg-green-600 px-4 py-2 text-md text-white font-semibold rounded-lg mx-4 transition delay-150 duration-300 ease-in-out hover:bg-green-800">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Health Conditions Section */}
     <div className="w-full px-10 py-12">
  <h2 className="text-3xl font-bold mb-8 text-gray-900">
    Browse by Health Conditions
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {healthConditionsData.map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-green-200 shadow-sm shadow-green-950 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      >
        <div className="p-3 rounded-md bg-gray-100">
          <img src={item.image} alt={item.name} className="w-10 h-10" />
        </div>
        <span className="text-base font-medium text-gray-800">
          {item.name}
        </span>
      </div>
    ))}
  </div>
</div>

     <div className="w-full px-10 ">
  <h2 className="text-3xl font-bold mb-8 text-gray-900">
    Value Deals at Rs 100
  </h2>

    </div>
    </div>
  );
};

export default Medicines;