"use client"
import React from 'react'
import { StoreProvider } from '@/redux/StoreProvider'
import SignupForm from './components/signupForm'

function page() {

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <StoreProvider>
                <SignupForm />
            </StoreProvider>
        </div>
    )
}

export default page