"use client";
import { ReactNode } from "react";
import ServiceCard from "../../_components/cards/ServiceCard"; 
import { useRouter } from "next/navigation";

import Image from "next/image";

type Service = { key: string; title: string; text: string; icon: string };

const services: Service[] =[
        {
          "key": "installation",
          "icon": "/icons/building-red.svg",
          "title": "Installation",
          "text": "Professional installation services ensuring safety and efficiency."
        },
         {
          "key": "maintenance",
          "icon": "/icons/wrench-red.svg",
          "title": "Maintenance & Repair",
          "text": "Regular maintenance to ensure optimal performance and safety."
        },
        {
          "key": "modernization",
          "icon": "/icons/setting-red.svg",
          "title": "Modernization",
          "text": "Upgrading existing systems with the latest technology."
        },
        {
          "key": "escalator_moving_walkways",
          "icon": "/icons/arrow-up-red.svg",
          "title": "Escalator & Moving Walkways",
          "text": "Complete escalator and moving walkway solutions for high-traffic areas."
        },
        {
          "key": "spare_parts",
          "icon": "/icons/hammer-red.svg",
          "title": "Spare Parts",
          "text": "Genuine spare parts for all elevator and escalator models."
        },
        {
          "key": "consultation_project_mgmt",
          "icon": "/icons/message-red.svg",
          "title": "Consultation & Project Management",
          "text": "Expert consultation and project management services for all elevator and escalator projects."
        }
      ]



const ClientWrapper = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  // const { t } = useTranslation("common");
  // const rawServices = t("sections.services.items", { returnObjects: true });
  // const services: Service[] = Array.isArray(rawServices) ? rawServices : [];

  const childrenArray = Array.isArray(children) ? children : [children];

  const FeaturedProjects = childrenArray[0];
  const LatestNews = childrenArray[1];

  return (
    <div className="bg-white dark:bg-[#0a0a0a]   min-h-screen w-full">
      <div className="hero bg-[url('/hero.jpg')]  bg-no-repeat bg-center bg-cover h-fit py-7 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold  text-white dark:text-white text-center pt-20  ">
          Welcome to Abundant Engineering
        </h1>
        <p className="mt-4 text-lg text-[#f5f1f0] max-w-[800px]  text-center px-4">
          Welcome to Abundant Engineering, a leading force in the elevator
          industry dedicated to delivering innovative and reliable vertical
          transportation solutions. With a commitment to quality and excellence,
          we specialize in designing, installing, and maintaining elevators that
          ensure safety, efficiency, and comfort. Our team of experienced
          professionals combines industry expertise with cutting-edge technology
          to offer a full range of services, including elevator installation,
          modernization, maintenance, and repair. At Abundant Engineering, we
          pride ourselves on understanding our clients&apos; unique needs and
          providing customized solutions that enhance building functionality and
          elevate user experience. Founded on the principles of integrity,
          innovation, and performance, Abundant Engineering is your trusted
          partner in navigating the evolving landscape of vertical mobility.
          Join us in transforming your building&apos;s potential with safe,
          efficient, and state-of-the-art elevator solutions that make a lasting
          impact.
        </p>
        <div className="flex gap-4 my-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 h-9">
            Request a Quote
            <Image
              src={"/arrow-right-white.svg"}
              alt="quote"
              width={14}
              height={13}
            />
          </button>
          <button className="bg-gray-200 text-blue-600 h-9 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
            Contact
          </button>
        </div>
      </div>
      <section className="services  dark:bg-black">
        <div className="sm:container mx-auto lg:px-16 md:px-8 px:4 py-12  ">
          <div className="">
            <h2 className="text-2xl font-bold text-center dark:text-white text-black">
              Our Services
            </h2>
            <p className=" text-gray-500 dark:text-[#a1a1a1] mt-2 mb-6 text-base text-center">
              Comprehensive elevator solutions from installation to maintenance
            </p>
          </div>
          <div className="   border-black grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 justify-center xs:justify-between gap-4 w-full py-6 px-1    dark:border-gray-700">
            {services.map((service) => (
              <div className="" key={service.key}>
                <ServiceCard
                  title={service.title}
                  text={service.text}
                  value={service.key}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fafafa] dark:bg-[#121212]">
        <div className="container mx-auto lg:px-16 py-12">
          <div className="">
            <h2 className="text-2xl font-bold text-center dark:text-white text-black">
              Featured Projects
            </h2>
            <p className=" text-gray-500 dark:text-[#a1a1a1] mt-2 mb-6 text-base text-center">
              Recent successful installations and maintenance projects
            </p>
          </div>
          <div>{FeaturedProjects}</div>
          <div className="">
            <button
              onClick={() => router.push("/projects")}
              className="mx-auto bg-red-600 text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 h-9"
            >
              View All Projects
              <Image
                src={"/arrow-right-white.svg"}
                alt="quote"
                width={14}
                height={13}
              />
            </button>
          </div>
        </div>
      </section>

      <section className="dark:bg-black">
        <div className="container mx-auto lg:px-16 py-12">
          <div className="">
            <h2 className="text-2xl font-bold text-center text-black dark:text-white">
              Latest News
            </h2>
            <p className=" text-gray-500 dark:text-[#a1a1a1] mt-2 mb-6 text-base text-center">
              Industry insights and company updates
            </p>
          </div>
          <div className="">{LatestNews}</div>
          <div className="">
            <button
              onClick={() => router.push("/news")}
              className="mx-auto  border border-[#e6e6e6] dark:border-[#262626] dark:bg-[#1c1c1c] dark:text-white  text-[#121212] hover:bg-[#eaeaea] px-4 py-2 rounded-lg text-xs flex items-center gap-2 h-8"
            >
              View All News
              <Image
                src={"/arrow-right-white.svg"}
                alt="quote"
                width={14}
                height={13}
                className="dark:invert-0 invert"
              />
            </button>
          </div>
        </div>
      </section>
      <div className="bg-[#114a99] h-40  ">
        <div className="sm:container  mx-auto lg:px-16 py-10 flex items-center justify-evenly gap-6 lg:gap-16 text-white">
          <div className="flex flex-col items-center justify-center gap-1">
            <Image
              src={"/icons/medal-ribbon-light.svg"}
              alt="medal icon"
              width={80}
              height={80}
              className=" size-8"
            />
            <h4 className="font-bold text-xl"> 15+</h4>
            <p className="text-xs">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image
              src={"/icons/shield-light.svg"}
              alt="shield icon"
              width={80}
              height={80}
              className=" size-8"
            />
            <h4 className="font-bold text-xl"> IFE</h4>
            <p className="text-xs">Authorized Agent</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image
              src={"/icons/clock-light.svg"}
              alt="user group icon"
              width={80}
              height={80}
              className=" size-8"
            />
            <h4 className="font-bold text-xl"> 24/7</h4>
            <p className="text-xs">Support</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image
              src={"/icons/users-light.svg"}
              alt="user group icon"
              width={80}
              height={80}
              className=" size-8"
            />
            <h4 className="font-bold text-xl"> 100%</h4>
            <p className="text-xs">Warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientWrapper;
