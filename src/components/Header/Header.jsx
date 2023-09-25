import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <Link
          className="text-xl hover:text-[#FF444A] hover:underline hover:bg-base-100 active:text-[#FF444A] active:underline active:bg-transparent0"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-xl hover:text-[#FF444A] hover:underline hover:bg-base-100  active:text-[#FF444A] active:underline active:bg-transparent"
          to={`/donation`}
        >
          Donation
        </Link>
      </li>
      <li>
        <Link
          className="text-xl hover:text-[#FF444A] hover:underline hover:bg-base-100  active:text-[#FF444A] active:underline active:bg-transparent"
          to="/statistics"
        >
          Statistics
        </Link>
      </li>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar bg-transparent">
        <div className="md:navbar-start navbar-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="w-40">
            <Link to='/'>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
