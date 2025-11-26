import Image from "next/image";
import { Slug } from "sanity";
import clsx from "clsx";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  status: boolean;
  category: string;
  location: string;
  description: string;
  slug: Slug;
  image: {
    alt: string;
    asset: {
      url: string;
    };
  };

  start: string;
  end: string;
};

const ProjectCard = ({
  title,
  status,
  location,
  category,
  slug,
  image,
  start,
  end,
  description,
}: ProjectCardProps) => {
  return (
    <div
      data-aos="fade-up"
      className="max-w-96 min-w-60 w-full min-h-99 border border-[#e6e6e6] dark:border-[#262626] rounded-xl px-6 py-6 flex flex-col dark:bg-black hover:shadow-lg ease-in-out z-0"
    >
      <div className="w-full h-fit overflow-hidden rounded-lg z-0 relative">
        <Image
          src={image.asset.url || "/hero.jpg"}
          alt="service"
          className="object-cover w-full h-40 max-h-40 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out z-0"
          width={420}
          height={360}
        />
        <p
          className={clsx(
            "text-[10px] px-2 py-1 flex items-center  rounded-lg h-5  w-fit absolute top-2 right-2",
            {
              "bg-red-500 text-white": status,
              "bg-gray-300 text-black": !status,
            }
          )}
        >
          {status ? "Completed" : "Ongoing"}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="px-2 py-1 flex items-center justify-center  border border-[#e6e6e6] rounded-lg text-xs  h-6">
          {category}
        </p>
        <p className=" text-xs text-gray-400">2021-2024</p>
      </div>
      <div className=" flex items-center gap-2  mt-2  ">
        <h3 className="text-lg font-medium text-[#0a0a0a]  dark:text-gray-200">
          {title}
        </h3>
      </div>
      <div className="mt-auto">
        {description && (
          <p className=" text-gray-600 dark:text-[#a1a1a1]  text-xs">
            {description.slice(0, 100)}...
          </p>
        )}
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
              {location}
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
              {new Date(start).getFullYear()} - {new Date(end).getFullYear()}
            </span>
          </p>
        </div>
        <Link
          href={{
            pathname: `/projects/${slug.current}`,
            query: { slug: slug.current },
          }}
          className="dark:text-white cursor-pointer h-8 bg-white text-[#121212] dark:bg-[#121212] border border-[#e6e6e6] dark:border-[#262626] rounded-lg px-4 py-2 w-full mt-4   text-xs font-medium m flex items-center justify-center gap-2"
        >
          request now
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
