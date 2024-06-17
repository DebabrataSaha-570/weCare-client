import { USER_ROLE } from "../constants/role";
import { DrawerItems, UserRole } from "../types";
import { FaListUl } from "react-icons/fa6";
import { FaPlus, FaUsers, FaClipboardList, FaHome } from "react-icons/fa";

export const drawerItems = (role: UserRole) => {
  const roleMenus: DrawerItems[] = [];

  switch (role) {
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: FaHome,
        },
        {
          title: "My Donation",
          path: "/dashboard/my-donation",
          icon: FaHome,
        },
        {
          title: "Add Donation",
          path: "/dashboard/add-donation",
          icon: FaHome,
        },
        {
          title: "Add Review",
          path: "/dashboard/add-review",
          icon: FaHome,
        },
        {
          title: "My Review",
          path: "/dashboard/my-review",
          icon: FaHome,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: FaHome,
        },
        {
          title: "All Donations",
          path: "/dashboard/all-donation",
          icon: FaHome,
        },
        {
          title: "All Users",
          path: "/dashboard/users",
          icon: FaHome,
        },
        {
          title: "All Reviews",
          path: "/dashboard/reviews",
          icon: FaHome,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
