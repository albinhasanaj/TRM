"use client";
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Tabs = () => {
    const router = useRouter();
    const params = useParams();
    const initialTab = (params.tab as string) || 'overview';
    const [activeTab, setActiveTab] = useState(initialTab);

    useEffect(() => {
        setActiveTab(initialTab);
    }, [initialTab]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setTimeout(() => {
            router.push(`/dashboard/${tab}`);
        }, 300);
    };

    return (
        <div className="w-full border-b border-[#496e6c]/20 flex relative">
            {/* Underline motion */}
            <motion.div
                className="absolute bottom-0 h-[2px] bg-[#3f9893]"
                initial={false}
                animate={{
                    x: activeTab === 'overview' ? 0 : activeTab === 'tasks' ? '100%' : '200%',
                    width: '33.333%',
                }}
                transition={{ type: 'tween', duration: 0.3 }}
            />

            {/* Overview Tab */}
            <div
                onClick={() => handleTabClick('overview')}
                className={`w-1/3 px-7 py-3 cursor-pointer flex items-center justify-center ${activeTab === 'overview' ? 'border-b-2 border-[#3f9893]' : 'border-b'}`}
            >
                <span className={`${activeTab === 'overview' ? 'text-[#3f9893]' : 'text-[#132e2c]/60'} text-[15px] font-medium`}>
                    Overview
                </span>
            </div>

            {/* Tasks Tab */}
            <div
                onClick={() => handleTabClick('tasks')}
                className={`w-1/3 px-7 py-3 cursor-pointer flex items-center justify-center ${activeTab === 'tasks' ? 'border-b-2 border-[#3f9893]' : 'border-b'}`}
            >
                <span className={`${activeTab === 'tasks' ? 'text-[#3f9893]' : 'text-[#132e2c]/60'} text-[15px] font-medium`}>
                    Tasks
                </span>
            </div>

            {/* Meetings Tab */}
            <div
                onClick={() => handleTabClick('meetings')}
                className={`w-1/3 px-7 py-3 cursor-pointer flex items-center justify-center ${activeTab === 'meetings' ? 'border-b-2 border-[#3f9893]' : 'border-b'}`}
            >
                <span className={`${activeTab === 'meetings' ? 'text-[#3f9893]' : 'text-[#132e2c]/60'} text-[15px] font-medium`}>
                    Meetings
                </span>
            </div>
        </div>
    );
};

export default Tabs;
