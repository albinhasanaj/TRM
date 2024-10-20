import React from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import TaskOverviewSection from '@/components/TaskOverviewSection';
import DashboardContent from '@/components/DashboardContent';  // Import the content section

const Dashboard: React.FC = () => {
    return (
        <main className="w-full">
            <DashboardHeader />
            <section className="p-4">
                {/* Task Overview Section */}
                <div className="mb-8">
                    <TaskOverviewSection />
                </div>

                {/* Dashboard Content with larger charts */}
                <DashboardContent />
            </section>
        </main>
    );
};

export default Dashboard;
