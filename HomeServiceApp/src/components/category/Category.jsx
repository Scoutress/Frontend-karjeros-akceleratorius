import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Category.module.scss";

const Category = ({ name, icon, link, isActive }) => {
  return (
    <li>
      <Link
        to={link}
        className={`${styles.button} ${isActive ? styles.active : ""}`}
      >
        <img src={icon} alt={`${name} icon`} className={styles.icon} />
        <p className={styles.category}>{name}</p>
      </Link>
    </li>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Category;
