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
          path: "/dashboard/user/my-donation",
          icon: FaHome,
        },
        {
          title: "Add Donation",
          path: "/dashboard/user/add-donation",
          icon: FaHome,
        },
        {
          title: "Add Review",
          path: "/dashboard/user/add-review",
          icon: FaHome,
        },
        {
          title: "My Review",
          path: "/dashboard/user/my-review",
          icon: FaHome,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: "/dashboard/admin",
          icon: FaHome,
        },
        {
          title: "All Donations",
          path: "/dashboard/admin/all-donation",
          icon: FaHome,
        },
        {
          title: "All Users",
          path: "/dashboard/admin/users",
          icon: FaHome,
        },
        {
          title: "All Reviews",
          path: "/dashboard/admin/reviews",
          icon: FaHome,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
