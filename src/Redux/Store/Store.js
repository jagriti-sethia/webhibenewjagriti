
import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "../Slice/cartSlice"
import cardSlice from "../Slice/cardSlice"

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        card: cardSlice

    }
})
