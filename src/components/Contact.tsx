import Image from "next/image"
import { AiOutlineMail } from "react-icons/ai"

const Contact = () => {
    return (
        <div className="relative sm:my-36 mt-20 mb-32">
            <div className="relative z-20 bg-[#F9F7FE] w-[80vw] mx-auto lg:py-[70px] md:py-[70px] py-[30px] flex flex-col lg:gap-10 md:gap-10  gap-1 items-center lg:rounded-tl-[100px] md:rounded-tl-[100px] rounded-tl-[70px] rounded-bl-2xl rounded-br-2xl">
                <h1 className="text-[#5E6282] lg:text-[34px] md:text-[34px] text-[2vmax] font-bold lg:w-[70%] md:w-[70%] w-[86%] text-center sm:mt-0 mt-5">Subscribe to get information, latest news and other interesting offers about Roamly</h1>

                <div className="flex flex-col md:flex-row w-full max-w-[480px] items-center space-y-3 md:space-y-0 md:space-x-3 mt-5">
                    <div className="relative flex-grow">
                        <AiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full rounded-md lg:h-14 md:h-14 h-10  bg-white pl-12 pr-4 py-[18px] text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                    </div>
                    <button className="bg-[#FF8C6B] lg:h-14 md:h-14 h-10 px-9 py-1 w-fit lg:w-[150px] md:w-[150px]  text-white rounded-lg">Subscribe</button>


                    <div className="absolute top-[-28px] right-[-20px] w-[50px] h-[50px] md:top-[-25px] md:right-[-35px] md:w-[68px] md:h-[68px] lg:top-[-26px] lg:right-[-35px] lg:w-[68px] lg:h-[68px]">
                        <Image
                            src={"/images/arrow.png"}
                            alt="send"
                            width={50}
                            height={50}
                            className="rounded-full w-[50px] h-[50px] md:h-[68px] md:w-[68px]"
                        />
                    </div>

                </div>
            </div>

            <div className="absolute bottom-[-65px] lg:right-10 md:right-10 right-0 z-0">
                <div className="text-right leading-7">
                    <p className="tracking-[0.3em] text-[#e0dbdb] text-[22px] mb-1">+ + <span className="text-[#FF7A5D]">+ </span></p>
                    <p className="tracking-[0.3em] text-[#e0dbdb]  text-[22px]  mb-1">+ + +</p>
                    <p className="tracking-[0.3em] text-[#e0dbdb]  text-[22px]  mb-1"> <span className="text-[#9D8BEF]">+ </span>+ +</p>
                    <p className="tracking-[0.3em] text-[#e0dbdb]  text-[22px]  mb-1">+ + + +</p>
                    <p className="tracking-[0.3em] text-[#e0dbdb]  text-[22px] ">+ + + + +</p>
                </div>
            </div>
        </div>
    )
}

export default Contact