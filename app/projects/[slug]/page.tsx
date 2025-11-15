"use server";

type Project = {
  _id: string;
  _createdAt: string;
  _type: string;
  slug: { current: string };
  title: string;
  description: string;
  completed: string;
  name: string;
  location: string;
  projectCategory: string;
  gallery: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
    caption: string;
  }[];
 
};  

import { notFound } from "next/navigation";
import Image from "next/image";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params;

    const url = `https://2f7v75aq.api.sanity.io/v2025-11-04/data/query/production?query=+*[slug.current=="${slug}"]{
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
     
    if (!res.ok) { 
       console.error("Failed to fetch project data:", res.statusText);
      throw new Error("Failed to fetch data");
    }
    const rawData = await res.json();
    const data = await rawData.result;
    const project = data[0] as Project;
    console.log("Fetched project data:", project);
    if (!data || data.length === 0) {
      notFound();
    }
    return (
      <div className="h-96 bg-blue dark:bg-black w-full ">
        <div className="container px-16 mx-auto py-12">
          <div className="">
            {project.gallery.length > 0 && (
              <Image
                src={project.gallery[0].asset.url}
                alt={project.gallery[0].alt}
                width={500}
                height={300}
              />
            )}
            title: {project.title}
            <br />
            description: {project.description}
          </div>
        </div>
      </div>
    );
  // } catch (error) {
  //   console.error("Error fetching project data:", error);
  //   notFound();
  // }
};

export default page;
