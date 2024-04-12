import { createSlice } from '@reduxjs/toolkit'
const CardSlice = createSlice({
    name: "carddata",
    initialState: {
        addedcard: []
    },
    reducers: {
        addtopage: (state, action) => {
            // state.status = !state.status;
            state.addedcard = [...state.addedcard, action.payload];
        },
        removefrompage: (state, action) => {
            // state.status = !state.status;
            state.addedcard = state.addedcard?.filter(task => task.name !== action.payload.name);
        }
        // sub: (state, action) => {
        //     state.name += '  sethia'
        // }
    },

})
export const { addtopage, removefrompage } = CardSlice.actions
export default CardSlice.reducer