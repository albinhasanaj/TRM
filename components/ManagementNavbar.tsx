"use client";
import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';


const logo = true;

const ManagementNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    //check if user is logged in
    const userLoggedIn = true;


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="py-[18px] bg-[#fbfdfd] justify-between items-center flex w-full">
            {/* Left Section: Logo and Links */}
            <div className="flex justify-start items-center gap-[20px] md:gap-[50px]">
                <div className="flex items-center gap-1">
                    {logo ? (
                        <Image
                            src="/images/logo/logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="w-[140px] h-auto "
                            unoptimized={true}
                        />
                    ) : (
                        <Fragment>
                            <div className="text-[#3f9893] text-[24px] md:text-[28px] font-bold font-['Sen'] leading-7">Tachyon</div>
                        </Fragment>
                    )}
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
                {userLoggedIn ? (
                    <UserButton
                        appearance={{
                            elements: {
                                userButtonAvatarBox: {
                                    width: '42px',
                                    height: '42px',
                                },
                            },
                        }}
                    />
                ) : (
                    <Fragment>
                        <Link href="#" className="text-[#1a2727] text-[15px] font-medium leading-tight">Log in</Link>
                        <div className="px-[14px] py-2 bg-[#b7e0de] rounded-xl md:px-[18px] md:py-2 flex items-center justify-center">
                            <Link href="#" className="text-[#010303] text-[15px] font-medium leading-tight">Try it free</Link>
                        </div>
                    </Fragment>
                )
                }
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
                    className="absolute top-[72px] left-0 w-full bg-[#fbfdfd] shadow-md flex flex-col items-start p-4 gap-4 md:hidden z-50"
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
                    <div className="w-full border-t mt-4 pt-4 flex flex-col gap-6">
                        {userLoggedIn ? (
                            <UserButton />
                        ) : (
                            <Fragment>
                                <Link href="#login" className="text-[#1a2727] text-[16px] font-medium leading-tight px-[14px] py-2 bg-[#30736F]/10 rounded-xl flex items-center justify-center hover:bg-[#30736F]/20">Log in</Link>
                                <Link href="#signup" className="text-[#010303] text-[16px] font-medium leading-tight px-[14px] py-2 bg-[#b7e0de]/90 rounded-xl flex items-center justify-center hover:bg-[#b7e0de]">Try it free</Link>
                            </Fragment>

                        )}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default ManagementNavbar;
