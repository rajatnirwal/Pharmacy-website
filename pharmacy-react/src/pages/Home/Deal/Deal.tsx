import React from "react";
import DealCard from "./DealCard";

const dealsData = [
  {
    id: 1,
    name: "Scalpe Plus Expert Anti Dandruff Shampoo",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/270382/scalpe-plus-expert-anti-dandruff-shampoo-bottle-of-75ml-2-1737968403.jpg?dim=1440x0",
    mrp: 335.5,
    price: 244.91,
    discount: 27,
  },

  {
    id: 2,
    name: "Prohance D Diabetes Care Vanilla",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/I34686/prohance-d-diabetes-care-vanilla-flavour-sugar-free-jar-of-400gm-powder-1-1749026001.jpg?dim=1440x0",
    mrp: 862,
    price: 715.46,
    discount: 17,
  },
  {
    id: 3,
    name: "Enterogermina Probiotic Supplement For Diarrhea For Kids & Adults Strip Of 4 Capsules",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/067886/enterogermina-probiotic-supplement-for-diarrhea-for-kids-adults-1-strips-4-capsules-each-1-1671741705.jpg?dim=1024x0",
    mrp: 862,
    price: 715.46,
    discount: 17,
  },
  {
    id: 4,
    name: "Shelcal 500mg Strip Of 15 Tablets",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/159115/shelcal-500mg-strip-of-15-tablets-2-1679999355.jpg?dim=1024x0",
    mrp: 862,
    price: 715.46,
    discount: 17,
  },
  {
    id: 5,
    name: "Venusia Max Intensive Moisturizing Lotion For All Skin Type 500gm",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/I40419/venusia-max-intensive-moisturizing-lotion-for-all-skin-type-500gm-2-1719922942.jpg?dim=1024x0",
    mrp: 862,
    price: 715.46,
    discount: 17,
  },
  {
    id: 6,
    name: "Perfectil Skin Hair Nails Care Tablets Box Of 30",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/369035/perfectil-skin-hair-nails-care-tablets-box-of-30-1-1751352428.jpg?dim=1440x0",
    mrp: 862,
    price: 715.46,
    discount: 17,
  },
  {
    id: 7,
    name: "Koflet SF Ginger Mint Flavour Strip Of 6 Lozenges",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/Y44143/koflet-sf-ginger-mint-flavour-strip-of-6-lozenges-3-1684755417.jpg?dim=1440x0",
    mrp: 862,
    price: 715.46,
    discount: 17,
  },
  {
    id: 8,
    name: "Dulcoflex 5mg Tablet",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/247965/dulcoflex-5mg-tablet-constipation-laxative-bowel-movement-regulator-1-strip-10-tablet-6.1-1732625775.jpg?dim=1440x0",
    mrp: 862,
    price: 715.46,
    discount: 17,
  },
];

const Deal = () => {
  return (
    <div className="px-6 py-8 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Deals of the Day</h2>
        <button className="text-sm text-blue-500 hover:underline">
          View All
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {dealsData.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default Deal;
