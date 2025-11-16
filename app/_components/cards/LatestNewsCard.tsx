import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

const LatestNewsCard = ({
  title,
  text,
  date,
  category,
  slug,
}: {
  title: string;
  text: string;
  date: string | Date;
  category: string;
  slug: string;
}) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return (
    <Link href={`/news/${slug}`}>
      <div className="max-w-96 min-h-95 border border-[#e6e6e6] dark:border-[#262626] rounded-xl px-6 py-6 flex flex-col dark:bg-black hover:shadow-lg ease-in-out z-0">
        <div className="w-full h-fit overflow-hidden rounded-lg z-0">
          <Image
            src={"/hero.jpg"}
            alt="service"
            className="object-cover w-full h-40 max-h-40 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out z-0"
            width={420}
            height={360}
          />
        </div>

        <div className=" flex items-center justify-between gap-2  mt-4  ">
          <p
            className={clsx(
              "text-[11px] px-2 py-1 flex items-center text-black border border-gray-200  rounded-lg h-5 "
            )}
          >
            {category}
          </p>
          <p className="text-[#717182] text-xs">
            {date.toLocaleString("en-US", {
              day: "2-digit",
              month: "short",
            })}
          </p>
        </div>
        <div className=" flex items-center gap-2  mt-4  ">
          <h3 className="text-base font-medium text-[#0a0a0a]  dark:text-gray-200">
            {title}
          </h3>
        </div>
        <div className="mt-auto">
          <p className=" text-[#717182] dark:text-[#a1a1a1]  text-xs">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default LatestNewsCard;
