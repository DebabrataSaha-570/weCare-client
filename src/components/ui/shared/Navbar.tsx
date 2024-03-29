import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import { GiFullPizza } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logOut } from "../../../redux/features/auth/authSlice";
import { themeChange } from "../../../redux/features/theme/themeSlice";
import { FaRegMoon } from "react-icons/fa";
import { PiSunBold } from "react-icons/pi";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const { darkMode } = useAppSelector((state) => state.theme);

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleThemeChange = () => {
    dispatch(themeChange());
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute(
        "data-theme",
        darkMode ? "halloween" : "weCareTheme"
      );
    }
  }, [darkMode]);
  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` btn btn-ghost text-left btn-sm ${isActive ? " text-primary" : ""}`
          }
        >
          {" "}
          Home{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` btn btn-ghost text-left btn-sm ${isActive ? " text-primary" : ""}`
          }
          to="/about-us"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` btn btn-ghost text-left btn-sm ${isActive ? " text-primary" : ""}`
          }
          to="/all-supplies"
        >
          All Supplies
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` btn btn-ghost text-left btn-sm ${
              isActive ? " text-primary " : ""
            }`
          }
          to="/community"
        >
          Community
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            ` btn btn-ghost text-left btn-sm ${
              isActive ? " text-primary " : ""
            }`
          }
          to="/leaderboard"
        >
          Leaderboard
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            ` btn btn-ghost text-left btn-sm ${
              isActive ? " text-primary " : ""
            }`
          }
          to="/volunteer"
        >
          Volunteer Signup
        </NavLink>
      </li>

      {auth?.token && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` btn btn-ghost text-left btn-sm ${
                  isActive ? " text-primary " : ""
                }`
              }
              to="/dashboard"
            >
              {" "}
              Dashboard{" "}
            </NavLink>
          </li>
          <li>
            <Link className="btn btn-ghost text-left btn-sm" to="/">
              {" "}
              {auth?.user?.name}{" "}
            </Link>
          </li>

          <li>
            <button
              className="btn btn-ghost text-left btn-sm"
              onClick={handleLogout}
            >
              {" "}
              Logout{" "}
            </button>
          </li>
        </>
      )}

      {!auth.token && (
        <li>
          <NavLink
            className={({ isActive }) =>
              ` btn btn-ghost text-left btn-sm ${
                isActive ? " text-primary " : ""
              }`
            }
            to="/login"
          >
            {" "}
            Login{" "}
          </NavLink>
        </li>
      )}
      <li className="flex justify-center">
        <span
          onClick={handleThemeChange}
          className="btn btn-ghost text-left btn-sm"
        >
          {darkMode ? (
            <PiSunBold className=" size-5" />
          ) : (
            <FaRegMoon className="size-5" />
          )}
        </span>
      </li>
    </>
  );
  return (
    <nav className="bg-secondary shadow-md sticky top-0 z-50">
      <Container>
        <div className="navbar flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={1}
                className="btn btn-ghost text-[--color4] lg:hidden"
              >
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
                className="menu menu-compact dropdown-content bg-secondary t mt-3 p-2 shadow text-[--color4] rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link
              to="/"
              className="btn btn-ghost normal-case text-2xl md:text-3xl font-bold text-primary flex justify-center items-center"
            >
              <span className="text-3xl md:text-4xl">
                <GiFullPizza />
              </span>
              weCare
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu  menu-horizontal  px-1  font-semibold text-[--color4]">
              {menuItems}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
