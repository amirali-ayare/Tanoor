"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import success from '@/image/successimage.webp'

function SuccessContainer() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, []);


    return (
        <div className='flex h-screen w-screen flex-col items-center justify-center p-10'>
            <Image src={success} alt='success' className='w-60' />
            <p className='font-light text-slate-700 mt-5'>سفارش شما با موفقیت ثبت شد</p>
        </div>
    )
}

export default SuccessContainer