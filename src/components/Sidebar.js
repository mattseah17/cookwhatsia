import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      {sidebar ? (
        <button
          className="flex text-4xl text-amber-800 items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setSidebar(!sidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setSidebar(!sidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-5"
          fill="#654321"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="80" height="9"></rect>
          <rect y="30" width="80" height="9"></rect>
          <rect y="60" width="80" height="9"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[20vw] bg-amber-100 opacity-60  p-10 pl-2 text-amber-900 fixed h-full z-40 ${
          sidebar ? "translate-x-0 " : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div>
          <NavLink to="/about" className="flex mb-2">
            About
          </NavLink>
        </div>
        <div>
          <NavLink to="/main" className="flex mb-2">
            Recipes
          </NavLink>
        </div>
        <div>
          <NavLink to="/contact" className="flex mb-2">
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
