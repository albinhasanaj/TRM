import React from 'react';
import { FiUserCheck, FiCheckCircle, FiClock } from 'react-icons/fi';
import ContentCard from './ContentCard';

interface ITask {
    name: string;
    assignedTo: string;
    status: string;
    dueDate: string;
}

const tasks: ITask[] = [
    { name: 'Requirement Gathering', assignedTo: 'Alice', status: 'Completed', dueDate: '2023-10-25' },
    { name: 'Design', assignedTo: 'Bob', status: 'Completed', dueDate: '2023-10-30' },
    { name: 'Testing', assignedTo: 'Caleb', status: 'Pending', dueDate: '2023-11-10' },
    { name: 'Deployment', assignedTo: 'Dana', status: 'In Progress', dueDate: '2023-11-15' },
];

const statusIcons: { [key: string]: JSX.Element } = {
    Completed: <FiCheckCircle size={20} className="text-green-500" />,
    'In Progress': <FiClock size={20} className="text-blue-500" />,
    Pending: <FiClock size={20} className="text-yellow-500" />,
};

const TasksContent = () => {
    return (
        <div className="h-auto py-4 w-full flex flex-col gap-4">
            {tasks.map((task, index) => (
                <ContentCard
                    key={index}
                    title={task.name}
                    subtitle={`Assigned to ${task.assignedTo}`}
                    status={task.status}
                    date={task.dueDate}
                    statusIcon={statusIcons[task.status]}
                    statusColor={task.status === 'Completed' ? 'text-green-500' : task.status === 'In Progress' ? 'text-blue-500' : 'text-yellow-500'}
                    icon={<FiUserCheck size={20} className="text-gray-500" />}
                />
            ))}
        </div>
    );
};

export default TasksContent;
