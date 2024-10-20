import React, { Fragment, ReactNode } from 'react'
import ManagementNavbar from '@/components/ManagementNavbar'

const ManagementLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-[1440px] w-full'>
                <ManagementNavbar />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default ManagementLayout