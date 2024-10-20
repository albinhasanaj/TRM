import React, { Fragment, ReactNode } from 'react'
import ManagementNavbar from '@/components/ManagementNavbar'

const ManagementLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-[1440px] w-full px-2 md:px-0'>
                <ManagementNavbar />
                {children}
            </div>
        </div>
    )
}

export default ManagementLayout