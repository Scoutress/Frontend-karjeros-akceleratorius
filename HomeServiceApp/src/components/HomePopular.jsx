import Service from "../components/Service";

const HomePopular = () => {
  const services = [
    {
      id: 1,
      name: "Išsivalyk pats",
      worker: "Tadas Gedvilas",
      address: "Kauno g. 27, Vilnius",
      photo: "/images/Issivalyk-pats.jpg",
    },
    {
      id: 2,
      name: "UAB Valymas",
      worker: "Regina Kazlauskienė",
      address: "Aukštaičių al. 27, Klaipėda",
      photo: "/images/UAB-valymas.jpg",
    },
    {
      id: 3,
      name: "Moki veži",
      worker: "Darius Standys",
      address: "Žemaičių al. 27, Klaipėda",
      photo: "/images/moki-vezi.webp",
    },
    {
      id: 4,
      name: "Elektrikas į namus",
      worker: "Rokas Andreikėnas",
      address: "Maisto g. 17, Vilnius",
      photo: "/images/elektrikas-i-namus.jpg",
    },
  ];

  return (
    <div>
      <h3>Popular businesses</h3>
      {services.map((service) => (
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
