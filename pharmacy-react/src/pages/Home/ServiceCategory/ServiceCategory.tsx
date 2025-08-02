import React from "react";
import ServiceCategoryCard from "./ServiceCategoryCard";
import { url } from "inspector";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Medicine",
    image:
      "https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=720x0",
       url : "/medicines",
  },
  {
    title: "Lab Tests",
    image:
      "https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=720x0",
       url : "/lab-tests",
  },
  {
    title: "Consult Doctor",
    image:
      "https://assets.pharmeasy.in/web-assets/images/icon_doc_consult_tile.webp?dim=720x0",
       url : "/consult-doctor",
  },
  {
    title: "HealthCare",
    image:
      "https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=720x0",
       url : "/healthcare",
  },
  {
    title: "Health Blogs",
    image:
      "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=720x0",
       url : "/health-blogs",
  },
  {
    title: "Plus",
    image:
      "https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=720x0",
       url : "/plus",
  },
  {
    title: "Offers",
    image:
      "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=720x0",
       url : "/value-store",
  },
  {
    title: "Value Store",
    image:
      "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=720x0",
      url : "/value-store",
  },
];

const ServiceCategory = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-5 px-4 lg:px-20 border-b">
      {categories.map((category, index) => (
        <Link to={category.url || "#"}>
        <ServiceCategoryCard
          key={index}
          title={category.title}
          image={category.image}
        /></Link>
      ))}
    </div>
  );
};

export default ServiceCategory;
