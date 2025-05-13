import { createSlice } from "@reduxjs/toolkit";

export interface IFoodData {
    id: string,
    name: string,
    price: number,
    stringPrice: string,
    quantity: number,
    ingredients: string,
    image: any, // string
    rating: string,
    comments: [],
    type: string
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState: [] as IFoodData[],

    reducers: {
        addToCart: (state: any, action) => {
            const existingFoodIndex = state.findIndex((item: any) => item.id === action.payload.id);
            if(existingFoodIndex < 0) {
                state.push({ ...action.payload.item, quantity: 1 });
            }
        },
        increase: (state: any, action) => {
            const food = state.find((item: any) => item.id === action.payload);
            if (food) {
                food.quantity += 1
            }
        },
        decrease: (state: any, action) => {
            const food = state.find((item: any) => item.id === action.payload);
            if (food) {
                if (food.quantity == 0) {
                    return state.filter((item: any) => item.id !== action.payload);
                }
                else {
                    food.quantity -= 1
                }
            }
        },
        deleteFood: (state: any, action) => {
            return state.filter((item: any) => item.id !== action.payload);
        },
        clearAll: (state:any) => {
            state.splice(0, state.length);
        }
    },
})

export const { addToCart, increase, decrease, deleteFood, clearAll } = CartSlice.actions