import Image from 'next/image'
import React from 'react'
import desert from '../image/desert-logo.png'
import fastfood from '../image/pizza-logo.png'
import irani from '../image/kebab-logo.png'

function Category() {
    return (
        <div className='w-full flex items-center justify-center gap-5 p-10'>
            <div className='bg-neutral-100 rounded-lg flex flex-col items-center justify-center w-[100px] h-[100px] md:h-[100px] lg:h-[100px] xl:h-[100px]'>
                <Image src={desert} alt='food' className='w-[45px] md:w-[50px] lg:w-[50px] xl:w-[50px] -mt-4' />
                <h4 className='text-sm'>پیش غذا</h4>
            </div>

            <div className='bg-neutral-100 rounded-lg flex flex-col items-center justify-center w-[100px] h-[100px] md:h-[100px] lg:h-[100px] xl:h-[100px]'>
                <Image src={fastfood} alt='food' className='w-[45px] md:w-[50px] lg:w-[50px] xl:w-[70px]' />
                <h4 className='text-sm'>فست فود</h4>
            </div>

            <div className='bg-neutral-100 rounded-lg flex flex-col items-center justify-center w-[100px] h-[100px] md:h-[100px] lg:h-[100px] xl:h-[100px]'>
                <Image src={irani} alt='food' className='w-[60px] md:w-[50px] lg:w-[50px] xl:w-[90px] ml-5 xl:ml-8' />
                <h4 className='text-sm'>غذای ایرانی</h4>
            </div>
        </div>
    )
}

export default Category