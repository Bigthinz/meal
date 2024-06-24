import { ArrowUpDown, LayoutDashboard, Users } from "lucide-react";

export interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  current: boolean;
  subItems?: SubItem[];
}

export interface SubItem {
  name: string;
  href: string;
}

export interface MenuState {
  [key: string]: boolean;
}

export interface NavigationItem {
  name: string;
  href: string;
  icon: any;
  current: boolean;
  subItems?: SubItem[];
}

interface IconProps {
  className?: string;
}

export interface SidebarItemProps {
  item: NavigationItem;
  router: string;
  openMenus: { [key: string]: boolean };
  toggleMenu: (itemName: string) => void;
}

export interface SidebarContentProps {
  navigationItems: NavigationItem[];
  router: string;
  openMenus: { [key: string]: boolean };
  toggleMenu: (itemName: string) => void;
}
export interface SidebarContentPropsMb {
  setSidebarOpen: (open: boolean) => void;
  navigationItems: NavigationItem[];
  router: string;
  openMenus: { [key: string]: boolean };
  toggleMenu: (itemName: string) => void;
}

export interface SidebarMobileProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  navigationItems: NavigationItem[];
  router: string;
  openMenus: { [key: string]: boolean };
  toggleMenu: (itemName: string) => void;
}

interface IconProps {
  className?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    name: "Homepage",
    href: "/",
    icon: LayoutDashboard,
    current: true,
  },

  {
    name: "Menu",
    href: "/menu",
    icon: Users,
    current: false,
  },
  {
    name: "My favorites",
    href: "/myfavorites",
    icon: Users,
    current: false,
  },

  {
    name: "Random meals",
    href: "/random-meals",
    icon: Users,
    current: false,
  },
];
