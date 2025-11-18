import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PortableTextComponent from "@/app/_components/utils/PortableTextComponent";
import { PortableTextBlock } from "sanity";

type NewsItem = {
  _id: string;
  _createdAt: string;
  _type: string;
  slug: { current: string };
  title: string;
  description: string;

  categories: {
    _id: string;
    title: string;
    description: string;
  }[];
  body: PortableTextBlock[];
  author: {
    name: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  tags?: string[];
};

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const pageUrl = `${baseUrl}/news/${slug}`;
  const res = await fetch(
    `https://2f7v75aq.api.sanity.io/v2025-11-04/data/query/production?query=+*[slug.current=="${slug}"]{
        _id,
       _createdAt,
       _type,
        slug,
        title,
        description,  
        categories[]->{
        _id,
        title,
        description},
        body,
        author->{
          name , 
          },
          mainImage{asset->{url}},
        tags[]
        }`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const rawData = await res.json();
  const { _createdAt, title, body, categories, author, mainImage, tags } =
    (await rawData.result[0]) as NewsItem;

  if (!rawData.result[0]) {
    return notFound();
  }

  return (
    <div className="px-16 bg-white dark:bg-[#121212] ">
      <div className="container max-w-4xl mx-auto py-10">
        <div className=" text-xs flex items-center mb-6">
          <Link
            href="/projects"
            className="text-sm text-[#7f7f8f]  dark:text-[#a1a1a1]  hover:underline"
          >
            News
          </Link>
          <Image
            src="/icons/chevron-right-light.svg"
            alt="Back to Projects"
            width={13}
            height={14}
          />
          <span className="text-[#262626] dark:text-[#fafafa] ml-2">
            {title}
          </span>
        </div>
        <div className="flex gap-3 ">
          <p className="text-[11px] px-2 py-1 flex items-center  rounded-lg h-5 w-fit bg-red-500">
            {" "}
            {categories[0].title}
          </p>
          <p className="flex  items-center justify-center  gap-1 text-[#7f7f8f] dark:text-[#a1a1a1] ">
            <Image
              src="/icons/user-light.svg"
              alt="Location"
              width={13}
              height={12}
            />
            <p className="text-xs">{author?.name}</p>
          </p>
          <p className="flex  items-center text-xs gap-1 text-[#7f7f8f] dark:text-[#a1a1a1]">
            <Image
              src="/icons/calendar-light.svg"
              alt="Location"
              width={12}
              height={11}
            />
            {_createdAt}
          </p>
        </div>
        <h1 className="text-3xl font-semibold dark:text-[#fafafa] mt-4 mb-6 text-[#0a0a0a] ">
          {title}
        </h1>
        <div
          className={`w-full h-70 object center overflow-hidden bg-no-repeat bg-cover rounded-2xl border border-gray-50  text-white bg-top-center flex items-end `}
        >
          <Image
            src={mainImage.asset.url}
            alt="service"
            className="object-cover w-full    rounded-2xl  transition-transform duration-300 ease-in-out z-0"
            width={1200}
            height={600}
          />
        </div>
        <section className="grid grid-cols-[8fr_210px] gap-6 py-8 ">
          <div className="">
            <div className="mb-4">
              <PortableTextComponent value={body} />
            </div>
            {tags && (
              <div className="pt-4 border-t border-gray-300">
                <h3 className="text-sm font-semibold mb-2 text-[#262626] dark:text-[#fafafa]">
                  Tags
                </h3>
                {tags &&
                  tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-[#f5f5f5] text-gray-800 text-xs px-2 py-1 rounded mr-2"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            )}
          </div>
          <aside className="">
            <div className="p-4 flex flex-col gap-3 border  border-gray-200 rounded-lg">
              <p className="flex items-center justify-center gap-2 mb-4">
                <Image
                  src="/icons/share-black.svg"
                  alt="share"
                  width={16}
                  height={16}
                  className=""
                />
                <span className="text-[#262626] text-sm">Share Article</span>
              </p>
              <Link
                className="flex items-center gap-2 w-full border-gray-200 border hover:bg-gray-100 rounded-md h-7 px-4 text-xs text-[#262626]"
                target="_blank"
                href={`http://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="facebook"
                  width={11}
                  height={11}
                  className="inline-block h-3 w-3 "
                />
                facebook
              </Link>
              <Link
                className="flex items-center gap-2 w-full border-gray-200 border hover:bg-gray-100 rounded-md h-7 px-4 text-xs text-[#262626]"
                target="_blank"
                href={`http://www.twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`}
              >
                <Image
                  src="/icons/twitter.svg"
                  alt="twitter"
                  width={11}
                  height={11}
                  className="inline-block h-3 w-3 "
                />{" "}
                twitter
              </Link>
              <Link
                className="flex items-center gap-2 w-full border-gray-200 border hover:bg-gray-100 rounded-md h-7 px-4 text-xs text-[#262626]"
                target="_blank"
                href={`http://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
              >
                <Image
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  width={11}
                  height={11}
                  className="inline-block h-3 w-3 "
                />{" "}
                linkedin
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default page;
