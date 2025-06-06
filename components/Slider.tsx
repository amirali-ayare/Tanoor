"use client"
import React from 'react'
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import rightVector from '../image/right_vector.png'
import leftVector from '../image/left_vector.png'
import fastfood from '../image/banner-image.png'


function Slider() {


    return (
        <div className='px-5 py-5 flex items-center justify-center my-10'>
            <div className='rounded-md overflow-visible bg-orange-100 flex items-center justify-between w-full gap-5'>
                <div className='flex h-full items-center'>
                    <Image src={rightVector} alt='vector' className='w-20 md:w-35 lg:w-35 xl:w-35' />
                    <div className='flex flex-col h-full'>
                        <h2 className='font-bold text-xs md:text-2xl lg:text-2xl xl:text-2xl'>طعم واقعی فست فود همینجاست!</h2>
                        <p className='text-xs md:text-lg lg:text-lg xl:text-lg'>همین حالا سفارش بده، داغ و خوشمزه.</p>
                    </div>
                </div>

                <div className='flex justify-center h-full'>
                    <Image src={fastfood} alt='fastfood' className='w-50 relative top-0 md:-top-8 md:w-90 lg:w-90 xl:w-90' />
                    <Image src={leftVector} alt='vector' className='w-25 hidden md:inline lg:inline xl:inline'/>
                </div>
            </div>
        </div>
    )
}

export default Slider