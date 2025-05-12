import Image from 'next/image'
import React from 'react'
import name from '../image/headerlogo.png'
import food from '../image/foods.png'


function Header() {

    return (
        <div className='text-white flex'>
            <div className='flex flex-col justify-center w-[65%] md:w-[70%] lg:w-[70%] xl:w-[70%] bg-black p-10 py-20'>
                <div className='flex items-center gap-1 pt-10'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl xl:text-4xl font-bold'>
                        طعم اصیل، تجربه ای فراموش نشدنی با رستوران
                        <Image src={name} alt='name' className='w-17 mt-3' />
                    </h1>
                </div>

                <div className='mt-5'>
                    <p className='font-light text-justify text-xs md:text-sm lg:text-sm xl:text-sm leading-5'>
                    جایی که طعم های تازه و اصیل باهم ترکیب می شوند تا تجربه ای متفاوت از غذا را برای شما به ارمغان بیاورد.
                    </p>

                    <div className='mt-10 flex gap-5'>
                        <button className='bg-red-800 text-white p-2 px-4 cursor-pointer text-xs rounded-lg'>سفارش آنلاین</button>
                        <button className='text-xs cursor-pointer'>مشاهده منو</button>
                    </div>
                </div>

            </div>

            <div id='headernewbg' className='w-[35%] md:w-[30%] lg:w-[30%] xl:w-[30%]'>

            </div>
        </div>
    )
}

export default Header