"use client"
import React, { useEffect, useState } from 'react'
import Reserve from './reserve'

function ReservedContainer() {

    const [reservedList, setReservedList] = useState([])


    // useEffect(() => {
    //     const getData = async () => {
    //         // const res = await fetch("http://localhost:3010/Reserved");

    //         if (!token) {
    //             console.log("No token found!");
    //             return;
    //         }

    //         const res = await fetch("http://127.0.0.1:8000/api/orders" ,{
    //             headers: {
    //                 Authorization: `Barber ${token}`,
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //         if (!res.ok) {
    //             console.error("Failed to fetch reserved list:", await res.json());
    //             return;
    //         }
    //         const data = await res.json();
    //         setReservedList(data)
    //     }
    //     getData()
    // }, [])

    useEffect(() => {
        const getData = async () => {
            // const res = await fetch("http://localhost:3010/Reserved");
            const res = await fetch("http://127.0.0.1:8000/api/orders/");
            if(!res.ok) {
                console.log("server error" , res.status);
                return;
            }
            const data = await res.json();
            setReservedList(data)
        }
        getData()
    }, [])

    console.log(reservedList);

    return (
        <div className='py-5 px-10'>
            {
                reservedList &&
                reservedList.map((item:any, index)=>{
                    return <Reserve key={index} {...item}/>
                })
            }
        </div>
    )
}

export default ReservedContainer