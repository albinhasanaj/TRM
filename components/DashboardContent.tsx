import React from 'react';
import TitleSection from '@/components/TitleSection';
import ProgressBar from '@/components/ProgressBar';

const DashboardContent: React.FC = () => {
    const barChartData = [
        { label: 'Mon', value: 80 },
        { label: 'Tue', value: 50 },
        { label: 'Wed', value: 60 },
        { label: 'Thu', value: 70 },
        { label: 'Fri', value: 90 },
        { label: 'Sat', value: 40 },
        { label: 'Sun', value: 30 },
    ];

    const meetingsData = [
        { label: 'Completed', value: 15 },
        { label: 'Canceled', value: 8 },
        { label: 'Scheduled', value: 2 },
    ];

    const maxMeetingCount = Math.max(...meetingsData.map((item) => item.value));

    return (
        <div className="py-8 bg-[#fbfdfd] flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Task Overview Card */}
                <div className="w-full p-6 bg-[#30726f]/10 rounded-[20px] border flex flex-col gap-6">
                    <TitleSection title="Task Overview" value="25" percentage="+5" percentageLabel="from last week" />
                    <div className="flex-col justify-start items-start gap-4">
                        {barChartData.map((item, index) => (
                            <ProgressBar
                                key={index}
                                label={item.label}
                                value={item.value}
                                maxValue={100}
                                className="barchart-progress" // Custom class for bar chart
                            />
                        ))}
                    </div>
                </div>

                {/* Meetings Overview Card */}
                <div className="w-full p-6 bg-[#30726f]/10 rounded-[20px] border flex flex-col gap-6">
                    <TitleSection title="Meetings Overview" value="25" percentage="+5" percentageLabel="from last week" />
                    <div className="flex flex-col gap-6">
                        {meetingsData.map((item, index) => (
                            <ProgressBar
                                key={index}
                                label={item.label}
                                value={item.value}
                                maxValue={maxMeetingCount}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;
