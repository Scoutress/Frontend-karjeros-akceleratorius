import PropTypes from "prop-types";

const Sidebar = ({ onCategoryClick }) => {
  const categories = [
    "Cleaning",
    "Repair",
    "Painting",
    "Shifting",
    "Plumbing",
    "Electric",
  ];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => onCategoryClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};

export default Sidebar;
