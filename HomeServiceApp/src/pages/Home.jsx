import Announcement from "../components/announcement/Announcement";
import HomeCategories from "../components/home-categories/HomeCategories";
import HomePopular from "../components/home-popular/HomePopular";

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
