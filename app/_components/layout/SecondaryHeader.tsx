"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../i18n/client";
import { SetStateAction, useState } from "react";
import clsx from "clsx";
import { Dispatch } from "react";

const SecondaryHeader = ({
  darkmode,
  setDarkmode,
}: {
  darkmode: boolean;
  setDarkmode: Dispatch<SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation("common");
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="z-50">
      <div className="border-y  border-[#e0e0e0] dark:border-[#262626] bg-white dark:bg-black text-black dark:text-white text-sm ">
        <div className="md:container mx-auto py-2 px-4 lg:px-16 flex justify-between items-center relative">
          <button
            onClick={() =>( setOpenMenu((prev) => !prev))}
            className="sm:hidden dark:invert"
          >
            <Image
              src={"/icons/nav.svg"}
              alt="nav menu"
              width={20}
              height={20}
            />
          </button>

          <nav
            className={clsx(
              "transform duration-700 fixed sm:static sm:translate-0 flex flex-col space-y-8 px-5 py-10 sm:px-0 sm:py-0 top-0 left-0 bottom-0 h-full w-80  sm:w-fit ",
              openMenu
                ? "flex flex-col space-y-8 px-5 py-10 fixed top-0 left-0 bottom-0 bg-[#fafafa] sm:bg-transparent dark:bg-[#0a0a0a] h-full w-80 z-50 sm:z-10"
                : " -translate-x-full "
            )}
          >
            <div className=" sm:hidden flex items-center gap-1.5   ">
              <Image
                src={darkmode ? "/moon-light.svg" : "/sun.svg"}
                alt="dark mode "
                width={14}
                height={14}
              />
              <button
                onClick={() => {
                  setDarkmode((prev) => !prev);
                }}
                className="relative w-9 border border-gray-500 dark:border-[#efefef] h-5 rounded-xl  bg-gray-300 dark:bg-white  cursor-pointer"
              >
                <div
                  className={clsx(
                    "ball rounded-full size-4 bg-white dark:bg-black absolute top-0 left-0 transform duration-500 ease-in-out translate-t-1/2 ",
                    darkmode ? "translate-x-full" : "translate-x-0"
                  )}
                ></div>
              </button>
            </div>
            <button
              onClick={() => setOpenMenu(false)}
              className="sm:hidden flex absolute top-5 right-5 dark:invert"
            >
              <Image
                src={"/icons/close.svg"}
                alt="close"
                width={19}
                height={19}
              />
            </button>
            <ul
              className={clsx(
                " flex flex-col sm:flex-row space-x-1 space-y-5 sm:space-y-0 "
              )}
            >
              {navLinks.map((link) => (
                <li key={link.name} className="">
                  <Link
                    href={link.href}
                    className=" px-3 py-2 sm:rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-sm sm:text-xs capitalize border-b sm:border-b-0 border-gray-500 w-full sm:w-fit block"
                  >
                    {t(link.name.toLowerCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className=" flex gap-2 items-center">
            <button className="text-xs bg-red-600 h-8 text-white px-4 py-2 rounded-lg font-medium cursor-pointer">
              Request a quote
            </button>
            <Link
              href="tel:+2347069309340"
              className="text-xs border border-red-500 text-red-500 flex items-center justify-center gap-2  h-8 px-4 py-2 rounded-lg font-medium cursor-pointer"
            >
              <Image src={"/phone.svg"} alt="phone" width={12} height={12} />
              Call
            </Link>
          </div>
        </div>
      </div>
      {darkmode && (
        <div
          onClick={() => setOpenMenu(false)}
          className="bg-[rgba(0,0,0,0.9)] dark:bg-[(rgba(0,0,0,0.1))] top-0 left-0 right-0 bottom-0  fixed"
        ></div>
      )}{" "}
    </div>
  );
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default SecondaryHeader;
