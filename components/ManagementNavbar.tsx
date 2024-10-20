"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ManagementNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="h-[72px] py-[18px] bg-[#fbfdfd] justify-between items-center flex w-full">
            {/* Left Section: Logo and Links */}
            <div className="flex justify-start items-center gap-[20px] md:gap-[50px]">
                <div className="flex items-center gap-1">
                    <Image src="/images/logo/logo.png" alt="logo" width={28} height={28} />
                    <div className="text-[#3f9893] text-[24px] md:text-[28px] font-bold font-['Sen'] leading-7">Tachyon</div>
                </div>

                {/* Navbar Links (Desktop View) */}
                <ul className="hidden md:flex items-start gap-6 md:gap-8">
                    <li className="flex items-center gap-1">
                        <Link href="#" className="text-[#1a2727] text-[15px] font-medium leading-tight">Home</Link>
                        <AiOutlineDown className="text-[#1a2727] text-[12px]" />
                    </li>
                    <li className="flex items-center gap-1">
                        <Link href="#" className="text-[#1a2727] text-[15px] font-medium leading-tight">Tasks</Link>
                        <AiOutlineDown className="text-[#1a2727] text-[12px]" />
                    </li>
                    <li className="flex items-center gap-1">
                        <Link href="#" className="text-[#1a2727] text-[15px] font-medium leading-tight">Meetings</Link>
                        <AiOutlineDown className="text-[#1a2727] text-[12px]" />
                    </li>
                    <li className="flex items-center gap-1">
                        <Link href="#" className="text-[#1a2727] text-[15px] font-medium leading-tight">Reports</Link>
                        <AiOutlineDown className="text-[#1a2727] text-[12px]" />
                    </li>
                </ul>
            </div>

            {/* Right Section: Log in and Try it Free (Desktop) */}
            <div className="hidden md:flex items-center gap-4 md:gap-6">
                <Link href="#" className="text-[#1a2727] text-[15px] font-medium leading-tight">Log in</Link>
                <div className="px-[14px] py-2 bg-[#b7e0de] rounded-xl md:px-[18px] md:py-2 flex items-center justify-center">
                    <Link href="#" className="text-[#010303] text-[15px] font-medium leading-tight">Try it free</Link>
                </div>
            </div>

            {/* Hamburger Icon (Mobile View) */}
            <div className="md:hidden flex justify-start items-center cursor-pointer">
                <AiOutlineMenu className="text-[#1a2727] text-[28px]" onClick={toggleMobileMenu} />
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-[72px] left-0 w-full bg-[#fbfdfd] shadow-md flex flex-col items-start p-4 gap-4 md:hidden"
                >
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-1">
                            <Link href="#" className="text-[#1a2727] text-[16px] font-medium leading-tight">Home</Link>
                            <AiOutlineDown className="text-[#1a2727] text-[14px]" />
                        </li>
                        <li className="flex items-center gap-1">
                            <Link href="#" className="text-[#1a2727] text-[16px] font-medium leading-tight">Tasks</Link>
                            <AiOutlineDown className="text-[#1a2727] text-[14px]" />
                        </li>
                        <li className="flex items-center gap-1">
                            <Link href="#" className="text-[#1a2727] text-[16px] font-medium leading-tight">Meetings</Link>
                            <AiOutlineDown className="text-[#1a2727] text-[14px]" />
                        </li>
                        <li className="flex items-center gap-1">
                            <Link href="#" className="text-[#1a2727] text-[16px] font-medium leading-tight">Reports</Link>
                            <AiOutlineDown className="text-[#1a2727] text-[14px]" />
                        </li>
                    </ul>

                    {/* Log in and Try it Free for Mobile */}
                    <div className="w-full border-t mt-4 pt-4 flex flex-col gap-2">
                        <Link href="#" className="text-[#1a2727] text-[16px] font-medium leading-tight">Log in</Link>
                        <div className="px-[14px] py-2 bg-[#b7e0de] rounded-xl flex items-center justify-center w-full">
                            <Link href="#" className="text-[#010303] text-[16px] font-medium leading-tight">Try it free</Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default ManagementNavbar;
