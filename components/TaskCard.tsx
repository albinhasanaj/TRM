import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';  // Import dots menu icon from react-icons

interface TaskCardProps {
    title: string;
    value: number;
    percentage: string;
    percentageColor: string;
    className?: string; // Additional class for custom styling
    itemId: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, value, percentage, percentageColor, className, itemId }) => {
    return (
        <div
            className={`min-w-[280px] p-6 bg-[#e6f1f0] rounded-[12px] border border-[#30726f]/20 flex-col justify-start items-start gap-4 ${className}`}
            data-key={itemId}
        >
            <div className="flex justify-between items-center w-full">
                <h3 className="text-[#1a2727] text-[16px] font-semibold">{title}</h3>
                {/* Dots menu from react-icons */}
                <FiMoreHorizontal className="text-[#1a2727] text-[20px] cursor-pointer" />
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-[#1a2727] text-[36px] font-semibold">{value}</div>
                <div className={`text-[14px] font-medium ${percentageColor}`}>{percentage}</div>
            </div>
        </div>
    );
};

export default TaskCard;
