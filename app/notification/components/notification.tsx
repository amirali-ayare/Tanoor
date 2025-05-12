"use client"
import React, { useState } from 'react'

interface INotifications {
    code: string;
    stringPrice: string;
    stringMinimum: string;
}

function Notification({ code, stringMinimum, stringPrice }: INotifications) {

    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('کپی نشد:', err);
        }
    };


    return (
        <div className='py-3 px-2.5 md:px-5 flex items-center justify-between gap-4 bg-neutral-50 rounded-lg'>
            <h3 className='font-bold text-gray-800 text-xs md:text-base'>
                کد تخفیف {stringPrice} هزارتومنی برای حداقل خرید {stringMinimum} هزار تومنی
            </h3>
            <span onClick={copyToClipboard} className='px-2 py-1 rounded font-normal hover:bg-neutral-100 active:bg-neutral-100 text-sm flex items-center text-gray-600 cursor-pointer'>
                {
                    copied ? <span>کپی شد!</span>
                    :
                    <span className='flex items-center'>
                        {code}
                        <i className='bx bx-copy mr-2 text-lg'></i>
                    </span>
                }
            </span>
        </div>
    )
}

export default Notification