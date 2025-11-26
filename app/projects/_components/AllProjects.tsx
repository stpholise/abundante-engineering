import ProjectCard from "./ProjectCard";
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
  sector: string;
  gallery: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
    caption: string;
  }[];
  start: string;
  end: string;
};
const AllProjects = async ({ filterString }: { filterString: string }) => {
  
  const queryFilter = `${filterString}{
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
   start,
  end, 
  scope,
  sector

    }`;
  const url = `https://2f7v75aq.api.sanity.io/v2025-11-04/data/query/production?query=+${encodeURIComponent(queryFilter)}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const rawData = await res.json();
  const data = await rawData.result;
  if (!data) {
    return (
      <div className="text-[#262626] dark:text-[#efefef]">
        {" "}
        No Project Found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full  ">
      {data &&
        data.map((project: Data) => (
          <ProjectCard
            title={project.name}
            location={project.location}
            status={project.completed}
            category={project.projectCategory}
            slug={project.slug}
            key={project._id}
            image={project.gallery[0]}
            start={project.start}
            end={project.end}
            description={project.description}
            sector={project.sector}
          />
        ))}
    </div>
  );
};

export default AllProjects;
