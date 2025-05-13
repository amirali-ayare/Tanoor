"use client"
import Image from 'next/image'
import React from 'react'
import Profile from '@/image/profile_image2.webp'
import Score from '@/image/reward.png'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { IUser } from '@/redux/UserProfileData'

function UserProfileName() {


    // این کامپوننت باید حذف شه



    const userRedux = useSelector((state: {user: IUser}) => state.user)
    const rightColumnData = [
        {
            icon: <i className='bx bx-edit text-2xl'></i>,
            title: 'تغییر اطلاعات کاربری',
            link: '/edit-profile'
        },
        {
            icon: <i className='bx bx-bell text-2xl'></i>,
            title: 'اطلاعیه ها',
            link: '/notification'
        }
    ]
    const leftColumnData = [
        {
            icon: <i className='bx bx-wallet text-2xl'></i>,
            title: 'کیف پول',
            link: ''
        },
        {
            icon: <i className='bx bx-log-out text-2xl'></i>,
            title: 'خروج از حساب',
            link: ''
        }
    ]


    return (
        <>
            {
                userRedux.signed ? 
                (
                    <>
                        <div className='flex items-center gap-4'>
                            <Image src={Profile} alt='profile' className='rounded-full w-13' />
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center'>
                                    <h3 className='font-bold text-base'>{userRedux.name}</h3>
                                    <Image src={Score} alt='score' className='w-4 mr-2' />
                                    <h4 className='font-light text-sm mr-1 text-slate-500'>{userRedux.score} امتیاز</h4>
                                </div>
                                <h3 className='font-light text-sm text-slate-400'>{userRedux.phoneNumber}</h3>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 mt-8'>
                            <div className='grid grid-cols-1 gap-5'>
                                {
                                    rightColumnData.map((item, index) => {
                                        return (
                                            <Link href={`${item.link}`} key={index}>
                                                <div className='flex items-center gap-2 text-xl rounded-xl shadow-md p-6 shadow-slate-200 hover:text-red-700 duration-300 cursor-pointer text-slate-500'>
                                                    {item.icon}
                                                    <h2 className='font-bold'>{item.title}</h2>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>

                            <div className='grid grid-cols-1 gap-5'>
                                {
                                    leftColumnData.map((item, index) => {
                                        return (
                                            <Link href={`${item.link}`} key={index}>
                                                <div className='flex items-center gap-2 text-xl rounded-xl shadow-md p-6 shadow-slate-200 hover:text-red-700 duration-300 cursor-pointer text-slate-500'>
                                                    {item.icon}
                                                    <h2 className='font-bold'>{item.title}</h2>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </>
                )
                    :
                    (
                        <div>هنوز ثبت نام نکردی!</div>
                    )
            }
        </>
    )
}

export default UserProfileName