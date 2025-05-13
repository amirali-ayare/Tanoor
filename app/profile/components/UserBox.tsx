'use client'
import React from 'react'
import newProfile from '@/image/profile-new.jpg'
import Image from 'next/image'
import score from '@/image/new-score.png'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IUser } from '@/redux/UserProfileData'


function UserBox() {

    const user = useSelector((state: {user: IUser}) => state.user)
    const columnData = [
        {
            icon: <i className='bx bx-edit text-2xl'></i>,
            title: 'تغییر اطلاعات کاربری',
            link: '/edit-profile',
            class: 'flex border-b-1 border-b-gray-200 items-center gap-2 py-4'
        },
        {
            icon: <i className='bx bx-bell text-2xl'></i>,
            title: 'اطلاعیه ها',
            link: '/notification',
            class: 'flex border-b-1 border-b-gray-200 items-center gap-2 py-4'
        },
        {
            icon: <i className='bx bx-wallet text-2xl'></i>,
            title: 'کیف پول',
            link: '/',
            class: 'flex border-b-1 border-b-gray-200 items-center gap-2 py-4'
        },
        {
            icon: <i className='bx bx-log-out text-2xl'></i>,
            title: 'خروج از حساب',
            link: '/',
            class: 'flex items-center gap-2 py-4'
        }
    ]

    const path = usePathname();

    return (
        <div className='grid grid-cols-1 gap-5 items-center justify-center'>
            <div className='rounded-lg border-1 border-gray-200 p-3 flex gap-4'>
                <div>
                    <Image src={newProfile} alt='profile' className='w-15 rounded-full' />
                </div>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-lg font-bold'>{user.name}</h2>
                    <h2 className='text-gray-500 text-sm'>{user.phoneNumber}</h2>
                    <span className='flex'>
                        <Image src={score} alt='score' className='w-5' />
                        <span className='text-sm text-gray-500'>{user.score} امتیاز</span>
                    </span>
                </div>
            </div>

            <div className='rounded-lg border-1 border-gray-200 flex flex-col py-1'>
                {
                    columnData.map((item, index) => {
                        return (
                            <Link href={item.link} key={index}>
                                <div className={item.class}>
                                    <div className={item.link === path ? 'w-full border-r-3 border-red-800 flex px-10 py-1 gap-3' : 'w-full flex px-10 py-1 gap-3'}>
                                        {item.icon}
                                        <span className='text-gray-900'>{item.title}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserBox