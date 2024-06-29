import PropTypes from "prop-types";

const Service = ({ name, worker, address, photo }) => {
  return (
    <div>
      <img src={photo} alt="Logo" style={{ height: "75px" }} />
      <h4>{name}</h4>
      <p>{worker}</p>
      <p>{address}</p>
      <button>Book now</button>
    </div>
  );
};

Service.propTypes = {
  name: PropTypes.string.isRequired,
  worker: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default Service;
