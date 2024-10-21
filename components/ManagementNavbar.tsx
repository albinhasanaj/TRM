"use client";
import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import Dropdown from './Dropdown';  // Import the new Dropdown component
import { usePathname } from 'next/navigation';

const logo = true;

const ManagementNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Tracks the open dropdown


    const userLoggedIn = true;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleDropdownToggle = (dropdown: string) => {
        // If clicking the same dropdown, close it; otherwise, open the new dropdown
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const taskLinks = [
        { name: 'Create Task', href: '/tasks/create' },
        { name: 'Edit Task', href: '/tasks/edit' },
        { name: 'Delete Task', href: '/tasks/delete' }
    ];

    const meetingLinks = [
        { name: 'Schedule Meeting', href: '/meetings/schedule' },
        { name: 'Edit Meeting', href: '/meetings/edit' },
        { name: 'Cancel Meeting', href: '/meetings/cancel' }
    ];

    const dashboardLinks = [
        { name: 'Home', href: '/dashboard' },
        { name: 'Customize Dashboard', href: '/dashboard/customize' },
        { name: 'Other Dashboard Link', href: '/dashboard/other' }
    ]

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
                            className="w-[140px] h-auto"
                            unoptimized={true}
                        />
                    ) : (
                        <div className="text-[#3f9893] text-[24px] md:text-[28px] font-bold font-['Sen'] leading-7">Tachyon</div>
                    )}
                </div>

                {/* Navbar Links (Desktop View) */}
                <ul className="hidden md:flex items-start gap-6 md:gap-8">
                    <li>
                        <Dropdown
                            title="Dashboard"
                            links={dashboardLinks}
                            isOpen={openDropdown === 'dashboard'}
                            toggleDropdown={() => handleDropdownToggle('dashboard')}
                        />
                    </li>
                    <li>
                        <Dropdown
                            title="Tasks"
                            links={taskLinks}
                            isOpen={openDropdown === 'tasks'}
                            toggleDropdown={() => handleDropdownToggle('tasks')}
                        />
                    </li>
                    <li>
                        <Dropdown
                            title="Meetings"
                            links={meetingLinks}
                            isOpen={openDropdown === 'meetings'}
                            toggleDropdown={() => handleDropdownToggle('meetings')}
                        />
                    </li>
                    <li>
                        <Link href="#"
                            className={`text-[#1a2727] text-[15px] font-medium`}
                        >Reports</Link>
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
                        <Link href="/login" className="text-[#1a2727] text-[15px] font-medium">Log in</Link>
                        <div className="px-[14px] py-2 bg-[#b7e0de] rounded-xl md:px-[18px] md:py-2 flex items-center justify-center">
                            <Link href="/signup" className="text-[#010303] text-[15px] font-medium">Try it free</Link>
                        </div>
                    </Fragment>
                )}
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
                        <li>
                            {/* <Link href="/dashboard"
                                className={`text-[#1a2727] text-[16px] font-medium ${activeLink === 'dashboard' ? 'text-[#3f9893]' : ''}`}
                            >dashboard</Link>
                             */}

                            <Dropdown
                                title="dashboard"
                                links={dashboardLinks}
                                isOpen={openDropdown === 'dashboard'}
                                toggleDropdown={() => handleDropdownToggle('dashboard')}
                            />

                        </li>
                        <li>
                            <Dropdown
                                title="Tasks"
                                links={taskLinks}
                                isOpen={openDropdown === 'tasks'}
                                toggleDropdown={() => handleDropdownToggle('tasks')}
                            />
                        </li>
                        <li>
                            <Dropdown
                                title="Meetings"
                                links={meetingLinks}
                                isOpen={openDropdown === 'meetings'}
                                toggleDropdown={() => handleDropdownToggle('meetings')}
                            />
                        </li>
                        <li>
                            <Link href="/reports"
                                className={`text-[#1a2727] text-[16px] font-medium `}
                            >Reports</Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </nav>
    );
};

export default ManagementNavbar;
