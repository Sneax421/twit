import {CHANGE_AVATAR, CHANGE_NAME, changeAvatar, changeName} from "../actions/userAction.js";

const initialState = {
    avatar: changeAvatar,
    name: changeName
}

export const userReducer = (state = initialState , action) => {

    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}};
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}};
        default:
            return state;
    }
}