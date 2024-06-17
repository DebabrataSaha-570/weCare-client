import { USER_ROLE } from "../constants/role";
import { DrawerItems, UserRole } from "../types";
import { FaListUl } from "react-icons/fa6";
import { FaPlus, FaUsers, FaClipboardList, FaHome } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { RiFileList2Fill } from "react-icons/ri";

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
          icon: FaListUl,
        },
        {
          title: "My Review",
          path: "/dashboard/my-review",
          icon: RiFileList2Fill,
        },
        {
          title: "Add Donation",
          path: "/dashboard/add-donation",
          icon: FaPlus,
        },
        {
          title: "Add Review",
          path: "/dashboard/add-review",
          icon: MdRateReview,
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
          icon: FaListUl,
        },
        {
          title: "All Users",
          path: "/dashboard/users",
          icon: FaUsers,
        },
        {
          title: "All Reviews",
          path: "/dashboard/reviews",
          icon: FaClipboardList,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
