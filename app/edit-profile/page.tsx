import React from 'react'
import EditProfileForm from './components/editProfileForm'
import { StoreProvider } from '@/redux/StoreProvider'
import UserBox from '../profile/components/UserBox'

function page() {
    return (
        <div className='p-10 pt-20 grid grid-cols-1 grid-cols-1 md:grid-cols-4 gap-5'>
            <div className='col-span-1'>
                <StoreProvider>
                    <UserBox />
                </StoreProvider>
            </div>

            <div className='col-span-3'>
                <div className='border-1 border-gray-200 rounded p-7'>
                    <StoreProvider>
                        <EditProfileForm />
                    </StoreProvider>
                </div>
            </div>
        </div>
    )
}

export default page