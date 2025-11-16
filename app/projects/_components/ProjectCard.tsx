import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="max-w-96 min-h-99 border border-[#e6e6e6] dark:border-[#262626] rounded-xl px-6 py-6 flex flex-col dark:bg-black hover:shadow-lg ease-in-out z-0">
      <div className="w-full h-fit overflow-hidden rounded-lg z-0 relative">
        <Image
          src={"/hero.jpg"}
          alt="service"
          className="object-cover w-full h-40 max-h-40 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out z-0"
          width={420}
          height={360}
        />
        <p className="bg-red-500 cursor-pointer text-xs px-2 py-1 h-5.5 flex items-center rounded-lg absolute top-1 right-1 z-10 text-white font-medium">
          Completed
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="px-2 py-1 flex items-center justify-center  border border-[#e6e6e6] rounded-lg text-xs  h-6">
          maintenance
        </p>
        <p className=" text-xs text-gray-400">2021-2024</p>
      </div>
      <div className=" flex items-center gap-2  mt-2  ">
        <h3 className="text-lg font-medium text-[#0a0a0a]  dark:text-gray-200">
          Elevator Installation
        </h3>
      </div>
      <div className="mt-auto">
        <p className=" text-gray-600 dark:text-[#a1a1a1]  text-xs">
          Professional elevator installation services ensuring safety and
          efficiency for residential and commercial buildings.
        </p>
        <div className="">
          <p className=" flex  items-center mt-4">
            <Image
              src={"/icons/location-light.svg"}
              alt="arrow"
              width={14}
              height={13}
              className=" cursor-pointer"
            />
            <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 ml-1">
              Addis Ababa, Ethiopia
            </span>
          </p>
          <p className="flex  items-center mt-2">
            <Image
              src={"/icons/building-light.svg"}
              alt="arrow"
              width={14}
              height={13}
              className=" cursor-pointer"
            />
            <span className="text-[11px] font-medium text-gray-600 dark:text-gray-400 ml-1">
              Residential
            </span>
          </p>
          <p className=" flex  items-center mt-2">
            <Image
              src={"/icons/calendar-light.svg"}
              alt="arrow"
              width={14}
              height={13}
              className=" cursor-pointer "
            />
            <span className="text-[11px]   text-gray-600 dark:text-gray-400 ml-1">
            2021 - 2024
            </span>
          </p>
        </div>
        <button className="dark:text-white cursor-pointer h-8 bg-white text-[#121212] dark:bg-[#121212] border border-[#e6e6e6] dark:border-[#262626] rounded-lg px-4 py-2 w-full mt-4   text-xs font-medium m flex items-center justify-center gap-2">
          request now
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
