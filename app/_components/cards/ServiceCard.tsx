import Image from "next/image";

const ServiceCard = ({ title, text,  icon } : { title: string; text: string; value?: string; icon: string }) => {
 
  return (
    <div data-aos="fade-up" className="max-w-96 min-h-95 border border-[#e6e6e6] dark:border-[#262626] rounded-xl px-6 py-6 mx-auto flex flex-col dark:bg-black hover:shadow-lg ease-in-out z-0">
      <div className="w-full  h-fit overflow-hidden rounded-lg z-0">
        <Image
          src={"/hero.jpg"}
          alt="service"
          className="object-cover w-full h-40 max-h-40 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out z-0"
          width={420}
          height={360}
        />
      </div>

      <div className=" flex items-center gap-2  mt-4  ">
        <Image src={icon} alt="service icon" width={17} height={16} />
        <h3 className="text-base font-medium text-[#0a0a0a]  dark:text-gray-200">
          {title}
        </h3>
      </div>
      <div className="mt-auto">
        <p className=" text-[#717182] dark:text-[#a1a1a1]  text-xs">
          {text}
        </p>
        <button className="text-white h-8 bg-red-600  rounded-lg px-4 py-2 w-full mt-4   text-xs font-medium m flex items-center justify-center gap-2">
          request now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
