import { INotif } from "@/app/notification/components/notifContainer";
import { createSlice } from "@reduxjs/toolkit";

export const Offer_Codes = createSlice({
    name: 'offer_codes',
    initialState: [
        {
            id: 1,
            code: "JECPE",
            price: 50000,
            minimum: 120000,
            stringPrice: "50",
            stringMinimum: "120",
            used: false,
            score: 10
        },
        {
            id: 2,
            code: "CONRD",
            price: 70000,
            minimum: 200000,
            stringPrice: "70",
            stringMinimum: "200",
            used: false,
            score: 50
        },
        {
            id: 3,
            code: "IJFRN",
            price: 100000,
            minimum: 300000,
            stringPrice: "100",
            stringMinimum: "300",
            used: false,
            score: 70
        },
        {
            id: 4,
            code: "EFBOQ",
            price: 120000,
            minimum: 450000,
            stringPrice: "120",
            stringMinimum: "450",
            used: false,
            score: 100
        },
        {
            id: 5,
            code: "AYARE",
            price: 100000,
            minimum: 120000,
            stringPrice: "100",
            stringMinimum: "120",
            used: false,
            score: 0
        }
    ] as INotif[],

    reducers: {
        codeIsUsed: (state:any , action) => {
            const usedCode = state.find((item: any) => item.id === action.payload)
            if (usedCode) {
                usedCode.used = true
            }
        }
    }
})

export const { codeIsUsed } = Offer_Codes.actions