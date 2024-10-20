import React from 'react';

const Tabs = () => {
    return (
        <div className="w-full border-b border-[#496e6c]/20 flex">
            <div className="px-7 py-3 border-b border-[#b7e0de] flex items-center justify-center">
                <span className="text-[#3f9893] text-[15px] font-medium">Overview</span>
            </div>
            <div className="px-7 py-3 flex items-center justify-center">
                <span className="text-[#132e2c]/60 text-[15px] font-medium">Tasks</span>
            </div>
            <div className="px-7 py-3 flex items-center justify-center">
                <span className="text-[#132e2c]/60 text-[15px] font-medium">Meetings</span>
            </div>
        </div>
    );
};

export default Tabs;
