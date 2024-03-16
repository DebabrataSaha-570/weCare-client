import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/features/auth/authSlice";
import { useEffect } from "react";
import { themeChange } from "../../../redux/features/theme/themeSlice";
import { PiSunBold } from "react-icons/pi";
import { FaRegMoon } from "react-icons/fa";

const DashboardNavbar = () => {
  const auth = useAppSelector((state) => state.auth);
  const { darkMode } = useAppSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(themeChange());
  };

  const handleLogout = () => {
    dispatch(logOut());
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
        <Link to="/"> Home </Link>
      </li>

      <li>
        <Link to="/dashboard"> {auth?.user?.name} </Link>
      </li>

      <li>
        <button onClick={handleLogout}> Logout </button>
      </li>
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
    <nav className="bg-secondary sticky top-0 z-50">
      <div className="navbar flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-secondary lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-[--color4] rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-secondary normal-case text-2xl md:text-3xl font-semibold text-primary flex justify-center items-center"
          >
            <span className="text-3xl md:text-4xl">
              <GiFullPizza />
            </span>
            weCare
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-[--color4] text-[15px]">
            {menuItems}
          </ul>
        </div>

        <div className="flex lg:hidden navbar-end">
          <label
            htmlFor="my-drawer-2"
            tabIndex={1}
            className="btn btn-secondary lg:hidden"
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
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
