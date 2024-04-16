import { createSlice } from '@reduxjs/toolkit'


const CartSlice = createSlice({
    name: "Data",
    initialState: {
        // status: false,
        // name: 'jagriti',
        items: [
            { name: "beans", unitPrice: .89 },
            { name: "carrots", unitPrice: 2 },
            { name: "pizza", unitPrice: 2.99 },
            { name: "bread", unitPrice: 1.76 },
        ],
        cart: [],
        register: [],
        total: ''
    },

    reducers: {
        addtocart: (state, action) => {
            // state.status = !state.status;
            state.cart = [...state.cart, action.payload];
        },
        // sub: (state, action) => {
        //     state.name += '  sethia'
        // }
        addtoregisteruser: (state, action) => {
            state.register = [...state.register, action.payload];
        },
        fetch_total: (state,action) =>{
            state.total = (action.payload)
        }
    },


    // extraReducers: (builder) => {
    //     builder
    // }
})

export const { addtocart, addtoregisteruser,fetch_total } = CartSlice.actions
export default CartSlice.reducer