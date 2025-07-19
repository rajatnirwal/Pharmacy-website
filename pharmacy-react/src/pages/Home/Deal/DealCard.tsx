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
    <div className="min-w-[150px] max-w-[180px] bg-white rounded-lg border shadow-sm p-3 text-center">
      <img
        src={deal.image}
        alt={deal.name}
        className="w-full h-24 object-contain mb-2"
      />
      <p className="text-sm font-medium truncate">{deal.name}</p>
      <p className="text-xs text-gray-400 line-through">
        MRP ₹{deal.mrp.toFixed(2)}
      </p>
      <p className="text-sm font-semibold text-red-600">
        ₹{deal.price.toFixed(2)} ({deal.discount}%)
      </p>
    </div>
  );
};

export default DealCard;
