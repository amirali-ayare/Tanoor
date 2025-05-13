"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increaseScore, IUser, pay, uploadAddress } from '@/redux/UserProfileData';
import { codeIsUsed } from '@/redux/OfferCodes';
import { useRouter } from 'next/navigation';
import { getReservedData } from '@/redux/ReservedData';
import { clearAll } from '@/redux/CartSlice';
import Link from 'next/link';
import { IFoodData } from '@/components/TraditionalFoods';
import { INotif } from '@/app/notification/components/notifContainer';


function PaymentInfo() {

    const selectedFoods = useSelector((state: { shopCart: IFoodData[] }) => state.shopCart)
    const userRedux = useSelector((state: {user: IUser}) => state.user)
    const OfferCodes = useSelector((state: {offerCodes: INotif[]}) => state.offerCodes)
    const AddressInput = useRef<HTMLTextAreaElement | null>(null);
    const router = useRouter()
    const [inputVal, setInputVal] = useState('')
    const [totalAmount, setTotalAmount] = useState<number>(0)
    const [offer, setOffer] = useState(false)
    const [isCodeEntered, setIsCodeEntered] = useState(false);
    const [availableCodes, setAvailableCodes] = useState<INotif[]>([])
    const [addressInputValue, setAddressInputValue] = useState('')
    const [showError, setShowError] = useState(false)
    const Dispatch = useDispatch();

    useEffect(() => {
        const availableOfferCodes = OfferCodes.filter((item: INotif) => item.score <= userRedux.score)
        const notUsedCodes = availableOfferCodes.filter((item: INotif) => item.used === false)
        setAvailableCodes(notUsedCodes)
    }, [])

    const calculate = selectedFoods.reduce((total: number, item: IFoodData) => {
        return total + (item.quantity * item.price);
    }, 0);

    useEffect(() => {
        setTotalAmount(calculate)
    }, [calculate])

    const ConfirmOfferCode = () => {
        setIsCodeEntered(true);
        const CheckCode = availableCodes.find((item: INotif) => item.code === inputVal)
        if (CheckCode) {
            if (CheckCode.minimum <= totalAmount) {
                setOffer(true)
                setTotalAmount(calculate - CheckCode.price)
                Dispatch(codeIsUsed(CheckCode.id))
            }
            else {
                setOffer(false)
            }
        }
        else {
            setOffer(false)
        }
    }

    const payAll = () => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const formattedTime = `${hour}:${minute}`
        Dispatch(pay())
        Dispatch(increaseScore())
        Dispatch(getReservedData({
            name: userRedux.name,
            phoneNumber: userRedux.phoneNumber,
            address: userRedux.address,
            price: totalAmount, foods: selectedFoods,
            recived: false, time: formattedTime
        }))
        Dispatch(clearAll())
        router.push('/paymentsuccess')
    }

    const setProfileAddress = () => {
        AddressInput.current!.value = userRedux.address
    }

    const setAddress = () => {
        Dispatch(uploadAddress(addressInputValue))
    }


    return (
        <div className='px-5'>


            <div className={showError ? "fixed absoulte top-0 inset-0 backdrop-blur flex items-center justify-center" : "hidden"} style={{ zIndex: '9999999999' }}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold text-red-800">پیام خطا</h2>
                    <p className="text-gray-700">
                        توجه داشته باشید که باید ثبت نام کرده باشید و آدرس را وارد کرده باشید.
                    </p>
                    <button onClick={() => setShowError(false)} className="mt-4 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-950">باشه</button>
                </div>
            </div>


            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-medium'>آدرس</h1>
                    
                </div>
                <div>
                    <textarea ref={AddressInput} onChange={(e) => setAddressInputValue(e.target.value)} className='mt-2 w-full outline-none resize-none p-2 text-black border-1 border-gray-100 rounded-lg text-sm' placeholder='آدرس خود را وارد کنید...' />
                    <div className='flex'>
                        {
                            userRedux.address !== "" ? (
                                <button onClick={setProfileAddress} className='p-3 flex items-center justify-center text-red-800 border-1 border-red-800 rounded-md'>آدرس پروفایل</button>
                            ) : (
                                <Link href={'/edit-profile'}><button className='p-3 flex items-center justify-center text-red-800 border-1 border-red-800 rounded-md'><i className='bx bx-plus'></i></button></Link>
                            )
                        }
                        {/* <button className='p-3 flex items-center justify-center text-red-800 border-1 border-red-800 rounded-md'><i className='bx bx-plus'></i></button> */}
                        <button onClick={setAddress} className='bg-red-800 hover:bg-red-900 rounded-lg text-white font-bold p-3 px-5 text-xs mr-3 cursor-pointer'>تایید</button>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <h1 className='text-2xl font-medium'>کد تخفیف</h1>
                <div className='flex items-center gap-3 mt-3'>
                    <input onChange={(e) => setInputVal(e.target.value)} type='text' className='border-1 border-zinc-100 bg-neutral-50 w-60 p-3 outline-none text-sm rounded-md' placeholder='کد تخفیف خود را وارد کنید' />
                    <button onClick={ConfirmOfferCode} className='p-3 flex items-center text-sm justify-center text-red-800 border-1 border-red-800 rounded-md'>اعمال</button>
                </div>
                <div className='mt-1'>
                    {isCodeEntered && (
                        offer ? (
                            <p className='text-xs text-green-600 font-light'>تخفیف با موفقیت اعمال شد.</p>
                        ) : (
                            <p className='text-xs text-red-700 font-light'>کد تخفیف نامعتبر است.</p>
                        )
                    )}
                </div>
            </div>

            <div className='mt-5 border-1 border-gray-200 flex flex-col gap-4 rounded-lg p-4 items-center justify-center'>
                <div className='py-2 border-b-1 border-gray-100 w-90 flex justify-center'>
                    <h3 className='text-lg font-medium'>جزییات پرداخت</h3>
                </div>
                <div className='flex items-center justify-between w-full md:w-115'>
                    <h4 className='text-sm'>جمع پرداختی</h4>
                    <h2 className='font-medium text-lg'>{totalAmount} تومان</h2>
                </div>
                <div>
                    {
                        selectedFoods.length === 0 || userRedux.address === '' || userRedux.signed === false ? (
                            <button onClick={() => setShowError(true)} className='w-full md:w-115 bg-red-800 text-white p-2 rounded-lg cursor-pointer hover:bg-red-900'>پرداخت</button>
                        ) : (
                            <button onClick={payAll} className='w-60 md:w-115 bg-red-800 text-white p-2 rounded-lg cursor-pointer hover:bg-red-900'>پرداخت</button>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default PaymentInfo