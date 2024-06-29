import { AiOutlineSearch } from "react-icons/ai";

const Announcement = () => {
  return (
    <header>
      <div>
        <div>
          <h1>
            Find Home Service/Repair
            <br />
            Near You
          </h1>
          <h3>Explore Best Home Service & Repair near you</h3>
        </div>
        <input type="text" placeholder="Search" />
        <button>
          <AiOutlineSearch style={{ marginRight: "5px" }} />
        </button>
      </div>
    </header>
  );
};

export default Announcement;
