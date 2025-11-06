import ValuesCard from "./_components/ValuesCard";
import TeamCard from "./_components/TeamCard";
const page = () => {
  return (
    <div className="bg-white dark:bg-[#121212] min-h-screen text-black dark:text-white   ">
      <main className="container mx-auto px-4 lg:px-16 py-10">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-red-500 text-3xl font-bold text-center">
            About Abundant Engineering{" "}
          </h1>
          <p className="max-w-3xl text-center text-[#717182]">
            Welcome to Abundant Engineering, a leading force in the elevator
            industry dedicated to delivering innovative and reliable vertical
            transportation solutions. With a commitment to quality and
            excellence, we specialize in designing, installing, and maintaining
            elevators that ensure safety, efficiency, and comfort. Our team of
            experienced professionals combines industry expertise with
            cutting-edge technology to offer a full range of services, including
            elevator installation, modernization, maintenance, and repair. At
            Abundant Engineering, we pride ourselves on understanding our
            clients&apos; unique needs and providing customized solutions that
            enhance building functionality and elevate user experience. Founded
            on the principles of integrity, innovation, and performance,
            Abundant Engineering is your trusted partner in navigating the
            evolving landscape of vertical mobility. Join us in transforming
            your building&apos;s potential with safe, efficient, and
            state-of-the-art elevator solutions that make a lasting impact.
          </p>
        </div>

        <div className="border-[#e6e6e6] border dark:border-[#262626] rounded-2xl px-4 py-4 mt-10">
          <h4 className="capitalize text-xl font-medium">Who We Are</h4>
          <p className="mt-5 text-[#717182]">
            Abundant Engineering is a company specializing in providing
            high-quality elevator solutions with years of experience in the
            elevator industry. We are dedicated to offering reliable and
            innovative vertical transportation services tailored to meet the
            needs of various buildings and businesses. At our company, we offer
            a wide range of services to enhance building performance and user
            experience. From the supply to installation of modern elevators to
            the maintenance and repair of existing systems, we ensure that your
            building operates smoothly and safely. We also provide elevator
            modernization services to upgrade older systems with the latest
            technology for improved efficiency and safety. Additionally, we
            offer customized design solutions to ensure that your elevators not
            only function flawlessly but also complement the overall aesthetic
            of your building. Whether it&apos;s for commercial spaces,
            residential complexes, or industrial facilities, our solutions are
            designed to fit seamlessly into any environment.
          </p>
        </div>
        <div className="border border-[#e6e6e6] dark:border-[#262626] rounded-2xl px-4 py-4 mt-6">
          <h4 className="capitalize text-xl font-medium text-red-500   ">
            Our Vision
          </h4>
          <p className="mt-5 text-[#717182] ">
            To become the most trusted and innovative leader in the vertical
            transportation industry by delivering safe, efficient, and
            sustainable elevator solutions that transform the way people move
            within buildings. We are committed to advancing technology,
            prioritizing safety, and providing exceptional service to create
            smarter, more connected environments for businesses and communities.
            Our vision is to set new industry benchmarks in reliability,
            performance, and design—ensuring that every ride with Abundant
            Elevator is a seamless experience that elevates comfort,
            convenience, and confidence.
          </p>
        </div>

        <section className="   mt-10 pt-10 dark:border-[#262626] ">
          <h3 className="text-2xl font-semibold text-center">
            Our Core Values
          </h3>

          <div className="grid grid-cols-1 mt-1 md:grid-cols-3 gap-4 p-4">
            {values.map((value, index) => (
              <ValuesCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </section>
        <section className=" mt-10 pt-10">
          <h3 className="text-2xl font-semibold text-center">Our Journey</h3>
          <div className="mx-auto max-w-xl mt-6 flex flex-col gap-4  ">
            {journey.map((item, index) => (
              <div
                key={index}
                className="  flex items-center gap-4 py-1 dark:border-[#262626] "
              >
                <h4 className="text-lg font-medium bg-red-500 px-2 py-0.5 text-[11px] text-white rounded-md ">
                  {item.year}
                </h4>
                <div className="size-3 rounded-full bg-red-500"></div>
                <p className="text-[#717182] text-sm">{item.event}</p>
              </div>
            ))}
          </div>
        </section>
        <section className=" dark:border-[#262626] mt-10 pt-10 ">
            <h3 className="text-2xl font-semibold text-center">Our Team</h3>
            <div className="mx-auto   mt-6 md:grid grid-cols-3 gap-6  ">
              {teamMembers.map((item, index) => (
                <TeamCard key={index} item={item} />
              ))}
            </div>
        </section>
      </main>
    </div>
  );
};

const values: { icon: string; title: string; description: string }[] = [
  {
    icon: "/globe.svg",
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in all our dealings.",
  },
  {
    icon: "/globe.svg",
    title: "Innovation",
    description:
      "We continuously seek out and implement cutting-edge technologies to improve our services.",
  },
  {
    icon: "/globe.svg",
    title: "Customer Focus",
    description:
      "Our clients' needs and satisfaction are at the core of everything we do.",
  },
  {
    icon: "/globe.svg",
    title: "Safety",
    description:
      "We prioritize the safety of our employees, clients, and end-users in every project.",
  },
  {
    icon: "/globe.svg",
    title: "Quality",
    description:
      "We are committed to delivering superior products and services that exceed expectations.",
  },
  {
    icon: "/globe.svg",
    title: "Sustainability",
    description:
      "We strive to minimize our environmental impact through eco-friendly practices and solutions.",
  },
];

const journey: { year: string; event: string }[] = [
  { year: "2010", event: "Company founded with a mission to innovate." },
  { year: "2012", event: "Launched our first line of eco-friendly elevators." },
  { year: "2015", event: "Expanded services to include modernization." },
  { year: "2018", event: "Opened new headquarters and training center." },
  {
    year: "2020",
    event: "Achieved industry certification for safety standards.",
  },
  { year: "2022", event: "Introduced AI-powered maintenance solutions." },
];

const teamMembers: { name: string; role: string; photo: string; phone?: string; extraInfo?: string }[] = [

  {
    name: "John Doe",
    role: "Chief Executive Officer",  
    photo: "/team/john_doe.jpg",
    phone: "555-1234",
    extraInfo: "Over 20 years of experience in the elevator industry."
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    photo: "/team/jane_smith.jpg",
    phone: "555-5678",
    extraInfo: "Expert in elevator technology and innovation."
  },
  {
    name: "Emily Johnson",
    role: "Chief Operating Officer",
    photo: "/team/emily_johnson.jpg",
    phone: "555-8765",
    extraInfo: "Specializes in operational efficiency and project management."
  },
];

export default page;
