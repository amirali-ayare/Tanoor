import { signUp, uploadName, uploadPassword, uploadPhoneNumber } from '@/redux/UserProfileData';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function SignupForm() {

    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const schema = yup.object().shape({
        name: yup.string().required('لطفا نام خود را وارد کنید'),
        phoneNumber: yup.string().min(11, 'شماره خود را درست وارد کنید').max(11, 'شماره خود را درست وارد کنید').required('لطفا شماره موبایل خود را وارد کنید'),
        password: yup.string().min(4, 'رمز حداقل باید 4 کاراکتر باشد').required('یک رمز برای حساب خود تعیین کنید')
    })

    const Dispatch = useDispatch();

    const router = useRouter();
    const goToMainPage = () => {
        router.push('/')
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const onFormSubmit = () => {
        Dispatch(signUp())
        Dispatch(uploadName(name))
        Dispatch(uploadPhoneNumber(phoneNumber))
        Dispatch(uploadPassword(password))
        console.log("success");
        goToMainPage();
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className='bg-white p-8 py-5 rounded-2xl flex flex-col items-center gap-3'>
            <div><h1 className='font-medium text-3xl'>ثبت نام</h1></div>
            <div className='mt-4'>
                <input {...register("name")} type="text" onChange={(e)=>setName(e.target.value)} className='p-3.5 px-5 w-80 text-sm rounded-xl bg-neutral-50 border-1 border-zinc-100 outline-none' placeholder='نام کامل...' />
                {
                    errors.name && (
                        <h5 className='text-red-600 text-xs mt-1'>{errors.name?.message}</h5>
                    )}
            </div>
            <div>
                <input {...register("phoneNumber")} type="text" onChange={(e)=>setPhoneNumber(e.target.value)} className='p-3.5 px-5 w-80 text-sm rounded-xl border-1 bg-neutral-50 border-zinc-100 outline-none' placeholder='شماره موبایل...' />
                {
                    errors.phoneNumber && (
                        <h5 className='text-red-600 text-xs mt-1'>{errors.phoneNumber?.message}</h5>
                    )}
            </div>
            <div>
                <input {...register("password")} type="text" onChange={(e)=>setPassword(e.target.value)} className='p-3.5 px-5 w-80 text-sm rounded-xl border-1 bg-neutral-50 border-zinc-100 outline-none' placeholder='رمز حساب...' />
                {
                    errors.password && (
                        <h5 className='text-red-600 text-xs mt-1'>{errors.password?.message}</h5>
                    )}
            </div>
            <div className='flex w-full items-center gap-2'>
                <span className='text-sm'>حساب دارید؟</span>
                <Link href={'/login'}><span className='text-sm text-red-800 font-bold cursor-pointer'>ورود</span></Link>
            </div>
            <div>
                <button className='bg-red-800 hover:bg-red-900 duration-300 cursor-pointer text-white py-2 px-36 w-full rounded-lg'>ثبت</button>
            </div>
        </form>
    )
}

export default SignupForm