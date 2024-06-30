import { Link } from "react-router-dom";
import styles from "./HomeCategories.module.scss";

const categories = [
  {
    name: "Cleaning",
    icon: "../public/icons/icons8-cleaning-50.png",
    link: "/category/cleaning",
  },
  {
    name: "Repair",
    icon: "../public/icons/icons8-tools-50.png",
    link: "/category/repair",
  },
  {
    name: "Painting",
    icon: "../public/icons/icons8-painting-50.png",
    link: "/category/painting",
  },
  {
    name: "Shifting",
    icon: "../public/icons/icons8-truck-50.png",
    link: "/category/shifting",
  },
  {
    name: "Plumbing",
    icon: "../public/icons/icons8-plumbing-50.png",
    link: "/category/plumbing",
  },
  {
    name: "Electric",
    icon: "../public/icons/icons8-electric-50.png",
    link: "/category/electric",
  },
];

const HomeCategories = () => {
  return (
    <div className={styles.container}>
      {categories.map((category, index) => (
        <div key={index} className={styles.subcontainer}>
          <Link to={category.link} className={styles.link}>
            <img
              src={category.icon}
              alt={`${category.name} Icon`}
              className={styles.icon}
            />
            <span className={styles.label}>{category.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeCategories;
