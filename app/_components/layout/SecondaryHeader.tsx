import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../../i18n/client";

const SecondaryHeader = () => {
  const { t } = useTranslation("common");

  return (
    <div className="z-50">
      <div className="border-y  border-[#e0e0e0] dark:border-[#262626] bg-white dark:bg-black text-black dark:text-white text-sm ">
        <div className="container mx-auto py-2 px-4 lg:px-16 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-1">
              {navLinks.map((link) => (
                <li key={link.name} className="">
                  <Link
                    href={link.href}
                    className=" px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-xs"
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
    </div>
  );
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default SecondaryHeader;
