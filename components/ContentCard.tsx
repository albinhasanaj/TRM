import React from 'react';
import { FiCalendar } from 'react-icons/fi';

interface ContentCardProps {
    title: string;
    subtitle: string;
    status: string;
    date: string;
    statusIcon: JSX.Element;
    statusColor: string;
    icon: JSX.Element;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, subtitle, status, date, statusIcon, statusColor, icon }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Title and Subtitle (Task Name and Assigned To) */}
            <div className="flex-grow flex flex-col gap-2 w-[200px] self-start md:self-center">
                <div className="flex items-center gap-2">
                    {icon}
                    <span className="text-lg font-semibold text-gray-800">{title}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    {icon}
                    <span className="text-base">{subtitle}</span>
                </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 self-start md:self-center w-[150px]">
                <FiCalendar size={20} className="text-gray-500" />
                <span className="font-medium text-gray-900">{date}</span>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 self-start md:self-center w-[150px]">
                {statusIcon}
                <span className={`text-base ${statusColor}`}>
                    {status}
                </span>
            </div>
        </div>
    );
};

export default ContentCard;
