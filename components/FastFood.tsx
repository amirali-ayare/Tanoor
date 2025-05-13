"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import FoodCard from './FoodCard'
import { IFoodData } from './TraditionalFoods'
import Link from 'next/link'
import fastfoodLogo from '../image/fastfoods.png'


function FastFood() {

    const [fastFoods, setFastFoods] = useState<IFoodData[]>([])
    const [mobileFF, setMobileFF] = useState<IFoodData[]>([])

    useEffect(() => {
        const getFoodsData = async () => {
            const res = await fetch("https://tanoor.liara.run/api/foods/");
            // const res = await fetch("http://127.0.0.1:8000/api/foods/");
            // const res = await fetch("http://localhost:3010/foods");
            const data = await res.json();
            const filtered = data.filter((item: IFoodData) => item.type === 'fastfood')
            setFastFoods(filtered)
            const cutted = filtered.slice(0,4)
            setMobileFF(cutted)
        }
        getFoodsData();
    }, [])


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 px-5 py-5 gap-10 lg:gap-3 xl:gap-3 mt-10'>
            <div className='col-span-2 order-2 lg:order-1 xl:order-1 bg-neutral-100 rounded-lg p-3 grid grid-cols-2 md:grid-cols-3'>
                {
                    fastFoods.map((item) => {
                        return (
                            <Link className='hidden md:inline lg:inline xl:inline' key={item.id} href={`${item.id}`}><FoodCard {...item} /></Link>
                        )
                    })
                }
                {
                    mobileFF.map((item) => {
                        return (
                            <Link className='inline md:hidden' key={item.id} href={`${item.id}`}><FoodCard {...item} /></Link>
                        )
                    })
                }
                <div className='hidden md:block lg:block xl:block'></div>
                <div></div>
                <div className='flex justify-end pl-7'>
                    <span className='flex cursor-pointer items-center font-bold text-slate-700 text-sm'>مشاهده همه <i className='bx bxs-chevron-down mr-2'></i></span>
                </div>
            </div>

            <div className='col-span-1 order-1 flex flex-col items-center justify-center gap-5'>
                <Image src={fastfoodLogo} alt='traditional_foods' className='w-50 hidden lg:block xl:block' />
                <h2 className='text-3xl font-bold'>فست فود</h2>
            </div>
        </div>
    )
}

export default FastFood