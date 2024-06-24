import SidebarItem from './sidebar-item';
import { SidebarContentProps } from './dto/sidebar-dto';

const SidebarContent: React.FC<SidebarContentProps> = ({
  navigationItems,
  router,
  openMenus,
  toggleMenu,
}) => (
  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white  pb-4">
    <div className="flex h-8 shrink-0 items-center" />
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className=" space-y-1">
            {navigationItems.map(item => (
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

export default SidebarContent;
