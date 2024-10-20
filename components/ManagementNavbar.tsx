"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import { motion } from 'framer-motion';

const ManagementNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="h-[72px] py-[18px] bg-[#fbfdfd] justify-between items-center flex w-full px-4">
            {/* Left Section: Logo and Links */}
            <div className="flex justify-start items-center gap-[20px] md:gap-[50px]">
                <div className="flex items-center gap-1">
                    <Image src="/images/logo/logo.png" alt="logo" width={28} height={28} />
                    <div className="text-[#3f9893] text-[24px] md:text-[28px] font-bold font-['Sen'] leading-7">Tachyon</div>
                </div>

                {/* Navbar Links (Desktop View) */}
                <div className="hidden md:flex items-start gap-6 md:gap-8">
                    <div className="flex items-center gap-1">
                        <div className="text-[#1a2727] text-[15px] font-medium font-['Inter'] leading-tight">Home</div>
                        <AiOutlineDown className="text-[#1a2727] text-[12px]" />
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="text-[#1a2727] text-[15px] font-medium font-['Inter'] leading-tight">Tasks</div>
                        <AiOutlineDown className="text-[#1a2727] text-[12px]" />
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="text-[#1a2727] text-[15px] font-medium font-['Inter'] leading-tight">Meetings</div>
                        <AiOutlineDown className="text-[#1a2727] text-[12px]" />
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="text-[#1a2727] text-[15px] font-medium font-['Inter'] leading-tight">Reports</div>
                        <AiOutlineDown className="text-[#1a2727] text-[12px]" />
                    </div>
                </div>
            </div>

            {/* Right Section: Log in and Try it Free (Desktop) */}
            <div className="hidden md:flex items-center gap-4 md:gap-6">
                <div className="text-[#1a2727] text-[15px] font-medium font-['Inter'] leading-tight">Log in</div>
                <div className="px-[14px] py-2 bg-[#b7e0de] rounded-xl md:px-[18px] md:py-2 flex items-center justify-center">
                    <div className="text-[#010303] text-[15px] font-medium font-['Inter'] leading-tight">Try it free</div>
                </div>
            </div>

            {/* Hamburger Icon (Mobile View) */}
            <div className="md:hidden flex justify-start items-center">
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
                    <div className="flex items-center gap-1">
                        <div className="text-[#1a2727] text-[16px] font-medium font-['Inter'] leading-tight">Home</div>
                        <AiOutlineDown className="text-[#1a2727] text-[14px]" />
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="text-[#1a2727] text-[16px] font-medium font-['Inter'] leading-tight">Tasks</div>
                        <AiOutlineDown className="text-[#1a2727] text-[14px]" />
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="text-[#1a2727] text-[16px] font-medium font-['Inter'] leading-tight">Meetings</div>
                        <AiOutlineDown className="text-[#1a2727] text-[14px]" />
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="text-[#1a2727] text-[16px] font-medium font-['Inter'] leading-tight">Reports</div>
                        <AiOutlineDown className="text-[#1a2727] text-[14px]" />
                    </div>

                    {/* Log in and Try it Free for Mobile */}
                    <div className="w-full border-t mt-4 pt-4 flex flex-col gap-2">
                        <div className="text-[#1a2727] text-[16px] font-medium font-['Inter'] leading-tight">Log in</div>
                        <div className="px-[14px] py-2 bg-[#b7e0de] rounded-xl flex items-center justify-center w-full">
                            <div className="text-[#010303] text-[16px] font-medium font-['Inter'] leading-tight">Try it free</div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default ManagementNavbar;
