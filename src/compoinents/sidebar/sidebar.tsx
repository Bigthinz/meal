"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import SidebarContent from "./sidebar-content";
import { SidebarMobile } from "./sidebar-mobile";
import { MenuState, navigationItems } from "./dto/sidebar-dto";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  //   const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [openMenus, setOpenMenus] = useState<MenuState>({});
  const router = usePathname();

  const [selectedEntity, setSelectedEntity] = useState<string>("OAL");

  const handleEntityChange = (value: string) => {
    setSelectedEntity(value);
    console.log("Selected entity:", value);
  };

  const toggleMenu = (itemName: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const Entityoptions = [
    { value: "OAL", label: " OAL" },
    { value: "OACI", label: "OACI" },
  ];

  return (
    <>
      <SidebarMobile
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigationItems={navigationItems}
        router={router}
        openMenus={openMenus}
        toggleMenu={toggleMenu}
      />
      <div className="my-auto hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-56 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-gray-200 bg-white px-6 pb-4 pt-10">
          <SidebarContent
            navigationItems={navigationItems}
            router={router}
            openMenus={openMenus}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
