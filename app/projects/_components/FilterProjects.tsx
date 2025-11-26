"use client"
import { useState } from "react";
import Select from "react-select";
type OptionType = {
  value: string;
  label: string;
};

const FilterProjects = () => {
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


export default FilterProjects;
