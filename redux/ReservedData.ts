import { createSlice } from "@reduxjs/toolkit";

export const ReservedData = createSlice({
    name: 'reserved',
    initialState: {
        name: "",
        phoneNumber: "",
        address: "",
        price: "",
        foods: [],
        recived: false,
        time: ""
    },

    reducers: {
        getReservedData: (state:any , action) => {
            state.name = action.payload.name
            state.phoneNumber = action.payload.phoneNumber
            state.address = action.payload.address
            state.price = action.payload.price
            state.foods = action.payload.foods
            state.recived = action.payload.recived
            state.time = action.payload.time
        }
    }
})

export const { getReservedData } = ReservedData.actions