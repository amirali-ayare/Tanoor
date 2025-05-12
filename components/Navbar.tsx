import React from 'react'
import logo from '../image/bold-red-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import NavbarShop from './NavbarShop'
import { StoreProvider } from '@/redux/StoreProvider'


function Navbar() {

    const links = [
        {
            text: "صفحه اصلی ",
            link: "/"
        },
        {
            text: "دسته بندی ",
            link: "/"
        },
        {
            text: "ارتباط با ما ",
            link: "/"
        },
        {
            text: "درباره ما ",
            link: "/"
        },
    ]

    return (
        <div className='flex items-center z-100 justify-between w-full px-5 md:px-10 lg:px-10 xl:px-10 absolute'>
            <div className='flex items-center gap-2'>
                <button className='md:hidden lg:hidden xl:hidden text-3xl flex items-center text-white'><i className='bx bx-menu'></i></button>
                <Link href={'/'}><Image src={logo} alt='logo' className='w-[60px]' /></Link>
                <div className='mr-10'>
                    {
                        links.map((item, index) => {
                            return (
                                <Link href={item.link} key={index}><span className='text-white font-thin mx-5 hidden md:inline lg:inline xl:inline'>{item.text}</span></Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex items-center gap-5'>
                <StoreProvider>
                    <NavbarShop />
                </StoreProvider>
            </div>

        </div>
    )
}

export default Navbar