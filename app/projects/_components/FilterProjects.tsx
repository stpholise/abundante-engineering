"use client";
import { useState } from "react";
import Select from "react-select";
import { useRouter, useSearchParams } from "next/navigation";

type OptionType = {
  value: string;
  label: string;
};

const FilterProjects = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serviceCategory, setServiceCategory] = useState<OptionType>({
    value: searchParams.get("service") || "all",
    label: searchParams.get("service") || "All Types",
  });
  const [status, setStatus] = useState<OptionType>({
    value: searchParams.get("status") || "all",
    label: searchParams.get("status") || "All Status",
  });
  const [location, setLocation] = useState<OptionType>({
    value: searchParams.get("location") || "all",
    label: searchParams.get("location") || "All Locations",
  });

  const handleFilterChange = () => {
    const params = new URLSearchParams();

    if (serviceCategory.value !== "all")
      params.set("service", serviceCategory.value);
    if (status.value !== "all") params.set("status", status.value);
    // if (location.value !== "All") params.set("location", location.value);
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
            setServiceCategory(option as OptionType);
            handleFilterChange();
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
            setStatus(option as OptionType);
            handleFilterChange();
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
            setLocation(option as OptionType);
            handleFilterChange();
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
const statuses: { value: string; label: string }[] = [
  { value: "all", label: "All Statuses" },
  { value: "completed", label: "Completed" },
  { value: "ongoing", label: "Ongoing" },
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
