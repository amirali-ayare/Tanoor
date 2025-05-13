import React from 'react'
import { StoreProvider } from '@/redux/StoreProvider'
import PayContainer from './components/payContainer'

function page() {
    return (
        <StoreProvider>
            <PayContainer />
        </StoreProvider>
    )
}

export default page