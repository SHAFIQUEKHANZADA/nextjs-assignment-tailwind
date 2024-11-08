import Image from "next/image"
import { FaLeaf, FaLocationArrow, FaRegMap } from "react-icons/fa"
import { IoIosHeartEmpty } from "react-icons/io"
import { IoCarOutline } from "react-icons/io5"
import { MdGroupAdd } from "react-icons/md"
import { RiSecurePaymentFill } from "react-icons/ri"
import { TbFrame } from "react-icons/tb"


const Booking = () => {
    return (
        <div className="flex flex-col md:flex-row lg:mt-40 md:mt-32 lg:mx-44 md:mx-20 mt-32 items-center justify-center">

            <div className="flex flex-col w-full lg:items-start md:items-start items-center">
                <p className="text-[#6e7399] font-semibold text-[16px]">Easy and Fast</p>
                <h1 className="font-bold md:text-[3.6vw] text-[30px] w-4/5 mt-2">Book Your Next Trip In 3 Easy Steps</h1>

                <div className="flex flex-col lg:gap-8 md:gap-8 gap-4 mt-3 lg:mx-0 md:mx-0 mx-5">
                    {/* 1 */}
                    <div className="flex gap-3 items-center">
                        <span className="bg-[#F0BB1F] text-white  rounded-lg p-2 justify-center items-center text-[28px]"><TbFrame /></span>
                        <div>
                            <h1 className="text-[#5E6282] font-semibold text-[14px]">Choose Destination</h1>
                            <p className="text-[#5E6282]  md:w-2/3  text-[13px]">Explore our curated list of top travel locations and select your favorite.</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="flex gap-3 items-center">
                        <span className="bg-[#F15A2B] text-white  rounded-md p-2 justify-center items-center text-[28px]"><RiSecurePaymentFill /></span>
                        <div>
                            <h1 className="text-[#5E6282] font-semibold text-[14px]">Make Payment</h1>
                            <p className="text-[#5E6282]  md:w-2/3 text-[13px]">Securely complete your booking online and enjoy a hassle-free payment process.</p>
                        </div>
                    </div>
                    {/* 3 */}

                    <div className="flex gap-3 items-center">
                        <span className="bg-[#006380] text-white  rounded-md p-2 justify-center items-center text-[28px]"><IoCarOutline /></span>
                        <div>
                            <h1 className="text-[#5E6282] font-semibold text-[14px]">Reach Airport on Selected Date</h1>
                            <p className="text-[#5E6282]  text-[13px]  md:w-2/3">Arrive at the airport on your selected date to begin your journey.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative mt-10">
                {/* First Div */}
                <div className="rounded-[18px] p-5 shadow-2xl lg:w-[310px] lg:h-[340px] md:w-[310px] md:h-[340px] w-[280px] h-[300px] lg:mr-16 md:mr-16 mr-3">
                    <div className="w-full lg:h-[140px] md:h-[140px] h-[120px] overflow-hidden rounded-2xl">
                        <Image src={"/images/gry.jpg"} alt="grece" width={300} height={100} className="rounded-2xl" />
                    </div>

                    <h1 className="lg:mt-5 md:mt-5 mt-3 font-semibold text-[16px] text-[#181818]">Trip To Greece</h1>
                    <p className="text-[#84829A] text-[13px] mt-1">10-23 Oct | by Shafique Ur Rehman</p>

                    <div className="flex lg:gap-3 md:gap-3 gap-1 mt-3 pl-2">
                        <p className="p-2 rounded-full bg-[#F5F5F5] text-[12px]"> <FaLeaf className="text-[#84829A]" /></p>
                        <p className="p-2 rounded-full bg-[#F5F5F5] text-[12px]"> <FaRegMap className="text-[#84829A]" /></p>
                        <p className="p-2 rounded-full bg-[#F5F5F5] text-[12px]"> <FaLocationArrow className="text-[#84829A]" /></p>
                    </div>

                    <div className="flex justify-between items-center lg:mt-7 md:mt-7 mt-4">
                        <div className="flex items-center text-[#84829A] gap-3 text-[14px]">
                            <span className="text-[#84829A] text-[18px]"><MdGroupAdd /></span> 24 people going
                        </div>
                        <p className="text-[#84829A] text-[20px]"><IoIosHeartEmpty /></p>
                    </div>
                </div>

                {/* Second Div */}
                <div className="absolute lg:top-[240px] lg:right-[-22px] md:top-[240px] md:right-[-22px] top-[200px] right-[-20px] transform translate-y-[-50%] flex lg:w-[220px] lg:h-[100px] md:w-[220px] md:h-[100px] w-[180px] h-[80px] p-3 gap-2 rounded-xl bg-white shadow-xl">
                    <div>
                        <Image src={"/images/dome.jpg"} alt="dome" width={38} height={38} className="rounded-full" />
                    </div>
                    <div>
                        <p className="text-[#7e82a3] lg:text-[12px] md:text-[12px] text-[10px]">Ongoing</p>
                        <h1 className="lg:text-[14px] md:text-[14px] text-[12px] font-semibold">Trip to rome</h1>

                        <p className="text-[11px] lg:mt-2 md:mt-2 mt-1 font-semibold">
                            <span className="text-[#7e82a3] text-[12px] font-normal">40% </span>Completed
                        </p>

                        <div className="lg:w-[130px] md:w-[130px] w-[100px] bg-gray-100 h-1 rounded-full mt-1">
                            <div className="bg-blue-500 h-1 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking