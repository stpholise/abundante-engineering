

import FeaturedProjectCard from "@/app/_components/cards/FeaturedProjectCard";
import { Slug } from "sanity";
type Data = {
  _id: string;
  _createdAt: string;
  _type: string;
  title: string;
  description: string;
  completed: boolean;
  name: string;
  location: string;
  projectCategory: string;
  slug: Slug;
  gallery: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
    caption: string;
  }[];
};

export default async function FetchProjects() {
  const url = `https://2f7v75aq.api.sanity.io/v2025-11-04/data/query/production?query=+*[_type=="project"]{
  _id,
  _createdAt,
  _type,
  slug,
  title,
  description,
  completed,
  name,
  location,
  projectCategory,
 gallery[]{
    asset->{
      _id,  
      url
    },
    alt,
    caption
  },

    }`;

  const res = await fetch(url, {
    cache: "no-store",
  });
  const rawData = await res.json();
  const data = await rawData.result;
  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div className="text-black">
      <div className="  grid sm:grid-cols-2 grid-cols-1 justify-center  md:grid-cols-3 gap-7  py-6 ">
        {data &&
          data.map((project: Data) => (
            <FeaturedProjectCard
              title={project.name}
              location={project.location}
              status={project.completed}
              category={project.projectCategory}
              slug={project.slug}
              key={project._id}
              image={project.gallery[0]}
            />
          ))}
      </div>
    </div>
  );
}
