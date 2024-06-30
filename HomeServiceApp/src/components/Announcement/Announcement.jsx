import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Announcement.module.scss";

const Announcement = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.titleContainer}>
          <h1 className={styles.h1}>
            <span>Find Home </span>
            <span className={styles.h1Colored}>Service/Repair </span>
            <span>Near You</span>
          </h1>
          <h3 className={styles.h3}>
            Explore Best Home Service & Repair near you
          </h3>
        </div>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search"
          />
          <button className={styles.searchBtn}>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Announcement;
