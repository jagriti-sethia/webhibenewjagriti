import { createSlice } from '@reduxjs/toolkit'


const PostSlice = createSlice({
    name: "Data",
    initialState: {
        status: false,
        name: 'jagriti'
    },

    reducers: {
        add: (state, action) => {
            state.status = !state.status;
            state.name += '  sethia'
        },
        sub: (state, action) => {
            state.name = 'sethia'
        }
    },

    // extraReducers: (builder) => {
    //     builder
    // }
})

export const { add, sub } = PostSlice.actions
export default PostSlice.reducer