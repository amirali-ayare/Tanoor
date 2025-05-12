import Image from 'next/image'
import React from 'react'
import map from '../image/map.png'

function ContactUs() {
    return (
        <div className='px-10 py-5'>
            <div className='flex items-center justify-center gap-1'>
                <span className='text-3xl font-bold'>ارتباط با ما</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 mt-10'>
                <div>
                    <h1 className='text-2xl font-bold'>رستوران تنور</h1>
                    <p className='text-slate-700 text-sm text-justify mt-2 leading-6'>
                    رستوران تنور جاییه که طعم اصیل غذاهای تنوری رو با کیفیتی بالا و فضایی گرم تجربه می‌کنی. ما با استفاده از مواد اولیه تازه و تکنیک‌های پخت سنتی، غذاهایی متفاوت و به‌یادماندنی ارائه می‌دیم. تمرکز ما روی جزئیاته؛ از عطر نون داغ گرفته تا برگرهای تنوری خوش‌طعم. اینجا فقط غذا نمی‌خوری، یه حس خوب هم باهاش می‌بری.
                    </p>
                    <div className='flex flex-col gap-5 mt-5'>
                        <div className='flex items-center gap-5'>
                            <i className='bx bx-map text-2xl text-red-800'></i>
                            <span>تهران، خیابان ولیعصر، بین خیابان مفتح و خیابان لاله </span>
                        </div>
                        <div className='flex items-center gap-5'>
                            <i className='bx bx-phone text-2xl text-red-800'></i>
                            <span>56467123 - 021</span>
                        </div>
                    </div>
                </div>

                <div>
                    <Image src={map} alt='map' />
                </div>
            </div>
        </div>
    )
}

export default ContactUs