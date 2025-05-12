import { createSlice } from "@reduxjs/toolkit";

export const UserProfileData = createSlice({
    name: 'userData',
    initialState: {
        name: '',
        phoneNumber:'',
        password: '',
        address: '',
        score: 0,
        transactions: 0,
        signed: false
    },

    reducers: {
        signUp: (state: any) => {
            state.signed = true
        },
        signOut: (state: any) => {
            state.signed = false
        },
        uploadName: (state:any, action) => {
            state.name = action.payload
        },
        uploadPhoneNumber: (state:any, action) => {
            state.phoneNumber = action.payload
        },
        uploadAddress: (state:any, action) => {
            state.address = action.payload
        },
        uploadPassword: (state:any, action) => {
            state.password = action.payload
        },
        pay: (state: any) => {
            state.transactions += 1
        },
        increaseScore: (state:any) => {
            state.score += 15
        }
    }
})

export const { signUp, signOut, uploadName, uploadPhoneNumber, uploadPassword, pay, uploadAddress, increaseScore} = UserProfileData.actions