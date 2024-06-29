import { Link } from "react-router-dom";

const HomeCategories = () => {
  return (
    <div>
      <button>
        <Link to="/category/cleaning">Cleaning</Link>
      </button>
      <button>
        <Link to="/category/repair">Repair</Link>
      </button>
      <button>
        <Link to="/category/painting">Painting</Link>
      </button>
      <button>
        <Link to="/category/shifting">Shifting</Link>
      </button>
      <button>
        <Link to="/category/plumbing">Plumbing</Link>
      </button>
      <button>
        <Link to="/category/electric">Electric</Link>
      </button>
    </div>
  );
};

export default HomeCategories;
