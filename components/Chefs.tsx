import Image from 'next/image'
import React from 'react'
import tanorLogo from '../image/light-red-logo.png'
import chef1 from '../image/chef1.jpg'
import chef2 from '../image/chef2.jpg'
import chef3 from '../image/chef3.jpg'

function Chefs() {

    const chefs = [
        {
            img: chef1,
            name: "امیر کیانی",
            job: "شیرینی پز"
        },
        {
            img: chef2,
            name: "مهدی ابراهیمی",
            job: "سرآشپز"
        },
        {
            img: chef3,
            name: "کیان محسنی",
            job: "سرآشپز"
        },
    ]

    return (
        <div className='px-5 py-5'>
            <div className='flex items-center justify-center gap-1'>
                <span className='text-3xl font-bold'>سرآشپزان</span>
                <Image src={tanorLogo} alt='تنور' className='w-15' />
            </div>

            <div className='grid grid-cols-3 gap-2 mt-5'>
                {
                    chefs.map((item) => {
                        return (
                            <div key={item.name} className='flex flex-col items-center justify-center'>
                                <div>
                                    <Image src={item.img} alt='chef' className='p-3 rounded-full h-25 w-25 md:w-60 lg:w-60 xl:w-60 md:h-60 lg:h-60 xl:h-60  border-15 border-neutral-200 object-cover' />
                                </div>
                                <div className='flex flex-col items-center mt-3'>
                                    <h2 className='text-base md:text-xl lg:text-xl xl:text-xl font-bold'>{item.name}</h2>
                                    <h4 className='text-gray-500 text-sm font-bold'>{item.job}</h4>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Chefs