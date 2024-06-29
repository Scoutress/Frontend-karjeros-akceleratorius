import Service from "../components/Service";
import ServicesList from "../services/ServicesList";

const HomePopular = () => {
  return (
    <div>
      <h3>Popular businesses</h3>
      {ServicesList.map((service) => (
        <Service
          key={service.id}
          name={service.name}
          worker={service.worker}
          address={service.address}
          photo={service.photo}
        />
      ))}
    </div>
  );
};

export default HomePopular;
