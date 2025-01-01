import { useContext } from "react";

import { GlobalContext } from "../../App";
// Icons import
import { FaHome } from "react-icons/fa";
import { FaCircleRight } from "react-icons/fa6";
// Icons import

//Sub-Components impors
import SidebarItem from "./SidebarItem";
//Sub-Components impors

const Sidebar = () => {
  const { SidebarContext } = useContext(GlobalContext);
  const { isSidebarOpen, setIsSidebarOpen } = SidebarContext;
  return (
    <>
      <aside
        className={`w-64  p-4 bg-[#111827] rounded-md text-white h-screen md:translate-x-0  transform transition duration-700 ease-in-out ${
          !isSidebarOpen ? "-translate-x-[18rem]" : ""
        }  fixed top-0 z-20 m-3 overflow-auto`}
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
          <SidebarItem displayName="Cart Page" linkTo={"/cartpage"}>
            <FaCircleRight />
          </SidebarItem>
          <SidebarItem displayName="Search filter" linkTo={"/searchfilter"}>
            <FaCircleRight />
          </SidebarItem>
          <SidebarItem displayName="Modal in tailwind" linkTo={"/modal"}>
            <FaCircleRight />
          </SidebarItem>
          <SidebarItem displayName="Nested Routes" linkTo={"/nestedroutes"}>
            <FaCircleRight />
          </SidebarItem>
          <SidebarItem displayName="Login" linkTo={"/login"}>
            <FaCircleRight />
          </SidebarItem>
          <SidebarItem displayName="Eat N Split App" linkTo={"/eatNsplit"}>
            <FaCircleRight />
          </SidebarItem>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
