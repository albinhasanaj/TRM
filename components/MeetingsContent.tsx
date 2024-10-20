import React from 'react';
import { FiUsers, FiCheckCircle, FiClock } from 'react-icons/fi';
import ContentCard from './ContentCard';

interface IMeeting {
    title: string;
    attendees: string;
    status: string;
    date: string;
}

const meetings: IMeeting[] = [
    { title: 'Project Kickoff', attendees: 'John, Alice', status: 'Scheduled', date: '2023-11-05' },
    { title: 'Design Review', attendees: 'Bob, Jane', status: 'Completed', date: '2023-10-20' },
    { title: 'Sprint Planning', attendees: 'Team A', status: 'Scheduled', date: '2023-11-12' },
];

const statusIcons: { [key: string]: JSX.Element } = {
    Scheduled: <FiClock size={20} className="text-blue-500" />,
    Completed: <FiCheckCircle size={20} className="text-green-500" />,
};

const MeetingsContent = () => {
    return (
        <div className="h-auto py-4 w-full flex flex-col gap-4">
            {meetings.map((meeting, index) => (
                <ContentCard
                    key={index}
                    title={meeting.title}
                    subtitle={`Attendees: ${meeting.attendees}`}
                    status={meeting.status}
                    date={meeting.date}
                    statusIcon={statusIcons[meeting.status]}
                    statusColor={meeting.status === 'Completed' ? 'text-green-500' : 'text-blue-500'}
                    icon={<FiUsers size={20} className="text-gray-500" />}
                />
            ))}
        </div>
    );
};

export default MeetingsContent;
