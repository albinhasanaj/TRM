import React, { Fragment, ReactNode } from 'react'
import ManagementNavbar from '@/components/ManagementNavbar'

const ManagementLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full flex justify-center bg-[#fbfdfd] min-h-screen'>
            <div className='max-w-[1440px] w-full px-4'>
                <ManagementNavbar />
                {children}
            </div>
        </div>
    )
}

export default ManagementLayout