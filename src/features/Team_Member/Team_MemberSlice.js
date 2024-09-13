import { createSlice } from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name: "Team_Member",
    initialState: [],
    reducers: {
        setTeamMembers: (state, action) => {
            const index = state.findIndex(st => st._id === action.payload)
        }
    }

})

export default serviceSlice.reducer;
export const { setTeamMembers } = serviceSlice.actions;