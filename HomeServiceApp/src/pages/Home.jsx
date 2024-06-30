import HomeCategories from "../components/HomeCategories";
import Announcement from "../components/Announcement/Announcement";
import HomePopular from "../components/HomePopular";

const Home = () => {
  return (
    <div>
      <Announcement />
      <HomeCategories />
      <HomePopular />
    </div>
  );
};

export default Home;
