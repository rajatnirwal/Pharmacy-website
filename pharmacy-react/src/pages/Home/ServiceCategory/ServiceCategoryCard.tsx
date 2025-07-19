import React from "react";

type Props = {
  image: string;
  title: string;
};

const ServiceCategoryCard: React.FC<Props> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center justify-center border-4 border-primary-color rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300 bg-white w-28 sm:w-32 lg:w-36 hover:scale-105">
      <img
        className="object-contain h-16 w-16 sm:h-20 sm:w-20"
        src={image}
        alt={title}
      />
      <h2 className="font-semibold text-sm mt-2 text-center">{title}</h2>
    </div>
  );
};

export default ServiceCategoryCard;
