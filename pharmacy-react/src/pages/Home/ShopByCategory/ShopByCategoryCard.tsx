import React from "react";
import "./ShopByCategory.css";

type Props = {
  image: string;
  title: string;
};

const ShopByCategoryCard: React.FC<Props> = ({ image, title }) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center group cursor-pointer">
      <div className="custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] rounded-full bg-primary-color">
        <img
          className="rounded-full group-hover:scale-95 transition-transform duration-700 object-cover object-top h-full w-full"
          src={image}
          alt={title}
        />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default ShopByCategoryCard;
