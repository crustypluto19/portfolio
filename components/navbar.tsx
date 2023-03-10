'use client';

import { Menu, Transition } from "@headlessui/react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '../public/assets/logo.jpeg';
import ThemeSwitcher from "./themeswitcher";

export default function NavBar() {
  const pathName = usePathname();
  
  return (
    <nav className="sticky w-screen top-0 z-50 flex items-center justify-between flex-wrap px-6 pr-3 py-1.5 sm:py-3 text-center backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center transition ease-in-out hover:scale-105 hover:text-rose-700 duration-300">
          <div className='relative shrink-0 h-12 w-12'>
            <Image priority src={logo} alt="Logo" fill className="rounded-lg" />
          </div>
          <span className="font-semibold text-md sm:text-2xl whitespace-nowrap pl-3">
            Evan Christopher
          </span>
        </Link>
        
        <div className="flex flex-row">
        <div className="hidden items-center justify-center py-2 mr-6 sm:block sm:w-auto">
          <div className="text-md flex">
            <Link href="/about" className={`${pathName == "/about" ? "bg-rose-600 text-white hover:text-slate-50" : ""} block my-auto lg:inline-block transition ease-in-out hover:text-red-700 hover:scale-110 rounded-md mr-4`}>
              <div className="p-1">About</div>
            </Link>
            <Link href="/works" className={`${pathName == "/works" ? "bg-rose-600 text-white hover:text-slate-50" : ""} block my-auto lg:inline-block transition ease-in-out hover:text-red-700 hover:scale-110 rounded-md mr-4`}>
              <div className="p-1">Works</div>
            </Link>
            <Link href="/contact" className={`${pathName == "/contact" ? "bg-rose-600 text-white hover:text-slate-50" : ""} block my-auto lg:inline-block transition ease-in-out hover:text-red-700 hover:scale-110 rounded-md mr-4`}>
              <div className="p-1">Contact</div>
            </Link>
          </div>
        </div>
          <ThemeSwitcher />
          <div className="sm:hidden cursor-pointer ml-1 sm:ml-0">
            {/* Burger menu */}
            <Menu as="div" className="relative inline-block text-left text-base">
              {({ open }) => (
                <>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2 font-medium text-gray-500 focus:outline-none focus-visible:ring-2">
                    {
                      open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                      )
                    }
                  </Menu.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items static className="text-lg bg-white text-zinc-800 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-slate-100 dark:divide-slate-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/about" className={`${
                            active || pathName == "/about" ? 'bg-red-700 text-white' : ''
                          } group flex w-full items-center rounded-md p-4`}>
                            About
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/works" className={`${
                            active || pathName == "/works" ? 'bg-red-700 text-white' : ''
                          } group flex w-full items-center rounded-md p-4`}>
                            Works
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/contact" className={`${
                            active || pathName == "/contact" ? 'bg-red-700 text-white' : ''
                          } group flex w-full items-center rounded-md p-4`}>
                            Contact
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>  
              )}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  )
}