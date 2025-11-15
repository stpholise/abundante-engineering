"use client";
import { ReactNode } from "react";
import ServiceCard from "../../_components/cards/ServiceCard";
import { useTranslation } from "../../i18n/client";
import LatestNewsCard from "../../_components/cards/LatestNewsCard";
import Image from "next/image";

type Service = { key: string; title: string; text: string; icon: string };

const ClientWrapper = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation("common");
  const rawServices = t("sections.services.items", { returnObjects: true });
  const services: Service[] = Array.isArray(rawServices) ? rawServices : [];

  const childrenArray = Array.isArray(children) ? children : [children];

  const FeaturedProjects = childrenArray[0]; 

  return (
    <div className="bg-white dark:bg-[#0a0a0a]   min-h-screen w-full">
      <div className="hero bg-[url('/hero.jpg')]  bg-no-repeat bg-center bg-cover h-fit py-7 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold  text-white dark:text-white text-center pt-20  ">
          {t("welcomeTitle")}
        </h1>
        <p className="mt-4 text-lg text-[#f5f1f0] max-w-[800px]  text-center px-4">
          {t("welcomeText")}
        </p>
        <div className="flex gap-4 my-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 h-9">
            {t("requestQuote")}
            <Image
              src={"/arrow-right-white.svg"}
              alt="quote"
              width={14}
              height={13}
            />
          </button>
          <button className="bg-gray-200 text-blue-600 h-9 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
            {t("contactBtn")}
          </button>
        </div>
      </div>
      <section className="services  dark:bg-black">
        <div className="container mx-auto lg:px-16 py-12  ">
          <div className="">
            <h2 className="text-2xl font-bold text-center dark:text-white text-black">
              {t("sections.services.title")}
            </h2>
            <p className=" text-gray-500 dark:text-[#a1a1a1] mt-2 mb-6 text-base text-center">
              {t("sections.services.description")}
            </p>
          </div>
          <div className="   grid grid-cols-3 justify-between gap-4 w-full py-6 px-1      dark:border-gray-700">
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
          <div >
            {FeaturedProjects}
          </div>
          <div className="">
            <button className="mx-auto bg-red-600 text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 h-9">
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
          <div className="grid lg:grid-cols-3 gap-7 py-6">
            {[...Array(3)].map((_, index) => (
              <div className="" key={index}>
                <LatestNewsCard
                  category={`Category ${index + 1}`}
                  title={`Latest News ${index + 1}`}
                  text={`Description for latest news ${index + 1}`}
                  date={`${new Date().toLocaleDateString()}`}
                />
              </div>
            ))}
          </div>
          <div className="">
            <button className="mx-auto  border border-[#e6e6e6] dark:border-[#262626] dark:bg-[#1c1c1c] dark:text-white  text-[#121212] hover:bg-[#eaeaea] px-4 py-2 rounded-lg text-xs flex items-center gap-2 h-8">
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
        <div className="container px-16 py-10 flex items-center justify-evenly gap-16 text-white">
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
