import Link from 'next/link'
import React from 'react'

export interface IReserve {
    id: string,
    name: string,
    phone_number: string,
    address: string,
    price: number,
    foods: object,
    recived: boolean,
    time: string
}

function Reserve({ name, time, price, id }: IReserve) {
    return (

        <div className='flex items-center justify-between border-b-1 border-slate-300 py-3'>
            <div>
                <h2 className='text-slate-700 text-lg'>{name} یک سفارش داد!</h2>
            </div>
            <div>
                <h2 className='text-slate-700 text-lg'>{time}</h2>
            </div>
            <div>
                <h2 className='text-slate-700 text-lg'>{price} تومان</h2>
            </div>
            <div>
                <Link href={`/admin/${id}`}>
                    <button className='p-2 cursor-pointer rounded-lg text-sm bg-red-600 text-white font-bold'>نمایش</button>
                </Link>
            </div>
        </div>
    )
}

export default Reserve