import { IFoodData } from '@/components/TraditionalFoods'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Suggested({ id, image, name, price }: IFoodData) {
    return (
        <Link href={`/${id}`}>
            <div className='p-2 py-3 my-3 flex border-1 border-gray-200 gap-5 rounded-lg'>
                <div className='relative w-25 w-40 bg-gray-100 rounded-lg flex items-center justify-center'>
                    <img src={`http://127.0.0.1:8000/${image.image}`} className='rounded-lg w-20 h-20' alt='food' />
                    {/* <img src={image} className='rounded-lg w-20 h-20'  alt='food' /> */}
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='font-bold'>{name}</h1>
                    <h2 className='font-light text-base text-gray-500 mt-1'>{price} تومان</h2>
                </div>
            </div>
        </Link>
    )
}

export default Suggested