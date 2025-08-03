import React from "react";
import DoctorCategory from "./DoctorCategory";

interface DoctorCategoryCardProps {
  doctor: {
    id: number;
    image: string;
  };
}

const DoctorCategoryCard: React.FC<{
  doctor: DoctorCategoryCardProps["doctor"];
}> = ({ doctor }) => {
  return (
    <div className="min-w-[160px] max-w-[160px] bg-white rounded-xl border-4 border-green-600 p-4 text-center shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0">
      <img src={doctor.image} className="w-full h-24 object-cover" />
    </div>
  );
};

export default DoctorCategoryCard;
