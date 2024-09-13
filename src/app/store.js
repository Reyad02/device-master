import { configureStore } from "@reduxjs/toolkit";
import TeamMemberReducer from "../features/Team_Member/Team_MemberSlice"

const store = configureStore({
    reducer: {
        Team_Member: TeamMemberReducer,
    }
})

export default store;