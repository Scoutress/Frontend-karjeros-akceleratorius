import { useState } from "react";
import ServicesList from "../all-services/ServicesList";
import Service from "../components/service/Service";
import Sidebar from "../components/sidebar/Sidebar";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredServices = selectedCategory
    ? ServicesList.filter((service) => service.category === selectedCategory)
    : ServicesList;

  return (
    <div>
      <h1>Categories</h1>
      <Sidebar onCategoryClick={handleCategoryClick} />
      <div>
        <h3>Selected Category: {selectedCategory}</h3>
        {filteredServices.map((service) => (
          <Service
            key={service.id}
            name={service.name}
            worker={service.worker}
            address={service.address}
            photo={service.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
