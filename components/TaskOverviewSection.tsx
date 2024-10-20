"use client";
import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import TaskCard from './TaskCard';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import '@/styles/customScrollStyles.css';

const TaskOverviewSection: React.FC = () => {
    const taskCards = [
        { title: "Total Tasks", value: 120, percentage: "+5%", percentageColor: "text-[#378480]" },
        { title: "Completed Tasks", value: 95, percentage: "+3%", percentageColor: "text-[#378480]" },
        { title: "Pending Tasks", value: 25, percentage: "-2%", percentageColor: "text-[#378480]" },
        { title: "Upcoming Meetings", value: 8, percentage: "+1%", percentageColor: "text-[#378480]" },
    ];

    const handleWheel = (api: any, event: React.WheelEvent) => {
        if (event.deltaY !== 0) {
            if (event.deltaY > 0) {
                api.scrollNext(); // Scroll right
            } else {
                api.scrollPrev(); // Scroll left
            }
        }
    };

    return (
        <div className="w-full overflow-hidden scrollbar-thin snap-x snap-mandatory">
            <ScrollMenu
                onWheel={handleWheel} // Use custom wheel handler
                transitionDuration={250} // Smooth scroll behavior
            >
                {taskCards.map((task, index) => (
                    <TaskCard
                        key={index}
                        title={task.title}
                        value={task.value}
                        percentage={task.percentage}
                        percentageColor={task.percentageColor}
                        className="mx-2"
                        itemId={`task-${index}`}
                    />
                ))}
            </ScrollMenu>
        </div>
    );
};

export default TaskOverviewSection;
