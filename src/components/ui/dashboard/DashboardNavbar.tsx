import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/features/auth/authSlice";

const DashboardNavbar = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-white rounded-box w-52"
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
          <ul className="menu menu-horizontal px-1 text-white text-[15px]">
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
