import Image from "next/image"
import { IoIosPlay } from "react-icons/io"

const Hero = () => {
    return (
        <div className="md:h-[500px] md:mt-2 h-full justify-center items-center mx-4 flex md:flex-row flex-col lg:mx-20">
            {/* left */}
            <div className="lg:w-1/2 py-4 items-center lg:mt-0 mt-4 flex-1 z-10 relative">
                <h3 className="text-[#DF6951] font-bold lg:text-xl md:text-lg text-[14px] mt-10 z-50">BEST DESTINATIONS AROUND THE WORLD</h3>
                <h1 className="scroll-m-20 text-[12vw] font-bold tracking-tight sm:text-7xl lg:mt-4 mt-2 z-50">
                    Travel,
                    <span className="relative z-10"> enjoy
                        <div className="absolute bottom-0 left-1 md:w-[250px] w-[35vw] z-0">
                            <Image src={"/images/line.png"} alt="line" width={500} height={500} className="z-0"/>
                        </div>

                    </span> and live a new and full life
                </h1>

                <p className="w-11/12 text-[#727692] lg:font-semibold font-light lg:text-[18px] text-[14px] mt-4">Built Wicket Longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

                <div className="flex gap-7 mt-5">
                    <button className="bg-[#F1A501] text-white text-sm rounded-md px-6 py-2 shadow-2xl">Find out more</button>

                    <div className="relative flex items-center gap-4 py-1 group cursor-pointer">
                        <button className="bg-[#DF6951] shadow-2xl p-3 rounded-full text-white text-1xl"><IoIosPlay /></button>
                        <span className="text-[#727692]">Play Demo</span>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className="relative flex-1 flex items-center justify-center sm:mt-16 mt-7 md:w-[40vw]">
                {/* Main Image */}
                <Image src={"/images/trvel.png"} alt="travel" width={580} height={0} className="z-10" />

                {/* Left Image */}
                <Image src={"/images/plan.png"} alt="plan-left" width={160} height={0} className="absolute md:left-[2.4vw] left-[1vw] md:top-[3vw] top-[1vw] z-0 sm:w-[160px] w-[30vw]" />

                {/* Right Image */}
                <Image src={"/images/plan.png"} alt="plan-right" width={150} height={0} className="absolute md:right-[1.8vw] md:top-2 right-[-2vw] top-1 z-0" />
            </div>

        </div>
    )
}

export default Hero