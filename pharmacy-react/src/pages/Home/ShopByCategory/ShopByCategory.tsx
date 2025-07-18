import React from "react";
import ShopByCategoryCard from "./ShopByCategoryCard";

const categories = [
  {
    title: "Vitamins & Suppliments",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/c8ecf5cf2ca834288603b299f57d1688.png?f=png?dim=360x0",
  },
  {
    title: "Must have",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png?f=png?dim=360x0",
  },
  {
    title: "Diabetes essentials",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a06a357fd54e3e298a40214387082957.png?f=png?dim=360x0",
  },

  {
    title: "Monsoon store",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/114dc0ec61ef3c64b59bf5b9b9ba2507.png?f=png?dim=360x0",
  },
  {
    title: "Heart care",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/5a4fa9318fbb3b7daa2cfa6d293bea87.png?f=png?dim=360x0",
  },
  {
    title: "Aayurvedic care",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6517ad5aaeca38e69936298d3e677a3a.png?f=png?dim=360x0",
  },
  {
    title: "Sports nutrition",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/c8ecf5cf2ca834288603b299f57d1688.png?f=png?dim=360x0",
  },
  {
    title: "Skin Care ",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9e6c4266111e37f18570504c1d852e0a.png?f=png?dim=360x0",
  },
  {
    title: "Mobility & elderly care",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b17f1b5866723c1e9dc37970b7f43324.png?f=png?dim=360x0",
  },
  {
    title: "Health food and drinks",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/015cb472a6c830d3a08da0c37363196a.png?f=png?dim=360x0",
  },
  {
    title: "Mother and baby care",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/8d6fb6948cc13e62be29c56347548f30.png?f=png?dim=360x0",
  },
  {
    title: "personal care",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/d3363660c0c8340487b25a9fc98732b6.png?f=png?dim=360x0",
  },

  {
    title: "Health concerns",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6cbaa600864b3bd491d96834bfb0547e.png?f=png?dim=360x0",
  },
  {
    title: "Healthcare devices",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png?f=png?dim=360x0",
  },
  {
    title: "Explore more",
    image:
      "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/27db727f1d5c3fd9b45b124ece3d7876.png?f=png?dim=360x0",
  },
];

const ShopByCategory = () => {
  return (
    <div className="flex flex-wrap justify-center gap-7 lg:px-20">
      {categories.map((category, index) => (
        <ShopByCategoryCard
          key={index}
          title={category.title}
          image={category.image}
        />
      ))}
    </div>
  );
};

export default ShopByCategory;
