"use client";
import React, { useState } from 'react';
import { FiCheckSquare, FiSquare } from 'react-icons/fi';

interface ICheckedStates {
    myTasks: boolean;
    completedTasks: boolean;
    pendingTasks: boolean;
}

const TaskFilterComponent = () => {
    const [checkedStates, setCheckedStates] = useState<ICheckedStates>({
        myTasks: false,
        completedTasks: false,
        pendingTasks: false,
    });

    const toggleCheckbox = (key: keyof ICheckedStates) => {
        setCheckedStates((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    }

    return (
        <div className="h-auto py-6 flex flex-col gap-4 w-full">
            <div className="flex flex-wrap justify-start gap-6 w-full md:gap-8">

                {/* My Tasks */}
                <div
                    className="flex items-center gap-3 cursor-pointer w-full md:w-auto md:flex-1 hover:bg-gray-100 px-4 py-2 rounded-lg"
                    onClick={() => toggleCheckbox('myTasks')}
                >
                    <div className="w-6 h-6 relative">
                        {checkedStates.myTasks ? <FiCheckSquare size={24} className="text-green-500" /> : <FiSquare size={24} />}
                    </div>
                    <span className="text-gray-800 font-medium text-lg">My Tasks</span>
                </div>

                {/* Completed Tasks */}
                <div
                    className="flex items-center gap-3 cursor-pointer w-full md:w-auto md:flex-1 hover:bg-gray-100 px-4 py-2 rounded-lg"
                    onClick={() => toggleCheckbox('completedTasks')}
                >
                    <div className="w-6 h-6 relative">
                        {checkedStates.completedTasks ? <FiCheckSquare size={24} className="text-green-500" /> : <FiSquare size={24} />}
                    </div>
                    <span className="text-gray-800 font-medium text-lg">Completed Tasks</span>
                </div>

                {/* Pending Tasks */}
                <div
                    className="flex items-center gap-3 cursor-pointer w-full md:w-auto md:flex-1 hover:bg-gray-100 px-4 py-2 rounded-lg"
                    onClick={() => toggleCheckbox('pendingTasks')}
                >
                    <div className="w-6 h-6 relative">
                        {checkedStates.pendingTasks ? <FiCheckSquare size={24} className="text-green-500" /> : <FiSquare size={24} />}
                    </div>
                    <span className="text-gray-800 font-medium text-lg">Pending Tasks</span>
                </div>

            </div>
        </div>
    );
};

export default TaskFilterComponent;
