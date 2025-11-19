import AllNews from "./_component/AllNews";
import NewsWrapper from "./_component/NewsWrapper";
import { Suspense } from "react";

const page = async ({
  searchParams,
}: {
  searchParams: { filter?: string };
}) => {
  const params = await searchParams;
  const filter = params.filter || "all";
  return (
    <div className="lg:px-16  bg-[#f9f9f9] dark:bg-[#121212] py-16">
      <div className="max-w-6xl mx-auto ">
       

        <div className="">
          <NewsWrapper>
            <Suspense fallback={<div>Lodading...</div>}>
              <AllNews filter={filter} />
            </Suspense>
          </NewsWrapper>
        </div>
      </div>
    </div>
  );
};

export default page;
