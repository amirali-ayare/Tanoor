import React from 'react'
import { StoreProvider } from '@/redux/StoreProvider'
import NotifContainer from './components/notifContainer'


function page() {
    return (
        <StoreProvider>
            <NotifContainer />
        </StoreProvider>
    )
}

export default page