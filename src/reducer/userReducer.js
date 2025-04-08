import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userAction.js";

/*
type User = {
    name: string,
    avatar: string
}
 */

const initialState = {
        name: 'Hendriks',
        avatar: 'https://gravatar.com/avatar/000?d=wavatar'
};

export const userReducer = (user = initialState, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...user, avatar: action.payload || user.avatar};
        case CHANGE_NAME:
            return {...user, name: action.payload || user.displayName};
        default:
            return user;

    }
}


