'use client'
import { IFoodData } from '@/redux/CartSlice';
import React, { useEffect, useState } from 'react'
import Suggested from './Suggested';


interface IFoodProps {
    params: Promise<{ id: string }>;
    // searchParams: Promise<{}>
}
function SuggContainer({ params }: IFoodProps) {

    const [suggested, setSuggested] = useState<IFoodData[]>([])
    useEffect(() => {
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

        getSuggestedFoods()
    }, [])

    return (
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
    )
}

export default SuggContainer