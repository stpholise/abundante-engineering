"use client";
import { useState } from "react";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

const NewsWrapper = ({ children }: { children: React.ReactNode }) => {
  const AllNewsPosts = children;
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";
  const [selectedFilter, setSelectedFilter] = useState(currentFilter

  );
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    router.replace(`/news?filter=${filter}`, { scroll: false });
  };

  return (
    <div className="">
      <div className="max-w-2xl mx-auto">
       <h1 className=" text-red-500 text-3xl font-bold text-center">News & Insight</h1>
        <p className="max-w-2xl text-center text-sm my-4 text-[#717182] mx-auto">
          Stay updated with the latest industry trends, company news, and
          elevator technology insights from the Abundant Engineering team.
        </p>
      <div className="filter flex gap-3 justify-center items-center my-4">
        {filter.map((item) => (
          <button
            key={item.value}
            onClick={() => handleFilterChange(item.value)}
            className={clsx(
              "mx-2 px-4 py-1 border rounded-lg hover:bg-gray-100 hover:text-[#7f7f8f] text-sm text-[#7f7f8f] cursor-pointer",
              selectedFilter === item.value && "bg-red-500 text-white hover:text-white hover:bg-red-500"
            )}
          >
            {item.name}
          </button>
        ))}
      </div>
</div>
      <div className="">{AllNewsPosts}</div>
    </div>
  );
};

const filter = [
  { name: "All", value: "all" },
  { name: "Company News", value: "company-news" },
  { name: "Industry Trends", value: "industry-trends" },
  { name: "Elevator Technology", value: "technology" },
];

export default NewsWrapper;
