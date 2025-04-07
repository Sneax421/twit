import {CHANGE_STATS} from "../actions/statsAction.js";

const initialState = {
    stats: 0
}

export const statsReducer = (state = initialState , action) => {
    switch (action.type) {
        case CHANGE_STATS: {
            const res = state.stats[action.payload.statsType] + action.payload.sum;
            const stats = {...state.stats, [action.payload.statsType]: res >= 0 ? res : 0};
            return {...state, stats};
        }
        default:
            return state;
    }
}