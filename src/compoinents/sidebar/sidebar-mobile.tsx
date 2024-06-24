import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { SidebarMobileProps } from './dto/sidebar-dto';
import SidebarMobileContent from './sidebar-mobile-content';

export const SidebarMobile: React.FC<SidebarMobileProps> = ({
  sidebarOpen,
  setSidebarOpen,
  navigationItems,
  router,
  openMenus,
  toggleMenu,
}) => {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/80" />
        </Transition.Child>
        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative  flex w-full max-w-md flex-1 md:max-w-xs">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-full top-0 flex w-1 justify-center pt-5"></div>
              </Transition.Child>

              <SidebarMobileContent
                setSidebarOpen={setSidebarOpen}
                navigationItems={navigationItems}
                router={router}
                openMenus={openMenus}
                toggleMenu={toggleMenu}
              />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
