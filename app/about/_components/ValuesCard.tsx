import Image from 'next/image'

const ValuesCard = ({ icon, title, description } : { icon:string, title:string, description:string }) => {
  return (
    <div className='flex flex-col justify-center items-center border gap-4 border-[#e6e6e6] dark:border-[#262626] rounded-lg  hover:shadow-lg duration-300 ease-in-out cursor-pointer py-6 px-6'>
      <Image src={icon} alt="Value icon" width={200} height={100} className="rounded-t-lg  size-8 " />
        <h4 className="capitalize text-lg font-medium text-[#0a0a0a] dark:text-white">{title}</h4>
        <p className=" text-[#717182] text-center text-xs  ">{description}</p>
    </div>
  )
}

export default ValuesCard