
import { configureStore } from "@reduxjs/toolkit"
import PostSlice from "../Slice/PostSlice"

export const store = configureStore({
    reducer: {
        post: PostSlice,

    }
})
