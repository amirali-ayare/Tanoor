"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function NavbarShop() {

    const selectedFoods = useSelector((state: any) => state.shopCart)
    const totalCount = selectedFoods.reduce((total: number, item: any) => {
        return total + item.quantity;
    }, 0);

    const userRedux = useSelector((state: any) => state.user)
    const offerCodes = useSelector((state: any) => state.offerCodes)
    const [checkCodeExist, setCheckCodeExist] = useState([])
    useEffect(()=>{
        const CodeExist = offerCodes.filter((item: any) => (item.score <= userRedux.score) && (item.used === false))
        setCheckCodeExist(CodeExist)
    },[])


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