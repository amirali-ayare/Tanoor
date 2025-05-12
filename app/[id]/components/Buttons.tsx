"use client"
import { addToCart, decrease, deleteFood, increase } from '@/redux/CartSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

interface IChoosenFood {
    item: object
    id: string
}

function Buttons({ item, id }: IChoosenFood) {

    const selectedFoods = useSelector((state: any) => state.shopCart)
    const Dispatch = useDispatch();

    const [isInCart, setIsInCart] = useState(false)
    const food = selectedFoods.find((item: any) => item.id === id);
    

    const CheckFoods = () => {
        if (food) {
            setIsInCart(true)
        }
        else {
            setIsInCart(false)
        }
    }

    useEffect(() => {
        CheckFoods()
    }, [food])

    return (
        <div className='mt-5 flex items-center'>
            {
                isInCart === false ?
                    <button onClick={() => Dispatch(addToCart({ item, id }))} className='py-2 cursor-pointer px-4 text-sm bg-red-800 text-white flex items-center rounded-lg'>
                        افزودن به سبد خرید
                    </button> : ''
            }

            { 
                isInCart === true ?
                <div className='flex items-center gap-2 mr-3 border-1 border-gray-200 p-1 rounded-lg'>
                    <button onClick={() => Dispatch(increase(id))} className='flex items-center p-2 cursor-pointer text-lg'><i className='bx bx-plus'></i></button>
                    <span className='font-light text-xl'>{food?.quantity}</span>
                    {
                        food?.quantity > 1 ? <button onClick={() => Dispatch(decrease(id))} className='flex items-center p-2 pl-0 cursor-pointer text-lg'><i className='bx bx-minus'></i></button> : ''
                    }
                    <button onClick={() => Dispatch(deleteFood(id))} className='flex items-center p-2 text-xl cursor-pointer text-red-700'><i className='bx bx-trash' ></i></button>
                </div>
                : ''
            }

        </div>
    )
}

export default Buttons