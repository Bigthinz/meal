'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { User } from 'lucide-react';

// const menuItems = useMenuItems();

interface MenuItem {
  label: string;
  action?: () => void;
  shortcut?: string;
  subItems?: MenuItem[];
}

interface ProfileDropdownProps {
  menuItems: MenuItem[];
  profileName: string;
}

const checkShortcut = (event: KeyboardEvent, shortcut: string): boolean => {
  const keys = shortcut.split('+');
  return keys.every(key => {
    if (key === '⇧') return event.shiftKey;
    if (key === '⌘') return event.metaKey;
    return event.key.toUpperCase() === key.toUpperCase();
  });
};

export function ProfileDropdown({
  menuItems,
  profileName,
}: ProfileDropdownProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      for (const item of menuItems) {
        if (
          item.shortcut &&
          checkShortcut(event, item.shortcut) &&
          item.action
        ) {
          event.preventDefault();
          item.action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuItems]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className=" w-36 bg-transparent text-slate-600 hover:bg-transparent "
        >
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 overflow-hidden rounded-full border-0"
          >
            <User className="h-4 w-4 rounded-full  text-[#71717A]" />
          </Button>
          <span className="pl-4 text-sm">{profileName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 lg:w-52">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              {!item.subItems && (
                <DropdownMenuItem onSelect={item.action}>
                  {item.label}
                  {item.shortcut && (
                    <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                  )}
                </DropdownMenuItem>
              )}

              {item.subItems && (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {item.subItems.map((subItem, subIndex) => (
                        <DropdownMenuItem
                          key={subIndex}
                          onSelect={subItem.action}
                        >
                          {subItem.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              )}
              {index < menuItems.length - 1 && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
