import React from 'react'
import logo from '../image/bold-red-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Creator from './Creator'

function Footer() {

    const links = [
        {
            txt: 'صفحه اصلی ',
            link: '/'
        },
        {
            txt: 'دسته بندی ',
            link: '/'
        },
        {
            txt: ' ارتباط با ما',
            link: '/'
        },
        {
            txt: 'درباره ما',
            link: '/'
        }
    ]

    return (
        // <div className='p-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 bg-white gap-10'>

        //     <div>
        //         <div className='flex items-center gap-2'>
        //             <h4 className='font-bold text-red-600 text-xl'>رستوران</h4>
        //             <Image src={logo} alt='logo' className='w-15'/>
        //         </div>

        //         <div className='mt-5'>
        //             <p className='text-sm font-light text-gray-500 leading-6 text-justify'>
        //                 رستوران تنور یکی از رستوران‌های معروف و محبوب در تهران است که به خاطر ارائه غذاهای سنتی و خوشمزه ایرانی شناخته می‌شود. این رستوران به ویژه به خاطر کباب‌ها و نان‌های تازه‌اش شهرت دارد. محیط رستوران تنور عموماً دارای طراحی سنتی و دلنشینی است که فضایی گرم و صمیمی برای مهمانان فراهم می‌کند. منوی رستوران شامل انواع کباب‌ها، خورشت‌ها، و غذاهای محلی است که با استفاده از مواد اولیه با کیفیت تهیه می‌شوند.
        //             </p>
        //         </div>
        //     </div>

        //     <div>
        //         <h1 className='text-red-600 font-bold'>ارتباط با ما</h1>

        //         <div className='mt-5'>
        //             {media.map((item , index)=>{
        //                 return(
        //                     <h3 key={index} className='text-sm cursor-pointer p-2 rounded-full text-gray-500 hover:text-red-600 duration-300 font-light'>{item.text}</h3>
        //                 )
        //             })}
        //         </div>
        //     </div>

        // </div>

        <div className='border-t-1 border-neutral-100 px-5 py-5'>
            <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center md:items-center lg:items-center xl:items-center md:justify-start lg:justify-start xl:justify-start'>
                <Image src={logo} alt='logo' className='w-12 ml-5' />
                {
                    links.map((item) => {
                        return (
                            <Link key={item.txt} href={item.link}><h6 className='block md:hidden lg:hidden xl:hidden text-gray-500 my-2 hover:text-red-800 duration-300'>{item.txt}</h6></Link>
                        )
                    })
                }

                <div className='hidden md:block lg:block xl:block'>
                    {
                        links.map((item) => {
                            return (
                                <Link key={item.txt} href={item.link}><span className='text-gray-500 mx-5 hover:text-red-800 duration-300'>{item.txt}</span></Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer