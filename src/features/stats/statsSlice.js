import {createSlice} from "@reduxjs/toolkit";

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        following: 0,
        followers: 0
    },
    reducers: {
        changeStats: (state, action) => {
            const res = state[action.payload.statsType] + action.payload.sum;
            state[action.payload.statsType] = res < 0 ? 0 : res;
        }
    }
})

export default statsSlice.reducer;
export const {changeStats} = statsSlice.actions;