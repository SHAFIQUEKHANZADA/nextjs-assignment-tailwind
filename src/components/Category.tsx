import Image from "next/image"


const Category = () => {
    return (
        <div className="relative mt-20 lg:mt-24">
            <div className="absolute top-0 right-0 p-4 z-0">
                <div className="text-right leading-none">
                    <Image src={"/images/stars.png"} alt="stars" width={100} height={100}/>
                </div>
            </div>

            <div className="flex flex-col justify-center text-center">
                <p className="text-[#686C8A] font-semibold mb-1 ">CATEGORY</p>
                <h1 className="md:text-4xl text-[24px] font-bold z-10">We Offer Best Services</h1>
            </div>

            {/* card */}
            <div className="lg:flex lg:flex-row md:grid md:grid-cols-2 md:text-center md:gap-20 justify-around lg:gap-4 lg:mx-24 md:mx-8 mt-20 flex flex-col items-center place-items-center mx-auto gap-14">

                {/* Card 1 */}
                <div className="relative  rounded-3xl text-center flex flex-col items-center justify-center p-6 w-[200px] h-60 hover:shadow-2xl group bg-white md:border-none border">

                    <Image src={"/images/satellite-dish.png"} alt="Satellite Dish" width={50} height={50} />
                    <h1 className="mt-4 font-bold text-md">Calculated Weather</h1>
                    <p className="mt-2 text-sm text-[#5E6282] text-[12px]">
                        Built Wicket longer admire do barton vanity itself do in it.
                    </p>


                    <div className="absolute bottom-[-22px] left-[-22px] w-[80px] h-[70px] bg-[#DD6A52] rounded-tl-[18px] rounded-tr-[10px] rounded-br-[6px] rounded-bl-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[-1]"></div>
                </div>


                {/* Card 2 */}
                <div className="relative  rounded-3xl text-center flex flex-col items-center justify-center p-6 w-[200px] h-60 hover:shadow-2xl group bg-white md:border-none border">
                    <Image src={"/images/flight.png"} alt="Flight" width={50} height={50} />
                    <h1 className="mt-4 font-bold text-md">Best Flights</h1>
                    <p className="mt-2 text-sm text-[#5E6282] text-[12px]">Engrossed listening. Park gate sell they west hard for the.</p>

                    <div className="absolute bottom-[-22px] left-[-22px] w-[80px] h-[70px] bg-[#ada5c9] rounded-tl-[18px] rounded-tr-[10px] rounded-br-[6px] rounded-bl-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[-1]"></div>
                </div>

                {/* Card 3 */}
                <div className="relative  rounded-3xl text-center flex flex-col items-center justify-center p-6 w-[200px] h-60 hover:shadow-2xl group bg-white md:border-none border">
                    <Image src={"/images/sound.png"} alt="Local Events" width={50} height={50} />
                    <h1 className="mt-4 font-bold text-md">Local Events</h1>
                    <p className="mt-2 text-sm text-[#5E6282] text-[12px]">Barton vanity itself do in it. Preferred to men it engrossed listening.</p>

                    <div className="absolute bottom-[-22px] right-[-22px] w-[80px] h-[70px] bg-[#ffa052] rounded-tr-[18px] rounded-tl-[10px] rounded-bl-[6px] rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[-1]"></div>
                </div>

                {/* Card 4 */}
                <div className="relative  rounded-3xl text-center flex flex-col items-center justify-center p-6 w-[200px] h-60 hover:shadow-2xl group bg-white md:border-none border">
                    <Image src={"/images/cogwheel.png"} alt="Customization" width={50} height={50} />
                    <h1 className="mt-4 font-bold text-md">Customization</h1>
                    <p className="mt-2 text-sm text-[#5E6282] text-[12px]">We deliver outsourced aviation services for military customers.</p>

                    <div className="absolute bottom-[-22px] right-[-22px] w-[80px] h-[70px] bg-[#029BC5] rounded-tr-[18px] rounded-tl-[10px] rounded-bl-[6px] rounded-br-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[-1]"></div>
                </div>
            </div>


        </div>
    )
}

export default Category
