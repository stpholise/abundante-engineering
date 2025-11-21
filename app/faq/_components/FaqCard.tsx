"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

interface FaqCardProps {
  items: Record<string, string>[];
}

const FaqCard = ({ items }: FaqCardProps) => {
  const [selected, setSelected] = useState<number[]>([]);

  const openClose = (index: number) => {
    if (selected.includes(index)) {
      setSelected(() => selected.filter((item) => item != index));
    } else {
      setSelected((prev) => [...prev, index]);
    }
  };
  return (
    <div className="border-gray-300 rounded-lg border  mb-4 px-6 py-6 flex flex-col gap-4">
      {items.map((item, index) => (
        <div key={index} className="">
          <button
            onClick={() => openClose(index)}
            className="flex text-xs ease-in-out cursor-pointer hover:bg-gray-200 
                text-[#121212] hover:text-[#262626] dark:text-[#afafaf] font-medium py-3 items-center w-full justify-between gap-7 px-1 border-b last:border-b-0 dark:border-gray-200   border-gray-400"
          >
            {item.ques}
            <Image
              src={"/icons/chevron-down.svg"}
              alt="more"
              width={12}
              height={12}
              className={clsx(
                "dark:invert transform ease-in-out  duration-200",
                selected.includes(index) ? "-scale-y-100" : "scale-y-100"
              )}
            />
          </button>
          <p
            className={clsx(
              "  px-8 text-xs  text-[#7f7f8f]  dark:text-white transition-all  duration-300 ease-in-out",
              selected.includes(index)
                ? " py-8 h-fit max-h-40 opacity-100"
                : "  h-0 max-h-0 opacity-0"
            )}
          >
            {item.ans}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FaqCard;
