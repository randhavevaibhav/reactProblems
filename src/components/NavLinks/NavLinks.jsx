import { Link } from "react-router-dom";

export const NavLinks = ({ linkList }) => {
  return (
    <>
      <div className="link_list">
        <ul className="flex border p-2 gap-3">
          {linkList.map(({ to, displayName }) => {
            return (
              <>
                <Link
                  to={to+""}
                  className=" px-4 py-1 font-semibold hover:underline hover:text-blue-500 hover:-translate-y-1 transition-all delay-100"
                >
                  <li>{displayName}</li>
                </Link>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
