

import FaqCard from "./_components/FaqCard";

const Page = () => {
  return (
    <div className=" dark:bg-[#0a0a0a] bg-[#efefef]">
      <div className="container px-4 py-12 mx-auto gap-4 max-w-5xl">
        <div className="max-w-2xl mx-auto">
          <h1 className=" text-red-500 text-3xl font-bold text-center">
            Frequently Asked Questions
          </h1>
          <p className="max-w-2xl text-center text-sm my-4 text-[#717182] mx-auto">
            Find answers to common questions about our elevator services,
            installation, maintenance, and more.
          </p>
        </div>
        <section className="md:grid grid-cols-[8fr_4fr] w-full  mt-8  gap-6">
          <div className=" flex flex-col gap-4 ">
            <FaqCard items={installationQAndA} />
            <FaqCard items={maintenanceQAndA} />
            <FaqCard items={pricingQAndA} />
            <FaqCard items={questionsAndAnswers} />
          </div>
          <div className="w-full md:w-82 min-w-60 flex flex-col  ">
         
 
            <div className="border md:min-w-76 md:w-78 border-gray-200 rounded-lg w-full text-[#262626] px-6 py-6 text-sm flex flex-col gap-3 ">
              <p className="mb-2 text-[#262626] dark:text-[#eaeaea]">Ask a Question</p>
              <div className="">
                <label htmlFor="" className="text-[#262626] dark:text-[#eaeaea] ">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-50 rounded-sm block w-full py-1 px-2 outline-none h-8"
                />
              </div>
              <div className="">
                <label htmlFor="" className="text-[#262626] dark:text-[#eaeaea]">Phone</label>
                <input
                  type="text"
                  placeholder="phone"
                  className="bg-gray-50 block w-full py-1 px-2 outline-none rounded-sm h-8"
                />
              </div>
              <div className="">
                <label htmlFor="" className="text-[#262626] dark:text-[#eaeaea]">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-gray-50 block w-full py-1 px-2 outline-none rounded-sm h-8"
                />
              </div>
              <div className="">
                <label htmlFor="" className="text-[#262626] dark:text-[#eaeaea]">Question</label>
                <textarea className="bg-gray-50 block w-full py-1 px-2 outline-none  rounded-sm h-8" />
              </div>
              <button className="w-full h-9 text-xs capitalize font-semibold rounded-lg flex items-center justify-center bg-red-600 py-1 px-3 text-white">
                submit question
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const installationQAndA: Record<string, string>[] = [
  {
    ques: "What services does Abundant Engineering provide?",
    ans: "Abundant Engineering offers a full range of elevator and escalator solutions, including installation, preventive maintenance, emergency repairs, spare parts supply, technical consultancy, and modernisation of existing systems.",
  },
  {
    ques: "Do you install new elevators and escalators?",
    ans: "Yes. We handle complete installation projects for residential buildings, commercial properties, industrial facilities, shopping malls, and more. Our team manages everything from design and planning to testing and commissioning.",
  },
  {
    ques: "What maintenance services do you offer?",
    ans: "We provide scheduled preventive maintenance, corrective repairs, safety inspections, lubrication, alignment checks, and performance optimisation to keep your elevator or escalator running smoothly and safely.",
  },
  {
    ques: "How often should an elevator or escalator be serviced?",
    ans: "Typically, elevators and escalators should be serviced every 1–3 months, depending on usage, building type, and regulatory requirements. We can help you determine the ideal maintenance frequency for your equipment.",
  },
];

const maintenanceQAndA: Record<string, string>[] = [
  {
    ques: "Do you provide emergency repair services?",
    ans: "Yes. Abundant Engineering offers rapid-response repair services to minimise downtime and ensure user safety whenever unexpected breakdowns occur.",
  },
  {
    ques: "Can you supply spare parts for different elevator brands?",
    ans: "Absolutely. We stock and supply genuine and high-quality replacement parts for most local and international elevator and escalator brands. If a part is not immediately available, we help source it quickly from our trusted partners.",
  },
  {
    ques: "What is elevator modernisation, and why is it necessary?",
    ans: "Modernisation is the process of upgrading outdated elevator systems—components like controllers, motors, doors, or interiors—to improve safety, reliability, energy efficiency, and aesthetics. It is essential for older installations that no longer meet current standards or performance expectations.",
  },
  {
    ques: "Do you offer consultation services for new building projects?",
    ans: "Yes. Our consultancy team provides expert guidance on elevator design, traffic analysis, load requirements, brand recommendations, project planning, and compliance with local building codes.",
  },
];

const pricingQAndA: Record<string, string>[] = [
  {
    ques: "How long does a new elevator installation take?",
    ans: "Depending on the building type and equipment model, installation typically takes 4–12 weeks, including preparation, installation, testing, and certification.",
  },
  {
    ques: "What types of elevators do you install?",
    ans: "We install passenger elevators, freight elevators, machine-room-less (MRL) elevators, hydraulic elevators, panoramic lifts, hospital lifts, and custom-built solutions for special applications.",
  },
  {
    ques: "What types of escalators do you work with?",
    ans: "We install, service, and modernise commercial escalators, moving walkways (travelators), and high-capacity escalators for malls, airports, offices, and public spaces.",
  },
  {
    ques: "Are your engineers certified?",
    ans: "Yes. Our technicians and engineers are trained, certified, and experienced in working with multiple elevator and escalator brands. We follow strict safety and compliance standards.",
  },
];

const questionsAndAnswers: Record<string, string>[] = [
  {
    ques: "Can you upgrade only specific parts instead of the whole system?",
    ans: "Definitely. We offer selective modernisation such as upgrading only the controller, door operator, cabin interior, drive system, or safety components—based on your budget and needs.",
  },
  {
    ques: "How do I request a quotation?",
    ans: "You can request a quote via our website’s contact form, email, or by calling our support team. We’ll schedule a site visit or consultation to provide an accurate and tailored estimate.",
  },
  {
    ques: "Why should I choose Abundant Engineering?",
    ans: "We provide reliable, cost-effective, and high-quality elevator and escalator solutions backed by expert technicians, fast response times, genuine spare parts, and a customer-first service approach.",
  },
];

export default Page;
