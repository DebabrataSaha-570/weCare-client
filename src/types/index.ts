import { USER_ROLE } from "../constants/role";
import { IconType } from "react-icons";
export type UserRole = keyof typeof USER_ROLE;

export type DrawerItems = {
  title: string;
  path: string;
  parentPath?: string;
  icon?: IconType;
  child?: DrawerItems[];
};
