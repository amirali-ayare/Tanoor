import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './CartSlice'
import { UserProfileData } from './UserProfileData'
import { Offer_Codes } from './OfferCodes'
import { ReservedData } from './ReservedData'

export default configureStore({
    reducer: {
        shopCart: CartSlice.reducer,
        user: UserProfileData.reducer,
        offerCodes: Offer_Codes.reducer,
        reserved: ReservedData.reducer
    }
})

// export type RootState = ReturnType<typeof store.getState>;