"use client";
import Image from "next/image";
import clsx from "clsx";
import { useState, useEffect } from "react";
import SecondaryHeader from "./SecondaryHeader";
import Link from "next/link";

const PrimaryHeader = () => {
  const [darkmode, setDarkmode] = useState<boolean>(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkmode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <div className="  bg-[#fafafa] dark:bg-[#121212] text-black dark:text-white">
        <div className="md:container mx-auto  flex justify-between items-center py-2 px-4 lg:px-16 md:px-8 sm:px-4 ">
          <div className="flex   gap-2 items-center justify-items-start">
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              className=" size-8"
            />
            <Link href={"/"} className="text-xs text-black dark:text-white">
              Abundant Engineering
            </Link>
          </div>

          <div className="flex items-ceter gap-4">
            <div className="xs:flex gap-1 items-center  justify-center hidden ">
              <Image src={"/globe.svg"} alt="language" width="12" height="12" />
              {/* <button
                className="text-xs cursor-pointer"
                onClick={() =>
                  i18n.changeLanguage(
                    i18n.language === "en"
                      ? "de"
                      : i18n.language === "de"
                        ? "fr"
                        : "en"
                  )
                }
              >
                {i18n.language === "en"
                  ? "DE"
                  : i18n.language === "de"
                    ? "FR"
                    : "EN"}
              </button> */}
            </div>
            <div className=" hidden xs:flex items-center gap-1.5 ">
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
                className="relative w-8  h-4 rounded-lg  bg-gray-300 dark:bg-white  cursor-pointer"
              >
                <div
                  className={clsx(
                    "ball rounded-full size-4 bg-white dark:bg-black absolute top-0 left-0 transform duration-500 ease-in-out translate-t-1/2 ",
                    darkmode ? "translate-x-full" : "translate-x-0"
                  )}
                ></div>
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <button className="cursor-pointer text-sm text-[#717182] font-medium hover:text-black dark:hover:text-white">
                Sign Up
              </button>
             <span className="block">|</span> 
              <button className="cursor-pointer hidden 2xs:block text-sm text-[#717182] font-medium hover:text-black dark:hover:text-white">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <SecondaryHeader darkmode={darkmode} setDarkmode={setDarkmode} />
    </header>
  );
};

export default PrimaryHeader;
