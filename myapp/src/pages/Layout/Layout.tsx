import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="h-full">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full max-h-screen">
        <div className="flex justify-end border-0 mx-[2vw] p-4 max-w-full">
          <div className="self-end"> Charan.gutti@gmail.com</div>
        </div>
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
