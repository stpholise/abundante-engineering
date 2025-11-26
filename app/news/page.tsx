
import AllNews from "./_component/AllNews";
import NewsWrapper from "./_component/NewsWrapper";
import { Suspense } from "react";
import { TrippleSpiner } from "../_components/utils/Loading"; 

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
            
           
              <Suspense
                fallback={
                  <div className="relative py-8">
                    <TrippleSpiner />
                  </div>
                }
              >
                <AllNews filter={filter} />
              </Suspense>
         
          </NewsWrapper>
        </div>
      </div>
    </div>
  );
};

export default page;
