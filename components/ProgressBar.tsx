import React from 'react';
import cn from 'classnames';

interface ProgressBarProps {
    label: string;
    value: number;
    maxValue?: number;
    className?: string; // Additional class for custom styling
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, maxValue = 100, className }) => {
    const percentage = (value / maxValue) * 100;

    return (
        <div className={cn("flex flex-col gap-2 w-full", className)}>
            {/* Label above the progress bar */}
            <div className="text-[14px] text-[#132e2c]/80 font-medium text-left">
                {label}
            </div>

            {/* Progress Bar */}
            <div className="relative flex-1 bg-[#b7e0de] h-3 rounded-full">
                <div
                    className="bg-[#30726f] h-3 rounded-full"
                    style={{ width: `${percentage}%`, transition: 'width 0.3s ease-in-out' }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
