import React from 'react';
import Image from 'next/image';

const TeamMembers = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="flex -space-x-4">
                {/* Avatar images using Next.js Image */}
                <div className="w-8 h-8 rounded-full border-2 border-[#fbfdfd]">
                    <Image
                        src="https://mighty.tools/mockmind-api/content/human/65.jpg"
                        alt="Member 1"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#fbfdfd]">
                    <Image
                        src="https://mighty.tools/mockmind-api/content/human/44.jpg"
                        alt="Member 2"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#fbfdfd]">
                    <Image
                        src="https://mighty.tools/mockmind-api/content/human/57.jpg"
                        alt="Member 3"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#fbfdfd]">
                    <Image
                        src="https://mighty.tools/mockmind-api/content/human/43.jpg"
                        alt="Member 4"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </div>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-[#132e2c]/60 text-[15px] font-normal">Aiden, Bella, Caleb, Dana</span>
                <span className="text-[#132e2c]/60 text-[15px] font-normal">+12 others</span>
            </div>
        </div>
    );
};

export default TeamMembers;
