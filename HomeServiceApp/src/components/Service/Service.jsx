import PropTypes from "prop-types";
import styles from "./Service.module.scss";

const Service = ({ category, name, worker, address, photo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={photo} alt={`${name}`} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.category}>{category}</h4>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.worker}>{worker}</p>
        <p className={styles.address}>{address}</p>
        <button className={styles.button}>Book now</button>
      </div>
    </div>
  );
};

Service.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  worker: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Service;
