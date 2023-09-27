import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const NavLinks = (
    <>
      <li>
        <NavLink className="text-xl px-6" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl px-6" to={`/donation`}>
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink className="text-xl px-6" to="/statistics">
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar">
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
              className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
          <div className="w-40">
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className=" menu-horizontal">{NavLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
