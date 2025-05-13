"use client"
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, deleteFood, increase } from '@/redux/CartSlice'
import { IFoodData } from '@/components/TraditionalFoods'

function PaymentFoods() {

    const selectedFoods = useSelector((state: { shopCart: IFoodData[] }) => state.shopCart)
    const Dispatch = useDispatch();

    return (
        <div>
            {
                selectedFoods.map((item: IFoodData, index: number) => {
                    return (
                        <div key={index} className='p-3 rounded-lg border-b-1 border-gray-100 grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-60 lg:gap-60 xl:gap-60 items-center'>
                            <div className='rounded-lg w-full flex items-center gap-2'>
                                <div className='relative p-10'>
                                    <Image src={`https://tanoor.liara.run/${item.image.image}`} alt='food' className='rounded-lg' fill={true} />
                                    {/* <Image src={`http://127.0.0.1:8000/${item.image.image}`} alt='food' className='rounded-lg' fill={true} /> */}
                                    {/* <Image src={item.image} alt='food' className='rounded-lg' fill={true} /> */}
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='font-bold inline whitespace-nowrap text-ellipsis text-black'>{item.name}</h2>
                                    <h3 className='text-sm font-light'>{item.quantity * item.price} تومان</h3>
                                </div>

                            </div>

                            <div>
                                <div className='flex items-center gap-2 mr-3 border-1 border-gray-200 p-1 rounded-lg'>
                                    <button onClick={() => Dispatch(increase(item.id))} className='flex items-center p-2 cursor-pointer text-lg'><i className='bx bx-plus'></i></button>
                                    <span className='font-light text-xl'>{item?.quantity}</span>
                                    <button onClick={() => Dispatch(decrease(item.id))} className='flex items-center p-2 pl-0 cursor-pointer text-lg'><i className='bx bx-minus'></i></button>
                                    <button onClick={() => Dispatch(deleteFood(item.id))} className='flex items-center p-2 text-xl cursor-pointer text-red-700'><i className='bx bx-trash' ></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default PaymentFoods