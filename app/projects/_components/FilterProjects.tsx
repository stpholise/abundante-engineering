"use client";
import { useState,  } from "react";
import Select from "react-select";
import { useRouter, useSearchParams } from "next/navigation";

type OptionType = {
  value: string;
  label: string;
};

const FilterProjects = () => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const [serviceCategory, setServiceCategory] = useState<OptionType>({
    value: "all",
    label: "All Types",
  });
  const [status, setStatus] = useState<OptionType>({
    value:  "all",
    label: "All Status",
  });
  const [location, setLocation] = useState<OptionType>({
    value: "all",
    label: "All Locations",
  });


  const updateURL = (service:OptionType, stat: OptionType, loc:OptionType) => {
    const params = new URLSearchParams();

    if (service.value !== "all")
      params.set("service", service.value);
    if (stat.value !== "all") params.set("status", stat.value);
    if (loc.value !== "all") params.set("location", loc.value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className=" border border-[#e6e6e6] dark:border-[#262626] bg-[#f2f2f5] dark:bg-[#262626] rounded-lg   flex items-center gap-2  h-8 w-40 text-sm">
        <Select<OptionType>
          name="service"
          id="service"
          value={serviceCategory}
          defaultValue={services[0]}
          onChange={(option) => {
            const updated = option as OptionType;
            setServiceCategory(option as OptionType);
            updateURL(updated, status, location);
          }}
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
          onChange={(option) => {
            const updated = option as OptionType;
            setStatus(option as OptionType);
            updateURL(serviceCategory, updated, location);
          }}
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
          onChange={(option) => {
            const updated = option as OptionType;
            setLocation(option as OptionType);
            updateURL(serviceCategory, status, updated);
          }}
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
  );
};

const services: { value: string; label: string }[] = [
  { value: "all", label: "All Types" },
  { value: "installation", label: "Installation" },
  { value: "maintenance", label: "Maintenance" },
  { value: "modernization", label: "Modernization" },
];
const statuses: { value: string | boolean; label: string }[] = [
  { value: "all", label: "All Statuses" },
  { value: true, label: "Completed" },
  { value: false, label: "Ongoing" },
  // { value: "upcoming", label: "Upcoming" },
];
const locations: { value: string; label: string }[] = [
  { value: "all", label: "All Locations" },
  { value: "Addis Ababa", label: "Addis Ababa" },
  { value: "Gondar", label: "Gondar" },
  { value: "Mekelle", label: "Mekelle" },
  { value: "Bahir Dar", label: "Bahir Dar" },
];

export default FilterProjects;
