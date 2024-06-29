import HomeCategories from "../components/HomeCategories";
import Announcement from "../components/Announcement";
import HomePopular from "../components/HomePopular";

const Home = () => {
  return (
    <div>
      <Announcement />
      <br />
      <HomeCategories />
      <br />
      <HomePopular />
    </div>
  );
};

export default Home;
