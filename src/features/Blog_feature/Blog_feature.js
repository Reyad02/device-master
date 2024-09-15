import { createSlice } from "@reduxjs/toolkit";
const initialState = null;
const blogSlice = createSlice({
    name: "blogSlice",
    initialState: initialState,
    reducers: {
        getBlog(state, action) {
            return action.payload;  
        },
    }
})

export default blogSlice.reducer;
export const { getBlog } = blogSlice.actions;