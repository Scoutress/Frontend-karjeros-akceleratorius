import Service from "../service/Service";
import ServicesList from "../../all-services/ServicesList";
import styles from "./HomePopular.module.scss";

const HomePopular = () => {
  const popularServices = ServicesList.slice(0, 4);

  return (
    <div>
      <h3 className={styles.title}>Popular businesses</h3>
      <div className={styles.container}>
        {popularServices.map((service) => (
          <Service
            key={service.id}
            category={service.category}
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

export default HomePopular;
