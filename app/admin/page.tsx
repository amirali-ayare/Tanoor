"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ADMIN_KEY } from '@/key/adminKey'
import Reserve from './components/reserve'
import ReservedContainer from './components/reservedContainer'
import { StoreProvider } from '@/redux/StoreProvider'


function page() {

    const [isLogged, setIsLogged] = useState(true) //false

    const schema = yup.object().shape({
        username: yup.string().oneOf([ADMIN_KEY.username], 'نام کاربری صحیح نمیباشد').required('نام کاربری خود را وارد کنید'),
        password: yup.string().oneOf([ADMIN_KEY.password], 'رمز عبور صحیح نمیباشد').required('رمز را وارد کنید')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const onFormSubmit = (data: any) => {
        setIsLogged(true)
        console.log("admin success");
    }



    return (
        <div>
            {
                isLogged ? (
                    <div className='bg-slate-50'>
                        <StoreProvider>
                            <ReservedContainer />
                        </StoreProvider>
                    </div>
                ) : (
                    <div className='p-5 bg-red-600 w-full h-screen flex items-center justify-center'>
                        <div className='bg-white rounded-2xl p-5 px-10'>
                            <div className='flex items-center justify-center'><h2 className='font-extrabold text-red-600 text-3xl'>پنل مدیریت</h2></div>
                            <form className='grid grid-cols-1 gap-4 mt-4' onSubmit={handleSubmit(onFormSubmit)}>
                                <div>
                                    <input type="text" {...register("username")} className='p-2.5 px-5 text-sm rounded-xl border-1 border-slate-300 outline-none' placeholder='نام کاربری...' />
                                    {
                                        errors.username && (
                                            <h5 className='text-red-600 text-xs mt-1'>{errors.username?.message}</h5>
                                        )}
                                </div>
                                <div>
                                    <input type="text" {...register("password")} className='p-2.5 px-5 text-sm rounded-xl border-1 border-slate-300 outline-none' placeholder='رمز ورود...' />
                                    {
                                        errors.password && (
                                            <h5 className='text-red-600 text-xs mt-1'>{errors.password?.message}</h5>
                                        )}
                                </div>
                                <div>
                                    <button className='bg-red-600 w-full hover:bg-red-700 duration-300 cursor-pointer text-white p-2 rounded-xl'>ورود</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default page