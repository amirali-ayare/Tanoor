"use client"
import React from 'react'
import SuggContainer from './components/SuggContainer';
import ProductPage from './components/ProductPage';

interface IFoodProps {
    params: Promise<{ id: string }>;
    // searchParams: Promise<{}>
}

function page({params}: IFoodProps) {

    return (

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-5 gap-5 pt-20'>

            <ProductPage params={params}/>

            <div className='col-span-1'>
                <SuggContainer params={params}/>
            </div>

        </div>

    )
}

export default page