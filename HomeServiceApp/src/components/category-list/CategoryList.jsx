import PropTypes from "prop-types";
import Service from "../service/Service";
import ServicesList from "../../all-services/ServicesList";
import styles from "./CategoryList.module.scss";
import { useState, useEffect } from "react";

const CategoryList = ({ selectedCategory }) => {
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const services = selectedCategory
      ? ServicesList.filter(
          (service) =>
            service.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      : ServicesList;
    setFilteredServices(services);
  }, [selectedCategory]);

  return (
    <div>
      <h3 className={styles.categoryListTitle}>{selectedCategory || "All"}</h3>
      <div className={styles.services}>
        {filteredServices.map((service) => (
          <Service
            key={service.id}
            name={service.name}
            worker={service.worker}
            address={service.address}
            photo={service.photo}
            category={service.category}
          />
        ))}
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  selectedCategory: PropTypes.string,
};

export default CategoryList;
