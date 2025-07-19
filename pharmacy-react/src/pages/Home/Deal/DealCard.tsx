import React from "react";

interface DealCardProps {
  deal: {
    name: string;
    image: string;
    mrp: number;
    price: number;
    discount: number;
  };
}

const DealCard: React.FC<{ deal: DealCardProps["deal"] }> = ({ deal }) => {
  return (
    <div className="min-w-[160px] max-w-[160px] bg-white rounded-xl border-4 border-green-600 p-4 text-center shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0">
      <img
        src={deal.image}
        alt={deal.name}
        className="w-full h-24 object-contain mb-2"
      />
      <p className="text-sm font-medium line-clamp-2 h-[40px]">{deal.name}</p>
      <p className="text-xs text-gray-400 line-through mt-1">
        MRP ₹{deal.mrp.toFixed(2)}
      </p>
      <p className="text-sm font-semibold text-red-600">
        ₹{deal.price.toFixed(2)} ({deal.discount}%)
      </p>
    </div>
  );
};

export default DealCard;
