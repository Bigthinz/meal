import SidebarItem from "./sidebar-item";
import { SidebarContentPropsMb } from "./dto/sidebar-dto";
import { useState } from "react";
import { X } from "lucide-react";

const SidebarMobileContent: React.FC<SidebarContentPropsMb> = ({
  setSidebarOpen,
  navigationItems,
  router,
  openMenus,
  toggleMenu,
}) => {
  const [selectedEntity, setSelectedEntity] = useState<string>("OAL");

  const handleEntityChange = (value: string) => {
    setSelectedEntity(value);
    console.log("Selected entity:", value);
  };

  const Entityoptions = [
    { value: "OAL", label: " OAL" },
    { value: "OACI", label: "OACI" },
  ];

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white  pb-4">
      <div className="absolute left-full top-0 flex w-16 justify-center pt-5"></div>
      <div className="mr-4 flex h-16 shrink-0 items-center justify-end">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-black"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close sidebar</span>
        </button>
      </div>
      <nav className="flex flex-1 flex-col px-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigationItems.map((item) => (
                <SidebarItem
                  key={item.name}
                  item={item}
                  router={router}
                  openMenus={openMenus}
                  toggleMenu={toggleMenu}
                />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarMobileContent;
