"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StoreProvider } from '@/redux/StoreProvider'
import UserBox from '@/app/profile/components/UserBox'
import Notification from './notification'
import { IUser } from '@/redux/UserProfileData'

export interface INotif {
    code: string,
    id: number,
    minimum: number,
    price: number,
    score: number,
    stringMinimum: string,
    stringPrice: string,
    used: boolean
}

function NotifContainer() {
    const userData = useSelector((state: {user: IUser}) => state.user)
    const offerCodes = useSelector((state: {offerCodes: INotif[]}) => state.offerCodes)
    const [newOfferCodes, setNewOfferCodes] = useState<INotif[]>([])

    useEffect(() => {
        const newOfferCode = offerCodes.filter((item: INotif) => (item.score <= userData.score) && (item.used === false))
        setNewOfferCodes(newOfferCode)
    }, [])

    console.log(newOfferCodes);
    
    return (        

        <div className='p-10 pt-20 grid grid-cols-1 grid-cols-1 md:grid-cols-4 gap-5'>
            <div className='col-span-1'>
                <StoreProvider>
                    <UserBox />
                </StoreProvider>
            </div>

            <div className='col-span-3'>
                <div className='border-1 border-gray-200 rounded p-7 min-h-full'>
                    <div>
                        <h1 className='text-gray-950 text-xl'>اطلاعیه ها</h1>
                    </div>
                    <div className='grid grid-cols-1 gap-3 mt-5'>
                        {
                            newOfferCodes.map((item: INotif, index) => {
                                return <Notification key={index} {...item} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotifContainer