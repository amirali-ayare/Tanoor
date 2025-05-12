"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { uploadAddress, uploadName } from '@/redux/UserProfileData';


function EditProfileForm() {

    const user = useSelector((state: any) => state.user)

    const [name, setName] = useState(user.name)
    const [address, setAddress] = useState(user.address)
    const [submitButtonText, setSubmitButtonText] = useState('ذخیره')

    const Dispatch = useDispatch();

    const schema = yup.object().shape({
        name: yup.string(),
        address: yup.string()
    })

    const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) })

    const onFormSubmit = () => {
        Dispatch(uploadName(name))
        Dispatch(uploadAddress(address))
        setSubmitButtonText('تغییرات اعمال شد!')
        setTimeout(() => {
            setSubmitButtonText('ذخیره')
        }, 2000);
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='grid gird-cols-1 gap-5'>
                <div>
                    <h1 className='text-gray-950 text-xl'>مشخصات فردی</h1>
                </div>
                <div className='bg-neutral-50 border-1 border-zinc-100 p-3 rounded-lg'>
                    <h1 className='text-gray-500 text-xs'>نام و نام خانوادگی</h1>
                    <input type="text" {...register("name")} value={name} onChange={(e) => setName(e.target.value)} className='mt-2 text-slate-700 w-full p-2 bg-white text-black outline-none rounded-lg text-sm' />
                </div>
                <div className='bg-neutral-50 border-1 border-zinc-100 p-3 rounded-lg'>
                    <h1 className='text-gray-500 text-xs'>شماره موبایل</h1>
                    <div className='mt-2 w-full text-gray-400 cursor-not-allowed resize-none p-2 bg-white text-black outline-none rounded-lg text-sm'>{user.phoneNumber}</div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-gray-950 text-xl'>آدرس برای ارسال</h1>
                </div>
                <div className='bg-neutral-50 border-1 border-zinc-100 p-3 rounded-lg mt-5'>
                    <h1 className='text-gray-500 text-xs'>آدرس فعلی</h1>
                    <input type="text" {...register("address")} value={address} onChange={(e) => setAddress(e.target.value)} className='mt-2 text-slate-700 w-full p-2 bg-white text-black outline-none rounded-lg text-sm' placeholder='آدرس...'/>
                </div>
            </div>
            <div>
                <button type='submit' className='bg-red-800 px-10 text-white py-2 rounded-md cursor-pointer'>{submitButtonText}</button>
            </div>
        </form>
    )
}

export default EditProfileForm