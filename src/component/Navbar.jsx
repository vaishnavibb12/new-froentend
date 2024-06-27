import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/todo-logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"} className="text-xl">
                All Employees
              </Link>
            </li>
            <li>
              <Link to={"/createemployees"} className="text-xl">
                Create Employees
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          LOGO
          {/* <img className=" h-[100%] w-100 mb-20" src={logo} alt="" /> */}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"} className="text-lg">
              All Employees
            </Link>
          </li>
          <li>
            <Link to={"/createemployees"} className="text-lg">
              Create Employees
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-black text-white hover:bg-white hover:text-black hover:border-lg">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;