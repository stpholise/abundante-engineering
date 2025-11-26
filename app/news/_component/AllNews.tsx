import clsx from "clsx";
import Image from "next/image";
import { PortableTextBlock } from "sanity";
import { toPlainText } from "@portabletext/react";

type NewsItem = {
  _id: string;
  _createdAt: string;
  _type: string;
  title: string;
  slug: string;
  mainImage: {
    asset: { url: string };
    alt: string;
  };
  excerpt: string;
  author: {
    name: string;
    image: string;
  };
  categories: { title: string }[];
  body: PortableTextBlock[];
};

const AllNews = async ({ filter }: { filter?: string }) => {
  const queryFilter = `*[_type=="post"&&("${filter}"=="all"||categories[]->title match "${filter}")]|order(_createdAt desc){
    _id, 
    _createdAt,
    _type,
    title,
    slug,
   mainImage {
  asset->{
    url
  },
  alt
},
    excerpt,
    author->{
      name,
      image
    },
    categories[]->{title  },
    body
      }`;
  const url = `https://2f7v75aq.api.sanity.io/v2025-11-04/data/query/production?query=+${encodeURIComponent(queryFilter)}`;
  const res = await fetch(url, { cache: "no-store", method: "GET" });
  if (!res.ok) {
    if (res.status === 404) {
      return <div className=""> Data not found</div>;
    } else if (res.status >= 500) {
      return <div className=""> Server error. Please try again letter</div>;
    } else {
      return <div className="">There was an error</div>;
    }
  }
  const rawData = await res.json();
  const data = (await rawData.result) as NewsItem[];

  if (!data || data.length == 0) {
    return (
      <div className="text-[#262626] dark:text-[#efefef] w-full text-center py-8 text-lg">
        No data found
      </div>
    );
  }

  const PortableTextPreview = ({ value }: { value: PortableTextBlock[] }) => {
    const plain = toPlainText(value);
    return <p>{plain.slice(0, 100)}...</p>;
  };

  return (
    <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-6 my-8">
      {data.map((newsItem) => (
        <div
          key={newsItem._id}
          className="max-w-96 w-full min-h-95 border border-[#e6e6e6] dark:border-[#262626] rounded-xl px-6 py-6 flex flex-col gap-2 dark:bg-black hover:shadow-lg ease-in-out z-0 mx-auto "
        >
          {newsItem.mainImage.asset && (
            <Image
              src={newsItem.mainImage?.asset.url || "/globe.svg"}
              alt={newsItem.mainImage?.alt || newsItem.title}
              width={400}
              height={200}
              className="rounded-lg max-h-40 w-full h-60 object-cover "
            />
          )}
          <div className=" flex items-center justify-between gap-2  mt-4  ">
            <p
              className={clsx(
                "text-[11px] px-2 py-1 flex items-center text-[#262626] dark:text-[#afafaf] border border-gray-200  rounded-lg h-5 "
              )}
            >
              {newsItem.categories[0]?.title}
            </p>
            <p className="text-[#717182] text-xs">
              {new Date(newsItem._createdAt).toLocaleString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <h3 className="text-xl font-bold text-[#262626] dark:text-[#afafaf]">
            {newsItem.title}
          </h3>
          <div className="text-[#717182] dark:text-[#afafaf] grow text-sm  h-fit ">
            {newsItem.body && <PortableTextPreview value={newsItem.body} />}
          </div>
          <div className="flex items-center justify-between mt-auto pt-4">
            <p className="text-xs text-[#717182] dark:text-[#afafaf] flex gap-2">
              <Image
                src="/icons/user-light.svg"
                alt="Location"
                width={13}
                height={12}
              />{" "}
              {newsItem.author.name}
            </p>
            <button className="text-blue-400 text-sm font-semibold cursor-pointer">
              Read More →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllNews;
