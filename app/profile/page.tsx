import React from 'react'
import { StoreProvider } from '@/redux/StoreProvider'
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