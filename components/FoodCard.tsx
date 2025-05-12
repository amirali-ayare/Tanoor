"use client"
import React from 'react'
import food1 from '../image/t-f-1.jpg'
import foode from '../public/image/t-f-6.jpg'
import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { IFoodData } from './TraditionalFoods'

function FoodCard({ image, name, price ,ingredients}: IFoodData) {

    return (
        <div className="w-30 md:w-50 lg:w-50 xl:w-50 mx-auto my-8 bg-white rounded-xl shadow-md">
            <div className='flex justify-center'>
                <img
                    // src={image}
                    // http://127.0.0.1:8000/media/images/t-f-3.jpg
                    src={`http://127.0.0.1:8000${image.image}`}
                    alt="چلو کباب وزیری"
                    className="w-25 h-25 md:w-45 lg:w-45 xl:w-45 md:h-45 lg:h-45 xl:h-45 object-cover relative -top-15"
                />
            </div>

            <div className='flex flex-col items-center -mt-15'>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
                <p className="text-xs md:text-sm lg:text-sm xl:text-sm text-gray-600 mb-3 text-center">{ingredients}</p>
            </div>

            <div className="p-2 md:p-4 lg:p-4 xl:p-4 text-right">
                <div className="flex items-center justify-between">
                    <button className="w-6 h-6 flex items-center justify-center bg-white rounded-lg border-slate-700 text-slate-700 border-15">
                        <span className="text-xl">+</span>
                    </button>
                    <span className="text-gray-800 font-bold text-xs md:text-sm">{price} تومان</span>
                </div>
            </div>
        </div>


    )
}

export default FoodCard