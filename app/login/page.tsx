"use client"
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function page() {

    const schema = yup.object().shape({
        phoneNumber: yup.string().min(11, 'شماره خود را درست وارد کنید').max(11, 'شماره خود را درست وارد کنید').required('لطفا شماره موبایل خود را وارد کنید'),
        password: yup.string().min(4, 'رمز حداقل باید 4 کاراکتر باشد').required('رمز وارد شده صحیح نمیباشد')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const onFormSubmit = (data: any) => {
        console.log("success");
    }

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <form onSubmit={handleSubmit(onFormSubmit)} className='bg-white p-8 py-5 rounded-2xl flex flex-col items-center gap-3'>
                <div><h1 className='font-medium text-3xl'>ورود</h1></div>
                <div className='mt-4'>
                    <input {...register("phoneNumber")} type="text" className='p-3.5 px-5 w-80 text-sm rounded-xl border-1 bg-neutral-50 border-zinc-100 outline-none' placeholder='شماره موبایل...' />
                    {
                        errors.phoneNumber && (
                            <h5 className='text-red-600 text-xs mt-1'>{errors.phoneNumber?.message}</h5>
                        )}
                </div>
                <div>
                    <input {...register("password")} type="text" className='p-3.5 px-5 w-80 text-sm rounded-xl border-1 bg-neutral-50 border-zinc-100 outline-none' placeholder='رمز حساب...' />
                    {
                        errors.password && (
                            <h5 className='text-red-600 text-xs mt-1'>{errors.password?.message}</h5>
                        )}
                </div>
                <div className='flex w-full items-center gap-2'>
                    <span className='text-sm'>حساب کاربری ندارید؟</span>
                    <Link href={'/signup'}><span className='text-sm text-red-800 font-bold cursor-pointer'>ثبت نام</span></Link>
                </div>
                <div>
                    <button className='bg-red-800 hover:bg-red-900 duration-300 cursor-pointer text-white py-2 px-36 w-full rounded-lg'>ورود</button>
                </div>
            </form>
        </div>
    )
}

export default page