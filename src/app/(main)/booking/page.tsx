"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Booking = () => {
    const [selected, setSelected] = useState("option1");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);  
    };
    const [showInput, setShowInput] = useState(false);

    const handleAddPromoCode = () => {
        setShowInput(true);
    };

    return (
        <div className="bg-[#F2F3FA] relative  flex justify-center items-center sm:pb-[25%] pb-[55%]">
            <div className="relative w-full mx-auto">
                {/* Background Image */}
                <div className="relative w-full h-full">
                    <Image
                        src="/images/book.jpg"
                        alt="book"
                        layout="responsive"
                        width={100}
                        height={60}
                        className="w-full h-full object-cover opacity-50 hidden md:block"
                    />
                    <Image
                        src="/images/mob.jpg"
                        alt="book"
                        layout="responsive"
                        width={100}
                        height={60}
                        className="w-full h-full object-cover opacity-50 block md:hidden"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black opacity-30"></div>

                    {/* Centered Text */}
                    <div className="absolute inset-0 flex sm:top-[40%] top-[20%] left-[7%]   text-white text-3xl md:text-5xl">
                        Book smarter, fly further
                    </div>
                </div>

                <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 w-[85%] bg-white h-auto rounded-2xl shadow-2xl p-6 flex flex-col gap-8">
                    {/* Radio Options */}
                    <div className="flex sm:gap-6 gap-3">
                        <label className="flex items-center gap-2 md:text-xl sm:text-lg text-sm">
                            <input
                                type="radio"
                                name="radio"
                                value="option1"
                                checked={selected === "option1"}
                                onChange={handleChange}
                                className="accent-blue-500 w-5 h-5"
                            />
                            Return
                        </label>
                        <label className="flex items-center gap-2 md:text-xl sm:text-lg text-sm">
                            <input
                                type="radio"
                                name="radio"
                                value="option2"
                                checked={selected === "option2"}
                                onChange={handleChange}
                                className="accent-blue-500 w-5 h-5"
                            />
                            One way
                        </label>
                        <label className="flex items-center gap-2 md:text-xl sm:text-lg text-sm">
                            <input
                                type="radio"
                                name="radio"
                                value="option3"
                                checked={selected === "option3"}
                                onChange={handleChange}
                                className="accent-blue-500 w-5 h-5"
                            />
                            Multi-city
                        </label>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 items-end">
                        <div className="flex-1 flex flex-col">
                            <input
                                type="text"
                                placeholder="From"
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                        </div>

                        <div className="flex-1 flex flex-col">
                            <input
                                type="text"
                                placeholder="To"
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                        </div>

                        {/* Calendar Date Selectors */}
                        <div className="flex-1 flex flex-col mt-4">
                            <label htmlFor="departure1" className="text-sm mb-1">Departure</label>
                            <input
                                type="date"
                                id="departure1"
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                        </div>

                        <div className="flex-1 flex flex-col mt-4">
                            <label htmlFor="departure2" className="text-sm mb-1">Return</label>
                            <input
                                type="date"
                                id="departure2"
                                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                            />
                        </div>

                        {/* Passengers/Class Selector */}
                        <div className="flex-1 flex flex-col mt-4">
                            <label htmlFor="passengerClass" className="text-sm mb-1">Passengers / Class</label>
                            <select
                                id="passengerClass"
                                className="border border-gray-300 rounded-md px-3 py-3 w-full"
                            >
                                <option value="1-passenger-economy">1 Passenger Economy</option>
                                <option value="2-passenger-business">2 Passengers Business</option>
                                <option value="3-passenger-first">3 Passengers First</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex sm:gap-4 gap-2 justify-end items-center'>
                        <div>
                            {!showInput ? (
                                <button
                                    onClick={handleAddPromoCode}
                                    className="text-blue-500 sm:text-[17px] text-[12px] font-semibold hover:underline"
                                >
                                    + Add Promo Code
                                </button>
                            ) : (
                                <input
                                    type="text"
                                    placeholder="Enter promo code"
                                    className="mt-2 border sm:text-[17px] text-[12px] border-gray-300 rounded-md px-3 py-2 sm:w-full w-[140px]"
                                />
                            )}
                        </div>
                        <button className='px-6 py-4 sm:text-[17px] text-[12px] bg-[#DF6951] text-white rounded-[30px]'>Search flights</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking
