"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { IUser } from '@/redux/UserProfileData'

function BlackNavbarShop() {

    const userRedux = useSelector((state: {user: IUser}) => state.user)

    return (
        <div className='flex items-center gap-5 text-black'>
            <Link href={'/payment'}>
                <span className='text-3xl flex items-center text-black relative'>
                    <i className='bx bx-cart-alt'></i>
                </span>
            </Link>
            {
                userRedux.signed ?
                    <Link href={'/edit-profile'}>
                        <button className='cursor-pointer relative text-black flex text-xl items-center p-3 rounded-lg'>
                            <i className='bx bx-user'></i>
                        </button>
                    </Link>
                :
                <Link href={'/signup'}>
                    <button className='bg-red-800 cursor-pointer text-white px-5 py-2 rounded-lg'>ثبت نام</button>
                </Link>
            }
        </div>
    )
}

export default BlackNavbarShop