import { Link, NavLink } from "react-router-dom";
import { GiFullPizza } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logOut } from "../../../redux/features/auth/authSlice";
import { themeChange } from "../../../redux/features/theme/themeSlice";
import { FaRegMoon, FaUser } from "react-icons/fa";
import { PiSignOutBold, PiSunBold } from "react-icons/pi";
import { useEffect } from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const { darkMode } = useAppSelector((state) => state.theme);

  console.log(auth.user);

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
    <p className="flex flex-col md:flex-row items-center">
      <NavLink
        className={({ isActive }) =>
          ` btn btn-ghost text-left btn-sm ${isActive ? " text-primary" : ""}`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          ` btn btn-ghost text-left btn-sm ${isActive ? " text-primary" : ""}`
        }
        to="/about-us"
      >
        About Us
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          ` btn btn-ghost text-left btn-sm ${isActive ? " text-primary" : ""}`
        }
        to="/all-supplies"
      >
        All Supplies
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          ` btn btn-ghost text-left btn-sm ${isActive ? " text-primary " : ""}`
        }
        to="/community"
      >
        Community
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          ` btn btn-ghost text-left btn-sm ${isActive ? " text-primary " : ""}`
        }
        to="/leaderboard"
      >
        Leaderboard
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          ` btn btn-ghost text-left btn-sm ${isActive ? " text-primary " : ""}`
        }
        to="/volunteer"
      >
        Volunteer Signup
      </NavLink>

      {auth?.token && (
        <>
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
        </>
      )}
    </p>
  );
  return (
    <nav className="bg-secondary shadow-md sticky top-0 z-50">
      <section className="px-5">
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
          <div className="navbar-center hidden lg:flex  ">
            <ul className="menu  menu-horizontal  px-1  font-semibold text-[--color4]">
              {menuItems}
            </ul>
          </div>

          <div className="navbar-end font-semibold text-[--color4]">
            {auth.token && (
              <div className="dropdown dropdown-end  ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar "
                >
                  <div className="w-10 rounded-full">
                    {auth?.user?.photo ? (
                      <img alt="user_image" src={auth.user?.photo} />
                    ) : (
                      <img
                        alt="user_image"
                        src="https://img.icons8.com/plasticine/100/user-male-circle.png"
                      />
                    )}
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-secondary rounded-box w-52"
                >
                  <li className="items-start">
                    <Link
                      className="btn btn-ghost text-left btn-sm "
                      to="/dashboard/my-profile"
                    >
                      {" "}
                      <FaUser /> My Profile
                    </Link>
                  </li>

                  <li className="items-start">
                    <button
                      className="btn btn-ghost  btn-sm "
                      onClick={handleLogout}
                    >
                      {" "}
                      <PiSignOutBold /> Logout{" "}
                    </button>
                  </li>

                  <li className="items-center">
                    {" "}
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
            )}

            {auth.token && (
              <div>
                <h3 className="text-sm">{auth?.user?.name}</h3>
                <h2 className="text-xs">{auth?.user?.role}</h2>
              </div>
            )}

            {!auth.token && (
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
            )}
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
