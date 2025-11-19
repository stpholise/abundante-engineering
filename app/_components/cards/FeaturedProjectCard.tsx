"use client";
import Image from "next/image";
import clsx from "clsx";
import { Slug } from "sanity";
import Link from "next/link";

const FeaturedProjectCard = ({
  title,
  status,
  category,
  location,
  slug,
  image,
}: {
  title: string;
  status: boolean;
  category: string;
  location: string;
  slug: Slug;
  image: {
    alt: string;
    asset: {
      url: string;
    };
  };
}) => {
  return (
    <div className=" max-w-96 min-w-70 mx-auto w-full min-h-95 border border-[#e6e6e6] dark:border-[#262626] rounded-xl px-6 py-6 flex flex-col dark:bg-black hover:shadow-lg ease-in-out z-0">
      <div className="w-full h-fit overflow-hidden rounded-lg z-0">
        <Image
          src={image.asset.url || "/hero.jpg"}
          alt="service"
          className="object-cover w-full h-40 max-h-40 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out z-0"
          width={420}
          height={360}
        />
      </div>

      <div className=" flex items-center justify-between gap-2  mt-4  ">
        <p
          className={clsx(
            "text-[11px] px-2 py-1 flex items-center  rounded-lg h-5 ",
            {
              "bg-red-500 text-white": status,
              "bg-gray-300 text-black": !status,
            }
          )}
        >
          {status ? "Completed" : "Ongoing"}
        </p>
        <p className="text-[#717182] text-xs">{category}</p>
      </div>
      <div className=" flex items-center gap-2  mt-4  ">
        <h3 className="text-base font-medium text-[#0a0a0a]  dark:text-gray-200">
          {title}
        </h3>
      </div>
      <div className="mt-auto">
        <p className=" text-[#717182] dark:text-[#a1a1a1]  text-xs">
          {location}
        </p>
        <Link
          href={{
            pathname: `/projects/${slug.current}`,
            query: { slug: slug.current },
          }}
          className="text-black hover:bg-gray-100 h-8 border-gray-200 border bg-white rounded-lg px-4 py-2 w-full mt-4   text-xs font-medium m flex items-center justify-center gap-2 duration-300 ease-in-out"
        >
          View Case Study
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
