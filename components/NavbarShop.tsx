"use client"
import { IUser } from '@/redux/UserProfileData'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

function NavbarShop() {

    const userRedux = useSelector((state: {user: IUser}) => state.user)


    return (
        <div className='flex items-center gap-5'>
            <Link href={'/payment'}>
                <span className='text-3xl flex items-center text-white relative'>
                    <i className='bx bx-cart-alt'></i>
                </span>
            </Link>
            {
                userRedux.signed ?
                    <Link href={'/edit-profile'}>
                        <button className='cursor-pointer relative text-white flex text-xl items-center p-3 rounded-lg'>
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

export default NavbarShop