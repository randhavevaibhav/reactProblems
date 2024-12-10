import { useContext } from "react";

import { SideBarContext } from "../../App";
// Icons import
import { FaHome } from "react-icons/fa";
import { FaCircleRight } from "react-icons/fa6";
// Icons import

//Sub-Components impors
import SidebarItem from "./SidebarItem";
//Sub-Components impors

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SideBarContext);
  return (
    <>
      <aside
        className={`w-64  p-4 bg-[#111827] rounded-md text-white h-screen md:translate-x-0  transform transition duration-700 ease-in-out ${
          !isSidebarOpen ? "-translate-x-[18rem]" : ""
        }  fixed top-0 z-10 m-3 overflow-auto`}
      >
        <div className="flex justify-end">
          <button
            className="cursor-pointer p-2 hover:bg-[#3a4d67] rounded-md transition-all md:hidden"
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            Close
          </button>
        </div>
        <ul className="flex flex-col gap-3">
          <SidebarItem displayName="Home" linkTo={"/"}>
            <FaHome />
          </SidebarItem>
          <SidebarItem
            displayName="Tailwind components"
            linkTo={"/tailwindcompo"}
          >
            <FaCircleRight />
          </SidebarItem>
          <SidebarItem
            displayName="Pagination Products"
            linkTo={"/paginationproducts"}
          >
            <FaCircleRight />
          </SidebarItem>
          <SidebarItem displayName="Job Posts" linkTo={"/jobpost"}>
            <FaCircleRight />
          </SidebarItem>
          <SidebarItem displayName="Modal Page" linkTo={"/modalpage"}>
            <FaCircleRight />
          </SidebarItem>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
