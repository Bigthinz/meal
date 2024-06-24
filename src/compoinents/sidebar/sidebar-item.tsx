import Link from 'next/link';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react';
import { SidebarItemProps } from './dto/sidebar-dto';

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  router,
  openMenus,
  toggleMenu,
}) => (
  <li key={item.name} className="">
    <div className="flex items-center justify-between">
      <Link
        href={item.href}
        onClick={() => toggleMenu(item.name)}
        className={`group mb-3 flex w-full items-center gap-x-3 rounded-md  p-2 px-4 text-[0.8rem] font-medium leading-6 ${
          item.href === router
            ? 'bg-gray-100 text-slate-700'
            : 'rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#4b4a48]'
        }`}
      >
        <item.icon
          className={`h-5 w-5 shrink-0 ${
            item.href === router
              ? 'text-slate-700'
              : 'text-gray-400 group-hover:text-gray-700'
          }`}
          aria-hidden="true"
        />
        <span className="flex w-full items-center justify-between">
          <span>{item.name}</span>
          {item.subItems && (
            <button
              onClick={() => toggleMenu(item.name)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {openMenus[item.name] ? (
                <ChevronDownIcon className="h-4 w-4" />
              ) : (
                <ChevronRightIcon className="h-4 w-4" />
              )}
            </button>
          )}
        </span>
      </Link>
    </div>
    {item.subItems && (
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openMenus[item.name]
            ? 'max-h-[1000px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mb-1">
          {item.subItems.map(subItem => (
            <li key={subItem.name}>
              <Link
                href={subItem.href}
                className={`group mb-2 block w-full gap-x-3 rounded-md p-2 pr-6 text-center text-[0.8rem] font-medium leading-5 ${
                  subItem.href === router
                    ? 'bg-gray-100 text-slate-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#4b4a48]'
                }`}
              >
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
);

export default SidebarItem;
