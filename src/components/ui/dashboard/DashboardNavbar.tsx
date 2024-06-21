import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/features/auth/authSlice";
import { useEffect } from "react";
import { themeChange } from "../../../redux/features/theme/themeSlice";
import { PiSignOutBold, PiSunBold } from "react-icons/pi";
import { FaRegMoon, FaUser } from "react-icons/fa";

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

  return (
    <nav className="bg-secondary sticky top-0 z-50">
      <div className="navbar flex justify-between">
        <div className="navbar-start">
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

        <div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {auth?.user?.image ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.icons8.com/plasticine/100/user-male-circle.png"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-secondary rounded-box w-52 text-[--color2]"
            >
              <li>
                <Link to="/" className="btn btn-ghost text-left btn-sm">
                  {" "}
                  <FaUser /> {auth?.user?.name}{" "}
                </Link>
              </li>

              <li>
                <button
                  className="btn btn-ghost text-left btn-sm"
                  onClick={handleLogout}
                >
                  {" "}
                  <PiSignOutBold /> Logout{" "}
                </button>
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
