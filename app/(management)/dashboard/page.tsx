import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import TaskOverviewSection from '@/components/TaskOverviewSection';
import DashboardContent from '@/components/DashboardContent';  // Import the content section
import Tabs from '@/components/Tabs';


const Dashboard = () => {
    return (
        <main className="w-full">
            <DashboardHeader />
            <section className="py-4">
                {/* Task Overview Section */}
                <div className="mb-2 flex flex-col gap-2">
                    <Tabs />
                </div>
                <TaskOverviewSection />
                <DashboardContent />
            </section>
        </main>
    );
};

export default Dashboard;
