// components/TitleSection.tsx
import React from 'react';

interface TitleSectionProps {
    title: string;
    value: string;
    percentage: string;
    percentageLabel: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, value, percentage, percentageLabel }) => {
    return (
        <div className="self-stretch flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div className="text-[#1a2727] text-[17px] font-semibold">{title}</div>
                <div className="w-6 h-6" />
            </div>
            <div className="flex justify-start items-baseline gap-2">
                <div className="text-[#1a2727] text-[34px] font-semibold leading-10">{value}</div>
                <div className="text-[#378480] text-[13px] font-medium">{percentageLabel}</div>
            </div>
        </div>
    );
};

export default TitleSection;
