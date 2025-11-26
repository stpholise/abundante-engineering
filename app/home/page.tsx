import ClientWrapper from "./_components/ClientWrapper";
import LatestNews from "./_components/LatestNews";
import { Suspense } from "react";
import {TrippleSpiner} from "../_components/utils/Loading";
// import FeaturedProjects from "./_components/FeaturedProjects";
import FetchProjects from "./_components/FetchProjects";
const Page = () => {
  return (
    <ClientWrapper>
      <Suspense fallback={<div className="relative"> <TrippleSpiner /> </div>}>
        <FetchProjects />
      </Suspense>
      <LatestNews />
    </ClientWrapper>
  );
};

export default Page;
