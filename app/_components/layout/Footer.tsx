import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] dark:bg-[#171717] text-[#121212] dark:text-white py-12 ">
      <div className="container mx-auto px-4 lg:px-16">
        <section className="  flex gap-8 justify-between border-b border-[#262626] pb-8">
          <div className="flex md:flex-row flex-col sm:flex-row  lg:justify-between  gap-6 sm:gap-10   lg:gap-12   flex-wrap md:justify-between  ">
            <div className="w-60  ">
              <h2 className="text-sm font-semibold text-left text-black dark:text-white">
                Contact{" "}
              </h2>
              <div className="mt-1">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 leading-4.5 mt-2.5 cursor-pointer"
                  >
                    <Image src={info.icon} alt="icon" width={12} height={12} />
                    <span className="text-xs ">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-60">
              <h2 className="text-sm font-semibold text-left text-black dark:text-white ">
                Services{" "}
              </h2>
              <div className="mt-1">
                {services.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 leading-4.5 mt-2.5 cursor-pointer "
                  >
                    <Link href={info.link} passHref>
                      <span className="text-xs hover:text-[#0a0a0a] text-[#7f7f8f] dark:text-gray-400 dark:hover:text-white capitalize">
                        {info.name}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-60">
              <h2 className="text-sm font-semibold text-left text-black dark:text-white ">
                Company{" "}
              </h2>
              <div className="mt-1">
                {company.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 leading-4.5 mt-2.5 cursor-pointer "
                  >
                    <Link href={info.link} passHref>
                      <span className="text-xs hover:text-[#0a0a0a] text-[#7f7f8f] dark:text-gray-400 dark:hover:text-white capitalize">
                        {info.name}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <section className="">
              <div className="max-w-70 min-w-70 lg:w-70 ">
                <h2 className="text-sm font-semibold text-left text-black dark:text-white ">
                  Connect
                </h2>
                <div className="mt-3.5 mb-2 flex items-center gap-4">
                  {socialMedia.map((media, index) => (
                    <Link
                      key={index}
                      href={media.link}
                      passHref
                      className="size-6 dark:invert bg-gray-200  rounded-sm  flex item-center justify-center "
                    >
                      <Image
                        src={media.icon}
                        alt="icon"
                        width={14}
                        height={14}
                        className=""
                      />
                    </Link>
                  ))}
                </div>
                <button className="text-xs bg-red-600 h-7 w-full text-white px-4 py-2 mt-2 rounded-lg font-medium cursor-pointer flex items-center justify-center gap-2">
                  Request a quote
                </button>
                <button className="text-xs border border-[#e6e6e6] bg-white dark:bg-[#1c1c1c] dark:border-[#262626] dark:text-white h-7 w-full text-[#0a0a0a] px-4 py-2 mt-2 rounded-lg font-medium cursor-pointer flex items-center justify-center gap-2">
                  FAQ
                </button>
              </div>
            </section>
          </div>
        </section>

        <div className="flex flex-col items-center py-8">
          <p className="text-xs text-center mb-4 dark:text-gray-400 text-gray-600">
            Abundant Engineering P.L.C. is an authorized agent for IFE ELEVATORS
            CO., LTD to submit tenders and offers to all government
            organizations and departments and private organizations in Ethiopia
            for their entire range of Elevators and Escalators.
          </p>
          <div className="flex w-full justify-between items-center">
            <p className="text-xs dark:text-gray-400 text-gray-600 ">
              &copy; {new Date().getFullYear()} Abundant Engineering. All rights
              reserved.
            </p>
            <div className="">
              <p className="text-xs ml-auto dark:text-gray-400 text-gray-600 ">
                Privacy Policy &nbsp; | &nbsp; Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const contactInfo = [
  {
    icon: "/icons/location-light.svg",
    value: "Addis Ababa, Kera to Gofa Oromia Building",
  },
  { icon: "/icons/phone-light.svg", value: "+1 (555) 123-4567" },
  { icon: "/icons/phone-light.svg", value: "+1 (555) 123-4567" },
  { icon: "/icons/phone-light.svg", value: "+1 (555) 123-4567" },
  { icon: "/icons/mail-light.svg", value: "info@abundantengineering.com" },
];

const services = [
  { link: "/", name: " installation" },
  { link: "/", name: "maintenance & repair" },
  { link: "/", name: "modernization " },
  { link: "/", name: "consultation" },
  { link: "/", name: "safety inspections" },
];

const company = [
  { link: "/", name: "Home" },
  { link: "/", name: "About" },
  { link: "/", name: "Projects" },
  { link: "/", name: "News" },
  { link: "/", name: "Contact" },
];

const socialMedia = [
  { link: "/", icon: "/icons/instagram-dark.svg" },
  { link: "/", icon: "/icons/facebook-dark.svg" },
  { link: "/", icon: "/icons/linkedin-dark.svg" },
  { link: "/", icon: "/icons/youtube-dark.svg" },
];

export default Footer;
