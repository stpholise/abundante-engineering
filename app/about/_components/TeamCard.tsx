import Image from "next/image";

const TeamCard = ({ item } : { item: { name: string; role: string; photo: string; phone?: string; extraInfo?: string } }) => {
  return (
     <div
                  className="  flex items-center gap-1 text-center  dark:border-[#262626] border border-[#e6e6e6] rounded-2xl px-6 py-4 flex-col hover:shadow-lg duration-300 ease-in-out cursor-pointer "
                >
                  <Image src={ '/globe.svg'} alt="team member" width={200} height={200} className="size-20 rounded-full"/>

                  <h4 className="text-base font-medium px-2 py-0.5  my-1.5 text-[#0a0a0a] dark:text-white rounded-md ">
                    {item.name}
                  </h4>
                
                  <p className="text-[#717182] text-xs ">{item.role}</p>
                  <p className="text-[#717182] text-xs ">{item.role}</p>

                  <p className="text-[#717182] text-xs mt-2 ">{item.extraInfo}</p>
                  <p className="text-[#717182] text-xs mt-2 ">{item.phone}</p>
                </div>
  )
}

export default TeamCard