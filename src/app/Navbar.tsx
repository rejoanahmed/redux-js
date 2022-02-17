import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClassName =
    "border-indigo-500 text-gray-500 inline-flex items-center px-1 pt-1 border-b-2";
  const inactiveClassName =
    "hover:text-gray-700 hover:border-gray-300 text-gray-500 inline-flex items-center px-1 pt-1 border-b-2";
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="sm:-my-px sm:ml-6 sm:flex space-x-8">
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >
                Posts
              </NavLink>
              {/* <NavLink
                to="/Teams"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >
                Teams
              </NavLink>
              <NavLink
                to="/Projects"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassName
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/Calendar"
                className={({ isActive }) =>
                  isActive
                    ? "border-indigo-500 text-gray-500 inline-flex items-center px-1 pt-1 border-b-2"
                    : "hover:text-gray-700 hover:border-gray-300 text-gray-500 inline-flex items-center px-1 pt-1 border-b-2"
                }
              >
                Calendar
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
