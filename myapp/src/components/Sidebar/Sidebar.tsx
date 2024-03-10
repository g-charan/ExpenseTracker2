import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Calendar.png";
import img6 from "../../assets/Chart.png";
import img2 from "../../assets/Chart_fill.png";
import img3 from "../../assets/Chat.png";
import img7 from "../../assets/Folder.png";
import img5 from "../../assets/Search.png";
import img8 from "../../assets/Setting.png";
import img4 from "../../assets/User.png";
import img9 from "../../assets/control.png";
import img10 from "../../assets/logo.png";

const SideBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: img2, path: "/user/" },
    { title: "Inbox", src: img3, path: "/user/Subscriptions" },
    { title: "Accounts", src: img4, gap: true, path: "/user/expensetracking" },
    { title: "Schedule ", src: img1, path: "/user/expensetracking" },
    { title: "Search", src: img5, path: "/user/goals" },
    { title: "Analytics", src: img6, path: "/user/Records" },
    { title: "Files ", src: img7, gap: true, path: "/user/goalstatus" },
    { title: "Setting", src: img8 },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }  bg-slate-900 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={img9}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-cyan-600
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4">
          <img
            src={img10}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-800 text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} `}
              onClick={() => {
                navigate(`${Menu.path}`);
              }}
            >
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="flex-1 h-screen p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div> */}
    </div>
  );
};

export default SideBar;
