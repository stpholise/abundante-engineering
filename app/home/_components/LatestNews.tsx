import { notFound } from "next/navigation";
import LatestNewsCard from "../../_components/cards/LatestNewsCard";

type NewsItem = {
  _id: string;
  _createdAt: string;
  _type: string;
  slug: { current: string };
  title: string;
  description: string;
  name: string;
  location: string;
  categories: {
    _id: string;
    title: string;
    description: string;
  }[];
  mainImage: {
    asset: {
      url: string;
    }
  }
};

const LatestNews = async () => {
  const url = `https://2f7v75aq.api.sanity.io/v2025-11-04/data/query/production?query=+*[_type=="post"]|order(_createdAt desc){
    _id,
    _createdAt,
    _type,
    slug,
    title,
    description, 
    name,
    location,
    categories[]->{
      _id,
      title,
      description
    },
    mainImage{
      asset-> {
        url
      }
  }
    }`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data`);
  }
  const rawData = await res.json();
  const data = (await rawData.result) as NewsItem[];
  if (!data) {
    return notFound();
  }
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 py-6 ">
      {data.slice(0, 3).map((values, index) => (
        <div className="" key={index}>
          <LatestNewsCard
            category={values.categories?.[0]?.title || "Uncategorized"}
            title={values.title}
            text={values.description}
            date={`${new Date(values._createdAt).toLocaleDateString()}`}
            slug={values.slug.current}
            mainImage={values.mainImage}
          />
        </div>
      ))}
    </div>
  );
};

export default LatestNews;
