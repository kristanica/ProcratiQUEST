import type { IconType } from "react-icons";
import { FaHome, FaUser, FaCog, FaTasks } from "react-icons/fa";

type NavItem = {
  id: number;
  name: string;
  to: string;
  icon: IconType;
};

export const navigation: readonly NavItem[] = [
  { id: 1, name: "Homepage", to: "/homepage", icon: FaHome },
  { id: 2, name: "Profile", to: "/profile", icon: FaUser },
  { id: 3, name: "Settings", to: "/settings", icon: FaCog },
  { id: 4, name: "Taskboard", to: "/taskboard", icon: FaTasks },
] as const;
