import Image from "next/image"
import { FaLocationArrow } from "react-icons/fa"

const TopSelling = () => {
    return (
        <div className="md:mt-32 lg:mt-28 mt-24">
            <div className="text-center mb-16">
                <p className="text-[#727692] font-semibold">Top Selling</p>
                <h1 className="md:text-4xl text-[24px] font-bold mt-1">Top Destinations</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full text-center">


                {/* card 1 */}
                <div className="group rounded-3xl text-center flex flex-col items-center justify-between w-full lg:max-w-[280px] lg:h-[385px] md:max-w-[280px] md:h-[385px] max-w-[250px] h-[350px] shadow-2xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <div className="w-full h-4/6 overflow-hidden">
                        <Image src={"/images/italy.jpg"} alt="italy" width={260} height={150} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex justify-between w-full px-4 mt-1">
                        <p className="text-[#727692] font-semibold text-[15px]">Rome, Italy</p>
                        <p className="text-[#727692] font-semibold text-[15px]">$542k</p>
                    </div>
                    <div className="flex items-center w-full px-4 mb-6 gap-3">
                        <FaLocationArrow className="group-hover:text-blue-500 transition-colors duration-300" />
                        <p className="text-[#727692] font-semibold text-[15px]"> 10 Days Trip</p>
                    </div>
                </div>

                {/* card 2 */}
                <div className="group rounded-3xl text-center flex flex-col items-center justify-between w-full lg:max-w-[280px] lg:h-[385px] md:max-w-[280px] md:h-[385px] max-w-[250px] h-[350px] shadow-2xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <div className="w-full h-4/6 overflow-hidden">
                        <Image src={"/images/london.webp"} alt="london" width={260} height={150} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex justify-between w-full px-4 mt-1">
                        <p className="text-[#727692] font-semibold text-[15px]">London, UK</p>
                        <p className="text-[#727692] font-semibold text-[15px]">$4.2k</p>
                    </div>
                    <div className="flex items-center w-full px-4 mb-6 gap-3">
                        <FaLocationArrow className="group-hover:text-blue-500 transition-colors duration-300" />
                        <p className="text-[#727692] font-semibold text-[15px]"> 12 Days Trip</p>
                    </div>
                </div>


                {/* card 3 */}
                <div className="group rounded-3xl text-center flex flex-col items-center justify-between w-full lg:max-w-[280px] lg:h-[385px] md:max-w-[280px] md:h-[385px] max-w-[250px] h-[350px] shadow-2xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <div className="w-full h-4/6 overflow-hidden">
                        <Image src={"/images/europe.jpg"} alt="europe" width={260} height={150} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex justify-between w-full px-4 mt-1">
                        <p className="text-[#727692] font-semibold text-[15px]">Full Europe</p>
                        <p className="text-[#727692] font-semibold text-[15px]">$15k</p>
                    </div>
                    <div className="flex items-center w-full px-4 mb-6 gap-3">
                        <FaLocationArrow className="group-hover:text-blue-500 transition-colors duration-300" />
                        <p className="text-[#727692] font-semibold text-[15px]"> 28 Days Trip</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSelling