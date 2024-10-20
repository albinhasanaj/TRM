import React, { Fragment } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import TaskOverviewSection from '@/components/TaskOverviewSection';
import DashboardContent from '@/components/DashboardContent';  // Import the content section
import Tabs from '@/components/Tabs';
import TaskFilter from '@/components/TaskFilter';
import TasksContent from '@/components/TasksContent';
import MeetingFilter from '@/components/MeetingFilter';
import MeetingsContent from '@/components/MeetingsContent';


const Dashboard: React.FC<{ params: { tab: string } }> = ({ params }) => {
    const { tab } = params;
    return (
        <main className="w-full">
            <DashboardHeader />
            <section className="py-4">
                {/* Task Overview Section */}
                <div className="mb-2 flex flex-col gap-2">
                    <Tabs />
                </div>

                {tab === 'overview' && (
                    <Fragment>
                        <TaskOverviewSection />
                        <DashboardContent />
                    </Fragment>
                )}

                {tab === 'tasks' && (
                    <div className='flex flex-col gap-2'>
                        <TaskFilter />
                        <TasksContent />
                    </div>
                )}

                {tab === 'meetings' && (
                    <div className="flex flex-col gap-2">
                        <MeetingFilter />
                        <MeetingsContent />
                    </div>
                )}

            </section>
        </main>
    );
};

export default Dashboard;
