import React from 'react';

const tasks = [
    { name: 'Requirement Gathering', assignedTo: 'Alice', status: 'Completed', dueDate: '2023-10-25' },
    { name: 'Design', assignedTo: 'Bob', status: 'Completed', dueDate: '2023-10-30' },
    { name: 'Testing', assignedTo: 'Caleb', status: 'Pending', dueDate: '2023-11-10' },
    { name: 'Deployment', assignedTo: 'Dana', status: 'In Progress', dueDate: '2023-11-15' },
    { name: 'Documentation', assignedTo: 'Eli', status: 'Pending', dueDate: '2023-11-20' },
    { name: 'Feedback Collection', assignedTo: 'Fiona', status: 'Completed', dueDate: '2023-11-25' },
    { name: 'Bug Fixing', assignedTo: 'Gina', status: 'In Progress', dueDate: '2023-11-30' },
    { name: 'User Training', assignedTo: 'Hank', status: 'Pending', dueDate: '2023-12-05' },
    { name: 'Project Closure', assignedTo: 'Ivy', status: 'Completed', dueDate: '2023-12-10' },
];

const TasksContent = () => {
    return (
        <div className="h-auto py-4 w-full">
            <div className="grid gap-4 w-full">
                <div className="grid-cols-4 gap-4 px-2 hidden md:grid">
                    <span className="text-gray-600 text-sm font-medium">Task Name</span>
                    <span className="text-gray-600 text-sm font-medium">Assigned To</span>
                    <span className="text-gray-600 text-sm font-medium">Status</span>
                    <span className="text-gray-600 text-sm font-medium">Due Date</span>
                </div>

                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-4 gap-4 px-2 py-4 border-t border-gray-300 text-base"
                    >
                        {/* On mobile, stack task details in a single column */}
                        <div className="md:col-span-1 flex flex-col">
                            <span className="text-gray-900 font-semibold md:hidden">Task Name</span>
                            <span className="text-gray-900">{task.name}</span>
                        </div>
                        <div className="md:col-span-1 flex flex-col">
                            <span className="text-gray-900 font-semibold md:hidden">Assigned To</span>
                            <span className="text-gray-900">{task.assignedTo}</span>
                        </div>
                        <div className="md:col-span-1 flex flex-col">
                            <span className="text-gray-900 font-semibold md:hidden">Status</span>
                            <span className="text-gray-900">{task.status}</span>
                        </div>
                        <div className="md:col-span-1 flex flex-col">
                            <span className="text-gray-900 font-semibold md:hidden">Due Date</span>
                            <span className="text-gray-900">{task.dueDate}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TasksContent;
