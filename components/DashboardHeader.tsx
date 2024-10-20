import React from 'react';
import ShareButton from './ShareButton';
import TeamMembers from './TeamMembers';
import Tabs from './Tabs';

const DashboardHeader = () => {
    return (
        <section className="w-full">
            <div className="py-7 bg-[#fbfdfd] flex flex-col md:flex-row justify-between items-start gap-7">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <h1 className="text-[#1a2727] text-[28px] md:text-[34px] font-semibold leading-10">
                            Team Dashboard
                        </h1>
                        <div className="px-2 py-1 bg-[#30726f]/10 rounded-2xl border border-black/0 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#088933] rounded-full" />
                            <span className="text-[#1a2727] text-[15px] font-medium">Active</span>
                        </div>
                    </div>
                    <TeamMembers />
                </div>

                <div className="flex gap-3">
                    <ShareButton />
                    <button className="p-2 bg-[#fbfdfd] rounded-2xl border border-[#496e6c]/20 flex items-center justify-center">
                        <div className="w-5 h-5">⋮</div>
                    </button>
                </div>
            </div>
            <Tabs />
        </section>
    );
};

export default DashboardHeader;
