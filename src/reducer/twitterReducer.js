
import {userReducer} from "./userReducer.js";
import {statsReducer} from "./statsReducer.js";
import {combineReducers} from "redux";

// export const twitterReducer = (state, action) => {
//     switch (action.type) {
//         case CHANGE_AVATAR:
//             return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}};
//         case CHANGE_NAME:
//             return {...state, user: {...state.user, name: action.payload || state.user.name}};
//         case CHANGE_STATS: {
//             const res = state.stats[action.payload.statsType] + action.payload.sum;
//             const stats = {...state.stats, [action.payload.statsType]: res >= 0 ? res : 0};
//             return {...state, stats};
//         }
//         default:
//             return state;
//     }
// }

export const twitterReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})