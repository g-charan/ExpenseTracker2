import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="overflow-hidden ">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
