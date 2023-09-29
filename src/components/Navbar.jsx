import { NavLink } from "react-router-dom";
import useUser from "../hooks/useUser";

const Navbar = () => {
  const { name, age } = useUser();

  console.log(name, age);

  const navbarLi = (
    <>
      <NavLink
        className="font-semibold mr-5 hover:bg-slate-700 px-6 py-2 rounded-md"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="font-semibold mr-5 hover:bg-slate-700 px-6 py-2 rounded-md"
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className="font-semibold mr-5 hover:bg-slate-700 px-6 py-2 rounded-md"
        to="/login"
      >
        Login
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
            {navbarLi}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center">
        <p>Hello, {name}</p>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navbarLi}</ul>
      </div>
    </div>
  );
};

export default Navbar;
