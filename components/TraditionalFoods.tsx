"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import FoodCard from './FoodCard'
import Link from 'next/link'
import traditionalFood from '../image/persianfoods.png'

export interface Iimage{
    created_at: string,
    id: number,
    image: string,
    title: string
}

export interface IFoodData {
    id: string,
    name: string,
    price: number,
    stringPrice: string,
    quantity: number,
    ingredients: string,
    image: Iimage, // string
    rating: string,
    comments: [],
    type: string
}

function TraditionalFoods() {

    const [traditionalFoods, setTraditionalFoods] = useState<IFoodData[]>([])
    const [mobileTF, setMobileTF] = useState<IFoodData[]>([])

    useEffect(() => {
        const getFoodsData = async () => {
            // const res = await fetch("http://localhost:3010/foods");
            // const res = await fetch("http://127.0.0.1:8000/api/foods/");
            const res = await fetch("https://tanoor.liara.run/api/foods/");
            const data = await res.json();
            const filtered = data.filter((item: IFoodData) => item.type === 'iranian')
            setTraditionalFoods(filtered)
            const cutted = filtered.slice(0,4)
            setMobileTF(cutted)
        }
        getFoodsData();
    }, [])
    

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 px-5 py-5 gap-10 lg:gap-3 xl:gap-3'>
            <div className='col-span-2 order-2 lg:order-1 xl:order-1 bg-neutral-100 rounded-lg p-3 grid grid-cols-2 md:grid-cols-3'>
                {
                    traditionalFoods.map((item) => {
                        return (
                            <Link className='hidden md:inline lg:inline xl:inline' key={item.id} href={`${item.id}`}><FoodCard {...item} /></Link>
                        )
                    })
                }
                {
                    mobileTF.map((item) => {
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
                <Image src={traditionalFood} alt='traditional_foods' className='w-50 hidden lg:block xl:block'/>
                <h2 className='text-3xl font-bold'>غذای ایرانی</h2>
            </div>
        </div>
    )
}

export default TraditionalFoods