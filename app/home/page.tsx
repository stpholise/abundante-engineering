import ClientWrapper from "./_components/ClientWrapper";
import LatestNews from "./_components/LatestNews";

// import FeaturedProjects from "./_components/FeaturedProjects";
import FetchProjects from "./_components/FetchProjects";
const Page = () => {
  return (
    <ClientWrapper>
      <FetchProjects />
      <LatestNews />
    </ClientWrapper>
  );
};

export default Page;
