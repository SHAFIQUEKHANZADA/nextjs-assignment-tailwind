"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Shafique Ur Rehman",
        ocupation: "Nextjs Developer",
        text: "Across the endless field, where twilight falls gently, the horizon blurs the line between what was and what will be. Each moment lingers, suspended like a forgotten note, in the symphony of a world unhurried by the passing hours.",
        image: "/shafiq.jpeg",
    },
    {
        id: 2,
        name: "Zayan Ahmed",
        ocupation: "Frontend Developer",
        text: "Beneath the silent moonlit river, the whispers of forgotten tales flow, drifting gently as if untouched by time. Shadows linger on the edge of dreams, where the past meets tomorrow in quiet contemplation.",
        image: "/zayan.jpeg",
    },
    {
        id: 3,
        name: "Asharib Ali",
        ocupation: "Cloud Native Applied GenAI Engineer",
        text: "Through the winding forest path, where sunlight dapples softly, every step hums with the secrets of those who once wandered. Each tree bears witness to the silent echoes of stories untold, waiting to be discovered.",
        image: "/asharib.jpeg",
    },
    {
        id: 4,
        name: "Daniyal Nagori",
        ocupation: "CEO of Cryptofleet, PIAIC, and GIAIC",
        text: "Upon the misty hillside, where dawn stretches its golden fingers, the land speaks of distant memories. The winds carry whispers of journeys long past, as the earth breathes in the quiet rhythm of time.",
        image: "/daniyal.jpeg",
    },
];

const Headings = [
    {
        heading: "What People Say About Us."
    },
    {
        heading: "Hear What Our Clients Have to Say."
    },
    {
        heading: "Voices of Our Satisfied Travelers."
    },
];


const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const [current, setCurrent] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % Headings.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrent(index);
    };
    useEffect(() => {
        // Check the screen size and update the state
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div className="lg:flex md:flex mt-40 lg:mx-36 md:mx-28 mx-7 mb-10 lg:gap-5">
            <div>
                <p className="text-[#5E6282] font-semibold text-[18px]">Testimonials</p>
                {/* <h1 className="font-bold md:text-[48px] lg:text-[48px] text-[30px] w-4/5 mt-2">What People Say About Us.</h1> */}


                <div className="relative w-full  mx-auto">

                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {Headings.map((heading, index) => (
                                <div
                                    key={index}
                                    className="min-w-full"
                                >
                                    {/* Heading */}
                                    <h1 className="font-bold md:text-[48px] lg:text-[48px] text-[30px] w-[90%] mt-2">
                                        {heading.heading}
                                    </h1>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="flex lg:justify-start md:justify-start justify-center mt-8 lg:gap-4 md:gap-4 gap-1">
                        {Headings.map((_, indexx) => (
                            <span
                                key={indexx}
                                className={`h-[10px] w-[10px] rounded-full mx-1 cursor-pointer ${current === indexx ? "bg-gray-800" : "bg-gray-300"
                                    }`}
                                onClick={() => handleDotClick(indexx)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <div className="relative flex items-center justify-center md:h-[300px] h-[180px] w-full lg:mt-0 md:mt-0 mt-14">
                    {/* Cards Container */}
                    <div className="relative  md:w-[400px] md:h-[230px] w-[300px] h-[200px]">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`absolute inset-0 bg-white shadow-lg sm:p-6 sm:pr-10 p-3 rounded-lg transition-transform duration-400 
                          ${index === currentIndex ? "translate-x-0 translate-y-0 z-10" : "translate-x-6 translate-y-6 z-0"}`}
                                // Apply different transforms based on screen size
                                style={{
                                    transform: `translate(${index === currentIndex ? 0 : isSmallScreen ? 30 : 40
                                        }px, ${index === currentIndex ? 0 : isSmallScreen ? 50 : 60}px)`,
                                }}
                            >
                                {/* Image (partially outside top-left) */}
                                <div className="absolute lg:-top-9 lg:-left-9 md:-top-9 md:-left-9 -top-6 -left-6 lg:w-[80px] lg:h-[80px] md:w-[80px] md:h-[80px]">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={68}
                                        height={68}
                                        className="rounded-full border-4 border-white lg:h-[68px] lg:w-[68px] md:h-[68px] md:w-[68px] h-[50px] w-[50px]"
                                    />
                                </div>

                                {/* Testimonial Content */}
                                <div className="mt-3 flex flex-col justify-between h-full">
                                    {/* Testimonial Text */}
                                    <p className="text-gray-600 lg:text-sm md:text-sm text-[13px] lg:line-clamp-none md:line-clamp-none line-clamp-4 mt-2 lg:mb-7 md:mb-7 mb-0">{testimonial.text}</p>
                                    
                                    <div className="mt-auto lg:mb-0 md:mb-0 mb-2">
                                        <h2 className="lg:text-[16px] md:text-[16px] text-[14px] font-semibold text-[#586282]">{testimonial.name}</h2>
                                        <p className="lg:text-[15px] md:text-[15px] text-[12px] text-[#586282]">{testimonial.ocupation}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:gap-8 md:gap-8 gap-6 lg:pl-20 md:pl-20 pl-8 lg:mt-0 md:mt-0 mt-20">
                        {/* Arrow Up */}
                        <button
                            className="right-6 top-0  p-2 rounded-full hover:shadow-lg text-gray-700 hover:text-gray-300"
                            onClick={handlePrevious}
                        >
                            <FaChevronUp className="text-md" />
                        </button>

                        {/* Arrow Down */}
                        <button
                            className="right-6 bottom-0  p-2 rounded-full hover:shadow-lg text-gray-700 hover:text-gray-300"
                            onClick={handleNext}
                        >
                            <FaChevronDown className="text-md" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials