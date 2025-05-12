import React from 'react'
import { StoreProvider } from '@/redux/StoreProvider'
import SuccessContainer from './components/successContainer'

function page() {

    return (
        <StoreProvider>
            <SuccessContainer />
        </StoreProvider>
    )
}

export default page