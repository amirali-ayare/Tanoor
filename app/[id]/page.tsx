"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IFoodData } from '@/components/TraditionalFoods';
import Suggested from './components/Suggested';
import { StoreProvider } from '@/redux/StoreProvider';
import Buttons from './components/Buttons';

interface IFoodProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{}>
}

function page({ params }: IFoodProps) {

    const [ChoosenFood, setChoosenFood] = useState<IFoodData | null>(null)
    const [suggested, setSuggested] = useState<IFoodData[]>([])
    useEffect(() => {
        const getChoosenFood = async () => {
            const { id } = await params;
            // const result = await fetch(`http://127.0.0.1:8000/api/foods/${id}`)
            const result = await fetch(`https://tanoor.liara.run/api/foods/${id}`)
            // const result = await fetch(`http://localhost:3010/foods/${id}`)
            const data: IFoodData = await result.json()
            setChoosenFood(data)
        }

        const getSuggestedFoods = async () => {
            const { id } = await params;
            const suggestedFoods = [];
            const NId = parseInt(id)
            if (NId > 14) {
                for (let i = 5; i > 1; i--) {
                    const result = await fetch(`https://tanoor.liara.run/api/foods/${Number(id) - i}`);
                    // const result = await fetch(`http://127.0.0.1:8000/api/foods/${Number(id) - i}`);
                    // const result = await fetch(`http://localhost:3010/foods/${Number(id) - i}`);
                    const data = await result.json();
                    suggestedFoods.push(data);
                }
            }
            else {
                for (let i = 1; i < 5; i++) {
                    const result = await fetch(`https://tanoor.liara.run/api/foods/${Number(id) + i}`);
                    // const result = await fetch(`http://127.0.0.1:8000/api/foods/${Number(id) + i}`);
                    // const result = await fetch(`http://localhost:3010/foods/${Number(id) + i}`);
                    const data = await result.json();
                    suggestedFoods.push(data);
                }
            }
            setSuggested(suggestedFoods);
        };

        getChoosenFood()
        getSuggestedFoods()
    }, [])


    return (

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-5 gap-5 pt-20'>

            {
                ChoosenFood ? (
                    <div className='col-span-2'>

                        <div className='grid grid-cols-1 gap-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2'>
                            <div className='rounded-lg bg-neutral-100 relative w-90 h-80 md:w-60 md:h-45 lg:w-70 lg:h-65 xl:w-90 xl:h-80 flex items-center justify-center'>
                                    <Image src={`https://tanoor.liara.run${ChoosenFood?.image?.image}`} fill={true} alt='food' className='rounded-lg w-full h-49' />
                                    {/* <Image src={`http://127.0.0.1:8000/${ChoosenFood.image.image}`} fill={true} alt='food' className='rounded-lg w-full h-49' /> */}
                                    {/* <Image src={ChoosenFood.image} fill={true} alt='food' className='rounded-lg w-full h-49' /> */}
                            </div>

                            <div className='flex flex-col gap-2 pt-8'>
                                <h1 className='font-extrabold text-2xl'>{ChoosenFood.name}</h1>
                                <p className='text-slate-500 font-light text-sm leading-6'>{ChoosenFood.ingredients}</p>
                                <h2 className='font-bold text-xl pt-3'>{ChoosenFood.price} تومان</h2>
                                <StoreProvider>
                                    <Buttons item={ChoosenFood} id={ChoosenFood.id} />
                                </StoreProvider>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 mt-10'>
                            <h1 className='text-lg font-bold'>نظر کاربران</h1>
                            {
                                ChoosenFood.comments.map((item: string, index: number) => {
                                    return (
                                        <div key={index} className='border-1 border-gray-200 w-90 my-3 rounded-lg p-3'>
                                            <div>
                                                <span className='text-sm text-gray-500'>کاربری نوشت:</span>
                                            </div>
                                            <p className='font-light text-sm mt-1'>
                                                {item}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                ) : ('')
            }


            <div className='col-span-1'>
                <div className='grid grid-cols-1'>
                    <div className='mb-4'><h1 className='text-xl font-bold'>غذاهای پیشنهادی</h1></div>
                    {
                        suggested.map((item, index) => {
                            return (
                                <Suggested key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default page