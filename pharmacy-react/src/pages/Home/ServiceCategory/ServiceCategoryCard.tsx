import React from "react";

type Props = {
  image: string;
  title: string;
};

const ServiceCategoryCard: React.FC<Props> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="object-contain h-20" src={image} alt={title} />
      <h2 className="font-semibold text-sm">{title}</h2>
    </div>
  );
};

export default ServiceCategoryCard;
