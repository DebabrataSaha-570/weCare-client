import { NavLink, Outlet, useNavigate } from "react-router-dom";
import DashboardNavbar from "../ui/dashboard/DashboardNavbar";
import { MdOutlineCalculate } from "react-icons/md";
import { FaListUl, FaPlus } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { GetUserInfo } from "../../services/auth.service";
import { useAppSelector } from "../../redux/hook";
import { verifyToken } from "../../utils/verifyToken";
import { drawerItems } from "../../utils/drawerItems";
import { UserRole } from "../../types";

type DecodedToken = {
  role?: string;
};

const DashboardLayout = () => {
  const [userRole, setUserRole] = useState("");
  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      const decodedData = verifyToken(token) as DecodedToken;
      // console.log(decodedData);
      const role = decodedData?.role || "";
      setUserRole(role);
    }
  }, [token]);

  return (
    <div className="">
      <DashboardNavbar></DashboardNavbar>
      <div className="drawer  lg:drawer-open z-10 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5 ">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4  w-72 min-h-full bg-secondary text-[--color4] mt-[60px] lg:mt-0">
            {/* Sidebar content here */}

            {userRole &&
              drawerItems(userRole as UserRole).map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    ` px-4 py-3 text-base rounded-lg mb-3 ${
                      isActive ? "bg-primary text-[--color4]" : ""
                    }`
                  }
                >
                  <h3 className="flex items-center gap-3">
                    {" "}
                    <span className="text-xl">
                      {item.icon && <item.icon />}
                    </span>{" "}
                    {item.title}
                  </h3>
                </NavLink>
              ))}

            {/* <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `px-4 py-3 text-base rounded-lg mb-3 ${
                  isActive ? "bg-primary  text-[--color4] " : ""
                }`
              }
            >
              <h3 className="flex items-center gap-3">
                {" "}
                <span className="text-2xl">
                  <MdOutlineCalculate />
                </span>{" "}
                Supplies Calculation
              </h3>
            </NavLink>

            <NavLink
              to="/dashboard/supplies"
              className={({ isActive }) =>
                ` px-4 py-3 text-base rounded-lg mb-3 ${
                  isActive ? "bg-primary text-[--color4]" : ""
                }`
              }
            >
              <h3 className="flex items-center gap-3">
                {" "}
                <span className="text-xl">
                  <FaListUl />
                </span>{" "}
                All Supplies
              </h3>
            </NavLink>

            <NavLink
              to="/dashboard/create-supply"
              className={({ isActive }) =>
                ` px-4 py-3 text-base rounded-lg mb-3 ${
                  isActive ? "bg-primary text-[--color4]" : ""
                }`
              }
            >
              <h3 className="flex items-center gap-3">
                {" "}
                <span className="text-xl">
                  <FaPlus />
                </span>{" "}
                Create Supply
              </h3>
            </NavLink>

            <NavLink
              to="/dashboard/create-testimonial"
              className={({ isActive }) =>
                ` px-4 py-3 text-base rounded-lg mb-3 ${
                  isActive ? "bg-primary text-[--color4]" : ""
                }`
              }
            >
              <h3 className="flex items-center gap-3">
                {" "}
                <span className="text-xl">
                  <FaPenToSquare />
                </span>{" "}
                Add Testimonial
              </h3>
            </NavLink> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
