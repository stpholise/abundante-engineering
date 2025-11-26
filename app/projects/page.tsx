import FilterProjects from "./_components/FilterProjects";
import AllProjects from "./_components/AllProjects";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen text-black dark:text-white   ">
      <main className="container mx-auto px-4 lg:px-16 py-10">
        <div className="container mx-auto px-4  py-10 flex flex-col items-center gap-6">
          <h1 className="text-red-500 text-3xl font-bold text-center">
            Our Projects{" "}
          </h1>
          <p className="max-w-2xl text-center text-[#717182] mx-auto">
            Successful elevator installations and maintenance projects across
            Ethiopia. From residential buildings to major commercial complexes.
          </p>
          <section className="filter">
            <FilterProjects />
          </section>
          <section className="projects">
            <div className="">
              <AllProjects />
            </div>
          </section>
          <section className="mt-6 py-8 px-4 xs:px-8 h-44 rounded-lg bg-[#f2f2f5] dark:bg-black w-full flex flex-col items-center justify-center">
            <h3 className="font-semibold text-center">
              Ready to Start Your Project
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm max-w-2xl">
              Join our list of satisfied clients. Contact us today to discuss
              your elevator project requirements.
            </p>
            <div className=" flex gap-4 my-4 items-center justify-center">
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-xs flex items-center gap-2 h-8">
                Request a Quote
                <Image
                  src={"/arrow-right-white.svg"}
                  alt="quote"
                  width={14}
                  height={13}
                />
              </button>
              <button className="bg-gray-200 text-blue-600 h-8 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                Contact
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Page;
