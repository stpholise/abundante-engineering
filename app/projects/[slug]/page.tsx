"use server";
import clsx from "clsx";

import { notFound } from "next/navigation";
import Link from "next/link";
type Project = {
  _id: string;
  _createdAt: string;
  _type: string;
  slug: { current: string };
  title: string;
  description: string;
  completed: string;
  name: string;
  location: string;
  projectCategory: string;
  gallery: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
    caption: string;
  }[];
  start: string;
  end: string;
  scope: string;
  sector: string;
};
import Image from "next/image";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  try {
    const { slug } = await params;

    const url = `https://2f7v75aq.api.sanity.io/v2025-11-04/data/query/production?query=+*[slug.current=="${slug}"]{
  _id,
  _createdAt,
  _type,
  slug,
  title,
  description,
  completed,
  name,
  location,
  projectCategory,
  gallery[]{
    asset->{
      _id,  
      url
    },
    alt,
    caption
  },
  start,
  end, 
  scope,
  sector
    }`;

    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch project data:", res.statusText);
      throw new Error("Failed to fetch data");
    }
    const rawData = await res.json();
    const data = await rawData.result;
    const {
      name,
      gallery,
      completed,
      projectCategory,
      location,
      start,
      end,
      scope,
      sector,
    } = data[0] as Project;

    const startYear = new Date(start).getFullYear();
    const endYear = new Date(end).getFullYear();

    if (!data || data.length === 0) {
      notFound();
    }
    return (
      <div className="bg-blue bg-white dark:bg-[#0a0a0a] w-full ">
        <div className="container lg:px-16 mx-auto py-10">
          <div className=" text-xs flex items-center mb-6">
            <Link
              href="/projects"
              className="text-sm text-[#7f7f8f]  dark:text-[#a1a1a1]  hover:underline"
            >
              Projects
            </Link>
            <Image
              src="/icons/chevron-right-light.svg"
              alt="Back to Projects"
              width={13}
              height={14}
            />
            <span className="text-[#262626] dark:text-[#fafafa] ml-2">
              {name}
            </span>
          </div>
          <div
            className={`w-full h-70 object center overflow-hidden bg-no-repeat bg-cover rounded-2xl border border-gray-50  text-white bg-top-center shadow-[inset_0_0_0_2000px_rgba(0,0,0,0.4)] flex items-end px-7 py-8`}
            style={{
              backgroundImage:
                gallery.length > 0 ? `url(${gallery[0].asset.url})` : "none",
              backgroundColor: gallery.length === 0 ? "white" : undefined,
            }}
          >
            <div className="test-content">
              <div className="flex gap-2">
                <p
                  className={clsx(
                    "text-[11px] px-2 py-1 flex items-center  rounded-lg h-5 w-fit ",
                    {
                      "bg-red-500 text-white": completed,
                      "bg-gray-300 text-black": !completed,
                    }
                  )}
                >
                  {completed ? "Completed" : "Ongoing"}
                </p>
                <p className="text-white border border-white w-fit px-2 h-5 flex items-center justify-center text-xs capitalize rounded-lg text-[10px] ">
                  {projectCategory}
                </p>
              </div>
              <h2 className="text-white font-bold text-[28px]">{name}</h2>
              <div className="flex items-center gap-4">
                <p className="flex  items-center text-sm gap-1">
                  <Image
                    src="/icons/location-white.svg"
                    alt="Location"
                    width={13}
                    height={14}
                  />
                  {location}
                </p>
                <p className="flex  items-center text-sm gap-1">
                  <Image
                    src="/icons/calendar-light.svg"
                    alt="Location"
                    width={13}
                    height={14}
                  />
                  {startYear} - {endYear}
                </p>
              </div>
            </div>
          </div>
          <main className="lg:grid lg:grid-cols-[8fr_4fr] grid-cols-1 gap-6 mt-10">
            <div className="flex flex-col gap-6 mb-6">
              <section className="border border-gray-200 rounded-lg px-4 py-4">
                <h3 className="text-sm font-medium mb-4 text-[#262626]  dark:text-[#fafafa] ">
                  Project overview
                </h3>
                <div className="flex flex-wrap  md:flex-row  lg:flex-nowrap gap-4 justify-evenly">
                  <div className=" flex flex-col items-center justify-center ">
                    <h4 className="text-red-500  font-semibold text-xl capitalize">
                      {scope} Projects
                    </h4>
                    <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-sm">Scope</p>
                  </div>
                  <div className=" flex flex-col items-center justify-center ">
                    <h4 className="text-red-500  font-semibold text-xl">
                      {scope} Building
                    </h4>
                    <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-sm">System</p>
                  </div>
                  <div className=" flex flex-col items-center justify-center ">
                    <h4 className="text-red-500  font-semibold text-xl">
                      {startYear}
                    </h4>
                    <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-sm">Started</p>
                  </div>
                  <div className=" flex flex-col items-center justify-center ">
                    <h4 className="text-red-500  font-semibold text-xl capitalize">
                      {sector}
                    </h4>
                    <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-sm">Sector</p>
                  </div>
                </div>
              </section>
              <section className="border border-gray-200 rounded-lg px-4 py-4">
                <h3 className="text-sm font-medium mb-4 text-[#262626]  dark:text-[#fafafa]  capitalize">
                  case study
                </h3>
                <h4 className="text-red-500 font-semibold text-base capitalize">
                  Problem
                </h4>
                <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-sm leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <h4 className="text-blue-500 font-semibold text-base my-4 capitalize">
                  Solution
                </h4>
                <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-sm leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <h4 className="text-green-500 font-semibold text-base my-4 capitalize">
                  Outcome
                </h4>
                <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-sm leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </section>
              <section className="border border-gray-200 rounded-lg px-4 py-4">
                <div className=" flex gap-3 text-sm font-medium mb-4 text-[#262626]  dark:text-[#fafafa]  capitalize">
                  <Image
                    src={"/icons/checked-tick-red.svg"}
                    alt="icon"
                    width={16}
                    height={16}
                  />{" "}
                  <span>Technical Implementation</span>
                </div>
                <p className="text-[#7f7f8f]  dark:text-[#a1a1a1] text-sm leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </section>
              <section className="border border-gray-200 rounded-lg px-4 py-4">
                <h3 className="text-sm font-medium mb-4 text-[#262626]  dark:text-[#fafafa]  capitalize">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {gallery.map((image, index) => (
                    <div key={index} className="bg-gray-100">
                      <Image
                        src={image.asset.url}
                        alt={image.alt || "project image"}
                        width={800}
                        height={700}
                        className="rounded-md object-cover  w-full h-48"
                      />{" "}
                    </div>
                  ))}
                </div>
              </section>
              <section className="border border-gray-200 dark:bg-[#1a1a1a] rounded-lg px-4 py-4 bg-gray-50">
                <Image
                  src={"/icons/quote-red.svg"}
                  alt="quotes icon"
                  width={20}
                  height={20}
                />
                <p className="text-[#262626]  dark:text-[#fafafa]  text-base leading-7 italic mt-4">
                  &quot; Abundant Engineering transformed our building&apos;s
                  energy efficiency with their innovative solutions. Their
                  team&apos;s expertise and dedication were evident throughout
                  the project, resulting in significant cost savings and a
                  reduced carbon footprint. We highly recommend Abundant
                  Engineering for any sustainable building needs.&quot;
                </p>
                <p className="text-[#262626] text-base leading-7 italic mt-2">
                  —
                  <span className="text-[#7f7f8f] dark:text-[#a1a1a1] ">
                    {" "}
                    Property Manager, Trakon Real Estate
                  </span>
                </p>
              </section>
            </div>
            <aside className="flex flex-col gap-6">
              <div className="px-4 py-4 border border-gray-200 rounded-lg">
                <h3 className="text-sm font-medium mb-6 text-[#262626] dark:text-[#fafafa]  capitalize">
                  Project Details
                </h3>
                <div className="">
                  <h5 className="text-[#262626] dark:text-[#fafafa]  text-xs">
                    Client
                  </h5>
                  <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-xs mb-4">
                    Trakon Real Estate
                  </p>

                  <h5 className="text-[#262626] dark:text-[#fafafa]  text-xs">
                    Location
                  </h5>
                  <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-xs mb-4">{location}</p>

                  <h5 className="text-[#262626] dark:text-[#fafafa]   text-xs">
                    Type
                  </h5>
                  <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-xs mb-4">
                    {projectCategory}
                  </p>

                  <h5 className="text-[#262626] dark:text-[#fafafa]  text-xs">
                    Timeline
                  </h5>
                  <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  mb-4 text-xs">
                    {startYear} - {endYear}
                  </p>

                  <h5 className="text-[#262626] dark:text-[#fafafa]   text-xs">
                    Status
                  </h5>

                  <p
                    className={clsx(
                      "text-[11px] px-2 py-1 flex items-center  rounded-lg h-5 w-fit ",
                      {
                        "bg-red-500 text-white": completed,
                        "bg-gray-300 text-black": !completed,
                      }
                    )}
                  >
                    {completed ? "Completed" : "Ongoing"}
                  </p>
                </div>
              </div>
              <div className="px-4 py-4 border border-gray-200 rounded-lg">
                <h3 className="text-sm font-medium mb-6 text-[#262626] dark:text-[#fafafa]  capitalize">
                  Related Project
                </h3>
                <div className=" flex flex-col gap-3">
                  <div className="px-2.5 py-2.5 border border-gray-200 rounded-lg">
                    <h5 className="text-[#262626] dark:text-[#fafafa]  text-xs">
                      Type
                    </h5>
                    <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-[11px] mb-4">
                      {location}
                    </p>
                  </div>
                  <div className="px-2.5 py-2.5 border border-gray-200 rounded-lg">
                    {" "}
                    <h5 className="text-[#262626] dark:text-[#fafafa]  text-xs">
                      Type
                    </h5>
                    <p className="text-[#7f7f8f] dark:text-[#a1a1a1]  text-[11px] mb-4">
                      {location}
                    </p>
                  </div>
                  <div className="px-2.5 py-2.5 border border-gray-200 rounded-lg">
                    <h5 className="text-[#262626] dark:text-[#fafafa]  text-xs">
                      Type
                    </h5>
                    <p className="text-[#7f7f8f] dark:text-[#a1a1a1] text-[11px] mb-4">
                      {location}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </main>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching project data:", error);
    <div className="text-9xl">Error loading project data.</div>;
    // notFound();
  }
};

export default page;
