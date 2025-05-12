import React from 'react'
import { IReserve } from '../components/reserve';

interface IProps {
    params: { id: string };
    searchParams: {};
}

async function page({ params }: IProps) {

    const { id } = params;

    const res = await fetch(`http://localhost:3010/Reserved/${id}`)
    const data: any = await res.json() as IReserve
    console.log(data);


    return (
        <div className='p-10 bg-red-600 flex flex-col items-center gap-5'>
            <div className='flex justify-center'>
                <h1 className='text-yellow-400 text-3xl font-extrabold'>اطلاعات سفارش</h1>
            </div>
            <div className='w-[90%] bg-white rounded-xl p-5 flex flex-col gap-3'>
                <h1 className='font-light'>نام : <span className='font-bold'>{data.name}</span></h1>
                <h1 className='font-light'>شماره موبایل : <span className='font-bold'>{data.phoneNumber}</span></h1>
                <h1 className='font-light'>زمان سفارش : <span className='font-bold'>{data.time}</span></h1>
                <h1 className='font-light'>غذا ها :
                    {
                        data.foods.map((item: any, index:number) => {
                            return <p className='font-bold' key={index}>{item.name} × {item.quantity}</p>
                        })
                    }
                </h1>
                <h1 className='font-light'>قیمت : <span className='font-bold'>{data.price} تومان</span></h1>
                <h1 className='font-light'>آدرس : <span className='font-bold'>{data.address}</span></h1>
                <button className='bg-green-600 text-white cursor-pointer font-bold hover:bg-green-800 duration-300 p-4 rounded-lg'>آماده شد</button>
            </div>
        </div>
    )
}

export default page