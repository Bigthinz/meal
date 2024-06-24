"use client";

import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { ProfileDropdown } from "../profile-dropdown/profile-dropdown";
import Sidebar from "../sidebar/sidebar";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Sidebar /> */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="bg-gray-50 lg:pl-60">
        <div className="sticky top-0 z-10 bg-gray-50 bg-opacity-90 backdrop-blur-lg  backdrop-saturate-150 lg:mx-auto lg:max-w-7xl lg:px-8">
          <div className="flex h-16 items-center gap-x-4   px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
            <button
              type="button"
              className="z-40 -m-2.5 w-20 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <div className="flex flex-1 items-center justify-between gap-x-4 self-stretch lg:gap-x-6">
              <div
                // onClick={() => Router.push('/profile')}
                className=" flex justify-between gap-x-4  self-stretch lg:gap-x-6"
              >
                <div className="flex items-center gap-x-4 lg:gap-x-6"></div>
              </div>
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Your content */}
            <div>{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
