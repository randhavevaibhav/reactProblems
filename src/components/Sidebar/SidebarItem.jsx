import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../App";
import { useContext } from "react";
const SidebarItem = ({ children = <FaHome />, linkTo, displayName }) => {
  const { SidebarContext } = useContext(GlobalContext);
  const { isSidebarOpen,setIsSidebarOpen } = SidebarContext;
  return (
    <>
      <li>
        <Link
          to={linkTo}
          className="flex items-center gap-5 cursor-pointer p-2 hover:bg-[#3a4d67] rounded-md transition-all font-semibold tracking-wide"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {children}
          {displayName}
        </Link>
      </li>
    </>
  );
};

export default SidebarItem;
