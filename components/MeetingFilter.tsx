"use client";
import React, { useState } from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';

interface IMeetingFilter {
    upcoming: boolean;
    past: boolean;
    today: boolean;
}

const MeetingFilter = () => {
    const [checkedStates, setCheckedStates] = useState<IMeetingFilter>({
        upcoming: true,  // Default state: show upcoming meetings
        past: false,
        today: false,
    });

    const toggleCheckbox = (key: keyof IMeetingFilter) => {
        setCheckedStates((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <div className="h-auto py-6 flex flex-col gap-4 w-full">
            <div className="flex flex-wrap justify-start gap-6 w-full md:gap-8">
                {/* Upcoming Meetings */}
                <div
                    className="flex items-center gap-3 cursor-pointer w-full md:w-auto md:flex-1 hover:bg-gray-100 px-4 py-2 rounded-lg transition"
                    onClick={() => toggleCheckbox('upcoming')}
                >
                    <div className="w-6 h-6 relative">
                        {checkedStates.upcoming ? <FiCheckSquare size={24} className="text-green-500" /> : <FiSquare size={24} />}
                    </div>
                    <span className="text-gray-800 font-medium text-lg">Upcoming Meetings</span>
                </div>

                {/* Past Meetings */}
                <div
                    className="flex items-center gap-3 cursor-pointer w-full md:w-auto md:flex-1 hover:bg-gray-100 px-4 py-2 rounded-lg transition"
                    onClick={() => toggleCheckbox('past')}
                >
                    <div className="w-6 h-6 relative">
                        {checkedStates.past ? <FiCheckSquare size={24} className="text-green-500" /> : <FiSquare size={24} />}
                    </div>
                    <span className="text-gray-800 font-medium text-lg">Past Meetings</span>
                </div>

                {/* Today's Meetings */}
                <div
                    className="flex items-center gap-3 cursor-pointer w-full md:w-auto md:flex-1 hover:bg-gray-100 px-4 py-2 rounded-lg transition"
                    onClick={() => toggleCheckbox('today')}
                >
                    <div className="w-6 h-6 relative">
                        {checkedStates.today ? <FiCheckSquare size={24} className="text-green-500" /> : <FiSquare size={24} />}
                    </div>
                    <span className="text-gray-800 font-medium text-lg">Today's Meetings</span>
                </div>
            </div>
        </div>
    );
};

export default MeetingFilter;
