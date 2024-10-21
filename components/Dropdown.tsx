import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface DropdownProps {
    title: string;
    links: Array<{ name: string; href: string }>;
    isOpen: boolean; // Controlled by parent
    toggleDropdown: () => void; // Toggle function passed from parent
}

const Dropdown: React.FC<DropdownProps> = ({ title, links, isOpen, toggleDropdown }) => {
    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 text-[#1a2727] text-[15px] font-medium"
            >
                {title}
                <AiOutlineDown className="text-[#1a2727] text-[12px]" />
            </button>
            {isOpen && (
                <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-[150px] p-2"
                >
                    {links.map((link, index) => (
                        <li key={index} className="py-1">
                            <Link href={link.href} className="block text-[#132e2c] text-[14px] hover:bg-gray-100 rounded-md px-3 py-2">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </motion.ul>
            )}
        </div>
    );
};

export default Dropdown;
