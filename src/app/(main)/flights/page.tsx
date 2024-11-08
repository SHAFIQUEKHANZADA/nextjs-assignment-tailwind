import Image from 'next/image'
import { FaArrowRightLong, FaMapLocationDot } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { IoPerson, IoSearch } from 'react-icons/io5';
import { TbArrowsExchange } from 'react-icons/tb';
import { TfiLocationArrow } from 'react-icons/tfi';

const Flights = () => {
    return (
        <div className=" relative  sm:pb-[20%] pb-[40%] overflow-x-hidden w-full">
            <div>
                <div className="relative w-full mx-auto mt-8 rounded-[50px]">
                    {/* Background Image */}
                    <div className="relative w-[90%] h-[80vh] md:h-[100]  mx-auto sm:rounded-[50px] rounded-[20px]">
                        <Image
                            src="/images/map.jpg"
                            alt="map"
                            fill
                            className="object-cover opacity-50"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black opacity-10 sm:rounded-[50px] rounded-[20px]"></div>

                        {/* Centered Text */}
                        <div className="absolute inset-0 flex  sm:items-center left-[40px] pt-16 sm:pt-0 text-gray-500 text-3xl md:text-5xl">
                            Flight <br /> Booking
                        </div>

                        <div className="flex absolute top-[-25px]">
                            <div className="h-[70px] w-[180px]  flex items-center justify-center   animate-move-across">
                                <Image
                                    src={"/images/airplan.png"}
                                    alt="Airplane logo"
                                    width={110}
                                    height={90}
                                    className="object-contain lg:h-[180px] lg:w-[280px] md:h-[180px] md:w-[280px]"
                                />
                            </div>
                        </div>

                    </div>

                </div>

                <div className='flex md:flex-row flex-col w-[90%] sm:mt-24 mt-10 mx-auto'>

                    <div className='md:w-[30%] '>
                        <div className='flex flex-col gap-2'>
                            <div className="border border-gray-300   p-4 w-full max-w-sm shadow-md">
                                {/* Header with down arrow */}
                                <div className="flex items-center justify-between pb-2">
                                    <span className="font-semibold text-gray-700">Filters</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-500 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Divider line */}
                                <hr className="border-t border-gray-300 mb-2" />

                                {/* Content below the line */}
                                <div className="pt-2">
                                    <span className="text-gray-600">No of transit</span>

                                    {/* First select option */}
                                    <div className="mt-3">
                                        <label htmlFor="transit" className="block text-sm font-medium text-gray-600">Choose Transit</label>
                                        <select
                                            id="transit"
                                            name="transit"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>

                                    {/* Second select option */}
                                    <div className="mt-3">
                                        <label htmlFor="mode" className="block text-sm font-medium text-gray-600">Choose Mode</label>
                                        <select
                                            id="mode"
                                            name="mode"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Air</option>
                                            <option>Sea</option>
                                            <option>Land</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-gray-300   p-4 w-full max-w-sm shadow-md">
                                {/* Header with down arrow */}
                                <div className="flex items-center justify-between pb-2">
                                    <span className="font-semibold text-gray-700">Filters</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-500 cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>

                                {/* Divider line */}
                                <hr className="border-t border-gray-300 mb-2" />

                                {/* Content below the line */}
                                <div className="pt-2">
                                    <span className="text-gray-600">No of transit</span>

                                    {/* First select option */}
                                    <div className="mt-3">
                                        <label htmlFor="transit" className="block text-sm font-medium text-gray-600">Choose Transit</label>
                                        <select
                                            id="transit"
                                            name="transit"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>

                                    {/* Second select option */}
                                    <div className="mt-3">
                                        <label htmlFor="mode" className="block text-sm font-medium text-gray-600">Choose Mode</label>
                                        <select
                                            id="mode"
                                            name="mode"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Air</option>
                                            <option>Sea</option>
                                            <option>Land</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-auto h-auto  p-6 flex flex-col sm:gap-0 gap-5">

                        <div className='flex gap-3 sm:justify-start justify-center'>
                            <div className='flex gap-1 bg-gray-200 p-2 rounded-[40px] px-3 text-[12px] items-center'><FaArrowRightLong /> On way</div>
                            <div className='flex gap-1 bg-gray-200 p-2 rounded-[40px] px-3 text-[12px] items-center'><IoPerson /> 1</div>
                            <div className='flex gap-1 bg-gray-200 p-2 rounded-[40px] px-3 text-[12px] items-center'><FaMapLocationDot />
                                Location  <IoIosArrowDown /></div>

                        </div>

                        <div className="flex justify-center">
                            <div className="flex flex-col md:flex-row w-full justify-center items-center mt-5 gap-3">
                                <div className="flex gap-2 justify-center w-full max-w-5xl">
                                    <div className="relative flex-grow">
                                        <TfiLocationArrow className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="search"
                                            placeholder="From"
                                            className="w-full rounded-[40px]  bg-white pl-12 pr-4 py-[6px] text-sm border border-black/30"
                                        />
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <TbArrowsExchange className="text-xl" />
                                    </div>

                                    <div className="relative flex-grow">
                                        <TfiLocationArrow className="absolute left-4 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="text"
                                            placeholder="To"
                                            className="w-full border border-black/30 rounded-[40px] bg-white pl-12 pr-4 py-[6px] text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Calendar Date Selectors */}
                                <div className="flex w-full justify-center">
                                    <div className="flex sm:flex-row flex-col gap-4 flex-grow">
                                        <div className="flex-grow">
                                        <label htmlFor="name" className='sm:hidden block'>From</label>
                                            <input
                                                type="date"
                                                id="departure1"
                                                className="border border-gray-300 rounded-[40px] px-3 py-[5px] w-full"
                                            />
                                        </div>
                                        <div className="flex-grow">
                                        <label htmlFor="name" className='sm:hidden block'>To</label>
                                            <input
                                                type="date"
                                                id="departure2"
                                                className="border border-gray-300 rounded-[40px] px-3 py-[5px] w-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button className="bg-gray-500  md:py-3 md:px-3 py-3 px-16  text-white md:rounded-[50%] rounded-[20px]">
                                    <IoSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flights
