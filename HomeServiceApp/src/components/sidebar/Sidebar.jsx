import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.scss";

import cleaningIcon from "../../../public/icons/icons8-cleaning-50.png";
import repairIcon from "../../../public/icons/icons8-tools-50.png";
import paintingIcon from "../../../public/icons/icons8-painting-50.png";
import shiftingIcon from "../../../public/icons/icons8-truck-50.png";
import plumbingIcon from "../../../public/icons/icons8-plumbing-50.png";
import electricIcon from "../../../public/icons/icons8-electric-50.png";

const categories = [
  { name: "Cleaning", icon: cleaningIcon, link: "/category/cleaning" },
  { name: "Repair", icon: repairIcon, link: "/category/repair" },
  { name: "Painting", icon: paintingIcon, link: "/category/painting" },
  { name: "Shifting", icon: shiftingIcon, link: "/category/shifting" },
  { name: "Plumbing", icon: plumbingIcon, link: "/category/plumbing" },
  { name: "Electric", icon: electricIcon, link: "/category/electric" },
];

const Sidebar = ({ selectedCategory, onCategoryClick }) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    } else {
      const path = location.pathname.split("/").pop();
      setActiveCategory(path.charAt(0).toUpperCase() + path.slice(1));
    }
  }, [selectedCategory, location.pathname]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name);
    onCategoryClick(category.name);
    navigate(category.link);
  };

  return (
    <div className={styles.sidebar}>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <button
              className={`${styles.button} ${
                activeCategory === category.name ? styles.active : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <img
                src={category.icon}
                alt={`${category.name} icon`}
                className={styles.icon}
              />
              <p className={styles.category}>{category.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  selectedCategory: PropTypes.string,
  onCategoryClick: PropTypes.func.isRequired,
};

export default Sidebar;
