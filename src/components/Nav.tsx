"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { MdPersonAddAlt1 } from "react-icons/md";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <div className="flex justify-center relative">
                <Image
                    src="/images/Decore.png"
                    alt="Logo"
                    width={320}
                    height={100}
                    className="absolute right-0 z-[-20] md:w-[44vw] w-[65vw]" // Adjusted to z-0
                />
            </div>

            <div className="flex justify-between items-center px-4 lg:px-16 lg:py-4 py-2 md:py-5 w-full top-0 z-20 relative bg-transparent">
                {/* left - Logo */}
                <div className="z-20">
                    <Image src={"/images/roamly.png"} alt="roamly" width={120} height={0} className="w-[22vw] md:w-[140px]" />
                </div>

                {/* right - Menu */}
                <div className="flex items-center md:gap-[4vw] z-20">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex lg:gap-16 md:gap-4">
                        <Link href={"/"}><li>Home</li></Link>
                        <Link href={"/hotels"}><li>Hotels</li></Link>
                        <Link href={"/flights"}><li>Flights</li></Link>
                        <Link href={"/booking"}><li>Bookings</li></Link>
                    </ul>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-14">
                        <button>Login</button>
                        <button className="px-3 py-1 border border-zinc-950 rounded-sm shadow-inner">
                            Sign up
                        </button>
                    </div>

                    {/* Language Selector */}
                    <div>
                        <select className="bg-transparent">
                            <option value="EN">EN</option>
                            <option value="UR">UR</option>
                            <option value="ES">ES</option>
                            <option value="DE">DE</option>
                            <option value="ZH">ZH</option>
                        </select>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden ml-4 dark:text-white text-black focus:outline-none"
                    >
                        {isOpen ? (
                            <FaTimes className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <FaBars className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } absolute top-full left-0 w-full bg-white dark:bg-gray-800 text-black dark:text-white md:hidden z-50`}
                    style={{ zIndex: 999 }}
                >
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <Link href={"/"}><li>Home</li></Link>
                        <Link href={"/hotels"}><li>Hotels</li></Link>
                        <Link href={"/flights"}><li>Flights</li></Link>
                        <Link href={"/booking"}><li>Bookings</li></Link>
                        <button className="w-full py-2 flex justify-center items-center gap-1">Login <span><IoLogInOutline className="block md:hidden text-[5vw]" /></span></button>
                        <button className="w-full py-2 flex justify-center items-center gap-1">
                            Sign up <span className="block md:hidden text-[5vw]"><MdPersonAddAlt1 /></span>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
