import Image from 'next/image'
import React from 'react'
import Profile from '@/image/profile_image2.webp'
import Score from '@/image/reward.png'
import { StoreProvider } from '@/redux/StoreProvider'
import UserProfileName from './components/UserProfileName'
import UserBox from './components/UserBox'

function page() {


    return (
        <div className='p-10 pt-20 grid grid-cols-1 grid-cols-1 md:grid-cols-4'>
            <div className='col-span-1'>
                <StoreProvider>
                    <UserBox />
                </StoreProvider>
            </div>

            <div className='col-span-3'>

            </div>
        </div>
    )
}

export default page