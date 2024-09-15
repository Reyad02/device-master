import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/Blog_feature/Blog_feature"
const store = configureStore({
    reducer: {
        full_blog: blogSlice
    }
})

export default store;