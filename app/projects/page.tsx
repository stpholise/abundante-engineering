"use client";
import { useState } from "react";
import Select from "react-select";
import ProjectCard from "./components/ProjectCard";
import Image from "next/image";

type OptionType = {
  value: string;
  label: string;
};
const Page = () => {
  const [serviceCategory, setServiceCategory] = useState<OptionType | null>({
    value: "All",
    label: "All Types",
  });
  const [status, setStatus] = useState<OptionType | null>({
    value: "All",
    label: "All Status",
  });
  const [location, setLocation] = useState<OptionType | null>({
    value: "All",
    label: "All Locations",
  });

  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen text-black dark:text-white   ">
      <main className="container mx-auto px-4 lg:px-16 py-10">
        <div className="container mx-auto px-4  py-10 flex flex-col items-center gap-6">
          <h1 className="text-red-500 text-3xl font-bold">Our Projects </h1>
          <p className="max-w-2xl text-center text-[#717182]">
            Successful elevator installations and maintenance projects across
            Ethiopia. From residential buildings to major commercial complexes.
          </p>
          <section className="filter">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className=" border border-[#e6e6e6] dark:border-[#262626] bg-[#f2f2f5] dark:bg-[#262626] rounded-lg   flex items-center gap-2  h-8 w-40 text-sm">
                <Select<OptionType>
                  name="service"
                  id="service"
                  value={serviceCategory}
                  defaultValue={services[0]}
                  onChange={setServiceCategory}
                  options={services}
                  className="outline-none border-none w-full"
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderColor: "#ccc",
                      border: "1px solid #ccc",
                      outline: "none",
                      boxShadow: "none",
                      ":focus": {
                        borderColor: "#ccc",
                        boxShadow: "none",
                      },
                      ":hover": {
                        borderColor: "#ccc",
                      },
                    }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isFocused
                        ? "#f2f2f5"
                        : state.isSelected
                        ? "#f2f2f5"
                        : "#fff",
                      color: state.isFocused ? "#4a4a4a" : "#000",
                      cursor: "pointer",
                    }),
                  }}
                />
              </div>

              <div className=" border border-[#e6e6e6] bg-[#f2f2f5]  dark:border-[#262626] rounded-lg  flex items-center gap-2 h-8 w-40 text-sm ">
                <Select
                  name="status"
                  id="status"
                  value={status}
                  defaultValue={statuses[0]}
                  onChange={setStatus}
                  options={statuses}
                  className="outline-none border-none w-full"
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderColor: "#ccc",
                      border: "1px solid #ccc",
                      outline: "none",
                      boxShadow: "none",
                      ":focus": {
                        borderColor: "#ccc",
                        boxShadow: "none",
                      },
                      ":hover": {
                        borderColor: "#ccc",
                      },
                    }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isFocused
                        ? "#f2f2f5"
                        : state.isSelected
                        ? "#f2f2f5"
                        : "#fff",
                      color: state.isFocused ? "#4a4a4a" : "#000",
                      cursor: "pointer",
                    }),
                  }}
                />
              </div>

              <div className=" border border-[#e6e6e6] bg-[#f2f2f5]  dark:border-[#262626] rounded-lg flex items-center gap-2 h-8 w-40 text-sm ">
                <Select
                  name="location"
                  id="location"
                  value={location}
                  defaultValue={locations[0]}
                  onChange={setLocation}
                  options={locations}
                  className="outline-none border-none w-full"
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderColor: "#ccc",
                      border: "1px solid #ccc",
                      outline: "none",
                      boxShadow: "none",
                      ":focus": {
                        borderColor: "#ccc",
                        boxShadow: "none",
                      },
                      ":hover": {
                        borderColor: "#ccc",
                      },
                    }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isFocused
                        ? "#f2f2f5"
                        : state.isSelected
                        ? "#f2f2f5"
                        : "#fff",
                      color: state.isFocused ? "#4a4a4a" : "#000",
                      cursor: "pointer",
                    }),
                  }}
                />
              </div>
            </div>
          </section>
          <section className="projects">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {
                    [...Array(9)].map((_,index) => (<ProjectCard key={index} />))
                 }
              </div>
            </div>
          </section>
          <section className="mt-6 py-8 px-8 h-44 rounded-lg bg-[#f2f2f5] dark:bg-black w-full flex flex-col items-center justify-center">
            <h3 className="font-semibold text-center">Ready to Start Your Project</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm max-w-2xl">
              Join our list of satisfied clients. Contact us today to discuss
              your elevator project requirements.
            </p>
            <div className=" flex gap-4 my-4 items-center justify-center">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 h-8">
                Request a Quote
                <Image
                  src={"/arrow-right-white.svg"}
                  alt="quote"
                  width={14}
                  height={13}
                />
              </button>
              <button className="bg-gray-200 text-blue-600 h-8 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                Contact
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const services: { value: string; label: string }[] = [
  { value: "All", label: "All Types" },
  { value: "Installation", label: "Installation" },
  { value: "Maintenance", label: "Maintenance" },
  { value: "Modernization", label: "Modernization" },
];
const statuses: { value: string; label: string }[] = [
  { value: "All", label: "All Statuses" },
  { value: "Completed", label: "Completed" },
  { value: "Ongoing", label: "Ongoing" },
  { value: "Upcoming", label: "Upcoming" },
];
const locations: { value: string; label: string }[] = [
  { value: "All", label: "All Locations" },
  { value: "Addis Ababa", label: "Addis Ababa" },
  { value: "Gondar", label: "Gondar" },
  { value: "Mekelle", label: "Mekelle" },
  { value: "Bahir Dar", label: "Bahir Dar" },
];

export default Page;
