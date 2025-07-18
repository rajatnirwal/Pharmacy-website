import React from "react";
import ServiceCategoryCard from "./ServiceCategoryCard";

const categories = [
  {
    title: "Medicine",
    image:
      "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0",
  },
  {
    title: "Lab Tests",
    image:
      "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0",
  },
  {
    title: "Consult Doctor",
    image:
      "https://assets.pharmeasy.in/web-assets/images/icon_doc_consult_tile.webp?dim=720x0",
  },
  {
    title: "HealthCare",
    image:
      "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0",
  },
  {
    title: "Health Blogs",
    image:
      "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0",
  },
  {
    title: "Plus",
    image:
      "https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0",
  },
  {
    title: "Offers",
    image:
      "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0",
  },
  {
    title: "Value Store",
    image:
      "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0",
  },
];

const ServiceCategory = () => {
  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b">
      {categories.map((category, index) => (
        <ServiceCategoryCard
          key={index}
          title={category.title}
          image={category.image}
        />
      ))}
    </div>
  );
};

export default ServiceCategory;
