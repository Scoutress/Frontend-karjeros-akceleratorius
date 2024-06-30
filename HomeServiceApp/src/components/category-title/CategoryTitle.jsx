import PropTypes from "prop-types";
import styles from "./CategoryTitle.module.scss";

const CategoryTitle = ({ text }) => {
  return <h2 className={styles.title}>{text}</h2>;
};

CategoryTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CategoryTitle;
