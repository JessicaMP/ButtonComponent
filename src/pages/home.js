import Button from "../components/Button/Button";
import SideBar from "../components/SideBar/SideBar";
import "../assets/css/main.css";

const Home = () => {
  return (
    <div className="home-container">
      <SideBar />
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Home;
