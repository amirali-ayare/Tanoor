'use client'
import React from 'react'
import PaymentFoods from './paymentFoods'
import PaymentInfo from './PaymentInfo'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import noFood from '@/image/basketEmpty.png'
import { IFoodData } from '@/components/TraditionalFoods'

function PayContainer() {

    const selectedFoods = useSelector((state: { shopCart: IFoodData[] }) => state.shopCart)

    return (
        <>
            {
                selectedFoods.length == 0 ? (
                    <div className='w-screen h-screen flex flex-col items-center justify-center'>
                        <Image src={noFood} alt='no_food' className='w-50'/>
                        <h4 className='font-light text-sm text-gray-500'>سبد خرید شما خالی است.</h4>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 p-5 pt-20 gap-8'>
                        <PaymentFoods />
                        <PaymentInfo />
                    </div>
                )
            }
        </>
    )
}

export default PayContainer