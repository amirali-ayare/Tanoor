"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StoreProvider } from '@/redux/StoreProvider'
import UserBox from '@/app/profile/components/UserBox'
import Notification from './notification'

function NotifContainer() {
    const userData = useSelector((state: any) => state.user)
    const offerCodes = useSelector((state: any) => state.offerCodes)
    const [newOfferCodes, setNewOfferCodes] = useState([])

    useEffect(() => {
        const newOfferCode = offerCodes.filter((item: any) => (item.score <= userData.score) && (item.used === false))
        setNewOfferCodes(newOfferCode)
    }, [])


    return (
        // <div className='bg-red-600 flex flex-col items-center justify-center py-5'>

        //     <div className='flex flex-col items-center mb-5'>
        //         <Image src={bell} alt='notif' className='w-30'/>
        //         <h2 className='text-yellow-400 font-extrabold text-3xl'>اطلاعیه ها</h2>
        //     </div>

        //     <div className='p-5 py-2 w-[80%] bg-white rounded-xl'>
        //         {
        //             newOfferCodes.length === 0 ?
        //                 (
        //                     <div className='flex flex-col items-center justify-center gap-2'>
        //                         <Image src={notificationImg} alt='no-notification' className='w-80' />
        //                         <p className='text-slate-500 font-light text-sm'>هیچ اطلاعیه ای وجود ندارد!</p>
        //                     </div>
        //                 )
        //                 :
        //                 (
        //                     newOfferCodes.map((item: any, index) => {
        //                         return <Notification key={index} {...item} />
        //                     })
        //                 )
        //         }
        //     </div>
        // </div>

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
                            newOfferCodes.map((item: any, index) => {
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