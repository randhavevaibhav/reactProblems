import { useContext } from "react";
import { SideBarContext } from "../../App";

import { MdOutlineMenu } from "react-icons/md";
const Navbar = () => {

  const {isSidebarOpen,setIsSidebarOpen} = useContext(SideBarContext);
 
  return (
    <>
      <nav className=" w-full p-2 flex gap-3 md:justify-between items-center fixed top-0 overflow-hidden bg-slate-950 mb-14">
        <button className="border shadow p-2 md:hidden " onClick={()=>setIsSidebarOpen(!isSidebarOpen)}><MdOutlineMenu className="text-white"/></button>
     
      </nav>
    </>
  );
};

export default Navbar;
