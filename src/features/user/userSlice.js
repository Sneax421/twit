import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Hendriks',
        avatar: 'https://gravatar.com/avatar/000?d=wavatar'
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload || state.name;
        },
        changeAvatar: (state, action) => {
            state.avatar = action.payload || state.avatar;
        }
    }
})

export default userSlice.reducer;
export const {changeName, changeAvatar} = userSlice.actions;